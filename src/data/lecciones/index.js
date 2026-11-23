import { leccionesUnidad1, unidad1 } from "./python/unidad-1.js";
import { leccionesUnidad2, unidad2 } from "./python/unidad-2.js";
import { leccionesUnidad3, unidad3 } from "./python/unidad-3.js";
import { leccionesUnidad4, unidad4 } from "./python/unidad-4.js";
import { leccionesUnidad5, unidad5 } from "./python/unidad-5.js";
import { leccionesUnidad6, unidad6 } from "./python/unidad-6.js";
import { leccionesUnidad7, unidad7 } from "./python/unidad-7.js";
import { leccionesUnidad8, unidad8 } from "./python/unidad-8.js";
import { leccionesUnidad9, unidad9 } from "./python/unidad-9.js";

import { leccionesUnidad10, unidad10 } from "./python/unidad-10.js";

import { leccionesUnidad11, unidad11 } from "./python/unidad-11.js";

import { leccionesUnidad12, unidad12 } from "./python/unidad-12.js";

export const unidades = [unidad1, unidad2, unidad3, unidad4, unidad5, unidad6, unidad7, unidad8, unidad9, unidad10, unidad11, unidad12];
export const lecciones = [...leccionesUnidad1, ...leccionesUnidad2, ...leccionesUnidad3, ...leccionesUnidad4, ...leccionesUnidad5, ...leccionesUnidad6, ...leccionesUnidad7, ...leccionesUnidad8, ...leccionesUnidad9, ...leccionesUnidad10, ...leccionesUnidad11, ...leccionesUnidad12];
export const buscarLeccion = id => lecciones.find(leccion => leccion.id === id);
export const buscarUnidad = id => unidades.find(unidad => unidad.id === id);
