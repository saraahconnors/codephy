// CodePhy v0.5.0: una lección declarativa con secciones y ejemplos.
// En colabUrl pega el enlace a tu notebook o celda cuando esté preparado.
// Los resultados de tipo imagen y video apuntan a public/resultados/.
export const leccionVariables = {
  id: "python-variables",
  moduloId: "python",
  numero: "01",
  modulo: "Fundamentos de Python",
  titulo: "Variables y tipos de datos",
  subtitulo:
    "Representa magnitudes físicas y realiza tu primer cálculo en Python.",
  tiempo: "15–20 min (estimado)",
  nivel: "Inicial",
  icono: "terminal",
  objetivos: [
    "Identificar qué hace una variable y cómo se le asigna un valor.",
    "Distinguir int, float, str y bool; reconocer complex.",
    "Calcular e interpretar la energía cinética conservando sus unidades.",
  ],
  secciones: [
    {
      id: "concepto",
      etiqueta: "01 / CONCEPTO",
      titulo: "¿Qué es una variable?",
      bloques: [
        {
          tipo: "texto",
          contenido:
            "En Python, una variable es un nombre asociado a un valor. Podemos guardar la masa y la velocidad para utilizarlas en un cálculo físico.",
        },
        {
          tipo: "ejemplo",
          ejemplo: {
            id: "variables-primer-calculo",
            titulo: "Primer cálculo de energía cinética",
            codigo: `masa = 2.0       # masa en kg\nvelocidad = 3.0  # velocidad en m/s\nenergia = 0.5 * masa * velocidad ** 2\nprint(energia)`,
            colabUrl:
              "https://colab.research.google.com/drive/1IAst13nBwUnikdDX2NACQXP6sU_OnEB8?authuser=4#scrollTo=SzFYYWhS49x6&line=2&uniqifier=1", // Pega aquí el enlace de Colab
            resultado: {
              tipo: "texto",
              contenido: "9.0",
              nota: "La salida numérica es 9.0. La unidad física es el julio (J), aunque este primer print no la muestra.",
            },
          },
        },
        {
          tipo: "texto",
          contenido:
            "El signo = asigna un valor; no comprueba una igualdad matemática. Los comentarios que empiezan con # describen datos y no se ejecutan.",
        },
        {
          tipo: "nota",
          contenido:
            "En Python, ** es el operador de potencia: velocidad ** 2 significa velocidad al cuadrado.",
        },
      ],
    },
    {
      id: "tipos",
      etiqueta: "02 / DATO Y TIPO",
      titulo: "No todos los valores son iguales",
      bloques: [
        {
          tipo: "texto",
          contenido:
            "Python reconoce distintos tipos de datos, útiles para representar información física y resultados de los programas.",
        },
        {
          tipo: "tabla",
          columnas: ["Tipo", "Ejemplo", "¿Qué representa?"],
          filas: [
            ["int", "20", "Un conteo entero, como el número de mediciones."],
            [
              "float",
              "9.81",
              "Un número real aproximado, como una aceleración.",
            ],
            ["str", '"velocidad"', "Texto para identificar una magnitud."],
            ["bool", "True", "Un valor verdadero o falso."],
            [
              "complex",
              "3 + 4j",
              "Un número complejo, útil en temas posteriores.",
            ],
          ],
        },
        {
          tipo: "texto",
          contenido:
            "Una variable puede cambiar de valor durante el programa. Conviene elegir nombres descriptivos y coherentes con las magnitudes físicas.",
        },
      ],
    },
    {
      id: "fisica",
      etiqueta: "03 / APLICACIÓN FÍSICA",
      titulo: "Calcula la energía cinética",
      bloques: [
        {
          tipo: "texto",
          contenido:
            "Para un objeto de masa m y rapidez v, la energía cinética clásica está dada por:",
        },
        { tipo: "ecuacion", latex: String.raw`E_c=\frac{1}{2}mv^2` },
        {
          tipo: "texto",
          contenido: "Si la masa es 2 kg y la rapidez es 3 m/s, sustituimos:",
        },
        {
          tipo: "ecuacion",
          latex: String.raw`E_c=\frac{1}{2}(2\,\mathrm{kg})(3\,\mathrm{m/s})^2=9\,\mathrm{J}`,
        },
        {
          tipo: "ejemplo",
          ejemplo: {
            id: "variables-energia-cinetica",
            titulo: "Energía cinética con unidades",
            codigo: `# Energía cinética de un objeto\nmasa = 2.0       # kg\nvelocidad = 3.0  # m/s\nenergia = 0.5 * masa * velocidad ** 2\nprint(f"Energía cinética: {energia:.2f} J")`,
            colabUrl: "",
            resultado: {
              tipo: "texto",
              contenido: "Energía cinética: 9.00 J",
              nota: "El resultado corresponde a los valores originales: 2 kg y 3 m/s. Código correcto no garantiza por sí solo un modelo físico correcto.",
            },
          },
        },
      ],
    },
    {
      id: "practica",
      etiqueta: "04 / PREDICCIÓN",
      titulo: "¿Qué pasa si duplicas la velocidad?",
      bloques: [
        {
          tipo: "texto",
          contenido:
            "Mantén la masa en 2 kg y cambia la rapidez de 3 m/s a 6 m/s. ¿Cuánta energía cinética obtendrás?",
        },
        {
          tipo: "pregunta",
          id: "velocidad-doble",
          opciones: ["9.00 J", "18.00 J", "36.00 J"],
          correcta: 2,
          explicacion:
            "La energía depende del cuadrado de la rapidez. Al duplicar v, la energía se multiplica por cuatro: 9 J × 4 = 36 J.",
        },
      ],
    },
    {
      id: "reto",
      etiqueta: "05 / RETO",
      titulo: "Modifica el código y comprueba",
      bloques: [
        {
          tipo: "pasos",
          items: [
            "Abre el enlace de Colab cuando lo registremos o copia el programa a un cuaderno propio.",
            "Cambia la rapidez a 6 m/s y predice el resultado.",
            "Ejecuta el programa en Colab y compara su salida con tu predicción.",
            "Modifica la masa y explica el efecto sobre la energía.",
          ],
        },
        {
          tipo: "ejemplo",
          ejemplo: {
            id: "variables-reto",
            titulo: "Código de referencia para el reto",
            codigo: `masa = 2.0       # kg\nvelocidad = 6.0  # m/s\nenergia = 0.5 * masa * velocidad ** 2\nprint(f"Energía cinética: {energia:.2f} J")`,
            colabUrl: "",
            resultado: {
              tipo: "texto",
              contenido: "Energía cinética: 36.00 J",
            },
          },
        },
        {
          tipo: "nota",
          contenido:
            "CodePhy revela resultados preparados y verificados; el programa se ejecuta realmente en un entorno externo, como Google Colab.",
        },
      ],
    },
    {
      id: "errores",
      etiqueta: "06 / DEPURACIÓN",
      titulo: "Errores frecuentes",
      bloques: [
        {
          tipo: "lista",
          items: [
            "En Python, ^ no eleva a una potencia: se utiliza **.",
            "Una variable debe definirse antes de usarla.",
            "Si introduces la masa en gramos en vez de kilogramos, la salida no corresponde directamente a julios.",
            "Comprueba siempre la ecuación física, las unidades y los parámetros, no solo la ausencia de errores de Python.",
          ],
        },
      ],
    },
  ],
};
