// CodePhy — lecciones de Python científico. Código portable.
export const unidad10 = {
  "id": "unidad-10",
  "numero": 10,
  "titulo": "Métodos numéricos fundamentales",
  "descripcion": "Aproxima raíces, integrales, derivadas y frecuencias mediante algoritmos reproducibles.",
  "objetivos": [
    "Resolver problemas mediante aproximaciones numéricas.",
    "Interpretar errores y límites de los métodos.",
    "Reconocer herramientas de NumPy y SciPy."
  ],
  "conocimientosPrevios": "Unidades 1–9: programación, NumPy, Matplotlib y álgebra.",
  "icono": "python-numerical",
  "lecciones": [
    "python-46-raices-de-ecuaciones",
    "python-47-interpolacion-y-muestreo",
    "python-48-derivacion-numerica",
    "python-49-integracion-numerica",
    "python-50-fft-y-analisis-de-frecuencias"
  ]
};
export const leccionesUnidad10 = [
  {
    "id": "python-46-raices-de-ecuaciones",
    "unidadId": "unidad-10",
    "numero": "10.1",
    "modulo": "Métodos numéricos fundamentales",
    "titulo": "Raíces de ecuaciones",
    "subtitulo": "Localiza soluciones y comprueba la convergencia.",
    "icono": "python-numerical",
    "objetivos": [
      "Identificar cambios de signo",
      "Programar bisección",
      "Usar métodos de SciPy"
    ],
    "secciones": [
      {
        "id": "u10-1-seccion-1",
        "titulo": "Cambio de signo",
        "etiqueta": "01 / CAMBIO DE SIGNO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una raíz de una función continua puede localizarse en un intervalo cuyos extremos tienen signos opuestos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-1-01",
              "titulo": "Cambio de signo",
              "codigo": "def f(x):\n    return x**2 - 2\nprint(f(1)*f(2) < 0)",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Raíces"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "Cambio de signo",
                  "Raíces",
                  "Raíces de ecuaciones"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-1-01-pregunta",
            "enunciado": "¿Qué significa el resultado True?",
            "opciones": [
              "Hay un cambio de signo en el intervalo",
              "La función es siempre positiva",
              "La raíz es exactamente 1"
            ],
            "correcta": 0,
            "explicacion": "Se cumple la condición necesaria de cambio de signo para aplicar bisección."
          }
        ]
      },
      {
        "id": "u10-1-seccion-2",
        "titulo": "Bisección",
        "etiqueta": "02 / BISECCIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En cada paso se conserva la mitad del intervalo donde permanece el cambio de signo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-1-02",
              "titulo": "Bisección",
              "codigo": "def f(x):\n    return x**2-2\na,b=1.0,2.0\nfor _ in range(25):\n    m=(a+b)/2\n    if f(a)*f(m)<=0:\n        b=m\n    else:\n        a=m\nprint(f\"Raíz ≈ {(a+b)/2:.6f}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Raíces"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "Bisección",
                  "Raíces",
                  "Raíces de ecuaciones"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-1-02-pregunta",
            "enunciado": "¿Qué sucede al aumentar el número de iteraciones?",
            "opciones": [
              "Se reduce la anchura del intervalo",
              "La función cambia de definición",
              "Siempre crece el error"
            ],
            "correcta": 0,
            "explicacion": "Cada iteración divide entre dos el intervalo inicial."
          }
        ]
      },
      {
        "id": "u10-1-seccion-3",
        "titulo": "Brent con SciPy",
        "etiqueta": "03 / BRENT CON SCIPY",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "brentq combina robustez y eficiencia cuando hay cambio de signo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-1-03",
              "titulo": "Brent con SciPy",
              "codigo": "from scipy.optimize import brentq\nf=lambda x: x**2-2\nraiz=brentq(f,1,2)\nprint(f\"Raíz: {raiz:.6f}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Raíces"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "Brent con SciPy",
                  "Raíces",
                  "Raíces de ecuaciones"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-1-03-pregunta",
            "enunciado": "¿Qué condición de brentq es importante aquí?",
            "opciones": [
              "Que los extremos encierren un cambio de signo",
              "Que ambos extremos sean ceros",
              "Que la función sea lineal"
            ],
            "correcta": 0,
            "explicacion": "Para este uso, los extremos deben acotar una raíz con signos opuestos."
          }
        ]
      },
      {
        "id": "u10-1-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Encuentra con bisección la raíz positiva de x²−9 entre 2 y 4.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-1-reto",
              "titulo": "Reto: Equilibrio de fuerzas",
              "codigo": "def f(x):\n    return x**2-9\na,b=2.0,4.0\nfor _ in range(25):\n    m=(a+b)/2\n    if f(a)*f(m)<=0:\n        b=m\n    else:\n        a=m\nprint(round((a+b)/2,5))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Encuentra con bisección la raíz positiva de x²−9 entre 2 y 4.",
              "pistas": [
                "Usa una función para calcular x²−9.",
                "Mantén un intervalo [a,b] y calcula su punto medio.",
                "Repite 25 veces y muestra la aproximación."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Raíces"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "Equilibrio de fuerzas",
                  "Raíces"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Cambio de signo",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-47-interpolacion-y-muestreo",
    "unidadId": "unidad-10",
    "numero": "10.2",
    "modulo": "Métodos numéricos fundamentales",
    "titulo": "Interpolación y muestreo",
    "subtitulo": "Estima valores intermedios sin inventar mediciones.",
    "icono": "python-numerical",
    "objetivos": [
      "Interpolar entre muestras",
      "Interpretar límites de datos",
      "Evitar extrapolaciones injustificadas"
    ],
    "secciones": [
      {
        "id": "u10-2-seccion-1",
        "titulo": "Interpolación lineal",
        "etiqueta": "01 / INTERPOLACIÓN LINEAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una recta entre dos mediciones permite estimar valores interiores al intervalo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-2-01",
              "titulo": "Interpolación lineal",
              "codigo": "t0,t1=0.0,2.0\nx0,x1=1.0,7.0\nt=1.0\nx=x0+(x1-x0)*(t-t0)/(t1-t0)\nprint(f\"Posición: {x:.2f} m\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Interpolación"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "Interpolación lineal",
                  "Interpolación",
                  "Interpolación y muestreo"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-2-01-pregunta",
            "enunciado": "¿Qué posición corresponde al punto medio?",
            "opciones": [
              "4 m",
              "7 m",
              "1 m"
            ],
            "correcta": 0,
            "explicacion": "La interpolación lineal toma el promedio entre los extremos cuando t está a mitad del intervalo."
          }
        ]
      },
      {
        "id": "u10-2-seccion-2",
        "titulo": "np.interp",
        "etiqueta": "02 / NP.INTERP",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "NumPy interp aplica interpolación lineal a una secuencia de mediciones ordenadas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-2-02",
              "titulo": "np.interp",
              "codigo": "import numpy as np\nt=np.array([0.,1.,2.,3.])\nx=np.array([0.,2.,5.,9.])\nprint(np.interp(1.5,t,x))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Interpolación"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "np.interp",
                  "Interpolación",
                  "Interpolación y muestreo"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-2-02-pregunta",
            "enunciado": "¿De qué mediciones depende el valor en 1.5 s?",
            "opciones": [
              "De las de 1 s y 2 s",
              "Solo de 0 s",
              "Solo de 3 s"
            ],
            "correcta": 0,
            "explicacion": "La interpolación usa los puntos vecinos al tiempo solicitado."
          }
        ]
      },
      {
        "id": "u10-2-seccion-3",
        "titulo": "Visualizar mediciones",
        "etiqueta": "03 / VISUALIZAR MEDICIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Representar muestras y curva interpolada permite detectar tendencias y limitaciones del modelo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-2-03",
              "titulo": "Visualizar mediciones",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt=np.array([0.,1.,2.,3.])\nx=np.array([0.,2.,5.,9.])\ntq=np.linspace(0,3,100)\nplt.plot(tq,np.interp(tq,t,x),label=\"Interpolación\")\nplt.scatter(t,x,label=\"Mediciones\")\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Posición (m)\")\nplt.legend()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Interpolación"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "Visualizar mediciones",
                  "Interpolación",
                  "Interpolación y muestreo"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-2-03-pregunta",
            "enunciado": "¿Qué representan los puntos aislados?",
            "opciones": [
              "Datos originales",
              "Ceros de la función",
              "Límites de integración"
            ],
            "correcta": 0,
            "explicacion": "Los marcadores corresponden a mediciones; la línea une los valores interpolados."
          }
        ]
      },
      {
        "id": "u10-2-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Estima por interpolación lineal la temperatura en t=2.5 s usando t=[0,2,4] y T=[20,24,30].",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-2-reto",
              "titulo": "Reto: Sensor de temperatura",
              "codigo": "import numpy as np\nt=[0,2,4]\nT=[20,24,30]\nprint(f\"{np.interp(2.5,t,T):.2f} °C\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Estima por interpolación lineal la temperatura en t=2.5 s usando t=[0,2,4] y T=[20,24,30].",
              "pistas": [
                "Crea arreglos de tiempos y temperaturas.",
                "Usa np.interp sobre esos arreglos.",
                "Muestra el resultado en grados Celsius."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Interpolación"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "Sensor de temperatura",
                  "Interpolación"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Interpolación lineal",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-48-derivacion-numerica",
    "unidadId": "unidad-10",
    "numero": "10.3",
    "modulo": "Métodos numéricos fundamentales",
    "titulo": "Derivación numérica",
    "subtitulo": "Estima tasas de cambio a partir de funciones o mediciones.",
    "icono": "python-numerical",
    "objetivos": [
      "Calcular diferencias finitas",
      "Interpretar derivadas físicas",
      "Analizar efecto del paso"
    ],
    "secciones": [
      {
        "id": "u10-3-seccion-1",
        "titulo": "Diferencia centrada",
        "etiqueta": "01 / DIFERENCIA CENTRADA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para una función suave, una aproximación de la derivada emplea valores a ambos lados de x."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-3-01",
              "titulo": "Diferencia centrada",
              "codigo": "def x(t):\n    return t**2\nh=0.001\nv=(x(2+h)-x(2-h))/(2*h)\nprint(f\"Velocidad: {v:.3f} m/s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Derivación numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Diferencia centrada",
                  "Derivación numérica",
                  "Derivación numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-3-01-pregunta",
            "enunciado": "¿Por qué evaluamos a ambos lados de t?",
            "opciones": [
              "Para formar una diferencia centrada",
              "Para sumar dos áreas",
              "Para convertir a grados"
            ],
            "correcta": 0,
            "explicacion": "La diferencia centrada aproxima la pendiente local con dos evaluaciones."
          }
        ]
      },
      {
        "id": "u10-3-seccion-2",
        "titulo": "Gradiente de datos",
        "etiqueta": "02 / GRADIENTE DE DATOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "np.gradient estima derivadas de arreglos muestreados."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-3-02",
              "titulo": "Gradiente de datos",
              "codigo": "import numpy as np\nt=np.linspace(0,4,9)\nx=t**2\nv=np.gradient(x,t)\nprint(\"Velocidad central:\",v[4])",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Derivación numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Gradiente de datos",
                  "Derivación numérica",
                  "Derivación numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-3-02-pregunta",
            "enunciado": "¿Qué representa v en este problema?",
            "opciones": [
              "Rapidez de cambio de posición",
              "Área bajo la curva",
              "Promedio de posiciones"
            ],
            "correcta": 0,
            "explicacion": "La derivada temporal de posición corresponde a velocidad."
          }
        ]
      },
      {
        "id": "u10-3-seccion-3",
        "titulo": "Error al variar h",
        "etiqueta": "03 / ERROR AL VARIAR H",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un paso demasiado grande causa error de truncamiento; uno extremadamente pequeño puede amplificar redondeo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-3-03",
              "titulo": "Error al variar h",
              "codigo": "import numpy as np\nfor h in [0.1,0.01,0.001]:\n    estimado=(np.sin(1+h)-np.sin(1-h))/(2*h)\n    print(h,round(abs(estimado-np.cos(1)),8))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Derivación numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Error al variar h",
                  "Derivación numérica",
                  "Derivación numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-3-03-pregunta",
            "enunciado": "¿Cuál es la derivada exacta de sin(x)?",
            "opciones": [
              "cos(x)",
              "-sin(x)",
              "x²"
            ],
            "correcta": 0,
            "explicacion": "Comparar la aproximación con cos(1) ayuda a evaluar el error."
          }
        ]
      },
      {
        "id": "u10-3-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Aproxima con diferencia centrada la velocidad de x(t)=3t²+2t en t=1 s.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-3-reto",
              "titulo": "Reto: Velocidad instantánea",
              "codigo": "def x(t):\n    return 3*t**2+2*t\nh=0.001\nv=(x(1+h)-x(1-h))/(2*h)\nprint(f\"v={v:.2f} m/s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Aproxima con diferencia centrada la velocidad de x(t)=3t²+2t en t=1 s.",
              "pistas": [
                "Define una función de posición.",
                "Usa un paso h=0.001.",
                "Calcula (x(1+h)-x(1-h))/(2h)."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Derivación numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Velocidad instantánea",
                  "Derivación numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Diferencia centrada",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-49-integracion-numerica",
    "unidadId": "unidad-10",
    "numero": "10.4",
    "modulo": "Métodos numéricos fundamentales",
    "titulo": "Integración numérica",
    "subtitulo": "Aproxima cantidades acumuladas y áreas bajo curvas.",
    "icono": "python-numerical",
    "objetivos": [
      "Aplicar trapecios",
      "Usar integración adaptativa",
      "Interpretar el resultado físico"
    ],
    "secciones": [
      {
        "id": "u10-4-seccion-1",
        "titulo": "Suma de trapecios",
        "etiqueta": "01 / SUMA DE TRAPECIOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Los trapecios aproximan el área bajo una curva mediante segmentos rectos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-4-01",
              "titulo": "Suma de trapecios",
              "codigo": "import numpy as np\nx=np.linspace(0,2,101)\nF=3*x\nW=np.trapezoid(F,x)\nprint(f\"Trabajo: {W:.2f} J\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Integración numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Suma de trapecios",
                  "Integración numérica",
                  "Integración numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-4-01-pregunta",
            "enunciado": "¿Qué representa el área bajo F(x)?",
            "opciones": [
              "Trabajo mecánico",
              "Velocidad angular",
              "Masa total"
            ],
            "correcta": 0,
            "explicacion": "El trabajo es la integral de fuerza respecto al desplazamiento."
          }
        ]
      },
      {
        "id": "u10-4-seccion-2",
        "titulo": "Integral con SciPy",
        "etiqueta": "02 / INTEGRAL CON SCIPY",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "quad evalúa una integral definida con una estimación de error."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-4-02",
              "titulo": "Integral con SciPy",
              "codigo": "from scipy.integrate import quad\nvalor,error=quad(lambda x:3*x,0,2)\nprint(f\"Trabajo: {valor:.2f} J\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Integración numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Integral con SciPy",
                  "Integración numérica",
                  "Integración numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-4-02-pregunta",
            "enunciado": "¿Qué devuelve quad?",
            "opciones": [
              "Valor y estimación del error",
              "Solo una gráfica",
              "Una lista de puntos"
            ],
            "correcta": 0,
            "explicacion": "quad devuelve una aproximación y una estimación del error absoluto."
          }
        ]
      },
      {
        "id": "u10-4-seccion-3",
        "titulo": "Representación geométrica",
        "etiqueta": "03 / REPRESENTACIÓN GEOMÉTRICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una gráfica ayuda a interpretar el significado de integrar una fuerza variable."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-4-03",
              "titulo": "Representación geométrica",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx=np.linspace(0,2,100)\nF=3*x\nplt.plot(x,F,label=\"F(x)=3x\")\nplt.fill_between(x,F,alpha=0.3)\nplt.xlabel(\"Desplazamiento (m)\")\nplt.ylabel(\"Fuerza (N)\")\nplt.legend()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Integración numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Representación geométrica",
                  "Integración numérica",
                  "Integración numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-4-03-pregunta",
            "enunciado": "¿Qué región corresponde al trabajo?",
            "opciones": [
              "El área sombreada bajo la curva",
              "Solo el extremo de la curva",
              "La pendiente en x=0"
            ],
            "correcta": 0,
            "explicacion": "El trabajo en este caso es el área positiva entre F(x) y el eje horizontal."
          }
        ]
      },
      {
        "id": "u10-4-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Aproxima el trabajo para F(x)=40x entre 0 y 0.2 m mediante trapecios.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-4-reto",
              "titulo": "Reto: Trabajo de un resorte",
              "codigo": "import numpy as np\nx=np.linspace(0,0.2,101)\nF=40*x\nprint(f\"{np.trapezoid(F,x):.3f} J\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Aproxima el trabajo para F(x)=40x entre 0 y 0.2 m mediante trapecios.",
              "pistas": [
                "Genera un arreglo x entre 0 y 0.2.",
                "Evalúa F=40*x.",
                "Integra con np.trapezoid."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Integración numérica"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Trabajo de un resorte",
                  "Integración numérica"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Suma de trapecios",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-50-fft-y-analisis-de-frecuencias",
    "unidadId": "unidad-10",
    "numero": "10.5",
    "modulo": "Métodos numéricos fundamentales",
    "titulo": "FFT y análisis de frecuencias",
    "subtitulo": "Identifica frecuencias presentes en señales oscilatorias.",
    "icono": "python-numerical",
    "objetivos": [
      "Interpretar muestreo",
      "Calcular una FFT",
      "Mostrar un espectro de amplitudes"
    ],
    "secciones": [
      {
        "id": "u10-5-seccion-1",
        "titulo": "Señal periódica",
        "etiqueta": "01 / SEÑAL PERIÓDICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una sinusoide contiene una frecuencia característica; el muestreo define cuántas observaciones hay por segundo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-5-01",
              "titulo": "Señal periódica",
              "codigo": "import numpy as np\nfs=100\nt=np.arange(0,2,1/fs)\ns=np.sin(2*np.pi*5*t)\nprint(\"Muestras:\",len(s))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "FFT"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Señal periódica",
                  "FFT",
                  "FFT y análisis de frecuencias"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-5-01-pregunta",
            "enunciado": "¿Qué significa fs=100?",
            "opciones": [
              "100 muestras por segundo",
              "100 oscilaciones por segundo",
              "100 metros por segundo"
            ],
            "correcta": 0,
            "explicacion": "fs es la frecuencia de muestreo, no la frecuencia de la onda."
          }
        ]
      },
      {
        "id": "u10-5-seccion-2",
        "titulo": "Frecuencia dominante",
        "etiqueta": "02 / FRECUENCIA DOMINANTE",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La FFT discreta revela picos de frecuencia en una señal medida."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-5-02",
              "titulo": "Frecuencia dominante",
              "codigo": "import numpy as np\nfs=100\nt=np.arange(0,2,1/fs)\ns=np.sin(2*np.pi*5*t)\nf=np.fft.rfftfreq(len(t),1/fs)\na=2*np.abs(np.fft.rfft(s))/len(s)\nprint(f\"Pico: {f[np.argmax(a)]:.1f} Hz\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "FFT"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Frecuencia dominante",
                  "FFT",
                  "FFT y análisis de frecuencias"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-5-02-pregunta",
            "enunciado": "¿Dónde se espera el pico principal?",
            "opciones": [
              "5 Hz",
              "100 Hz",
              "0 Hz"
            ],
            "correcta": 0,
            "explicacion": "La onda tiene una frecuencia de cinco ciclos por segundo."
          }
        ]
      },
      {
        "id": "u10-5-seccion-3",
        "titulo": "Espectro",
        "etiqueta": "03 / ESPECTRO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un espectro permite comparar distintas componentes de una señal."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-5-03",
              "titulo": "Espectro",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfs=100\nt=np.arange(0,2,1/fs)\ns=np.sin(2*np.pi*5*t)+0.5*np.sin(2*np.pi*12*t)\nf=np.fft.rfftfreq(len(t),1/fs)\na=2*np.abs(np.fft.rfft(s))/len(t)\nplt.plot(f,a)\nplt.xlim(0,25)\nplt.xlabel(\"Frecuencia (Hz)\")\nplt.ylabel(\"Amplitud\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Ejecuta el programa para comprobar el resultado."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "FFT"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Espectro",
                  "FFT",
                  "FFT y análisis de frecuencias"
                ],
                "galeria": true,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u10-5-03-pregunta",
            "enunciado": "¿Qué frecuencias destacan en el espectro?",
            "opciones": [
              "5 y 12 Hz",
              "2 y 100 Hz",
              "0 y 25 Hz"
            ],
            "correcta": 0,
            "explicacion": "Son las dos sinusoides que forman la señal."
          }
        ]
      },
      {
        "id": "u10-5-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Construye una señal de 8 Hz y verifica su frecuencia principal con rfft.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u10-5-reto",
              "titulo": "Reto: Señal acústica simulada",
              "codigo": "import numpy as np\nfs=100\nt=np.arange(0,2,1/fs)\ns=np.sin(2*np.pi*8*t)\nf=np.fft.rfftfreq(len(t),1/fs)\na=np.abs(np.fft.rfft(s))\nprint(f\"{f[np.argmax(a)]:.1f} Hz\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Construye una señal de 8 Hz y verifica su frecuencia principal con rfft.",
              "pistas": [
                "Usa fs=100 y 2 segundos.",
                "Genera sin(2π8t).",
                "Calcula rfftfreq y rfft."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "FFT"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Señal acústica simulada",
                  "FFT"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Señal periódica",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  }
];
