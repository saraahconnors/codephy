// Unidad 2: condiciones y lógica. Ejemplos independientes con Python estándar.
const t = contenido => ({ tipo: 'texto', contenido });
const nota = contenido => ({ tipo: 'nota', contenido });
const eq = latex => ({ tipo: 'ecuacion', latex });
const lista = (...items) => ({ tipo: 'lista', items });
const pasos = (...items) => ({ tipo: 'pasos', items });
const tabla = (columnas, filas) => ({ tipo: 'tabla', columnas, filas });
const pregunta = (id, enunciado, opciones, correcta, explicacion) => ({ tipo: 'pregunta', id, enunciado, opciones, correcta, explicacion });
function ejemplo(id, titulo, codigo, salida, { tecnica = 'Condicionales y lógica', fisica = null, palabrasClave = [], consigna = '', pistas = [] } = {}) {
  const reto = id.endsWith('-reto') || id.endsWith('-proyecto');
  return { tipo: 'ejemplo', ejemplo: {
    id, titulo, codigo, resultado: { tipo: 'texto', contenido: salida }, reto, consigna, pistas,
    etiquetas: { programacion: [tecnica], fisica: fisica ? [fisica] : [], palabrasClave, galeria: false,
      dificultadProgramacion: 'Básico', dificultadFisica: 'Introductoria' },
  } };
}
function leccion(numero, id, titulo, subtitulo, objetivos, secciones, ejemploPrincipal, dificultadFisica = 'Introductoria') {
  return { id, unidadId: 'unidad-2', numero, modulo: 'Condicionales y lógica', titulo, subtitulo, icono: 'python-logic', objetivos,
    secciones: secciones.map(([id, titulo, bloques], i) => ({ id, titulo, etiqueta: `${String(i + 1).padStart(2, '0')} / ${titulo.toUpperCase()}`, bloques })),
    ejemploPrincipal, dificultadProgramacion: 'Básico', dificultadFisica };
}
export const unidad2 = {
  id: 'unidad-2', numero: 2, titulo: 'Condicionales y lógica', icono: 'python-logic',
  descripcion: 'Haz que tus programas comparen valores, evalúen condiciones y tomen decisiones con criterios físicos.',
  objetivos: [
    'Comparar magnitudes mediante operadores relacionales y expresiones booleanas.',
    'Combinar condiciones con and, or y not y construir decisiones con if, elif y else.',
    'Validar entradas y organizar decisiones anidadas para resolver problemas físicos sencillos.',
  ],
  conocimientosPrevios: 'Unidad 1: variables, operaciones, conversión de tipos e input().',
  lecciones: ['python-06-comparaciones', 'python-07-logica', 'python-08-condicionales', 'python-09-validacion', 'python-10-proyecto-condicionales'],
};

export const leccionesUnidad2 = [
  leccion('2.1', 'python-06-comparaciones', 'Comparar valores y magnitudes',
    'Aprende a obtener respuestas True y False al comparar valores.',
    ['Distinguir asignación de comparación.', 'Utilizar los seis operadores relacionales.', 'Interpretar comparaciones en problemas físicos con unidades compatibles.'], [
      ['comparar', '¿Qué significa comparar?', [
        t('Una comparación pregunta si se cumple una relación entre dos valores. Su resultado es un booleano: True o False. A diferencia de =, que asigna un valor, == comprueba si dos valores son iguales.'),
        tabla(['Operador', 'Pregunta', 'Ejemplo'], [['==', '¿Son iguales?', '4 == 4 → True'], ['!=', '¿Son diferentes?', '4 != 5 → True'], ['>', '¿Es mayor?', '6 > 3 → True'], ['<', '¿Es menor?', '2 < 7 → True'], ['>=', '¿Es mayor o igual?', '5 >= 5 → True'], ['<=', '¿Es menor o igual?', '3 <= 2 → False']]),
        ejemplo('u2-01-comparar', 'Comparaciones directas', `temperatura = 28.0\nlimite = 30.0\nprint(temperatura < limite)\nprint(temperatura == limite)\nprint(temperatura != limite)`, 'True\nFalse\nTrue', { fisica: 'Termodinámica' }),
        pregunta('u2-q1', '¿Qué imprime temperatura < limite cuando temperatura = 28 y limite = 30?', ['False', 'True', '28'], 1, '28 es menor que 30; la comparación devuelve True, no el valor 28.'),
      ]],
      ['mediciones', 'Comparar magnitudes físicas', [
        t('Para comparar valores físicos correctamente, ambos deben referirse a la misma magnitud y expresarse en unidades compatibles. Por ejemplo, podemos contrastar dos longitudes expresadas en metros.'),
        ejemplo('u2-01-longitudes', 'Comparación de longitudes', `longitud_a = 1.25  # m\nlongitud_b = 1.20  # m\nprint("¿A es mayor que B?", longitud_a > longitud_b)\nprint("¿Son iguales?", longitud_a == longitud_b)`, '¿A es mayor que B? True\n¿Son iguales? False', { fisica: 'Física experimental', palabrasClave: ['longitud', 'comparación', 'mediciones'] }),
        nota('En números decimales obtenidos mediante cálculos puede haber pequeñas diferencias de redondeo. Por eso, más adelante aprenderás a comparar resultados numéricos usando una tolerancia.'),
      ]],
      ['igualdad', 'Igualdad y tolerancia', [
        t('Los cálculos con float pueden producir valores muy próximos, pero no idénticos. math.isclose() permite comprobar si están suficientemente cerca para una tolerancia elegida.'),
        ejemplo('u2-01-tolerancia', 'Dos cálculos equivalentes', `import math\na = 0.1 + 0.2\nb = 0.3\nprint(a == b)\nprint(math.isclose(a, b))`, 'False\nTrue', { tecnica: 'Comparación numérica' }),
        nota('Una tolerancia no sustituye el análisis de incertidumbre experimental: aquí solo sirve para mostrar cómo se comportan los números de punto flotante.'),
      ]],
      ['practica', 'Practica lo aprendido', [
        pasos('Define dos velocidades, 18 m/s y 22 m/s.', 'Compara si la primera es menor que la segunda.', 'Muestra el resultado como un booleano.'),
        ejemplo('u2-01-reto', 'Reto: comparar velocidades', `velocidad_a = 18  # m/s\nvelocidad_b = 22  # m/s\nprint(velocidad_a < velocidad_b)`, 'True', { fisica: 'Mecánica', consigna: 'Escribe un programa con dos velocidades, 18 m/s y 22 m/s. Muestra True si la primera es menor que la segunda.', pistas: ['Asigna cada velocidad a una variable diferente.', 'Utiliza el operador < para preguntar cuál es menor.', 'Muestra la comparación con print(velocidad_a < velocidad_b).'] }),
      ]],
    ], 'Comparación de velocidades'),

  leccion('2.2', 'python-07-logica', 'Combinar condiciones lógicas',
    'Utiliza and, or y not para describir situaciones con varias condiciones.',
    ['Comprender las tres operaciones lógicas principales.', 'Evaluar expresiones booleanas combinadas.', 'Escribir reglas sencillas para aceptar mediciones.'], [
      ['operadores', 'Tres operadores lógicos', [
        t('Cuando una decisión depende de más de una condición, podemos combinar comparaciones. and requiere que ambas sean verdaderas; or requiere que al menos una sea verdadera; not invierte el valor booleano.'),
        tabla(['Operador', 'Cuándo resulta True'], [['and', 'Cuando las dos condiciones son True.'], ['or', 'Cuando al menos una condición es True.'], ['not', 'Cuando la condición original es False.']]),
        ejemplo('u2-02-basico', 'Lógica de dos condiciones', `a = True\nb = False\nprint(a and b)\nprint(a or b)\nprint(not b)`, 'False\nTrue\nTrue'),
        pregunta('u2-q2', 'Si a = True y b = False, ¿cuál es el resultado de a or b?', ['False', 'True', 'Se produce un error'], 1, 'or devuelve True cuando al menos una de las condiciones es verdadera.'),
      ]],
      ['intervalos', 'Intervalos de medición', [
        t('Un sensor puede funcionar correctamente solo dentro de un intervalo. Para comprobarlo, evaluamos el límite inferior y el superior de forma simultánea.'),
        ejemplo('u2-02-temperatura', 'Rango aceptable de temperatura', `temperatura = 24.5  # °C\ncorrecta = 18 <= temperatura <= 30\nprint("Dentro del intervalo:", correcta)`, 'Dentro del intervalo: True', { fisica: 'Física experimental', palabrasClave: ['intervalo', 'sensores', 'temperatura'] }),
        t('La comparación encadenada 18 <= temperatura <= 30 es equivalente a temperatura >= 18 and temperatura <= 30. Las dos formas son válidas.'),
      ]],
      ['alternativas', 'Condiciones alternativas y negación', [
        t('En algunos experimentos se permite trabajar cuando se cumple cualquiera de dos condiciones. También podemos invertir una comprobación utilizando not.'),
        ejemplo('u2-02-alerta', 'Alerta de un sistema de medición', `temperatura = 35\npresion = 95\nalerta = temperatura > 40 or presion < 100\nprint("¿Hay alerta?", alerta)\nprint("¿Operación normal?", not alerta)`, '¿Hay alerta? True\n¿Operación normal? False', { fisica: 'Termodinámica' }),
      ]],
      ['practica', 'Practica lo aprendido', [
        pasos('Una medición es aceptable si la temperatura está entre 15 y 35 °C y la presión entre 90 y 110 kPa.', 'Utiliza una variable para cada magnitud.', 'Combina ambas comprobaciones y presenta un booleano.'),
        ejemplo('u2-02-reto', 'Reto: condiciones experimentales', `temperatura = 25\npresion = 101\napta = (15 <= temperatura <= 35) and (90 <= presion <= 110)\nprint("Medición aceptable:", apta)`, 'Medición aceptable: True', { fisica: 'Física experimental', consigna: 'Con temperatura = 25 °C y presión = 101 kPa, muestra si ambas cumplen sus intervalos: 15–35 °C y 90–110 kPa. Utiliza and.', pistas: ['Define temperatura = 25 y presion = 101.', 'Comprueba cada magnitud entre sus dos límites.', 'Combina (15 <= temperatura <= 35) and (90 <= presion <= 110).'] }),
      ]],
    ], 'Validación lógica de mediciones'),

  leccion('2.3', 'python-08-condicionales', 'Tomar decisiones con if, elif y else',
    'Haz que un programa ejecute instrucciones diferentes según una condición.',
    ['Utilizar bloques if y else.', 'Distinguir las alternativas de elif.', 'Aplicar correctamente la indentación a una decisión física.'], [
      ['if', 'Primer condicional', [
        t('La palabra if indica una decisión. Las instrucciones indentadas pertenecen al bloque y solo se ejecutan si la condición es verdadera. En Python, los dos puntos y la indentación son parte de la sintaxis.'),
        ejemplo('u2-03-velocidad', 'Aviso por velocidad alta', `velocidad = 32  # m/s\nif velocidad > 30:\n    print("Rapidez por encima del límite")\nprint("Evaluación terminada")`, 'Rapidez por encima del límite\nEvaluación terminada', { fisica: 'Mecánica' }),
        pregunta('u2-q3', 'Si velocidad vale 20, ¿qué mensaje se muestra?', ['Ambos mensajes', 'Solo Evaluación terminada', 'Ninguno'], 1, 'La condición es falsa y se omite el bloque indentado; la última instrucción está fuera del if.'),
      ]],
      ['else', 'Dos caminos con else', [
        t('Si queremos realizar una acción cuando la condición es verdadera y otra cuando es falsa, utilizamos if y else. Solo se ejecuta una de las dos ramas.'),
        ejemplo('u2-03-fusion', 'Temperatura y punto de fusión', `temperatura = 18  # °C\npunto_fusion = 0  # °C\nif temperatura < punto_fusion:\n    print("Por debajo del punto de fusión")\nelse:\n    print("En o por encima del punto de fusión")`, 'En o por encima del punto de fusión', { fisica: 'Termodinámica' }),
        nota('Este programa compara una temperatura con un umbral idealizado. No determina por sí solo el estado físico de una sustancia: también importan la presión y las condiciones del sistema.'),
      ]],
      ['elif', 'Tres o más alternativas', [
        t('elif permite comprobar otra condición si las anteriores no se cumplen. Python prueba las ramas en orden y ejecuta solo la primera que resulte verdadera.'),
        ejemplo('u2-03-medio', 'Clasificar la rapidez de una onda', `rapidez = 340  # m/s\nif rapidez < 300:\n    print("Menor que 300 m/s")\nelif rapidez <= 400:\n    print("Entre 300 y 400 m/s")\nelse:\n    print("Mayor que 400 m/s")`, 'Entre 300 y 400 m/s', { fisica: 'Ondas y óptica' }),
        pregunta('u2-q4', 'Si rapidez = 400, ¿qué rama se ejecuta?', ['Menor que 300 m/s', 'Entre 300 y 400 m/s', 'Mayor que 400 m/s'], 1, 'La segunda condición incluye la igualdad porque utiliza <=.'),
      ]],
      ['practica', 'Practica lo aprendido', [
        pasos('Define una temperatura de 21 °C.', 'Muestra “Bajo” si es menor que 18, “Adecuado” si está entre 18 y 26, o “Alto” en otro caso.', 'Modifica el valor y observa cómo cambia la rama ejecutada.'),
        ejemplo('u2-03-reto', 'Reto: clasificar temperatura', `temperatura = 21\nif temperatura < 18:\n    print("Bajo")\nelif temperatura <= 26:\n    print("Adecuado")\nelse:\n    print("Alto")`, 'Adecuado', { fisica: 'Termodinámica', consigna: 'Clasifica temperatura = 21 °C: imprime “Bajo” por debajo de 18 °C, “Adecuado” entre 18 y 26 °C (incluidos), o “Alto” por encima de 26 °C.', pistas: ['Empieza con if temperatura < 18.', 'Agrega elif temperatura <= 26: para el segundo intervalo.', 'Termina con else: e imprime cada categoría dentro de su bloque.'] }),
      ]],
    ], 'Clasificación de intervalos'),

  leccion('2.4', 'python-09-validacion', 'Condiciones anidadas y validación',
    'Aprende a rechazar entradas inválidas antes de realizar cálculos.',
    ['Comprobar que un valor está dentro del dominio del problema.', 'Anidar decisiones cuando una validación depende de otra.', 'Dar mensajes específicos en lugar de producir resultados sin sentido.'], [
      ['dominio', 'Antes de calcular, valida', [
        t('Un programa científico debe comprobar si sus parámetros respetan las condiciones del modelo. Por ejemplo, una masa negativa no representa una masa física válida en los cálculos elementales de esta unidad.'),
        ejemplo('u2-04-masa', 'Comprobar una masa', `masa = -2.0  # kg\nif masa < 0:\n    print("Error: la masa no puede ser negativa")\nelse:\n    print("Masa aceptada:", masa, "kg")`, 'Error: la masa no puede ser negativa', { fisica: 'Mecánica' }),
        pregunta('u2-q5', '¿Qué sucede si masa = -2?', ['Se acepta -2 kg', 'Se muestra un mensaje de error', 'Se muestra masa = 0'], 1, 'La primera condición detecta el dato físicamente inválido y evita continuar con esa rama.'),
      ]],
      ['anidados', 'Decisiones dentro de decisiones', [
        t('Un condicional anidado se encuentra dentro de otro. Puede servir cuando una segunda comprobación solo tiene sentido después de superar la primera.'),
        ejemplo('u2-04-resistencia', 'Validación de la ley de Ohm', `voltaje = 12.0  # V\nresistencia = 4.0  # ohm\nif resistencia <= 0:\n    print("Resistencia no válida para este modelo")\nelse:\n    corriente = voltaje / resistencia\n    if corriente > 2:\n        print("Corriente superior a 2 A")\n    else:\n        print("Corriente de 2 A o menos")`, 'Corriente superior a 2 A', { fisica: 'Electromagnetismo', palabrasClave: ['ley de Ohm', 'corriente', 'validación'] }),
        nota('Aquí se exige una resistencia positiva para representar un resistor óhmico pasivo. Otros dispositivos pueden tener comportamientos distintos.'),
      ]],
      ['inputs', 'Validar datos introducidos por el usuario', [
        t('Podemos combinar input(), float() y if para comprobar un dato. Recuerda que una entrada no numérica produce un ValueError al convertirla con float(); aprenderemos a capturarlo mediante excepciones en una unidad posterior.'),
        ejemplo('u2-04-altura', 'Comprobar una altura', `altura = float(input("Altura en metros: "))\nif altura < 0:\n    print("Para esta práctica usa una altura no negativa")\nelse:\n    print(f"Altura aceptada: {altura:.2f} m")`, 'Altura en metros: Altura aceptada: 2.50 m', { fisica: 'Mecánica' }),
        nota('Prueba primero con 2.5 y después con -1. Al copiar el programa a Colab o VS Code, input() solicitará el dato en el entorno correspondiente.'),
      ]],
      ['practica', 'Practica lo aprendido', [
        pasos('Escribe un programa con distancia = 100 m y tiempo = 0 s.', 'Antes de calcular distancia / tiempo, comprueba que el tiempo sea positivo.', 'Si no lo es, muestra un mensaje que explique el problema.'),
        ejemplo('u2-04-reto', 'Reto: evitar una división inválida', `distancia = 100  # m\ntiempo = 0  # s\nif tiempo <= 0:\n    print("El tiempo debe ser positivo")\nelse:\n    rapidez = distancia / tiempo\n    print("Rapidez:", rapidez, "m/s")`, 'El tiempo debe ser positivo', { fisica: 'Mecánica', consigna: 'Con distancia = 100 m y tiempo = 0 s, muestra “El tiempo debe ser positivo” y evita la división. Si el tiempo es positivo, calcula y muestra la rapidez.', pistas: ['Guarda distancia = 100 y tiempo = 0.', 'Antes de dividir, utiliza if tiempo <= 0:', 'En la rama else calcula rapidez = distancia / tiempo e imprime el valor.'] }),
      ]],
    ], 'Validación de parámetros físicos'),

  leccion('2.5', 'python-10-proyecto-condicionales', 'Proyecto: velocidad de escape',
    'Combina comparaciones, lógica y decisiones para resolver un problema físico.',
    ['Identificar una condición física y expresarla como comparación.', 'Validar los parámetros antes de evaluar una fórmula.', 'Construir un programa completo con una explicación del resultado.'], [
      ['modelo', 'Modelo idealizado de velocidad de escape', [
        t('En el modelo newtoniano de un cuerpo esférico sin atmósfera, la rapidez mínima para escapar de su campo gravitatorio desde una distancia r a su centro se calcula con la expresión siguiente.'),
        eq(String.raw`v_{\mathrm{esc}}=\sqrt{\frac{2GM}{r}}`),
        t('G es la constante de gravitación universal, M es la masa del cuerpo y r es la distancia radial desde su centro. La fórmula supone un lanzamiento ideal sin propulsión adicional ni pérdidas por rozamiento.'),
        nota('Usaremos los valores aproximados de la Tierra, y compararemos la rapidez inicial con la rapidez de escape calculada. La comparación utiliza magnitudes expresadas en m/s.'),
      ]],
      ['pasos', 'Construir la decisión', [
        t('Primero guardamos los parámetros, después calculamos la rapidez de escape y finalmente utilizamos if y else para presentar una interpretación.'),
        ejemplo('u2-05-escape', 'Comparación de rapidez y umbral', `import math\nG = 6.67430e-11  # m³/(kg·s²)\nM = 5.972e24     # kg\nr = 6.371e6      # m\nvelocidad = 12000.0  # m/s\nv_escape = math.sqrt(2 * G * M / r)\nprint(f"Rapidez de escape: {v_escape:.0f} m/s")\nif velocidad >= v_escape:\n    print("Alcanza la rapidez mínima ideal")\nelse:\n    print("No alcanza la rapidez mínima ideal")`, 'Rapidez de escape: 11186 m/s\nAlcanza la rapidez mínima ideal', { fisica: 'Mecánica', palabrasClave: ['velocidad de escape', 'gravedad', 'Tierra'] }),
        pregunta('u2-q6', 'Si la velocidad inicial es 10 000 m/s, ¿qué mensaje dará el programa?', ['Alcanza la rapidez mínima ideal', 'No alcanza la rapidez mínima ideal', 'No puede calcularse'], 1, 'La rapidez de escape calculada es aproximadamente 11 186 m/s, superior a 10 000 m/s.'),
      ]],
      ['validacion', 'Revisar parámetros y mensajes', [
        t('Antes de usar la raíz cuadrada y la división, verifica que M y r sean positivos. También es razonable exigir que la rapidez inicial sea no negativa, pues aquí trabajamos con una magnitud escalar.'),
        ejemplo('u2-05-validar', 'Validación y cálculo', `import math\nG = 6.67430e-11\nM = 5.972e24\nr = 6.371e6\nvelocidad = -20.0\nif M <= 0 or r <= 0 or velocidad < 0:\n    print("Revisa los parámetros físicos")\nelse:\n    v_escape = math.sqrt(2 * G * M / r)\n    print("Comparación disponible:", velocidad >= v_escape)`, 'Revisa los parámetros físicos', { fisica: 'Mecánica' }),
        nota('Comparar con la rapidez de escape no simula la trayectoria completa ni considera rotación terrestre, atmósfera o perturbaciones. Es una primera aplicación de condicionales a un modelo físico.'),
      ]],
      ['proyecto', 'Proyecto integrador', [
        pasos('Solicita al usuario una rapidez inicial en m/s usando input().', 'Rechaza valores negativos antes de hacer la comparación.', 'Utiliza la rapidez de escape terrestre aproximada de 11 186 m/s y presenta un mensaje diferente según el resultado.', 'Prueba con 10 000 m/s, 12 000 m/s y un valor negativo.'),
        ejemplo('u2-05-proyecto', 'Reto: ¿se alcanza el umbral?', `velocidad = float(input("Rapidez inicial en m/s: "))\numbral = 11186.0\nif velocidad < 0:\n    print("La rapidez no puede ser negativa")\nelif velocidad >= umbral:\n    print("Alcanza la rapidez mínima ideal")\nelse:\n    print("No alcanza la rapidez mínima ideal")`, 'Rapidez inicial en m/s: Alcanza la rapidez mínima ideal', { fisica: 'Mecánica', consigna: 'Programa una decisión con la rapidez que introduzca el usuario. Rechaza valores negativos; para valores válidos, indica si se alcanza el umbral ideal aproximado de 11 186 m/s. Prueba con 12 000 m/s.', pistas: ['Solicita rapidez con velocidad = float(input("Rapidez inicial en m/s: ")).', 'Empieza con if velocidad < 0: para rechazar entradas negativas.', 'Agrega elif velocidad >= 11186: para superar el umbral y else: para el resto.'] }),
      ]],
      ['cierre', 'Comprueba tu razonamiento', [
        lista('¿Qué sucede si exactamente se iguala el umbral?', '¿Por qué conviene validar la rapidez antes de compararla?', '¿Qué suposiciones físicas limitan la interpretación del resultado?'),
        nota('Al dominar estas decisiones, podrás automatizar cálculos repetidos con los ciclos de la Unidad 3.'),
      ]],
    ], 'Comparación con la velocidad de escape', 'Intermedia'),
];
