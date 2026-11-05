// Prueba de concepto CodePhy: Python aislado del hilo de interfaz.
const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.29.5/full/pyodide.mjs';
let interpreterPromise;

async function getPython() {
  if (!interpreterPromise) {
    interpreterPromise = (async () => {
      postMessage({ type: 'status', message: 'Preparando Python…' });
      const { loadPyodide } = await import(/* @vite-ignore */ PYODIDE_URL);
      return loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.5/full/' });
    })();
  }
  return interpreterPromise;
}

self.onmessage = async (event) => {
  const { type, code, id } = event.data ?? {};
  if (type !== 'run') return;
  try {
    const python = await getPython();
    if (/(?:^|\n)\s*(?:import\s+numpy\b|from\s+numpy\b)/.test(code)) {
      postMessage({ type: 'status', message: 'Cargando NumPy…' });
      await python.loadPackage('numpy');
    }
    postMessage({ type: 'status', message: 'Ejecutando…' });
    python.globals.set('_codephy_source', String(code));
    const output = await python.runPythonAsync(`
import io, contextlib, traceback
_codephy_out = io.StringIO()
_codephy_err = None
try:
    with contextlib.redirect_stdout(_codephy_out), contextlib.redirect_stderr(_codephy_out):
        exec(compile(_codephy_source, '<CodePhy>', 'exec'), {'__name__': '__main__'})
except BaseException:
    _codephy_err = traceback.format_exc()
(_codephy_out.getvalue(), _codephy_err)
`);
    const [stdout, error] = output.toJs();
    output.destroy();
    postMessage({ type: 'result', id, output: String(stdout).slice(0, 20000), error: error ? String(error).slice(0, 12000) : null });
  } catch (error) {
    postMessage({ type: 'result', id, output: '', error: String(error?.message ?? error) });
  }
};
