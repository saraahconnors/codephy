import { useEffect, useRef, useState } from 'react';

const muestras = [
  { titulo: 'Energía cinética', categoria: 'Python básico', codigo: `masa = 2.0\nvelocidad = 3.0\nenergia = 0.5 * masa * velocidad**2\nprint(f"Energía cinética: {energia:.2f} J")` },
  { titulo: 'Tipos de datos', categoria: 'Python básico', codigo: `datos = [20, 9.81, "velocidad", True, 3 + 4j]\nfor valor in datos:\n    print(valor, type(valor).__name__)` },
  { titulo: 'Mediciones NumPy', categoria: 'NumPy', codigo: `import numpy as np\nmediciones = np.array([9.79, 9.82, 9.81])\nprint(f"Promedio: {np.mean(mediciones):.3f} m/s²")\nprint(f"Desviación estándar: {np.std(mediciones):.4f} m/s²")` },
  { titulo: 'Caída libre', categoria: 'Matplotlib', codigo: `import numpy as np\nimport matplotlib.pyplot as plt\ng = 9.81\nt = np.linspace(0, 3, 100)\ny = 0.5 * g * t**2\nplt.plot(t, y, color='royalblue', linewidth=2)\nplt.xlabel('Tiempo (s)')\nplt.ylabel('Distancia (m)')\nplt.title('Caída libre')\nplt.grid(True)\nplt.show()` },
  { titulo: 'Movimiento parabólico', categoria: 'Matplotlib', codigo: `import numpy as np\nimport matplotlib.pyplot as plt\nv0 = 20.0\nangulo = np.deg2rad(45)\ng = 9.81\nt = np.linspace(0, 2*v0*np.sin(angulo)/g, 150)\nx = v0*np.cos(angulo)*t\ny = v0*np.sin(angulo)*t - 0.5*g*t**2\nplt.plot(x, y, color='darkorange')\nplt.xlabel('Distancia (m)')\nplt.ylabel('Altura (m)')\nplt.grid(True)\nprint(f"Alcance: {x[-1]:.2f} m")` },
  { titulo: 'Oscilador amortiguado', categoria: 'Matplotlib', codigo: `import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 12, 400)\nx = np.exp(-0.2*t)*np.cos(2*np.pi*t)\nplt.plot(t, x, color='mediumvioletred')\nplt.xlabel('Tiempo (s)')\nplt.ylabel('Posición (m)')\nplt.grid(True)` },
  { titulo: 'Histograma', categoria: 'Matplotlib', codigo: `import numpy as np\nimport matplotlib.pyplot as plt\nrng = np.random.default_rng(42)\ndatos = rng.normal(9.81, 0.12, 300)\nplt.hist(datos, bins=18, color='teal', edgecolor='white')\nplt.xlabel('Aceleración (m/s²)')\nplt.ylabel('Frecuencia')\nprint(f"Promedio: {np.mean(datos):.3f} m/s²")` },
  { titulo: 'Proyectil animado', categoria: 'Animación', codigo: `import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

v0 = 18.0
angulo = np.deg2rad(55)
g = 9.81
t = np.linspace(0, 2*v0*np.sin(angulo)/g, 24)
x = v0*np.cos(angulo)*t
y = v0*np.sin(angulo)*t - 0.5*g*t**2

fig, ax = plt.subplots(figsize=(6, 3.5))
ax.plot(x, y, '--', color='royalblue', alpha=0.6)
proyectil, = ax.plot([], [], 'o', color='orangered', markersize=10)
ax.set_xlim(0, max(x)*1.08)
ax.set_ylim(0, max(y)*1.25)
ax.set_xlabel('Alcance (m)')
ax.set_ylabel('Altura (m)')
ax.grid(True)

def actualizar(i):
    proyectil.set_data([x[i]], [y[i]])
    ax.set_title(f'Proyectil | t = {t[i]:.2f} s')
    return proyectil,

ani = FuncAnimation(fig, actualizar, frames=len(t), interval=120)
plt.show()` },
  { titulo: 'Oscilador animado', categoria: 'Animación', codigo: `import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

t = np.linspace(0, 2*np.pi, 24)
fig, ax = plt.subplots(figsize=(6, 2.6))
ax.plot([-1.3, 1.3], [0, 0], color='gray')
particula, = ax.plot([], [], 'o', color='mediumvioletred', markersize=22)
ax.set_xlim(-1.5, 1.5)
ax.set_ylim(-0.45, 0.45)
ax.set_yticks([])
ax.set_xlabel('Posición (m)')

def actualizar(i):
    particula.set_data([np.cos(t[i])], [0])
    ax.set_title(f'Oscilación armónica | t = {t[i]:.2f} s')
    return particula,

ani = FuncAnimation(fig, actualizar, frames=len(t), interval=120)
plt.show()` },
  { titulo: 'Onda interactiva', categoria: 'Interactiva', codigo: `import numpy as np
import matplotlib.pyplot as plt

# Modifica amplitud o frecuencia y ejecuta de nuevo
amplitud = 2.0
frecuencia = 1.5
x = np.linspace(0, 8, 500)
y = amplitud*np.sin(2*np.pi*frecuencia*x/8)
plt.plot(x, y)
plt.title('Onda senoidal')
plt.xlabel('Posición (m)')
plt.ylabel('Amplitud')
plt.grid(True)
plt.show()` },
  { titulo: 'Análisis de CSV', categoria: 'Archivos CSV', requiere: { nombre: 'mediciones.csv', columnas: ['tiempo_s', 'aceleracion_m_s2'], minimoFilas: 2 }, codigo: `import numpy as np

# Descarga mediciones.csv y cárgalo en el laboratorio.
# En Colab, sube el mismo archivo con el panel Archivos.
datos = np.loadtxt('mediciones.csv', delimiter=',', skiprows=1)
tiempo = datos[:, 0]
aceleracion = datos[:, 1]

print(f'Mediciones: {len(tiempo)}')
print(f'Aceleración media: {np.mean(aceleracion):.3f} m/s²')

# Archivo de salida: también se puede descargar en CodePhy.
resultado = np.column_stack((tiempo, aceleracion))
np.savetxt('resultados.csv', resultado, delimiter=',',
           header='tiempo_s,aceleracion_m_s2', comments='', fmt='%.4f')
print('Archivo generado: resultados.csv')` },
  { titulo: 'Graficar datos CSV', categoria: 'Archivos CSV', requiere: { nombre: 'mediciones.csv', columnas: ['tiempo_s', 'aceleracion_m_s2'], minimoFilas: 2 }, codigo: `import numpy as np
import matplotlib.pyplot as plt

# Descarga mediciones.csv y cárgalo antes de ejecutar.
datos = np.loadtxt('mediciones.csv', delimiter=',', skiprows=1)
tiempo = datos[:, 0]
aceleracion = datos[:, 1]
media = np.mean(aceleracion)

plt.plot(tiempo, aceleracion, 'o-', label='Mediciones')
plt.axhline(media, color='darkorange', linestyle='--', label='Media')
plt.xlabel('Tiempo (s)')
plt.ylabel('Aceleración (m/s²)')
plt.title('Aceleración medida experimentalmente')
plt.grid(True)
plt.legend()
plt.show()
print(f'Valor medio: {media:.3f} m/s²')` },
  { titulo: 'Decaimiento interactivo', categoria: 'Interactiva', codigo: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 10, 400)
N0 = 100
lam = 0.35
N = N0*np.exp(-lam*t)
plt.plot(t, N)
plt.title('Decaimiento exponencial')
plt.xlabel('Tiempo (s)')
plt.ylabel('Cantidad')
plt.grid(True)
plt.show()
print(f'Cantidad final: {N[-1]:.2f}')` },
];
const CSV_EJEMPLO = `tiempo_s,aceleracion_m_s2
0,9.79
1,9.83
2,9.81
3,9.78
4,9.82
5,9.81
`;
function descargarArchivo(nombre, contenido, tipo = 'text/csv;charset=utf-8') {
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombre;
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function descargarBase64(nombre, contenido) {
  const binario = atob(contenido);
  const bytes = Uint8Array.from(binario, c => c.charCodeAt(0));
  descargarArchivo(nombre, bytes, 'text/csv');
}
const makeWorker = () => new Worker(new URL('../workers/python.worker.js', import.meta.url), { type: 'module' });

function Animacion({ frames }) {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [fps, setFps] = useState(5);
  useEffect(() => { setFrame(0); setPlaying(false); }, [frames]);
  useEffect(() => {
    if (!playing || !frames.length) return undefined;
    const timer = setInterval(() => setFrame(v => (v + 1) % frames.length), 1000 / fps);
    return () => clearInterval(timer);
  }, [playing, fps, frames]);
  return <div className="laboratorio-animacion">
    <h3>Animación generada por Python</h3>
    <img src={`data:image/png;base64,${frames[frame]}`} alt={`Fotograma ${frame + 1} de ${frames.length}`} />
    <div className="laboratorio-controles">
      <button type="button" className="boton" onClick={() => setPlaying(v => !v)}>{playing ? 'Ⅱ Pausar' : '▶ Reproducir'}</button>
      <label>Fotograma {frame + 1}/{frames.length}<input type="range" min="0" max={frames.length - 1} value={frame} onChange={e => { setPlaying(false); setFrame(Number(e.target.value)); }} /></label>
      <label>Velocidad <select value={fps} onChange={e => setFps(Number(e.target.value))}><option value="2">2 fps</option><option value="5">5 fps</option><option value="10">10 fps</option></select></label>
    </div>
  </div>;
}

function GraficaInteractiva({ chart }) {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState(0.5);
  const [hover, setHover] = useState(null);
  const { x, y } = chart;
  const minX = x[0], maxX = x[x.length - 1], span = maxX - minX || 1;
  const visible = span / zoom;
  const lo = minX + (span - visible) * center, hi = lo + visible;
  const points = x.map((xi, i) => ({ x: xi, y: y[i] })).filter(p => p.x >= lo && p.x <= hi);
  const values = points.length ? points.map(p => p.y) : y;
  let ymin = Math.min(...values), ymax = Math.max(...values);
  if (ymin === ymax) { ymin -= 1; ymax += 1; }
  const padding = (ymax - ymin) * 0.08;
  ymin -= padding; ymax += padding;
  const X = v => 52 + (v - lo) / (hi - lo) * 570;
  const Y = v => 300 - (v - ymin) / (ymax - ymin) * 265;
  const path = points.map((p, i) => `${i ? 'L' : 'M'}${X(p.x).toFixed(2)},${Y(p.y).toFixed(2)}`).join(' ');
  function track(event) {
    const r = event.currentTarget.getBoundingClientRect();
    const percent = Math.min(1, Math.max(0, ((event.clientX - r.left) / r.width * 680 - 52) / 570));
    const target = lo + percent * (hi - lo);
    let nearest = points[0];
    for (const p of points) if (!nearest || Math.abs(p.x - target) < Math.abs(nearest.x - target)) nearest = p;
    setHover(nearest || null);
  }
  return <div className="laboratorio-interactiva">
    <h3>{chart.title}</h3>
    <svg viewBox="0 0 680 355" role="img" aria-label={`Gráfica interactiva: ${chart.title}`} onPointerMove={track} onPointerLeave={() => setHover(null)}>
      <rect x="0" y="0" width="680" height="355" fill="#111729" />
      {Array.from({ length: 6 }, (_, i) => <g key={i}>
        <line x1={52 + i * 114} y1="35" x2={52 + i * 114} y2="300" stroke="#38465b" />
        <text x={52 + i * 114} y="320" fill="#cfdeea" fontSize="12" textAnchor="middle">{(lo + i * (hi - lo) / 5).toFixed(2)}</text>
        <line x1="52" y1={35 + i * 53} x2="622" y2={35 + i * 53} stroke="#38465b" />
        <text x="46" y={39 + i * 53} fill="#cfdeea" fontSize="12" textAnchor="end">{(ymax - i * (ymax - ymin) / 5).toFixed(2)}</text>
      </g>)}
      <path d={path} fill="none" stroke="#6ce4d2" strokeWidth="2.8" />
      {hover && <g><line x1={X(hover.x)} y1="35" x2={X(hover.x)} y2="300" stroke="#efc873" strokeDasharray="5 4"/><circle cx={X(hover.x)} cy={Y(hover.y)} r="5" fill="#f6c46e"/></g>}
      <text x="340" y="347" fill="#f4dca4" fontSize="14" textAnchor="middle">{chart.xlabel}</text>
      <rect x="52" y="35" width="570" height="265" fill="transparent" />
    </svg>
    <div className="laboratorio-controles">
      <label>Zoom ×{zoom}<input type="range" min="1" max="8" step="0.5" value={zoom} onChange={e => { setZoom(Number(e.target.value)); setHover(null); }} /></label>
      <label>Desplazamiento<input type="range" min="0" max="1" step="0.01" value={center} disabled={zoom === 1} onChange={e => { setCenter(Number(e.target.value)); setHover(null); }} /></label>
      <button type="button" className="boton" onClick={() => { setZoom(1); setCenter(0.5); setHover(null); }}>Restablecer</button>
    </div>
    <p className="laboratorio-lectura" aria-live="polite">{hover ? `${chart.xlabel}: ${hover.x.toFixed(4)} · ${chart.ylabel}: ${hover.y.toFixed(4)}` : 'Pasa el cursor sobre la curva para consultar valores (o toca la gráfica).'}</p>
  </div>;
}

export default function LaboratorioPython() {
  const [index, setIndex] = useState(0);
  const [code, setCode] = useState(muestras[0].codigo);
  const [status, setStatus] = useState('Preparando Python…');
  const [ready, setReady] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [duration, setDuration] = useState(null);
  const [copiado, setCopiado] = useState(false);
  const [archivos, setArchivos] = useState({});
  const [modoCarga, setModoCarga] = useState('previo');
  const [solicitudCarga, setSolicitudCarga] = useState(false);
  const fileInputRef = useRef(null);
  const pendingRunRef = useRef(false);
  const [avisoArchivo, setAvisoArchivo] = useState('');
  const workerRef = useRef(null);
  const runIdRef = useRef(0);
  const startedRef = useRef(0);
  const isRunningRef = useRef(false);
  const indexRef = useRef(0);
  const runAfterUploadRef = useRef(null);

  function connectWorker(worker) {
    worker.onmessage = ({ data }) => {
      if (workerRef.current !== worker) return;
      if (data.type === 'ready') setReady(true);
      if (data.type === 'uploaded') {
        setArchivos(previous => ({ ...previous, [data.name]: { filas: data.rows, columnas: data.columns } }));
        setAvisoArchivo(`Archivo validado: ${data.name} (${data.rows} filas).`);
        setSolicitudCarga(false);
        if (pendingRunRef.current) {
          pendingRunRef.current = false;
          // El trabajador responde a la carga antes de recibir la ejecución.
          const req = muestras[indexRef.current].requiere;
          if (req && data.name === req.nombre) runAfterUploadRef.current?.();
        }
      }
      if (data.type === 'upload-error') {
        pendingRunRef.current = false;
        setAvisoArchivo(data.message);
        setSolicitudCarga(true);
      }
      if (data.type === 'status') setStatus(data.message);
      if (data.type === 'result' && data.id === runIdRef.current) {
        setResult(data);
        setDuration(((performance.now() - startedRef.current) / 1000).toFixed(2));
        isRunningRef.current = false;
        setRunning(false);
        setStatus(data.error ? 'Ejecución con error' : 'Ejecución terminada');
      }
    };
    worker.onerror = event => {
      if (workerRef.current !== worker) return;
      setResult({ stdout: '', error: 'No se pudo iniciar Python. Revisa tu conexión.', plots: [], frames: [], charts: [] });
      setReady(false);
      setRunning(false);
      isRunningRef.current = false;
      setStatus('Error del intérprete');
      worker.terminate();
      workerRef.current = null;
      event.preventDefault();
    };
  }
  function newWorker() {
    const worker = makeWorker();
    workerRef.current = worker;
    connectWorker(worker);
    worker.postMessage({ type: 'warmup' });
    return worker;
  }
  useEffect(() => {
    const worker = newWorker();
    return () => { worker.terminate(); if (workerRef.current === worker) workerRef.current = null; };
  }, []);
  function restart(message = 'Reiniciando Python…') {
    runIdRef.current += 1;
    workerRef.current?.terminate();
    workerRef.current = null;
    isRunningRef.current = false;
    setRunning(false);
    setReady(false);
    setResult(null);
    setDuration(null);
    setArchivos({});
    pendingRunRef.current = false;
    setSolicitudCarga(false);
    setAvisoArchivo('');
    setStatus(message);
    const worker = newWorker();
    worker.postMessage({ type: 'prepare', code });
  }
  function startRun(source) {
    if (isRunningRef.current || !source.trim()) return;
    isRunningRef.current = true;
    setRunning(true);
    setResult(null);
    setDuration(null);
    setStatus('Preparando ejecución…');
    const id = ++runIdRef.current;
    startedRef.current = performance.now();
    const worker = workerRef.current || newWorker();
    worker.postMessage({ type: 'run', id, code: source });
  }
  runAfterUploadRef.current = () => startRun(code);
  function run() {
    if (isRunningRef.current || !code.trim()) return;
    const req = muestras[index].requiere;
    if (req && !archivos[req.nombre]) {
      setSolicitudCarga(true);
      setAvisoArchivo(`Antes de ejecutar necesitas cargar ${req.nombre}. Descárgalo y selecciona el archivo solicitado.`);
      if (modoCarga === 'al-ejecutar') {
        pendingRunRef.current = true;
        fileInputRef.current?.click();
      }
      return;
    }
    startRun(code);
  }
  function choose(i) {
    if (isRunningRef.current) {
      runIdRef.current += 1;
      workerRef.current?.terminate();
      workerRef.current = null;
      isRunningRef.current = false;
      setRunning(false);
      setReady(false);
      newWorker();
    }
    indexRef.current = i;
    pendingRunRef.current = false;
    setSolicitudCarga(false);
    setIndex(i);
    setCopiado(false);
    setCode(muestras[i].codigo);
    setResult(null);
    setDuration(null);
    workerRef.current?.postMessage({ type: 'prepare', code: muestras[i].codigo });
  }
  async function copiarCodigo() {
    try {
      await navigator.clipboard.writeText(code);
      setCopiado(true);
    } catch {
      const editor = document.getElementById('editor-python');
      editor?.focus();
      editor?.select();
      const exito = document.execCommand('copy');
      setCopiado(exito);
      if (!exito) setAvisoArchivo('Selecciona el código y utiliza Ctrl+C para copiar.');
    }
  }
  async function cargarCSV(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) { pendingRunRef.current = false; return; }
    if (!file.name.toLowerCase().endsWith('.csv')) {
      pendingRunRef.current = false;
      setAvisoArchivo('Selecciona un archivo con extensión .csv.');
      return;
    }
    if (file.size > 1024 * 1024) {
      pendingRunRef.current = false;
      setAvisoArchivo('El tamaño máximo de archivo es 1 MB.');
      return;
    }
    setAvisoArchivo('Cargando archivo en Python…');
    try {
      const bytes = await file.arrayBuffer();
      const worker = workerRef.current || newWorker();
      const req = muestras[index].requiere;
      worker.postMessage({ type: 'upload', name: file.name, bytes, required: req || null }, [bytes]);
    } catch {
      pendingRunRef.current = false;
      setAvisoArchivo('No se pudo leer el archivo CSV.');
    }
  }
  return <section className="pagina laboratorio-pagina">
    <p className="etiqueta">▸ LABORATORIO / PYTHON EN EL NAVEGADOR</p>
    <h1>Laboratorio Python</h1>
    <p>Ejecuta Python científico con NumPy y Matplotlib. Los ejemplos usan código estándar; la reproducción de animaciones depende del entorno.</p>
    <p className="laboratorio-nota">Python se precarga al entrar. NumPy y Matplotlib se preparan al seleccionar un ejemplo que los necesita. La primera descarga requiere Internet.</p>
    <div className="laboratorio-ejemplos" aria-label="Ejemplos de prueba">
      {muestras.map((item, i) => <button key={item.titulo} type="button" className={`boton ${i === index ? 'laboratorio-ejemplo-activo' : ''}`} aria-pressed={i === index} onClick={() => choose(i)}><span className="laboratorio-ejemplo-tipo">{item.categoria}</span>{item.titulo}</button>)}
    </div>
    <label className="laboratorio-etiqueta" htmlFor="editor-python">Código Python</label>
    <textarea id="editor-python" className="laboratorio-editor" spellCheck="false" value={code} onChange={event => { setCode(event.target.value); setCopiado(false); }} aria-label="Editor de Python" />
    <div className="laboratorio-acciones">
      <button type="button" className="boton" onClick={copiarCodigo}>{copiado ? '✓ Código copiado' : '▣ Copiar código'}</button>
      <button type="button" className="boton boton-principal" onClick={run} disabled={running || !code.trim() || (modoCarga === 'previo' && !!muestras[index].requiere && !archivos[muestras[index].requiere.nombre])}>{modoCarga === 'previo' && muestras[index].requiere && !archivos[muestras[index].requiere.nombre] ? 'Carga el CSV para ejecutar' : '▶ Ejecutar'}</button>
      <button type="button" className="boton" onClick={() => restart('Ejecución detenida; reiniciando Python…')} disabled={!running}>■ Detener</button>
      <button type="button" className="boton" onClick={() => restart()}>↻ Reiniciar Python</button>
      <span className="laboratorio-estado" role="status" aria-live="polite">{ready && !running ? '● ' : '○ '}{status}{duration ? ` · ${duration} s` : ''}</span>
    </div>
    {muestras[index].requiere && <div className="laboratorio-archivos" style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #8564af', background: '#211834', borderRadius: 12 }}>
      <h2 style={{ marginTop: 0, color: '#f7d366', fontSize: '1.05rem' }}>Preparación de los datos</h2>
      <p>En investigación científica trabajamos con archivos reales. Descarga <strong>mediciones.csv</strong>, un conjunto didáctico de seis mediciones de aceleración en función del tiempo.</p>
      <div className="laboratorio-acciones">
        <button type="button" className="boton" onClick={() => descargarArchivo('mediciones.csv', CSV_EJEMPLO)}>↓ Descargar mediciones.csv</button>
      </div>
      <p><strong>Si usas Google Colab:</strong> abre el panel «Archivos» (icono de carpeta), selecciona «Subir» y elige <code>mediciones.csv</code>. En Jupyter o VS Code, coloca el CSV en la carpeta de trabajo de tu programa. Luego ejecuta el mismo código Python.</p>
      <fieldset style={{ border: '1px solid #695a85', borderRadius: 8, padding: '0.8rem', margin: '1rem 0' }}>
        <legend><strong>En CodePhy, elige cómo cargarlo</strong></legend>
        <label style={{ display: 'block', marginBottom: '.5rem' }}><input type="radio" name="modo-csv" checked={modoCarga === 'previo'} onChange={() => { setModoCarga('previo'); pendingRunRef.current = false; }} /> Método A · Preparar el archivo antes de ejecutar</label>
        <label style={{ display: 'block' }}><input type="radio" name="modo-csv" checked={modoCarga === 'al-ejecutar'} onChange={() => setModoCarga('al-ejecutar')} /> Método B · Pedir el archivo al presionar Ejecutar</label>
      </fieldset>
      <div className="laboratorio-acciones">
        {modoCarga === 'previo' && <button type="button" className="boton" disabled={running} onClick={() => fileInputRef.current?.click()}>↑ Seleccionar archivo CSV</button>}
        <input ref={fileInputRef} type="file" accept=".csv,text/csv" onChange={cargarCSV} disabled={running} aria-label="Seleccionar archivo CSV de mediciones" style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} />
      </div>
      {muestras[index].requiere && <p role="status" style={{ fontWeight: 600, color: archivos[muestras[index].requiere.nombre] ? '#91ebc1' : '#f7d366' }}>
        {archivos[muestras[index].requiere.nombre] ? `✓ Requisito cumplido: ${muestras[index].requiere.nombre}` : `● Requisito pendiente: ${muestras[index].requiere.nombre}. La ejecución de este ejemplo está bloqueada hasta cargarlo.`}
      </p>}
      {solicitudCarga && muestras[index].requiere && !archivos[muestras[index].requiere.nombre] && <p role="alert">Necesitas seleccionar un archivo válido llamado <strong>{muestras[index].requiere.nombre}</strong>, con columnas <code>tiempo_s</code> y <code>aceleracion_m_s2</code>, antes de ejecutar esta actividad.</p>}
      {Object.keys(archivos).length > 0 && <p>Archivos disponibles en el entorno: {Object.entries(archivos).map(([nombre, info]) => `${nombre} (${info.filas} filas)`).join(', ')}.</p>}
      {!!avisoArchivo && <p role="status" aria-live="polite">{avisoArchivo}</p>}
      <p style={{ fontSize: '.85rem', opacity: .85 }}>Máximo 1 MB por CSV. CodePhy valida su nombre y estructura; el archivo permanece en el sistema temporal del navegador. Reiniciar Python borra estos archivos.</p>
    </div>}
    <div className="laboratorio-salida" aria-live="polite">
      <h2>Resultados</h2>
      {result ? <>
        {result.stdout && <pre><samp>{result.stdout}</samp></pre>}
        {!!result.files?.length && <div className="laboratorio-archivos-generados">
          <h3>Archivos generados</h3>
          {result.files.map((f, i) => <button className="boton" key={`${f.name}-${i}`} type="button" onClick={() => descargarBase64(f.name, f.base64)}>↓ Descargar {f.name}</button>)}
        </div>}
        {result.error && <pre className="laboratorio-error"><samp>{result.error}</samp></pre>}
        {result.plots?.map((plot, i) => <figure className="laboratorio-grafica" key={i}><img src={`data:image/png;base64,${plot}`} alt={`Gráfica ${i + 1} generada por Python`} /><figcaption>Gráfica {i + 1} · Matplotlib</figcaption></figure>)}
        {!!result.frames?.length && <Animacion frames={result.frames} />}
        {result.charts?.map((chart, i) => <GraficaInteractiva chart={chart} key={i} />)}
        {!result.stdout && !result.error && !result.plots?.length && !result.frames?.length && !result.charts?.length && !result.files?.length && <p>El programa terminó sin producir resultados visibles.</p>}
      </> : <p>Ejecuta el programa para visualizar los resultados.</p>}
    </div>
    <p className="laboratorio-nota">Laboratorio experimental: las curvas simples de Matplotlib se muestran con zoom y coordenadas; FuncAnimation admite hasta 36 fotogramas. Se reproduce después de generar los cuadros, no en tiempo real.</p>
  </section>;
}
