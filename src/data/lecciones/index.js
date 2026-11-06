import { leccionesUnidad1, unidad1 } from "./python/unidad-1.js";

export const unidades = [unidad1];
export const lecciones = [...leccionesUnidad1];
export const buscarLeccion = id => lecciones.find(leccion => leccion.id === id);
export const buscarUnidad = id => unidades.find(unidad => unidad.id === id);
