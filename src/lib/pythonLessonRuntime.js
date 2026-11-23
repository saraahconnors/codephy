// Un intérprete compartido entre todos los ejemplos de las lecciones.
let worker = null;
let sequence = 0;
let busy = false;
let ready = false;
let status = 'Preparando Python…';
const subscribers = new Set();
const pending = new Map();
const uploadPending = [];
const preparationPending = new Map();
const preparedSources = new Set();
const uploadedFiles = new Set();
function emit() { for (const callback of subscribers) callback({ status, busy, ready, uploadedFiles: [...uploadedFiles] }); }
function ensureWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('../workers/python.worker.js', import.meta.url), { type: 'module' });
  worker.onmessage = ({ data }) => {
    if (data.type === 'status') status = data.message;
    if (data.type === 'uploaded' || data.type === 'upload-error') { if (data.type === 'uploaded') uploadedFiles.add(data.name); const task = uploadPending.shift(); if (task) (data.type === 'uploaded' ? task.resolve(data) : task.reject(new Error(data.message))); }
    if (data.type === 'ready') ready = true;
    if (data.type === 'prepared' || data.type === 'prepare-error') {
      const task = preparationPending.get(data.id);
      if (task) { preparationPending.delete(data.id); data.type === 'prepared' ? (preparedSources.add(task.code), task.resolve()) : task.reject(new Error(data.message)); }
    }
    if (data.type === 'result') {
      const task = pending.get(data.id);
      if (task) { pending.delete(data.id); task.resolve(data); }
      busy = false;
      status = data.error ? 'Ejecución con error' : 'Ejecución terminada';
    }
    emit();
  };
  worker.onerror = () => {
    for (const task of pending.values()) task.reject(new Error('Python no pudo iniciarse. Comprueba tu conexión.'));
    pending.clear();
    for (const task of preparationPending.values()) task.reject(new Error('Preparación interrumpida.'));
    preparationPending.clear(); preparedSources.clear();
    for (const task of uploadPending.splice(0)) task.reject(new Error('Carga de archivo interrumpida.'));
    worker?.terminate(); worker = null; busy = false; ready = false; uploadedFiles.clear();
    status = 'Error al preparar Python'; emit();
  };
  worker.postMessage({ type: 'warmup' });
  return worker;
}
export function precargarPythonLecciones() { ensureWorker(); }
export function observarPythonLecciones(callback) {
  subscribers.add(callback);
  callback({ status, busy, ready, uploadedFiles: [...uploadedFiles] });
  return () => subscribers.delete(callback);
}
export function ejecutarPythonLeccion(code, inputs = []) {
  if (busy) return Promise.reject(new Error('Hay otro ejemplo ejecutándose. Espera a que termine.'));
  const active = ensureWorker();
  busy = true; status = 'Preparando ejecución…'; emit();
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    active.postMessage({ type: 'run', id, code, inputs, staticPlots: true });
  });
}
export function detenerPythonLecciones() {
  if (worker) worker.terminate();
  worker = null;
  for (const task of pending.values()) task.reject(new Error('Ejecución detenida.'));
  pending.clear();
  for (const task of preparationPending.values()) task.reject(new Error('Preparación interrumpida.'));
  preparationPending.clear(); preparedSources.clear();
  busy = false; ready = false; uploadedFiles.clear(); status = 'Reiniciando Python…'; emit();
  ensureWorker();
}

export function cargarCSVLeccion(file, required) {
  const active = ensureWorker();
  if (busy) return Promise.reject(new Error('Espera a que termine el programa anterior.'));
  if (!file || !required) return Promise.reject(new Error('Selecciona el archivo requerido.'));
  return file.arrayBuffer().then(bytes => new Promise((resolve, reject) => {
    uploadPending.push({ resolve, reject });
    active.postMessage({type:'upload', name:file.name, bytes, required});
  }));
}

// Prepara las bibliotecas de un código sin ejecutarlo. La preparación se hace
// por ejemplo visible: no cargamos SciPy/Matplotlib para toda la lección a la vez.
export function prepararPythonLeccion(code) {
  const source = String(code || '');
  if (!source.trim()) return Promise.resolve();
  if (preparedSources.has(source)) return Promise.resolve();
  const active = ensureWorker();
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    preparationPending.set(id, { code: source, resolve, reject });
    active.postMessage({ type: 'prepare', id, code: source });
  });
}
