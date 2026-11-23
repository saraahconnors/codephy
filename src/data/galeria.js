import { lecciones } from "./lecciones/index.js";
import { ejemplos as demostrativos } from "./ejemplos.js";

// La galería reutiliza los mismos objetos ejecutables de cada lección.
// Para publicar un ejemplo basta activar etiquetas.galeria en su archivo de unidad.
const descripciones = {
  "u5-05-campo": "Calcula un campo escalar sobre una cuadrícula con NumPy.",
  "u6-02-leyenda": "Compara dos señales oscilatorias en una misma gráfica.",
  "u6-04-mapa": "Representa un campo escalar mediante un mapa de color.",
  "u6-05-3d": "Dibuja una superficie parabólica tridimensional.",
  "u8-04-hooke": "Estima la constante elástica a partir de mediciones de fuerza y elongación.",
  "u9-03-omega": "Calcula las frecuencias normales a partir de autovalores.",
  "u10-5-03": "Identifica componentes de frecuencia mediante la transformada rápida de Fourier.",
  "u11-3-03": "Resuelve un modelo oscilatorio con solve_ivp y grafica su evolución.",
  "u12-3-02": "Aproxima pi mediante muestreo aleatorio reproducible.",
};

const publicados = lecciones.flatMap(leccion =>
  leccion.secciones.flatMap(seccion =>
    seccion.bloques
      .filter(bloque => bloque.tipo === "ejemplo" && bloque.ejemplo?.etiquetas?.galeria && !bloque.ejemplo.reto)
      .map(({ ejemplo }) => ({
        ...ejemplo,
        id: ejemplo.id,
        titulo: ejemplo.titulo,
        descripcion: descripciones[ejemplo.id] || leccion.subtitulo,
        modulo: leccion.modulo,
        area: ejemplo.etiquetas.fisica?.[0] || "Física computacional",
        tarea: ejemplo.etiquetas.programacion?.[0] || "Simulación científica",
        nota: ejemplo.resultado?.nota || "Modifica los parámetros y compara los resultados con el modelo físico.",
        leccionId: leccion.id,
        leccionTitulo: leccion.titulo,
        dificultadProgramacion: ejemplo.etiquetas.dificultadProgramacion,
        dificultadFisica: ejemplo.etiquetas.dificultadFisica,
        palabrasClave: ejemplo.etiquetas.palabrasClave || [],
        origenLeccion: true,
      }))
  )
);

export const ejemplosGaleria = [...demostrativos, ...publicados];
