// Unidad 3: ciclos y automatización. Código Python estándar y portable.
const t = contenido => ({ tipo: 'texto', contenido });
const nota = contenido => ({ tipo: 'nota', contenido });
const eq = latex => ({ tipo: 'ecuacion', latex });
const tabla = (columnas, filas) => ({ tipo: 'tabla', columnas, filas });
const pasos = (...items) => ({ tipo: 'pasos', items });
const lista = (...items) => ({ tipo: 'lista', items });
const pregunta = (id, enunciado, opciones, correcta, explicacion) => ({ tipo: 'pregunta', id, enunciado, opciones, correcta, explicacion });
function ejemplo(id, titulo, codigo, salida, { tecnica = 'Ciclos', fisica = null, palabrasClave = [], consigna = '', pistas = [], dificultadFisica = 'Introductoria' } = {}) {
  const reto = id.endsWith('-reto') || id.endsWith('-proyecto');
  return { tipo: 'ejemplo', ejemplo: {
    id, titulo, codigo, resultado: { tipo: 'texto', contenido: salida }, reto, consigna, pistas,
    etiquetas: { programacion: [tecnica], fisica: fisica ? [fisica] : [], palabrasClave, galeria: false,
      dificultadProgramacion: 'Básico', dificultadFisica },
  } };
}
function leccion(numero, id, titulo, subtitulo, objetivos, secciones, ejemploPrincipal, dificultadFisica='Introductoria') {
  return { id, unidadId:'unidad-3', numero, modulo:'Ciclos y automatización', titulo, subtitulo, icono:'python-loops', objetivos,
    secciones: secciones.map(([id,titulo,bloques],i)=>({ id, titulo, etiqueta:`${String(i+1).padStart(2,'0')} / ${titulo.toUpperCase()}`, bloques })),
    ejemploPrincipal, dificultadProgramacion:'Básico', dificultadFisica };
}
export const unidad3 = {
  id:'unidad-3', numero:3, titulo:'Ciclos y automatización', icono:'python-loops',
  descripcion:'Repite operaciones, construye tablas de resultados y automatiza cálculos físicos con for y while.',
  objetivos:['Utilizar for, range() y while para automatizar cálculos.', 'Crear acumuladores y contadores para trabajar con mediciones.', 'Controlar la terminación de un ciclo y reconocer los riesgos de un ciclo infinito.'],
  conocimientosPrevios:'Unidades 1 y 2: variables, operadores, input(), comparaciones y condicionales.',
  lecciones:['python-11-for','python-12-while','python-13-acumuladores','python-14-control-ciclos','python-15-proyecto-ciclos'],
};
export const leccionesUnidad3 = [
  leccion('3.1','python-11-for','Repetir cálculos con for','Automatiza cálculos para distintos instantes sin escribir la misma instrucción muchas veces.',
    ['Comprender for e indentación.', 'Generar secuencias de enteros con range().', 'Construir tablas sencillas de magnitudes físicas.'],[
    ['repeticion','Una instrucción que se repite',[
      t('Si necesitamos evaluar una magnitud en varios instantes, escribir la misma operación una y otra vez produce código difícil de mantener. Un ciclo for recorre una secuencia y ejecuta su bloque una vez por elemento.'),
      ejemplo('u3-01-inicial','Contar mediciones',`for numero in range(1, 5):\n    print("Medición", numero)`, 'Medición 1\nMedición 2\nMedición 3\nMedición 4'),
      pregunta('u3-q1','¿Cuántas veces se ejecuta print() si utilizas range(1, 5)?',['4 veces','5 veces','6 veces'],0,'range(1, 5) genera 1, 2, 3 y 4; el límite superior no se incluye.'),
      nota('La indentación de las instrucciones dentro del ciclo es obligatoria. Si hay varias instrucciones indentadas, todas se repiten.'),
    ]],
    ['range','Cómo funciona range()',[
      tabla(['Expresión','Valores producidos'],[['range(4)','0, 1, 2, 3'],['range(1, 5)','1, 2, 3, 4'],['range(0, 9, 3)','0, 3, 6']]),
      t('El tercer argumento indica el paso. Un rango también puede recorrer valores en orden descendente usando un paso negativo.'),
      ejemplo('u3-01-pasos','Intervalos de tiempo de 2 segundos',`for tiempo in range(0, 7, 2):\n    print(tiempo, "s")`, '0 s\n2 s\n4 s\n6 s', { fisica:'Mecánica', palabrasClave:['tiempo','secuencia'] }),
    ]],
    ['aplicacion','Tabla de movimiento rectilíneo uniforme',[
      t('Para un movimiento con rapidez constante v y posición inicial x₀, la posición en un instante t es:'),
      eq(String.raw`x(t)=x_0+vt`),
      ejemplo('u3-01-mru','Posición a lo largo del tiempo',`posicion_inicial = 2.0  # m\nvelocidad = 3.0  # m/s\nfor tiempo in range(5):\n    posicion = posicion_inicial + velocidad * tiempo\n    print(f"t={tiempo} s, x={posicion:.1f} m")`, 't=0 s, x=2.0 m\nt=1 s, x=5.0 m\nt=2 s, x=8.0 m\nt=3 s, x=11.0 m\nt=4 s, x=14.0 m', { fisica:'Mecánica', palabrasClave:['movimiento rectilíneo','posición','tabla'] }),
    ]],
    ['practica','Practica lo aprendido',[
      pasos('Escribe un ciclo for que recorra los segundos 0, 1, 2, 3 y 4.', 'Calcula la distancia d = 4·t para una rapidez constante de 4 m/s.', 'Muestra cada tiempo y cada distancia con sus unidades.'),
      ejemplo('u3-01-reto','Reto: distancias cada segundo',`rapidez = 4  # m/s\nfor tiempo in range(5):\n    distancia = rapidez * tiempo\n    print(f"{tiempo} s: {distancia} m")`, '0 s: 0 m\n1 s: 4 m\n2 s: 8 m\n3 s: 12 m\n4 s: 16 m', { fisica:'Mecánica', consigna:'Para una rapidez constante de 4 m/s, muestra la distancia recorrida en t = 0, 1, 2, 3 y 4 s con un ciclo for.', pistas:['Guarda rapidez = 4.','Utiliza for tiempo in range(5): y calcula rapidez * tiempo.','Dentro del ciclo muestra el tiempo y la distancia mediante print() o una f-string.'] }),
    ]],
  ],'Tabla de movimiento rectilíneo'),

  leccion('3.2','python-12-while','Repetir mientras se cumpla una condición','Aprende a utilizar while cuando el número de repeticiones depende de una condición.',
    ['Distinguir for de while.', 'Actualizar variables para terminar un ciclo.', 'Interpretar la evolución de una magnitud hasta alcanzar un umbral.'],[
    ['while','Una condición controla la repetición',[
      t('Un ciclo while ejecuta sus instrucciones mientras la condición sea verdadera. Es especialmente útil cuando no conocemos de antemano el número exacto de iteraciones.'),
      ejemplo('u3-02-basico','Contar hasta cuatro',`contador = 1\nwhile contador <= 4:\n    print(contador)\n    contador += 1`, '1\n2\n3\n4'),
      pregunta('u3-q2','¿Qué pasaría si eliminamos contador += 1?',['El ciclo termina antes','La condición seguiría siendo verdadera','Se imprimiría solo 4'],1,'El contador nunca cambia y la condición contador <= 4 permanece verdadera. Ese ciclo no finalizaría por sí solo.'),
      nota('Siempre identifica qué valor cambia dentro del while y qué condición hará que termine.'),
    ]],
    ['umbral','Decaimiento por intervalos',[
      t('Supongamos que una cantidad disminuye 20 % en cada intervalo. Calcularemos cuántos intervalos se necesitan para que sea menor de 40 unidades. Es un modelo discreto de decaimiento, no una aproximación universal de todos los fenómenos de desintegración.'),
      ejemplo('u3-02-decaimiento','Alcanzar un umbral',`cantidad = 100.0\nintervalos = 0\nwhile cantidad >= 40:\n    cantidad *= 0.8\n    intervalos += 1\nprint("Intervalos:", intervalos)\nprint(f"Cantidad final: {cantidad:.2f}")`, 'Intervalos: 5\nCantidad final: 32.77', { fisica:'Termodinámica y física estadística', palabrasClave:['decaimiento','umbral','iteración'] }),
      t('La actualización cantidad *= 0.8 equivale a cantidad = cantidad * 0.8. Utilizamos >= para que el proceso continúe si la cantidad todavía es exactamente 40.'),
    ]],
    ['limites','Evitar ciclos interminables',[
      t('Una condición que nunca pasa a False puede dejar un programa ejecutándose indefinidamente. Además de actualizar las variables, podemos establecer un límite máximo de pasos cuando el modelo lo requiera.'),
      ejemplo('u3-02-seguro','Límite de iteraciones',`valor = 1\npasos = 0\nwhile valor < 20 and pasos < 10:\n    valor *= 2\n    pasos += 1\nprint("Pasos:", pasos)\nprint("Valor:", valor)`, 'Pasos: 5\nValor: 32'),
    ]],
    ['practica','Practica lo aprendido',[
      pasos('Comienza con una energía de 80 J.', 'Resta 15 J por intervalo mientras la energía sea superior a 20 J.', 'Cuenta los intervalos y presenta la energía final.'),
      ejemplo('u3-02-reto','Reto: energía restante',`energia = 80  # J\nintervalos = 0\nwhile energia > 20:\n    energia -= 15\n    intervalos += 1\nprint("Intervalos:", intervalos)\nprint("Energía final:", energia, "J")`, 'Intervalos: 4\nEnergía final: 20 J', { fisica:'Mecánica', consigna:'Una reserva idealizada contiene 80 J y pierde 15 J por intervalo. Repite la resta hasta alcanzar 20 J o menos. Muestra cuántos intervalos transcurrieron y la energía restante.', pistas:['Crea las variables energia = 80 e intervalos = 0.','Utiliza while energia > 20: y disminuye la energía en 15.','Incrementa intervalos dentro del ciclo y muestra ambos resultados al terminar.'] }),
    ]],
  ],'Decaimiento discreto'),

  leccion('3.3','python-13-acumuladores','Acumuladores y contadores','Reúne resultados parciales y calcula estadísticos sencillos sin bibliotecas externas.',
    ['Distinguir acumulador y contador.', 'Calcular sumas y promedios mediante un ciclo.', 'Interpretar la media de un conjunto de mediciones.'],[
    ['acumular','Guardar una suma parcial',[
      t('Un acumulador conserva un resultado que cambia en cada iteración. Por ejemplo, suma += dato equivale a suma = suma + dato. El acumulador debe inicializarse antes del ciclo.'),
      ejemplo('u3-03-suma','Suma de mediciones',`mediciones = [2.0, 2.2, 1.8]  # m\nsuma = 0.0\nfor longitud in mediciones:\n    suma += longitud\nprint(f"Suma: {suma:.1f} m")`, 'Suma: 6.0 m', { fisica:'Física experimental' }),
      pregunta('u3-q3','Si suma empieza en 0 y sumamos 2, 3 y 4, ¿cuánto vale al terminar?',['4','7','9'],2,'El acumulador conserva la suma total: 0 + 2 + 3 + 4 = 9.'),
    ]],
    ['promedio','Media aritmética de las mediciones',[
      t('Para obtener la media aritmética dividimos la suma de los datos entre la cantidad de mediciones. Más adelante estudiaremos incertidumbre, dispersión y métodos estadísticos completos.'),
      eq(String.raw`\bar{x}=\frac{1}{N}\sum_{i=1}^{N}x_i`),
      ejemplo('u3-03-media','Media de tiempos de oscilación',`tiempos = [1.98, 2.02, 2.01, 1.99]  # s\nsuma = 0.0\ncontador = 0\nfor tiempo in tiempos:\n    suma += tiempo\n    contador += 1\nmedia = suma / contador\nprint(f"Tiempo promedio: {media:.3f} s")`, 'Tiempo promedio: 2.000 s', { fisica:'Mecánica', palabrasClave:['péndulo','media','mediciones'] }),
      nota('El promedio es válido aquí porque la lista tiene datos. Cuando el conjunto puede estar vacío, debemos comprobar que el contador sea mayor que cero antes de dividir.'),
    ]],
    ['contar','Contar valores que cumplen una condición',[
      t('Podemos usar un contador con una condición para saber cuántas mediciones están por encima de un umbral, sin calcular todavía estadísticas más avanzadas.'),
      ejemplo('u3-03-umbral','Mediciones fuera del intervalo',`temperaturas = [21, 24, 29, 22, 31]\nfuera = 0\nfor temp in temperaturas:\n    if temp > 28:\n        fuera += 1\nprint("Lecturas superiores a 28 °C:", fuera)`, 'Lecturas superiores a 28 °C: 2', { fisica:'Física experimental' }),
    ]],
    ['practica','Practica lo aprendido',[
      pasos('Define una lista con las masas 2.0, 2.5, 3.0 y 2.5 kg.', 'Usa un ciclo para sumar los valores y contar las mediciones.', 'Calcula e imprime la masa promedio.'),
      ejemplo('u3-03-reto','Reto: masa promedio',`masas = [2.0, 2.5, 3.0, 2.5]\nsuma = 0\ncantidad = 0\nfor masa in masas:\n    suma += masa\n    cantidad += 1\nprint(f"Promedio: {suma/cantidad:.2f} kg")`, 'Promedio: 2.50 kg', { fisica:'Física experimental', consigna:'Sin utilizar sum(), len() ni NumPy, calcula la masa promedio de [2.0, 2.5, 3.0, 2.5] kg mediante acumulador y contador.', pistas:['Inicia suma = 0 y cantidad = 0.','En el ciclo for agrega cada masa a suma y aumenta cantidad.','Al terminar imprime suma / cantidad con unidades de kg.'] }),
    ]],
  ],'Promedios de mediciones'),

  leccion('3.4','python-14-control-ciclos','Control de ciclos y ciclos anidados','Decide cuándo terminar una repetición, omitir una iteración o recorrer dos dimensiones.',
    ['Utilizar break y continue sin confundir sus efectos.', 'Comprender ciclos anidados.', 'Aplicar límites de seguridad en búsquedas iterativas.'],[
    ['interrumpir','Detener con break',[
      t('break interrumpe inmediatamente el ciclo que lo contiene. Es útil cuando encontramos el primer valor que cumple una condición.'),
      ejemplo('u3-04-break','Primera lectura que supera el límite',`lecturas = [15, 18, 22, 29, 24]\nfor lectura in lecturas:\n    if lectura > 25:\n        print("Primera alerta:", lectura)\n        break`, 'Primera alerta: 29', { fisica:'Física experimental' }),
      pregunta('u3-q4','¿Qué hace break dentro de un ciclo?',['Salta solo a la siguiente iteración','Termina el ciclo actual','Reinicia el ciclo'],1,'break termina de inmediato el ciclo donde aparece.'),
    ]],
    ['omitir','Saltar una iteración con continue',[
      t('continue termina solamente la iteración actual y permite que el ciclo siga con el siguiente valor. No significa que el programa deje de ejecutarse.'),
      ejemplo('u3-04-continue','Omitir mediciones marcadas como inválidas',`datos = [9.8, None, 9.7, None, 9.9]\nfor dato in datos:\n    if dato is None:\n        continue\n    print(f"Medición: {dato:.1f} m/s²")`, 'Medición: 9.8 m/s²\nMedición: 9.7 m/s²\nMedición: 9.9 m/s²', { fisica:'Física experimental' }),
      nota('None representa aquí una medición ausente; no es equivalente a medir cero. La limpieza formal de datos se verá en la Unidad 7.'),
    ]],
    ['anidados','Dos ciclos para dos variables',[
      t('Un ciclo anidado recorre el ciclo interior completo por cada paso del exterior. Así podemos calcular una magnitud para varias combinaciones de parámetros.'),
      ejemplo('u3-04-anidados','Trabajo para distintas fuerzas y distancias',`fuerzas = [2, 4]  # N\ndistancias = [1, 3]  # m\nfor fuerza in fuerzas:\n    for distancia in distancias:\n        trabajo = fuerza * distancia\n        print(f"F={fuerza} N, d={distancia} m: W={trabajo} J")`, 'F=2 N, d=1 m: W=2 J\nF=2 N, d=3 m: W=6 J\nF=4 N, d=1 m: W=4 J\nF=4 N, d=3 m: W=12 J', { fisica:'Mecánica' }),
      nota('El modelo supone una fuerza constante y paralela al desplazamiento. Para fuerzas con otra orientación, el trabajo depende también del ángulo.'),
    ]],
    ['practica','Practica lo aprendido',[
      pasos('Define una lista de intensidades 4, 7, 11, 6 y 13 (unidades arbitrarias).', 'Recorre la lista hasta encontrar la primera intensidad mayor que 10.', 'Imprime el dato y termina la búsqueda con break.'),
      ejemplo('u3-04-reto','Reto: detectar primer máximo',`intensidades = [4, 7, 11, 6, 13]\nfor intensidad in intensidades:\n    if intensidad > 10:\n        print("Primera intensidad alta:", intensidad)\n        break`, 'Primera intensidad alta: 11', { fisica:'Ondas y óptica', consigna:'Recorre [4, 7, 11, 6, 13] y muestra solamente la primera intensidad mayor que 10; detén el ciclo al encontrarla.', pistas:['Recorre la lista utilizando for intensidad in intensidades:.','Comprueba if intensidad > 10: dentro del ciclo.','Imprime la intensidad y después escribe break en la misma rama.'] }),
    ]],
  ],'Búsqueda de una lectura'),

  leccion('3.5','python-15-proyecto-ciclos','Proyecto: estimar un desplazamiento','Integra ciclos, acumuladores y decisiones para aproximar un resultado físico por intervalos.',
    ['Aplicar una suma iterativa para aproximar un desplazamiento.', 'Utilizar pasos temporales y variables acumuladoras.', 'Interpretar el efecto de reducir el paso de tiempo.'],[
    ['modelo','Una aproximación por pasos',[
      t('Supongamos que la velocidad crece linealmente desde el reposo con aceleración constante a. Podemos aproximar el desplazamiento sumando pequeños aportes v·Δt evaluados al inicio de cada intervalo.'),
      eq(String.raw`\Delta x\approx\sum_{i=0}^{N-1}v(t_i)\,\Delta t\,,\quad v(t)=at`),
      t('Es una aproximación por extremos izquierdos; no es la fórmula exacta. Para la aceleración constante desde reposo, el resultado exacto es x = at²/2, que usaremos para comprobar la aproximación.'),
    ]],
    ['implementacion','Calcular con un ciclo for',[
      ejemplo('u3-05-suma','Desplazamiento aproximado en 4 segundos',`aceleracion = 2.0  # m/s²\nintervalo = 1.0  # s\npasos = 4\ndesplazamiento = 0.0\nfor i in range(pasos):\n    tiempo = i * intervalo\n    velocidad = aceleracion * tiempo\n    desplazamiento += velocidad * intervalo\nprint(f"Aproximación: {desplazamiento:.2f} m")\nprint(f"Valor exacto: {0.5 * aceleracion * 4**2:.2f} m")`, 'Aproximación: 12.00 m\nValor exacto: 16.00 m', { fisica:'Mecánica', tecnica:'Integración por sumas', dificultadFisica:'Intermedia' }),
      pregunta('u3-q5','¿Por qué la aproximación con intervalos de 1 s es menor que el valor exacto?',['Porque la aceleración es negativa','Porque evaluamos la velocidad al inicio de cada intervalo creciente','Porque range() empieza en 1'],1,'Al crecer la velocidad, el valor al inicio de cada intervalo es menor que el promedio real de ese intervalo.'),
    ]],
    ['precision','Qué ocurre con intervalos más pequeños',[
      t('Al reducir Δt y aumentar el número de pasos para conservar el tiempo total, la suma se acerca al valor exacto. Este principio se estudiará formalmente en la Unidad 10.'),
      ejemplo('u3-05-refinar','Comparar dos tamaños de paso',`aceleracion = 2.0\ntiempo_total = 4.0\nfor pasos in [4, 40]:\n    dt = tiempo_total / pasos\n    distancia = 0.0\n    for i in range(pasos):\n        tiempo = i * dt\n        distancia += aceleracion * tiempo * dt\n    print(f"{pasos} pasos: {distancia:.2f} m")`, '4 pasos: 12.00 m\n40 pasos: 15.60 m', { fisica:'Mecánica', tecnica:'Integración por sumas', dificultadFisica:'Intermedia' }),
    ]],
    ['practica','Proyecto integrador',[
      pasos('Considera a = 3 m/s², tiempo total = 4 s y 8 pasos de igual duración.', 'Calcula Δt como tiempo total / pasos.', 'Usa un acumulador para sumar velocidad * Δt en cada paso, con velocidad = a * t al inicio del intervalo.', 'Compara tu aproximación con el valor exacto a·t²/2.'),
      ejemplo('u3-05-proyecto','Reto: ocho intervalos de movimiento',`aceleracion = 3.0\ntiempo_total = 4.0\npasos = 8\ndt = tiempo_total / pasos\ndesplazamiento = 0.0\nfor i in range(pasos):\n    tiempo = i * dt\n    desplazamiento += aceleracion * tiempo * dt\nexacto = 0.5 * aceleracion * tiempo_total**2\nprint(f"Aproximación: {desplazamiento:.2f} m")\nprint(f"Exacto: {exacto:.2f} m")`, 'Aproximación: 21.00 m\nExacto: 24.00 m', { fisica:'Mecánica', tecnica:'Integración por sumas', dificultadFisica:'Intermedia', consigna:'Para a = 3 m/s² durante 4 s, aproxima el desplazamiento con ocho intervalos iguales y velocidad evaluada al inicio de cada intervalo. Compara con la expresión exacta.', pistas:['Primero calcula dt = tiempo_total / pasos con pasos = 8.','Inicializa desplazamiento = 0 y usa for i in range(pasos):; en cada paso t = i * dt.','Acumula aceleracion * t * dt y compara contra 0.5 * aceleracion * tiempo_total**2.'] }),
    ]],
    ['cierre','Qué aprendiste',[
      lista('Un ciclo evita repetir manualmente cálculos similares.', 'Un acumulador permite construir sumas de aportes pequeños.', 'La comparación con una solución conocida ayuda a detectar los límites de un modelo numérico.'),
      nota('En la Unidad 4 escribirás funciones para reutilizar estos cálculos sin copiar todo el programa.'),
    ]],
  ],'Desplazamiento por sumas', 'Intermedia'),
];
