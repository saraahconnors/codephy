import { leccionVariables } from "./python/01-variables.js";

// Registro central: el orden aquí define cómo aparecen las lecciones en Aprender.
// Agregar una nueva lección = crear archivo, importar aquí y añadirla a la lista.
export const lecciones = [leccionVariables];
export function buscarLeccion(id) {
  return lecciones.find(leccion => leccion.id === id);
}
