// Un intérprete compartido entre todos los ejemplos de las lecciones.
let worker = null;
let sequence = 0;
let busy = false;
let ready = false;
let status = 'Preparando Python…';
const subscribers = new Set();
const pending = new Map();
function emit() { for (const callback of subscribers) callback({ status, busy, ready }); }
function ensureWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('../workers/python.worker.js', import.meta.url), { type: 'module' });
  worker.onmessage = ({ data }) => {
    if (data.type === 'status') status = data.message;
    if (data.type === 'ready') ready = true;
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
    worker?.terminate(); worker = null; busy = false; ready = false;
    status = 'Error al preparar Python'; emit();
  };
  worker.postMessage({ type: 'warmup' });
  return worker;
}
export function precargarPythonLecciones() { ensureWorker(); }
export function observarPythonLecciones(callback) {
  subscribers.add(callback);
  callback({ status, busy, ready });
  return () => subscribers.delete(callback);
}
export function ejecutarPythonLeccion(code, inputs = []) {
  if (busy) return Promise.reject(new Error('Hay otro ejemplo ejecutándose. Espera a que termine.'));
  const active = ensureWorker();
  busy = true; status = 'Preparando ejecución…'; emit();
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    active.postMessage({ type: 'run', id, code, inputs });
  });
}
export function detenerPythonLecciones() {
  if (worker) worker.terminate();
  worker = null;
  for (const task of pending.values()) task.reject(new Error('Ejecución detenida.'));
  pending.clear(); busy = false; ready = false; status = 'Reiniciando Python…'; emit();
  ensureWorker();
}
