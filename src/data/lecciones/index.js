import { leccionesUnidad3, unidad3 } from "./python/unidad-3.js";
import { leccionesUnidad1, unidad1 } from "./python/unidad-1.js";
import { leccionesUnidad2, unidad2 } from "./python/unidad-2.js";

export const unidades = [unidad1, unidad2, unidad3];
export const lecciones = [...leccionesUnidad1, ...leccionesUnidad2, ...leccionesUnidad3];
export const buscarLeccion = id => lecciones.find(leccion => leccion.id === id);
export const buscarUnidad = id => unidades.find(unidad => unidad.id === id);
