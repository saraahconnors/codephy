// Contenido académico de la Unidad 1: Python estándar y ejemplos reproducibles.
const t = (contenido) => ({ tipo: "texto", contenido });
const n = (contenido) => ({ tipo: "nota", contenido });
const eq = (latex) => ({ tipo: "ecuacion", latex });
const list = (...items) => ({ tipo: "lista", items });
const steps = (...items) => ({ tipo: "pasos", items });
const table = (columnas, filas) => ({ tipo: "tabla", columnas, filas });
const question = (id, enunciado, opciones, correcta, explicacion) => ({
  tipo: "pregunta",
  id,
  enunciado,
  opciones,
  correcta,
  explicacion,
});
function example(
  id,
  titulo,
  codigo,
  salida,
  {
    tecnica = "Python básico",
    fisica = null,
    palabrasClave = [],
    entradas = [],
    galeria = false,
    nota = "",
  } = {},
) {
  return {
    tipo: "ejemplo",
    ejemplo: {
      id,
      titulo,
      codigo,
      resultado: { tipo: "texto", contenido: salida, nota },
      entradas,
      reto: /-(reto|proyecto)$/.test(id),
      etiquetas: {
        programacion: [tecnica],
        fisica: fisica ? [fisica] : [],
        palabrasClave,
        galeria,
        dificultadProgramacion: "Inicial",
        dificultadFisica: "Introductoria",
      },
    },
  };
}
function lesson(
  numero,
  id,
  titulo,
  subtitulo,
  objetivos,
  secciones,
  ejemploPrincipal,
) {
  return {
    id,
    unidadId: "unidad-1",
    numero,
    modulo: "Introducción a Python",
    titulo,
    subtitulo,
    tiempo: "25–40 min",
    nivel: "Inicial",
    icono: "python-intro",
    objetivos,
    secciones: secciones.map(([id, titulo, bloques], i) => ({
      id,
      etiqueta: `${String(i + 1).padStart(2, "0")} / ${titulo.toUpperCase()}`,
      titulo,
      bloques,
    })),
    ejemploPrincipal,
    dificultadProgramacion: "Inicial",
    dificultadFisica: "Introductoria",
  };
}
export const unidad1 = {
  id: "unidad-1",
  numero: 1,
  titulo: "Introducción a Python",
  descripcion:
    "Aprende a escribir, ejecutar y comprender programas sencillos aplicados a magnitudes físicas.",
  icono: "python-intro",
  objetivos: [
    "Reconocer instrucciones, comentarios, variables y tipos de datos.",
    "Resolver expresiones físicas con operadores y conversiones.",
    "Leer entradas, interpretar salidas y corregir errores frecuentes.",
  ],
  conocimientosPrevios: "No necesitas experiencia previa en programación.",
  lecciones: [
    "python-01-primer-programa",
    "python-02-variables",
    "python-03-operadores",
    "python-04-conversiones",
    "python-05-entradas-errores",
  ],
};

const retos = {
  "u1-01-reto": {
    consigna:
      "Escribe un programa que muestre dos mediciones de longitud de 1.2 m y 1.5 m, una en cada línea. Añade un comentario que indique qué representan.",
    pistas: [
      "Para escribir un mensaje se utiliza print().",
      "Puedes combinar texto y números separando los argumentos con comas.",
      "Necesitas dos llamadas a print(), una para cada medición. El comentario comienza con #.",
    ],
  },
  "u1-02-reto": {
    consigna:
      "Calcula la energía cinética de un cuerpo de 5 kg que se mueve a 4 m/s y muestra el resultado en julios.",
    pistas: [
      "Define dos variables: masa y rapidez.",
      "La ecuación es Ec = 0.5 × masa × rapidez².",
      "En Python una potencia se escribe con **; después muestra la variable energia usando print().",
    ],
  },
  "u1-03-reto": {
    consigna:
      "Una muestra tiene una masa de 0.54 kg y un volumen de 0.0002 m³. Programa el cálculo de su densidad en kg/m³.",
    pistas: [
      "Guarda masa y volumen en dos variables.",
      "La densidad se obtiene al dividir masa entre volumen.",
      "Utiliza densidad = masa / volumen y luego print() con la unidad.",
    ],
  },
  "u1-04-reto": {
    consigna:
      "Convierte 0 °C a kelvin y a grados Fahrenheit. Muestra ambas cantidades con sus unidades.",
    pistas: [
      "Primero guarda celsius = 0.0.",
      "Para kelvin suma 273.15; para Fahrenheit multiplica por 9/5 y suma 32.",
      "Usa f-strings para mostrar las cifras decimales y las unidades.",
    ],
  },
  "u1-05-proyecto": {
    consigna:
      "Escribe una calculadora que solicite la masa y la altura con input(), calcule U = mgh (g = 9.81 m/s²) y muestre la energía con dos decimales.",
    pistas: [
      "Solicita masa y altura por separado y conviértelas con float().",
      "Calcula energia = masa * 9.81 * altura.",
      'Usa print(f"Energía potencial: {energia:.2f} J") para mostrar el resultado.',
    ],
  },
};

export const leccionesUnidad1 = [
  lesson(
    "1.1",
    "python-01-primer-programa",
    "Tu primer programa en Python",
    "Conoce las instrucciones, los comentarios y la salida de texto.",
    [
      "Reconocer el orden de ejecución de un programa.",
      "Utilizar print() para presentar mensajes y valores.",
      "Escribir comentarios que describan los datos de un cálculo.",
    ],
    [
      [
        "instrucciones",
        "Un programa sigue instrucciones",
        [
          t(
            "Un programa es una secuencia de instrucciones. Python las ejecuta de arriba hacia abajo, salvo que una estructura de control indique lo contrario.",
          ),
          t(
            "print() muestra información en pantalla. El texto se escribe entre comillas y los paréntesis delimitan lo que queremos mostrar.",
          ),
          example(
            "u1-01-saludo",
            "Primera salida en pantalla",
            `print("Bienvenido a CodePhy")\nprint("Programación científica con Python")`,
            "Bienvenido a CodePhy\nProgramación científica con Python",
          ),
          question(
            "u1-q1",
            "¿Qué aparecerá primero en pantalla?",
            [
              "Programación científica con Python",
              "Bienvenido a CodePhy",
              "No aparece nada",
            ],
            1,
            "Las instrucciones se ejecutan en el orden en el que están escritas.",
          ),
        ],
      ],
      [
        "comentarios",
        "Comentarios y datos físicos",
        [
          t(
            "Los comentarios comienzan con #. Python los ignora al ejecutar, pero ayudan a explicar el significado de las magnitudes y sus unidades.",
          ),
          example(
            "u1-01-constantes",
            "Constantes de referencia",
            `# Valor aproximado de la aceleración gravitatoria terrestre\nprint("g = 9.81 m/s²")\n# Rapidez de la luz en el vacío\nprint("c = 299792458 m/s")`,
            "g = 9.81 m/s²\nc = 299792458 m/s",
            { fisica: "Física general" },
          ),
          n(
            "Las unidades dentro de las comillas son texto. Python no convierte ni comprueba unidades automáticamente.",
          ),
        ],
      ],
      [
        "valores",
        "Números y texto en la salida",
        [
          t(
            "Podemos mostrar números directamente. Si están fuera de las comillas, Python los interpreta como valores numéricos y puede operar con ellos.",
          ),
          example(
            "u1-01-expresion",
            "Operación en la salida",
            `print("Número de mediciones:", 5)\nprint("Total de dos grupos:", 3 + 4)`,
            "Número de mediciones: 5\nTotal de dos grupos: 7",
          ),
          question(
            "u1-q2",
            "¿Qué imprime print(4 + 6)?",
            ["4 + 6", "10", '"10" con comillas'],
            1,
            "Fuera de las comillas, + suma números y print() muestra el resultado.",
          ),
        ],
      ],
      [
        "practica",
        "Practica lo aprendido",
        [
          steps(
            "Escribe dos instrucciones print() para mostrar mediciones de longitud: 1.2 m y 1.5 m.",
            "Incluye un comentario que indique la magnitud y su unidad.",
            "Ejecuta tu solución y comprueba que las dos mediciones aparezcan en líneas separadas.",
          ),
          example(
            "u1-01-reto",
            "Reto: escribe dos mediciones",
            `# Dos mediciones de longitud en metros\nprint("Longitud A:", 1.2, "m")\nprint("Longitud B:", 1.5, "m")`,
            "Longitud A: 1.2 m\nLongitud B: 1.5 m",
          ),
        ],
      ],
      [
        "errores",
        "Errores frecuentes",
        [
          list(
            "Olvidar las comillas en un texto hace que Python busque una variable con ese nombre.",
            "Olvidar cerrar un paréntesis o una comilla produce un SyntaxError.",
            "Los comentarios empiezan con #, no con //.",
          ),
        ],
      ],
    ],
    "Mostrar constantes físicas",
  ),

  lesson(
    "1.2",
    "python-02-variables",
    "Variables y tipos de datos",
    "Representa magnitudes físicas y comprende los valores que maneja un programa.",
    [
      "Asignar valores a variables con nombres descriptivos.",
      "Distinguir int, float, str, bool y complex.",
      "Calcular la energía cinética con los valores de masa y rapidez.",
    ],
    [
      [
        "variables",
        "Guardar información con variables",
        [
          t(
            "Una variable es un nombre asociado a un valor. Podemos guardar la masa y la rapidez y utilizarlas después en el cálculo. El signo = asigna un valor; no es una comprobación de igualdad.",
          ),
          example(
            "u1-02-asignacion",
            "Asignación de magnitudes",
            `masa = 2.0       # kg\nrapidez = 3.0    # m/s\nprint("Masa:", masa, "kg")\nprint("Rapidez:", rapidez, "m/s")`,
            "Masa: 2.0 kg\nRapidez: 3.0 m/s",
            { fisica: "Mecánica" },
          ),
          t(
            "Un nombre de variable puede contener letras, números y guiones bajos, pero no debe comenzar por un número ni contener espacios. Python distingue mayúsculas de minúsculas.",
          ),
          table(
            ["Nombre válido", "Nombre no válido", "Razón"],
            [
              ["masa_total", "masa total", "Los espacios no están permitidos."],
              ["velocidad2", "2velocidad", "No puede empezar por un número."],
              [
                "temperatura_c",
                "temperatura-c",
                "El guion representa una resta.",
              ],
            ],
          ),
        ],
      ],
      [
        "tipos",
        "Los tipos de datos",
        [
          t(
            "El tipo determina qué clase de valor almacena la variable. type() permite comprobarlo.",
          ),
          table(
            ["Tipo", "Ejemplo", "Uso"],
            [
              ["int", "12", "Número entero de mediciones."],
              ["float", "9.81", "Aceleración o magnitud decimal."],
              ["str", '"masa"', "Nombre o etiqueta de una magnitud."],
              ["bool", "True", "Estado verdadero o falso."],
              ["complex", "3 + 4j", "Número complejo."],
            ],
          ),
          example(
            "u1-02-tipos",
            "Comprueba los tipos",
            `mediciones = 12\ng = 9.81\nmagnitud = "aceleración"\ncalibrado = True\nimpedancia = 3 + 4j\nprint(type(mediciones).__name__)\nprint(type(g).__name__)\nprint(type(magnitud).__name__)\nprint(type(calibrado).__name__)\nprint(type(impedancia).__name__)`,
            "int\nfloat\nstr\nbool\ncomplex",
          ),
        ],
      ],
      [
        "energia",
        "Aplicación: energía cinética",
        [
          t(
            "La energía cinética traslacional de un cuerpo de masa m y rapidez v se calcula con la siguiente expresión clásica.",
          ),
          eq(String.raw`E_c = \frac{1}{2}mv^2`),
          t(
            "Para una masa de 2 kg y una rapidez de 3 m/s, el resultado es 9 J. En Python utilizamos ** para elevar a una potencia.",
          ),
          example(
            "u1-02-cinetica",
            "Energía cinética con unidades",
            `masa = 2.0       # kg\nrapidez = 3.0    # m/s\nenergia = 0.5 * masa * rapidez**2\nprint("Energía cinética:", energia, "J")`,
            "Energía cinética: 9.0 J",
            {
              fisica: "Mecánica",
              palabrasClave: ["energía cinética", "masa", "rapidez"],
            },
          ),
          question(
            "u1-q3",
            "Si duplicas la rapidez y mantienes la masa, ¿cuánto vale la energía?",
            ["18 J", "36 J", "12 J"],
            1,
            "La energía depende de la rapidez al cuadrado; al duplicarla, se multiplica por cuatro.",
          ),
        ],
      ],
      [
        "practica",
        "Modifica las variables",
        [
          steps(
            "Crea las variables masa = 5.0 y rapidez = 4.0.",
            "Calcula la energía cinética con la ecuación de la lección.",
            "Muestra el resultado en julios y compruébalo ejecutando tu programa.",
          ),
          example(
            "u1-02-reto",
            "Reto: nueva masa y rapidez",
            `masa = 5.0\nrapidez = 4.0\nenergia = 0.5 * masa * rapidez**2\nprint("Energía cinética:", energia, "J")`,
            "Energía cinética: 40.0 J",
            { fisica: "Mecánica" },
          ),
        ],
      ],
      [
        "errores",
        "Errores frecuentes",
        [
          list(
            "Una variable debe existir antes de usarse: de lo contrario aparece NameError.",
            "No confundas rapidez = 3 con rapidez == 3: el segundo operador se estudia en la Unidad 2.",
            "Usar ^ no eleva a una potencia; en Python la potencia se escribe **.",
            "El número se calcula sin unidades automáticas: usa magnitudes coherentes con el sistema de unidades.",
          ),
        ],
      ],
    ],
    "Energía cinética",
  ),

  lesson(
    "1.3",
    "python-03-operadores",
    "Operadores y expresiones",
    "Convierte ecuaciones sencillas en operaciones correctas de Python.",
    [
      "Aplicar los operadores +, -, *, /, //, % y **.",
      "Reconocer la prioridad de operaciones y el uso de paréntesis.",
      "Calcular densidad y presión con unidades coherentes.",
    ],
    [
      [
        "operadores",
        "Operaciones aritméticas",
        [
          t(
            "Python dispone de operadores para sumar, restar, multiplicar, dividir y elevar a una potencia. Hay dos divisiones especiales: // devuelve el cociente entero por redondeo hacia abajo y % devuelve el residuo.",
          ),
          table(
            ["Operador", "Significado", "Ejemplo"],
            [
              ["+", "Suma", "5 + 2 → 7"],
              ["-", "Resta", "5 - 2 → 3"],
              ["*", "Multiplicación", "5 * 2 → 10"],
              ["/", "División", "5 / 2 → 2.5"],
              ["//", "División entera", "5 // 2 → 2"],
              ["%", "Residuo", "5 % 2 → 1"],
              ["**", "Potencia", "5 ** 2 → 25"],
            ],
          ),
          example(
            "u1-03-operadores",
            "Prueba distintos operadores",
            `print("Suma:", 5 + 2)\nprint("División:", 5 / 2)\nprint("División entera:", 5 // 2)\nprint("Residuo:", 5 % 2)\nprint("Potencia:", 5**2)`,
            "Suma: 7\nDivisión: 2.5\nDivisión entera: 2\nResiduo: 1\nPotencia: 25",
          ),
        ],
      ],
      [
        "precedencia",
        "El orden de las operaciones",
        [
          t(
            "Python evalúa primero los paréntesis, después las potencias, luego multiplicaciones y divisiones, y finalmente sumas y restas. Usa paréntesis para hacer explícita una expresión física.",
          ),
          example(
            "u1-03-parentesis",
            "La importancia de los paréntesis",
            `print(2 + 3 * 4)\nprint((2 + 3) * 4)`,
            "14\n20",
          ),
          question(
            "u1-q4",
            "¿Qué valor produce 8 + 2 * 3?",
            ["30", "14", "18"],
            1,
            "La multiplicación tiene prioridad sobre la suma: 8 + 6 = 14.",
          ),
        ],
      ],
      [
        "densidad",
        "Aplicación: densidad",
        [
          t(
            "La densidad media de un cuerpo uniforme se obtiene dividiendo la masa entre el volumen.",
          ),
          eq(String.raw`\rho = \frac{m}{V}`),
          example(
            "u1-03-densidad",
            "Densidad de una muestra",
            `masa = 2.7       # kg\nvolumen = 0.001  # m³\ndensidad = masa / volumen\nprint("Densidad:", densidad, "kg/m³")`,
            "Densidad: 2700.0 kg/m³",
            {
              fisica: "Mecánica",
              palabrasClave: ["densidad", "masa", "volumen"],
            },
          ),
        ],
      ],
      [
        "presion",
        "Aplicación: presión",
        [
          t(
            "La presión promedio debida a una fuerza normal distribuida uniformemente sobre un área se calcula como fuerza entre área.",
          ),
          eq(String.raw`P = \frac{F}{A}`),
          example(
            "u1-03-presion",
            "Presión sobre una superficie",
            `fuerza = 120.0  # N\narea = 0.30     # m²\npresion = fuerza / area\nprint("Presión:", presion, "Pa")`,
            "Presión: 400.0 Pa",
            {
              fisica: "Mecánica",
              palabrasClave: ["presión", "fuerza", "área"],
            },
          ),
          n(
            "El área debe ser distinta de cero. Dividir entre cero provoca ZeroDivisionError.",
          ),
        ],
      ],
      [
        "practica",
        "Practica y detecta errores",
        [
          steps(
            "Define una masa de 0.54 kg y un volumen de 0.0002 m³.",
            "Calcula la densidad y muestra el resultado con su unidad.",
            "Prueba después qué ocurre si el volumen vale cero y lee el mensaje de error.",
          ),
          example(
            "u1-03-reto",
            "Reto: densidad de una muestra",
            `masa = 0.54\nvolumen = 0.0002\ndensidad = masa / volumen\nprint("Densidad:", densidad, "kg/m³")`,
            "Densidad: 2700.0 kg/m³",
            { fisica: "Mecánica" },
          ),
          list(
            "Escribe * para multiplicar: 2 * masa, no 2masa.",
            "Comprueba los paréntesis en los denominadores.",
            "La división / produce un resultado de tipo float.",
          ),
        ],
      ],
    ],
    "Densidad y presión",
  ),

  lesson(
    "1.4",
    "python-04-conversiones",
    "Conversiones y presentación de resultados",
    "Controla los tipos numéricos, las cifras mostradas y las unidades.",
    [
      "Convertir tipos mediante int(), float() y str().",
      "Presentar resultados con f-strings y precisión decimal.",
      "Convertir temperaturas y longitudes correctamente.",
    ],
    [
      [
        "conversion",
        "Transformar tipos",
        [
          t(
            "float() convierte un valor numérico compatible en número decimal, int() convierte a entero truncando la parte fraccionaria y str() produce una representación de texto.",
          ),
          example(
            "u1-04-tipos",
            "Tres conversiones",
            `valor = "12.5"\nnumero = float(valor)\nprint(numero + 2)\nprint(int(numero))\nprint(str(numero) + " cm")`,
            "14.5\n12\n12.5 cm",
          ),
          n(
            "int(12.9) devuelve 12: no redondea al entero más próximo. Para redondear se utiliza round(), cuya regla conviene estudiar antes de tratar cifras significativas.",
          ),
        ],
      ],
      [
        "fstrings",
        "Presentar resultados con f-strings",
        [
          t(
            "Una f-string comienza con f antes de las comillas. Dentro de sus llaves podemos insertar variables y expresiones. El formato :.2f indica que se mostrarán dos cifras decimales.",
          ),
          example(
            "u1-04-formato",
            "Formato decimal",
            `gravedad = 9.80665\nprint(f"g = {gravedad:.2f} m/s²")\nprint(f"g = {gravedad:.4f} m/s²")`,
            "g = 9.81 m/s²\ng = 9.8066 m/s²",
          ),
          t(
            "El formato modifica la presentación, no el valor almacenado. Las cifras mostradas no sustituyen una evaluación de incertidumbre.",
          ),
          question(
            "u1-q5",
            'Si x = 3.14159, ¿qué presenta f"{x:.2f}"?',
            ["3.14", "3.14159", "3"],
            0,
            "El formato :.2f muestra dos cifras después del punto decimal.",
          ),
        ],
      ],
      [
        "temperaturas",
        "Aplicación: escalas de temperatura",
        [
          t(
            "Una diferencia importante entre escalas es su punto cero. Para pasar de grados Celsius a kelvin se suma 273.15; para pasar de Celsius a Fahrenheit se utiliza una transformación lineal.",
          ),
          eq(String.raw`T_K=T_{^\circ C}+273.15`),
          eq(String.raw`T_{^\circ F}=\frac{9}{5}T_{^\circ C}+32`),
          example(
            "u1-04-temperaturas",
            "Conversión de temperatura",
            `celsius = 25.0\nkelvin = celsius + 273.15\nfahrenheit = 9/5 * celsius + 32\nprint(f"Temperatura: {kelvin:.2f} K")\nprint(f"Temperatura: {fahrenheit:.1f} °F")`,
            "Temperatura: 298.15 K\nTemperatura: 77.0 °F",
            {
              fisica: "Termodinámica",
              palabrasClave: ["temperatura", "Celsius", "kelvin", "Fahrenheit"],
            },
          ),
        ],
      ],
      [
        "notacion",
        "Notación científica y unidades",
        [
          t(
            "Para magnitudes muy grandes o pequeñas conviene utilizar notación científica. El formato :.3e muestra un número con tres decimales en notación exponencial.",
          ),
          example(
            "u1-04-notacion",
            "Longitud de onda en metros",
            `longitud_nm = 550.0\nlongitud_m = longitud_nm * 1e-9\nprint(f"Longitud: {longitud_m:.3e} m")`,
            "Longitud: 5.500e-07 m",
            {
              fisica: "Óptica",
              palabrasClave: ["longitud de onda", "nanómetros", "conversión"],
            },
          ),
        ],
      ],
      [
        "practica",
        "Aplica las conversiones",
        [
          steps(
            "Define una temperatura de 0 °C.",
            "Convierte el valor a kelvin y grados Fahrenheit.",
            "Muestra ambas temperaturas con sus unidades y compara el resultado.",
          ),
          example(
            "u1-04-reto",
            "Reto: agua a 0 °C",
            `celsius = 0.0\nprint(f"Kelvin: {celsius + 273.15:.2f} K")\nprint(f"Fahrenheit: {9/5 * celsius + 32:.1f} °F")`,
            "Kelvin: 273.15 K\nFahrenheit: 32.0 °F",
            { fisica: "Termodinámica" },
          ),
          list(
            "Distingue el símbolo °C de la unidad K, que no lleva el signo de grado.",
            "No escribas la unidad dentro de la operación aritmética: añádela al mostrar la salida.",
            "Comprueba si el valor original está en metros, centímetros o nanómetros antes de convertir.",
          ),
        ],
      ],
    ],
    "Conversión de temperatura",
  ),

  lesson(
    "1.5",
    "python-05-entradas-errores",
    "Entrada de datos y depuración",
    "Crea programas que reciben valores del usuario e interpreta sus errores.",
    [
      "Leer datos con input() y convertirlos a float().",
      "Interpretar SyntaxError, NameError, TypeError y ValueError.",
      "Depurar un programa de energía potencial gravitatoria.",
    ],
    [
      [
        "entrada",
        "Introducir valores con input()",
        [
          t(
            "input() solicita un dato y lo devuelve como texto (str), incluso si escribes un número. Antes de hacer operaciones numéricas, convierte esa entrada con float() o int().",
          ),
          example(
            "u1-05-input",
            "Lee una medición",
            `longitud = float(input("Longitud en metros: "))\nprint(f"Longitud registrada: {longitud:.2f} m")`,
            "Longitud en metros: Longitud registrada: 2.50 m",
            {
              entradas: [{ etiqueta: "Longitud en metros", valor: "2.5" }],
              fisica: "Física experimental",
            },
          ),
          n(
            "Al ejecutar, CodePhy solicitará cada dato en su consola. Escribe el valor y presiona Enter para continuar, como en una terminal de Python.",
          ),
        ],
      ],
      [
        "potencial",
        "Aplicación: energía potencial gravitatoria",
        [
          t(
            "Cerca de la superficie terrestre, tomando g constante y el nivel de referencia a altura cero, la energía potencial gravitatoria es:",
          ),
          eq(String.raw`U=mgh`),
          example(
            "u1-05-potencial",
            "Calculadora de energía potencial",
            `masa = float(input("Masa en kg: "))\naltura = float(input("Altura en m: "))\ng = 9.81\nenergia = masa * g * altura\nprint(f"Energía potencial: {energia:.2f} J")`,
            "Masa en kg: Altura en m: Energía potencial: 98.10 J",
            {
              entradas: [
                { etiqueta: "Masa en kg", valor: "2" },
                { etiqueta: "Altura en m", valor: "5" },
              ],
              fisica: "Mecánica",
              palabrasClave: ["energía potencial", "gravedad", "input"],
            },
          ),
          question(
            "u1-q6",
            "Si duplicas la altura con la masa constante, ¿qué ocurre con U?",
            ["Se duplica", "Se cuadruplica", "No cambia"],
            0,
            "En el modelo U=mgh, la energía es directamente proporcional a la altura.",
          ),
        ],
      ],
      [
        "errores",
        "Comprender los mensajes de error",
        [
          t(
            "Los errores indican qué problema encontró Python y en qué línea. Aprender a leerlos es parte de aprender a programar.",
          ),
          table(
            ["Error", "Causa habitual", "Ejemplo"],
            [
              ["SyntaxError", "Sintaxis incorrecta", 'print("Hola"'],
              ["NameError", "Nombre no definido", "print(masaa)"],
              ["TypeError", "Operación con tipos incompatibles", '"2" + 3'],
              ["ValueError", "Conversión inválida", 'float("abc")'],
              ["ZeroDivisionError", "División entre cero", "3 / 0"],
            ],
          ),
          example(
            "u1-05-error",
            "Investiga un NameError",
            `masa = 2.0\nprint(masaa)`,
            "",
            {
              nota: "Lee el mensaje y corrige masaa por masa antes de ejecutar otra vez.",
            },
          ),
        ],
      ],
      [
        "depuracion",
        "Depuración paso a paso",
        [
          steps(
            "Identifica la línea indicada en el mensaje de error.",
            "Busca nombres mal escritos, comillas, paréntesis y tipos incompatibles.",
            "Corrige una causa a la vez.",
            "Ejecuta de nuevo y comprueba que el resultado físico tenga sentido.",
          ),
          example(
            "u1-05-validacion",
            "Error de entrada no numérica",
            `masa = float(input("Masa en kg: "))\nprint(f"Masa: {masa:.2f} kg")`,
            "Masa en kg: Masa: 2.00 kg",
            {
              entradas: [{ etiqueta: "Masa en kg", valor: "2" }],
              fisica: "Mecánica",
              nota: "Escribe letras en lugar de un número para observar un ValueError.",
            },
          ),
        ],
      ],
      [
        "proyecto",
        "Proyecto integrador de la unidad",
        [
          t(
            "Construye una calculadora que reciba la masa y la altura de un cuerpo, obtenga su energía potencial gravitatoria y muestre el resultado con dos decimales. Después modifica los datos y analiza los cambios.",
          ),
          steps(
            "Identifica cuáles son las entradas y su unidad.",
            "Escribe la ecuación de energía potencial.",
            "Convierte las entradas a float.",
            "Presenta la energía en julios con dos decimales.",
            "Prueba distintos valores y explica qué ocurre al duplicar la masa o la altura.",
          ),
          example(
            "u1-05-proyecto",
            "Calculadora completa",
            `# Energía potencial gravitatoria cerca de la Tierra\nmasa = float(input("Masa (kg): "))\naltura = float(input("Altura (m): "))\ng = 9.81  # m/s²\nenergia = masa * g * altura\nprint(f"Energía potencial: {energia:.2f} J")`,
            "Masa (kg): Altura (m): Energía potencial: 147.15 J",
            {
              entradas: [
                { etiqueta: "Masa (kg)", valor: "3" },
                { etiqueta: "Altura (m)", valor: "5" },
              ],
              fisica: "Mecánica",
            },
          ),
        ],
      ],
    ],
    "Energía potencial con entradas",
  ),
];

for (const leccion of leccionesUnidad1) {
  for (const seccion of leccion.secciones) {
    for (const bloque of seccion.bloques) {
      if (bloque.tipo === "ejemplo" && retos[bloque.ejemplo.id]) {
        Object.assign(bloque.ejemplo, retos[bloque.ejemplo.id]);
      }
    }
  }
}
