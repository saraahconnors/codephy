// Unidad 5. Python estándar: ejecutable en CodePhy, Colab y VS Code.
export const unidad5 = {
  "id": "unidad-5",
  "numero": 5,
  "titulo": "Computación con NumPy",
  "icono": "python-numpy",
  "descripcion": "Utiliza arreglos para realizar cálculos sobre conjuntos de mediciones y magnitudes físicas.",
  "objetivos": [
    "Crear arreglos y secuencias numéricas con NumPy.",
    "Aplicar operaciones vectorizadas, indexación y máscaras.",
    "Manipular matrices y evaluar funciones físicas sobre mallas."
  ],
  "conocimientosPrevios": "Unidades 1–4: variables, ciclos, estructuras de datos y funciones.",
  "lecciones": [
    "python-21-numpy-intro",
    "python-22-vectorizacion",
    "python-23-indexacion",
    "python-24-matrices",
    "python-25-proyecto-numpy"
  ]
};
export const leccionesUnidad5 = [
  {
    "id": "python-21-numpy-intro",
    "unidadId": "unidad-5",
    "numero": "5.1",
    "modulo": "Computación con NumPy",
    "titulo": "Primeros arreglos con NumPy",
    "subtitulo": "Crea conjuntos numéricos y opera con ellos sin ciclos explícitos.",
    "icono": "python-numpy",
    "objetivos": [
      "Importar numpy con el alias np.",
      "Distinguir una lista de un arreglo ndarray.",
      "Crear arreglos y revisar su forma y tipo."
    ],
    "secciones": [
      {
        "id": "u5-1-arreglos",
        "titulo": "Por qué utilizar arreglos",
        "etiqueta": "01 / POR QUÉ UTILIZAR ARREGLOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un arreglo de NumPy almacena datos numéricos homogéneos y permite aplicar una operación a cada elemento de forma eficiente. Importaremos la biblioteca con el alias np."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-01-array",
              "titulo": "Mediciones de voltaje",
              "codigo": "import numpy as np\nvoltajes = np.array([1.5, 2.0, 2.5])\nprint(voltajes)\nprint(\"Elementos:\", voltajes.size)\nprint(\"Dimensiones:\", voltajes.ndim)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[1.5 2.  2.5]\nElementos: 3\nDimensiones: 1"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "NumPy"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u5q1",
            "enunciado": "¿Qué calcula np.array([1, 2, 3]) * 2?",
            "opciones": [
              "[1, 2, 3, 1, 2, 3]",
              "[2, 4, 6]",
              "Un error"
            ],
            "correcta": 1,
            "explicacion": "La multiplicación se aplica a cada elemento del arreglo."
          }
        ]
      },
      {
        "id": "u5-1-vectores",
        "titulo": "Operaciones vectorizadas",
        "etiqueta": "02 / OPERACIONES VECTORIZADAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Multiplicar una lista de Python por un entero repite sus elementos; multiplicar un ndarray por un escalar modifica numéricamente cada valor."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-01-energia",
              "titulo": "Energía cinética de tres cuerpos",
              "codigo": "import numpy as np\nmasas = np.array([1.0, 2.0, 3.0])  # kg\nrapidez = 4.0  # m/s\nenergia = 0.5 * masas * rapidez**2\nprint(energia)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[ 8. 16. 24.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "NumPy"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-1-secuencias",
        "titulo": "Construir secuencias",
        "etiqueta": "03 / CONSTRUIR SECUENCIAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "np.arange() define valores con un paso numérico; np.linspace() construye una cantidad determinada de puntos entre dos extremos, incluidos por defecto."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-01-linspace",
              "titulo": "Instantes para una medición",
              "codigo": "import numpy as np\nprint(np.arange(0, 5, 2))\nprint(np.linspace(0, 4, 3))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[0 2 4]\n[0. 2. 4.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "NumPy"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-1-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea un arreglo con velocidades 2, 4 y 6 m/s.",
              "Calcula el doble de cada valor.",
              "Imprime el arreglo resultante."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-01-reto",
              "titulo": "Reto: velocidades duplicadas",
              "codigo": "import numpy as np\nvelocidades = np.array([2, 4, 6])\nprint(2 * velocidades)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[ 4  8 12]"
              },
              "reto": true,
              "consigna": "Con un arreglo de velocidades 2, 4 y 6 m/s, calcula el doble de todos los valores con una única operación.",
              "pistas": [
                "Importa numpy como np.",
                "Crea un arreglo mediante np.array([...]).",
                "Multiplica todo el arreglo por 2."
              ],
              "etiquetas": {
                "programacion": [
                  "NumPy"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Energías vectorizadas",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-22-vectorizacion",
    "unidadId": "unidad-5",
    "numero": "5.2",
    "modulo": "Computación con NumPy",
    "titulo": "Operaciones vectorizadas",
    "subtitulo": "Evalúa expresiones físicas para muchos valores simultáneamente.",
    "icono": "python-numpy",
    "objetivos": [
      "Realizar operaciones elemento a elemento.",
      "Entender el broadcasting con un escalar.",
      "Comparar operaciones sobre listas y arreglos."
    ],
    "secciones": [
      {
        "id": "u5-2-expresiones",
        "titulo": "Evaluar funciones en muchos puntos",
        "etiqueta": "01 / EVALUAR FUNCIONES EN MUCHOS PUNTOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La vectorización permite escribir una fórmula semejante a su expresión matemática. Un escalar puede combinarse con todos los elementos de un arreglo mediante broadcasting."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-02-mru",
              "titulo": "Posiciones en distintos tiempos",
              "codigo": "import numpy as np\nt = np.array([0, 1, 2, 3])  # s\nx0, velocidad = 2.0, 1.5\nx = x0 + velocidad * t\nprint(x)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[2.  3.5 5.  6.5]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Vectorización"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u5q2",
            "enunciado": "¿Qué valores genera 3 * np.array([1, 2])?",
            "opciones": [
              "[3, 6]",
              "[1, 2, 1, 2, 1, 2]",
              "[3, 3]"
            ],
            "correcta": 0,
            "explicacion": "El escalar 3 multiplica cada componente."
          }
        ]
      },
      {
        "id": "u5-2-funciones",
        "titulo": "Funciones de NumPy",
        "etiqueta": "02 / FUNCIONES DE NUMPY",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Usa np.sin y np.cos con arreglos. Los ángulos se expresan en radianes, igual que en el módulo math."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-02-onda",
              "titulo": "Amplitud de una onda",
              "codigo": "import numpy as np\nfases = np.array([0, np.pi/2, np.pi])\namplitudes = np.sin(fases)\nprint(np.round(amplitudes, 3))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[0. 1. 0.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "NumPy"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-2-broadcast",
        "titulo": "Combinar formas compatibles",
        "etiqueta": "03 / COMBINAR FORMAS COMPATIBLES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Si un arreglo tiene forma (3, 1) y otro tiene forma (2,), NumPy puede combinarlos para producir una tabla de 3 × 2 valores."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-02-broadcast",
              "titulo": "Tabla de fuerzas",
              "codigo": "import numpy as np\nmasas = np.array([[1.0], [2.0], [3.0]])\naceleraciones = np.array([2.0, 4.0])\nfuerzas = masas * aceleraciones\nprint(fuerzas)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[[ 2.  4.]\n [ 4.  8.]\n [ 6. 12.]]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Broadcasting"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-2-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Genera un arreglo con tiempos 0, 1, 2, 3 y 4 s.",
              "Evalúa x = 3t + 1.",
              "Imprime las cinco posiciones."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-02-reto",
              "titulo": "Reto: trayectoria vectorizada",
              "codigo": "import numpy as np\nt = np.arange(5)\nx = 3 * t + 1\nprint(x)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[ 1  4  7 10 13]"
              },
              "reto": true,
              "consigna": "Calcula x = 3t + 1 para t = 0, 1, 2, 3 y 4 s usando NumPy sin escribir un ciclo for.",
              "pistas": [
                "Usa np.arange(5) para crear los tiempos.",
                "Multiplica el arreglo por 3 y suma 1.",
                "Imprime x."
              ],
              "etiquetas": {
                "programacion": [
                  "Vectorización"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Tabla de posición",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-23-indexacion",
    "unidadId": "unidad-5",
    "numero": "5.3",
    "modulo": "Computación con NumPy",
    "titulo": "Selección y máscaras",
    "subtitulo": "Selecciona subconjuntos de datos mediante índices y condiciones.",
    "icono": "python-numpy",
    "objetivos": [
      "Usar índices y rebanadas en ndarrays.",
      "Construir una máscara booleana.",
      "Seleccionar mediciones que cumplen criterios físicos."
    ],
    "secciones": [
      {
        "id": "u5-3-indices",
        "titulo": "Índices y rebanadas",
        "etiqueta": "01 / ÍNDICES Y REBANADAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Los índices de NumPy empiezan en cero. Las rebanadas funcionan de forma parecida a las listas, pero ahora permiten trabajar con conjuntos numéricos más grandes."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-03-index",
              "titulo": "Lecturas de un sensor",
              "codigo": "import numpy as np\nlecturas = np.array([1.1, 1.3, 1.2, 1.4, 1.5])\nprint(lecturas[0])\nprint(lecturas[1:4])",
              "resultado": {
                "tipo": "texto",
                "contenido": "1.1\n[1.3 1.2 1.4]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Indexación"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u5q3",
            "enunciado": "¿Qué selecciona lecturas[1:3]?",
            "opciones": [
              "Las posiciones 1 y 2",
              "Las posiciones 1, 2 y 3",
              "Solo la posición 3"
            ],
            "correcta": 0,
            "explicacion": "El extremo superior de la rebanada no se incluye."
          }
        ]
      },
      {
        "id": "u5-3-mascaras",
        "titulo": "Filtrar por una condición",
        "etiqueta": "02 / FILTRAR POR UNA CONDICIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una comparación aplicada a un ndarray produce un arreglo booleano. Utilízalo entre corchetes para conservar solo los valores que cumplen la condición."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-03-mask",
              "titulo": "Filtrar aceleraciones",
              "codigo": "import numpy as np\na = np.array([9.7, 9.8, 10.1, 9.9, 10.3])\nseleccion = a[a <= 10.0]\nprint(seleccion)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[9.7 9.8 9.9]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Máscaras booleanas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-3-combinacion",
        "titulo": "Combinar condiciones",
        "etiqueta": "03 / COMBINAR CONDICIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En máscaras de NumPy se utilizan & y | para combinar condiciones elemento a elemento. Cada comparación debe ir entre paréntesis."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-03-rango",
              "titulo": "Intervalo de medición",
              "codigo": "import numpy as np\ndatos = np.array([18, 21, 25, 30, 32])\nvalidos = datos[(datos >= 20) & (datos <= 30)]\nprint(validos)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[21 25 30]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Máscaras booleanas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "nota",
            "contenido": "En este contexto no utilices and para combinar arreglos booleanos: and espera una sola condición de verdad, no un arreglo."
          }
        ]
      },
      {
        "id": "u5-3-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea un arreglo con las temperaturas 16, 20, 22, 28, 31 °C.",
              "Conserva solo los valores entre 20 y 28 °C, inclusive.",
              "Muestra los datos seleccionados."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-03-reto",
              "titulo": "Reto: filtrar temperaturas",
              "codigo": "import numpy as np\nt = np.array([16, 20, 22, 28, 31])\nfiltro = (t >= 20) & (t <= 28)\nprint(t[filtro])",
              "resultado": {
                "tipo": "texto",
                "contenido": "[20 22 28]"
              },
              "reto": true,
              "consigna": "Filtra temperaturas entre 20 °C y 28 °C inclusive mediante una máscara de NumPy.",
              "pistas": [
                "Define t = np.array([...]).",
                "Crea (t >= 20) & (t <= 28).",
                "Indexa el arreglo con t[filtro]."
              ],
              "etiquetas": {
                "programacion": [
                  "Máscaras booleanas"
                ],
                "fisica": [
                  "Termodinámica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Filtrado de mediciones",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-24-matrices",
    "unidadId": "unidad-5",
    "numero": "5.4",
    "modulo": "Computación con NumPy",
    "titulo": "Matrices y dimensiones",
    "subtitulo": "Organiza datos bidimensionales y realiza operaciones matriciales sencillas.",
    "icono": "python-numpy",
    "objetivos": [
      "Consultar shape, ndim y tamaño.",
      "Seleccionar filas y columnas.",
      "Distinguir multiplicación elemento a elemento de producto matricial."
    ],
    "secciones": [
      {
        "id": "u5-4-forma",
        "titulo": "Arreglos bidimensionales",
        "etiqueta": "01 / ARREGLOS BIDIMENSIONALES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una matriz de datos puede almacenar filas de mediciones y columnas de variables. El atributo shape devuelve el número de filas y columnas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-04-shape",
              "titulo": "Tres posiciones en el plano",
              "codigo": "import numpy as np\nposiciones = np.array([[0, 1], [2, 3], [4, 5]])\nprint(posiciones.shape)\nprint(posiciones[:, 0])",
              "resultado": {
                "tipo": "texto",
                "contenido": "(3, 2)\n[0 2 4]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matrices"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u5q4",
            "enunciado": "Si shape es (3, 2), ¿cuántas filas tiene el arreglo?",
            "opciones": [
              "2",
              "3",
              "6"
            ],
            "correcta": 1,
            "explicacion": "La primera dimensión de shape indica las filas."
          }
        ]
      },
      {
        "id": "u5-4-transposicion",
        "titulo": "Traspuesta",
        "etiqueta": "02 / TRASPUESTA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La traspuesta intercambia filas por columnas y se obtiene con .T. Es útil para reorganizar observaciones y parámetros."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-04-transpuesta",
              "titulo": "Columnas y filas",
              "codigo": "import numpy as np\nmedidas = np.array([[1, 2], [3, 4]])\nprint(medidas.T)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[[1 3]\n [2 4]]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matrices"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-4-producto",
        "titulo": "Operaciones matriciales",
        "etiqueta": "03 / OPERACIONES MATRICIALES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El operador * multiplica elementos correspondientes; el operador @ realiza el producto matricial. El resultado depende del orden de las matrices."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-04-matmul",
              "titulo": "Transformación de un vector",
              "codigo": "import numpy as np\nrotacion = np.array([[0, -1], [1, 0]])\nvector = np.array([2, 0])\nprint(rotacion @ vector)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[0 2]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Álgebra lineal"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-4-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea una matriz con filas [2, 4] y [6, 8].",
              "Selecciona su segunda columna.",
              "Imprime la columna como arreglo."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-04-reto",
              "titulo": "Reto: segunda columna",
              "codigo": "import numpy as np\nmatriz = np.array([[2, 4], [6, 8]])\nprint(matriz[:, 1])",
              "resultado": {
                "tipo": "texto",
                "contenido": "[4 8]"
              },
              "reto": true,
              "consigna": "Crea una matriz de dos filas y dos columnas y muestra solo la segunda columna.",
              "pistas": [
                "Crea np.array([[2, 4], [6, 8]]).",
                "La expresión matriz[:, indice] selecciona una columna.",
                "La segunda columna tiene índice 1."
              ],
              "etiquetas": {
                "programacion": [
                  "Matrices"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Transformaciones bidimensionales",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-25-proyecto-numpy",
    "unidadId": "unidad-5",
    "numero": "5.5",
    "modulo": "Computación con NumPy",
    "titulo": "Proyecto: campo en una malla",
    "subtitulo": "Evalúa una función de dos variables sobre una cuadrícula de posiciones.",
    "icono": "python-numpy",
    "objetivos": [
      "Generar una malla con meshgrid().",
      "Combinar operaciones sobre arreglos bidimensionales.",
      "Consultar extremos y formas de un campo."
    ],
    "secciones": [
      {
        "id": "u5-5-mallas",
        "titulo": "Dos coordenadas simultáneas",
        "etiqueta": "01 / DOS COORDENADAS SIMULTÁNEAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Con np.meshgrid obtenemos dos arreglos X e Y que representan las coordenadas de cada punto de una cuadrícula."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-05-meshgrid",
              "titulo": "Cuadrícula de evaluación",
              "codigo": "import numpy as np\nx = np.array([-1, 0, 1])\ny = np.array([0, 2])\nX, Y = np.meshgrid(x, y)\nprint(X)\nprint(Y)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[[-1  0  1]\n [-1  0  1]]\n[[0 0 0]\n [2 2 2]]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Mallas"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u5q5",
            "enunciado": "Con tres valores de x y dos de y, ¿qué forma tienen X e Y?",
            "opciones": [
              "(3, 2)",
              "(2, 3)",
              "(3,)"
            ],
            "correcta": 1,
            "explicacion": "Hay dos filas de valores y y tres columnas de valores x."
          }
        ]
      },
      {
        "id": "u5-5-campo",
        "titulo": "Campo escalar de referencia",
        "etiqueta": "02 / CAMPO ESCALAR DE REFERENCIA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Construiremos un campo escalar de ejemplo U(x,y) = x² + y². Su propósito es practicar operaciones vectorizadas sobre mallas; no representamos todavía un potencial físico con unidades definidas."
          },
          {
            "tipo": "ecuacion",
            "latex": "U(x,y)=x^2+y^2"
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-05-campo",
              "titulo": "Campo escalar en una malla",
              "codigo": "import numpy as np\nx = np.array([-1, 0, 1])\ny = np.array([0, 2])\nX, Y = np.meshgrid(x, y)\nU = X**2 + Y**2\nprint(U)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[[1 0 1]\n [5 4 5]]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Mallas"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": true,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-5-resumen",
        "titulo": "Extremos del campo",
        "etiqueta": "03 / EXTREMOS DEL CAMPO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Las funciones np.min y np.max encuentran los extremos de un arreglo. También conviene comprobar la forma de los datos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-05-extremos",
              "titulo": "Revisión de una cuadrícula",
              "codigo": "import numpy as np\nx = np.linspace(-1, 1, 3)\nX, Y = np.meshgrid(x, x)\nU = X**2 + Y**2\nprint(\"Forma:\", U.shape)\nprint(\"Mínimo:\", U.min())\nprint(\"Máximo:\", U.max())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Forma: (3, 3)\nMínimo: 0.0\nMáximo: 2.0"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Mallas"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u5-5-proyecto",
        "titulo": "Proyecto integrador",
        "etiqueta": "04 / PROYECTO INTEGRADOR",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea x e y con los valores -2, 0 y 2.",
              "Construye las matrices X e Y con np.meshgrid().",
              "Evalúa U = X² + Y² y muestra el máximo."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u5-05-proyecto",
              "titulo": "Proyecto: máximo de un campo",
              "codigo": "import numpy as np\nx = np.array([-2, 0, 2])\nX, Y = np.meshgrid(x, x)\nU = X**2 + Y**2\nprint(\"Valor máximo:\", U.max())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Valor máximo: 8"
              },
              "reto": true,
              "consigna": "Evalúa U(x,y)=x²+y² en la malla x,y ∈ {-2,0,2} y muestra su máximo.",
              "pistas": [
                "Define x = np.array([-2, 0, 2]).",
                "Usa X, Y = np.meshgrid(x, x).",
                "Calcula U = X**2 + Y**2 y consulta U.max()."
              ],
              "etiquetas": {
                "programacion": [
                  "Mallas"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Campos escalares sobre mallas",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  }
];
