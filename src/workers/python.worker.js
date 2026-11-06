// CodePhy v0.5.4: Pyodide: Matplotlib estándar, FuncAnimation y curvas interactivas.
const CDN = 'https://cdn.jsdelivr.net/pyodide/v0.29.5/full/';
let pythonPromise;
let queue = Promise.resolve();
const uploaded = new Set();
const status = (message) => self.postMessage({ type: 'status', message });

async function getPython() {
  if (!pythonPromise) {
    status('Precargando Python…');
    pythonPromise = (async () => {
      const { loadPyodide } = await import(/* @vite-ignore */ `${CDN}pyodide.mjs`);
      const python = await loadPyodide({ indexURL: CDN });
      status('Python listo');
      self.postMessage({ type: 'ready' });
      return python;
    })().catch(error => { pythonPromise = null; throw error; });
  }
  return pythonPromise;
}

async function prepare(code) {
  const python = await getPython();
  const needsMatplotlib = /\b(?:matplotlib|pylab)\b/.test(code);
  if (needsMatplotlib) {
    status('Preparando Matplotlib…');
    await python.loadPackage('matplotlib');
  } else if (/\bnumpy\b/.test(code)) {
    status('Preparando NumPy…');
    await python.loadPackage('numpy');
  }
  await python.loadPackagesFromImports(code);
  return { python, needsMatplotlib };
}

function safeCsvName(name) {
  const clean = String(name || '').replace(/[^a-zA-Z0-9_.-]/g, '_');
  if (!clean.toLowerCase().endsWith('.csv') || clean === '.' || clean === '..' || clean.length > 100) throw new Error('Nombre CSV no válido.');
  return clean;
}
async function handle({ type, code = '', id, name, bytes, required }) {
  if (type === 'upload') {
    try {
      const filename = safeCsvName(name);
      if (!bytes || bytes.byteLength > 1024 * 1024) throw new Error('CSV demasiado grande (máximo 1 MB).');
      const python = await getPython();
      if (required && filename !== required.nombre) {
        throw new Error(`Esta actividad requiere ${required.nombre}; seleccionaste ${filename}.`);
      }
      const raw = new Uint8Array(bytes);
      const decoded = new TextDecoder('utf-8', { fatal: true }).decode(raw).replace(/^\uFEFF/, '');
      const lines = decoded.split(/\r?\n/).filter(line => line.trim());
      if (!lines.length) throw new Error('El archivo CSV está vacío.');
      const columns = lines[0].split(',').map(x => x.trim());
      if (required && (columns.length !== required.columnas.length || columns.some((x, i) => x !== required.columnas[i]))) {
        throw new Error(`Columnas esperadas: ${required.columnas.join(', ')}.`);
      }
      if (required && lines.length - 1 < required.minimoFilas) throw new Error('El archivo no contiene suficientes mediciones.');
      if (required) {
        for (let i = 1; i < lines.length; i++) {
          const cells = lines[i].split(',');
          if (cells.length !== columns.length || cells.some(value => !value.trim() || !Number.isFinite(Number(value)))) {
            throw new Error(`Fila ${i + 1} inválida: se esperan ${columns.length} valores numéricos.`);
          }
        }
      }
      python.FS.writeFile(`/home/pyodide/${filename}`, raw);
      uploaded.add(filename);
      self.postMessage({ type: 'uploaded', name: filename, rows: lines.length - 1, columns });
    } catch (error) {
      self.postMessage({ type: 'upload-error', message: `No se pudo cargar el CSV: ${String(error.message || error)}` });
    }
    return;
  }
  if (type === 'warmup') { await getPython(); return; }
  if (type === 'prepare') { await prepare(String(code)); status('Entorno preparado'); return; }
  if (type !== 'run') return;
  try {
    const { python, needsMatplotlib } = await prepare(String(code));
    status('Ejecutando código…');
    python.globals.set('_codephy_source', String(code));
    python.globals.set('_codephy_uploaded', Array.from(uploaded));
    python.globals.set('_codephy_plot_enabled', needsMatplotlib);
    const raw = await python.runPythonAsync(`
import io, json, traceback, contextlib, base64, os, math
os.environ['MPLBACKEND'] = 'Agg'
_cp_out = io.StringIO()
_cp_error = None
_cp_plots = []
_cp_frames = []
_cp_charts = []
_cp_files = []
_cp_uploaded = set(_codephy_uploaded)
_cp_plt = None

def _save_frame(fig):
    if len(_cp_frames) >= 36:
        return
    _buf = io.BytesIO()
    fig.savefig(_buf, format='png', dpi=65, facecolor='white')
    if _buf.tell() > 600000:
        raise ValueError('Fotograma demasiado grande: reduce datos o tamaño')
    _cp_frames.append(base64.b64encode(_buf.getvalue()).decode('ascii'))

def _read_interactive_line(fig):
    # El usuario escribe Matplotlib normal: CodePhy interpreta una curva simple.
    if len(_cp_charts) >= 3 or len(fig.axes) != 1:
        return False
    ax = fig.axes[0]
    if len(ax.lines) != 1 or ax.collections or ax.patches or ax.images:
        return False
    line = ax.lines[0]
    import numpy as np
    xx = np.asarray(line.get_xdata(orig=False), dtype=float).ravel()
    yy = np.asarray(line.get_ydata(orig=False), dtype=float).ravel()
    if not (2 <= len(xx) <= 1500 and len(xx) == len(yy)):
        return False
    if not (np.isfinite(xx).all() and np.isfinite(yy).all() and (np.diff(xx) > 0).all()):
        return False
    _cp_charts.append({'x': xx.tolist(), 'y': yy.tolist(),
                       'title': ax.get_title()[:90] or 'Gráfica interactiva',
                       'xlabel': ax.get_xlabel()[:50] or 'x',
                       'ylabel': ax.get_ylabel()[:50] or 'y'})
    return True

try:
    with contextlib.redirect_stdout(_cp_out), contextlib.redirect_stderr(_cp_out):
        if _codephy_plot_enabled:
            import matplotlib
            matplotlib.use('Agg', force=True)
            import matplotlib.pyplot as _cp_plt
            _cp_plt.close('all')
            _cp_plt.show = lambda *args, **kwargs: None
        _scope = {'__name__': '__main__'}
        try:
            exec(compile(_codephy_source, '<CodePhy>', 'exec'), _scope)
        except BaseException:
            _cp_error = traceback.format_exc()
        if _cp_plt is not None:
            # FuncAnimation pertenece a Matplotlib y funciona también en Colab.
            from matplotlib.animation import FuncAnimation
            _animations = [v for v in _scope.values() if isinstance(v, FuncAnimation)]
            for _ani in _animations[:1]:
                _func = _ani._func
                if _ani._init_func is not None:
                    _ani._init_func()
                for _fr in _ani.new_frame_seq():
                    if len(_cp_frames) >= 36:
                        break
                    _func(_fr)
                    _save_frame(_ani._fig)
                _ani._draw_was_started = True
            if not _animations:
                for _n in _cp_plt.get_fignums()[:3]:
                    _fig = _cp_plt.figure(_n)
                    if _read_interactive_line(_fig):
                        continue
                    _buf = io.BytesIO()
                    _fig.savefig(_buf, format='png', dpi=90, bbox_inches='tight')
                    _cp_plots.append(base64.b64encode(_buf.getvalue()).decode('ascii'))
            _cp_plt.close('all')
        for _filename in sorted(os.listdir('/home/pyodide')):
            if (_filename.lower().endswith('.csv') and _filename not in _cp_uploaded
                    and os.path.isfile('/home/pyodide/' + _filename)):
                _path = '/home/pyodide/' + _filename
                if os.path.getsize(_path) <= 1024 * 1024 and len(_cp_files) < 5:
                    with open(_path, 'rb') as _f:
                        _cp_files.append({'name': _filename,
                            'base64': base64.b64encode(_f.read()).decode('ascii')})
except BaseException:
    _cp_error = traceback.format_exc()
json.dumps({'stdout': _cp_out.getvalue()[:20000],
            'error': _cp_error[:12000] if _cp_error else None,
            'plots': _cp_plots, 'frames': _cp_frames, 'charts': _cp_charts, 'files': _cp_files})
`);
    self.postMessage({ type: 'result', id, ...JSON.parse(raw) });
  } catch (error) {
    self.postMessage({ type: 'result', id, stdout: '', error: String(error?.stack ?? error), plots: [], frames: [], charts: [] });
  }
}

self.onmessage = ({ data }) => {
  queue = queue.then(() => handle(data)).catch(error => {
    if (data?.type === 'run') self.postMessage({ type: 'result', id: data.id, stdout: '', error: String(error), plots: [], frames: [], charts: [] });
    else status('Error al preparar Python; revisa la conexión');
  });
};
