import { useEffect, useRef, useState } from 'react';

const muestras = [
  {
    titulo: 'Energía cinética',
    codigo: `masa = 2.0  # kg\nvelocidad = 3.0  # m/s\nenergia = 0.5 * masa * velocidad**2\nprint(f"Energía cinética: {energia:.2f} J")`,
  },
  {
    titulo: 'Tipos de datos',
    codigo: `datos = [20, 9.81, "velocidad", True, 3 + 4j]\nfor valor in datos:\n    print(valor, type(valor).__name__)`,
  },
  {
    titulo: 'NumPy: mediciones',
    codigo: `import numpy as np\nmediciones = np.array([9.79, 9.82, 9.81])\nprint(f"Promedio: {np.mean(mediciones):.3f} m/s²")`,
  },
];

export default function LaboratorioPython() {
  const [code, setCode] = useState(muestras[0].codigo);
  const [status, setStatus] = useState('Listo para ejecutar');
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const workerRef = useRef(null);
  const runIdRef = useRef(0);
  const startRef = useRef(0);
  const [duration, setDuration] = useState(null);

  function stopWorker() {
    runIdRef.current += 1;
    workerRef.current?.terminate();
    workerRef.current = null;
    setRunning(false);
    setStatus('Ejecución detenida');
  }

  useEffect(() => () => workerRef.current?.terminate(), []);

  function run() {
    if (running) return;
    const id = ++runIdRef.current;
    startRef.current = performance.now();
    setDuration(null);
    setOutput(null);
    setRunning(true);
    setStatus('Preparando entorno…');
    if (!workerRef.current) {
      const worker = new Worker(new URL('../workers/python.worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = (event) => {
        const msg = event.data;
        if (msg.type === 'status') {
          setStatus(msg.message);
        } else if (msg.type === 'result' && msg.id === runIdRef.current) {
          setOutput({ stdout: msg.output, error: msg.error });
          setDuration(((performance.now() - startRef.current) / 1000).toFixed(2));
          setStatus(msg.error ? 'Error de Python' : 'Ejecución terminada');
          setRunning(false);
        }
      };
      worker.onerror = (event) => {
        setOutput({ stdout: '', error: 'No se pudo cargar el intérprete de Python. Comprueba tu conexión y vuelve a intentarlo.' });
        setRunning(false);
        setStatus('Error de carga');
        worker.terminate();
        workerRef.current = null;
        event.preventDefault();
      };
      workerRef.current = worker;
    }
    workerRef.current.postMessage({ type: 'run', id, code });
  }

  function selectExample(index) {
    if (running) stopWorker();
    setCode(muestras[index].codigo);
    setOutput(null);
    setDuration(null);
    setStatus('Listo para ejecutar');
  }

  return <section className="pagina laboratorio-pagina">
    <p className="etiqueta">▸ LABORATORIO / PRUEBA DE PYTHON</p>
    <h1>Laboratorio Python</h1>
    <p>Modifica el código y ejecútalo directamente en tu navegador. No necesitas una cuenta de Google.</p>
    <p className="laboratorio-nota">La primera ejecución necesita descargar el intérprete. Los cambios no se guardan. Esta prueba admite programas cortos con Python básico y NumPy.</p>
    <div className="laboratorio-ejemplos" aria-label="Ejemplos de prueba">
      {muestras.map((ejemplo, i) => <button key={ejemplo.titulo} type="button" className="boton" onClick={() => selectExample(i)}>{ejemplo.titulo}</button>)}
    </div>
    <label className="laboratorio-etiqueta" htmlFor="editor-python">Código Python</label>
    <textarea id="editor-python" className="laboratorio-editor" spellCheck="false" value={code} onChange={event => setCode(event.target.value)} aria-label="Editor de Python"/>
    <div className="laboratorio-acciones">
      <button type="button" className="boton boton-principal" onClick={run} disabled={running || !code.trim()}>▶ Ejecutar</button>
      <button type="button" className="boton" onClick={stopWorker} disabled={!running}>■ Detener</button>
      <span className="laboratorio-estado" role="status" aria-live="polite">{status}{duration ? ` · ${duration} s` : ''}</span>
    </div>
    <div className="laboratorio-salida" aria-live="polite">
      <h2>Salida</h2>
      {output ? <>
        {output.stdout && <pre><samp>{output.stdout}</samp></pre>}
        {output.error && <pre className="laboratorio-error"><samp>{output.error}</samp></pre>}
        {!output.stdout && !output.error && <p>El programa terminó sin producir texto.</p>}
      </> : <p>Ejecuta el programa para ver su salida.</p>}
    </div>
    <p className="laboratorio-nota">Los resultados se calculan en tu dispositivo. La prueba no incluye todavía gráficas ni animaciones; evaluaremos esas funciones después de comprobar la ejecución básica.</p>
  </section>;
}
