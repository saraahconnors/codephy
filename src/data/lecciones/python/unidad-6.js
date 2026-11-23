// Unidad 6. Python estándar: ejecutable en CodePhy, Colab y VS Code.
export const unidad6 = {
  "id": "unidad-6",
  "numero": 6,
  "titulo": "Visualización científica con Matplotlib",
  "icono": "python-plot",
  "descripcion": "Transforma resultados numéricos en gráficas legibles, reproducibles y con unidades.",
  "objetivos": [
    "Representar curvas, dispersión e histogramas.",
    "Organizar subgráficas y seleccionar escalas.",
    "Visualizar campos en 2D, superficies 3D y exportar figuras."
  ],
  "conocimientosPrevios": "Unidad 5: NumPy, arreglos, funciones y mallas numéricas.",
  "lecciones": [
    "python-26-primera-grafica",
    "python-27-multiples-curvas",
    "python-28-graficas-estadisticas",
    "python-29-subgraficas",
    "python-30-graficas-3d"
  ]
};
export const leccionesUnidad6 = [
  {
    "id": "python-26-primera-grafica",
    "unidadId": "unidad-6",
    "numero": "6.1",
    "modulo": "Visualización científica con Matplotlib",
    "titulo": "Tu primera gráfica con Matplotlib",
    "subtitulo": "Construye una figura con título, ejes y unidades.",
    "icono": "python-plot",
    "objetivos": [
      "Importar matplotlib.pyplot como plt.",
      "Crear curvas a partir de arreglos NumPy.",
      "Etiquetar ejes y mostrar la figura."
    ],
    "secciones": [
      {
        "id": "u6-1-linea",
        "titulo": "Dibujar una curva",
        "etiqueta": "01 / DIBUJAR UNA CURVA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "plt.plot(x, y) traza una curva. El primer arreglo contiene las coordenadas horizontales; el segundo, los valores verticales."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-01-linea",
              "titulo": "Posición en movimiento uniforme",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 5, 100)\nx = 2 + 3*t\nplt.plot(t, x)\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Posición (m)\")\nplt.title(\"Movimiento rectilíneo uniforme\")\nplt.grid(True)\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Gráfica de posición respecto al tiempo."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
            "id": "u6q1",
            "enunciado": "En plt.plot(t, x), ¿qué datos se representan sobre el eje horizontal?",
            "opciones": [
              "x",
              "t",
              "Los dos a la vez"
            ],
            "correcta": 1,
            "explicacion": "El primer argumento corresponde al eje horizontal."
          }
        ]
      },
      {
        "id": "u6-1-etiquetas",
        "titulo": "Elementos de una figura científica",
        "etiqueta": "02 / ELEMENTOS DE UNA FIGURA CIENTÍFICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un título descriptivo, etiquetas con unidades y cuadrícula permiten interpretar mejor una figura. plt.show() presenta la imagen en los entornos habituales."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-01-decaimiento",
              "titulo": "Cantidad que disminuye",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 10, 200)\nN = 100*np.exp(-0.35*t)\nplt.plot(t, N)\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Cantidad (u. a.)\")\nplt.title(\"Decaimiento exponencial\")\nplt.grid(True)\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Curva exponencial decreciente."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
                ],
                "fisica": [
                  "Física estadística"
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
        "id": "u6-1-estilos",
        "titulo": "Color y grosor",
        "etiqueta": "03 / COLOR Y GROSOR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Puedes modificar el color, estilo de línea y ancho sin alterar los datos. Los estilos mejoran la lectura, pero no sustituyen las etiquetas y las unidades."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-01-estilo",
              "titulo": "Curva de fuerza",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(0, 0.2, 80)\nF = 50*x\nplt.plot(x, F, color=\"teal\", linewidth=2)\nplt.xlabel(\"Elongación (m)\")\nplt.ylabel(\"Fuerza (N)\")\nplt.title(\"Resorte ideal\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Curva de fuerza y elongación."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
        "id": "u6-1-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Genera tiempos de 0 a 5 s con np.linspace().",
              "Evalúa v(t) = 2t.",
              "Representa la velocidad con su título y etiquetas."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-01-reto",
              "titulo": "Reto: gráfica de velocidad",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 5, 100)\nv = 2*t\nplt.plot(t, v)\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Velocidad (m/s)\")\nplt.title(\"Velocidad frente al tiempo\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Gráfica de velocidad lineal."
              },
              "reto": true,
              "consigna": "Construye una gráfica de v(t)=2t entre 0 y 5 s con etiquetas de tiempo y velocidad.",
              "pistas": [
                "Importa numpy y matplotlib.pyplot.",
                "Utiliza t = np.linspace(0, 5, 100) y v = 2*t.",
                "Llama plt.plot(t, v), etiqueta los ejes y utiliza plt.show()."
              ],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
    "ejemploPrincipal": "Gráfica posición-tiempo",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-27-multiples-curvas",
    "unidadId": "unidad-6",
    "numero": "6.2",
    "modulo": "Visualización científica con Matplotlib",
    "titulo": "Múltiples curvas y leyendas",
    "subtitulo": "Compara varias funciones en una misma gráfica.",
    "icono": "python-plot",
    "objetivos": [
      "Representar dos curvas en una figura.",
      "Agregar leyenda y marcadores.",
      "Ajustar límites y escalas según el fenómeno físico."
    ],
    "secciones": [
      {
        "id": "u6-2-leyenda",
        "titulo": "Comparar dos curvas",
        "etiqueta": "01 / COMPARAR DOS CURVAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Cada llamada a plt.plot agrega una curva a los mismos ejes. Con label describimos cada una y con plt.legend mostramos la leyenda."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-02-leyenda",
              "titulo": "Dos oscilaciones",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 5, 300)\nplt.plot(t, np.sin(2*t), label=\"Onda A\")\nplt.plot(t, 0.5*np.sin(4*t), label=\"Onda B\")\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Desplazamiento (u. a.)\")\nplt.legend()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Dos curvas con leyenda."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [],
                "galeria": true,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u6q2",
            "enunciado": "¿Para qué sirve plt.legend()?",
            "opciones": [
              "Para borrar los ejes",
              "Para identificar las curvas",
              "Para duplicar los puntos"
            ],
            "correcta": 1,
            "explicacion": "La leyenda muestra los textos label asociados a cada curva."
          }
        ]
      },
      {
        "id": "u6-2-marcadores",
        "titulo": "Datos discretos y marcadores",
        "etiqueta": "02 / DATOS DISCRETOS Y MARCADORES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para destacar observaciones individuales, añade marker a plot. Uniendo los puntos se sugiere continuidad; si las mediciones son independientes, puede ser preferible scatter."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-02-marker",
              "titulo": "Lecturas de aceleración",
              "codigo": "import matplotlib.pyplot as plt\nt = [0, 1, 2, 3]\na = [9.8, 9.7, 9.9, 9.8]\nplt.plot(t, a, marker=\"o\", linestyle=\"--\")\nplt.xlabel(\"Índice de medición\")\nplt.ylabel(\"Aceleración (m/s²)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Curva discontinua con cuatro marcadores."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
        "id": "u6-2-escalas",
        "titulo": "Límites y escala logarítmica",
        "etiqueta": "03 / LÍMITES Y ESCALA LOGARÍTMICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una escala logarítmica permite apreciar variaciones que abarcan varios órdenes de magnitud. Solo funciona con valores positivos en el eje correspondiente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-02-log",
              "titulo": "Magnitudes en diferentes escalas",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(1, 5, 100)\ny = 10**x\nplt.plot(x, y)\nplt.yscale(\"log\")\nplt.xlabel(\"Exponente\")\nplt.ylabel(\"Valor (escala log)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Curva creciente con eje vertical logarítmico."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
        "id": "u6-2-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Traza x = sin(t) y y = cos(t) entre 0 y 2π.",
              "Coloca ambas curvas en la misma figura.",
              "Añade etiquetas y una leyenda."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-02-reto",
              "titulo": "Reto: comparar seno y coseno",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 2*np.pi, 250)\nplt.plot(t, np.sin(t), label=\"Seno\")\nplt.plot(t, np.cos(t), label=\"Coseno\")\nplt.xlabel(\"Fase (rad)\")\nplt.ylabel(\"Amplitud (u. a.)\")\nplt.legend()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Dos curvas con leyenda seno/coseno."
              },
              "reto": true,
              "consigna": "Grafica seno y coseno en una misma figura con etiquetas y leyenda.",
              "pistas": [
                "Genera t = np.linspace(0, 2*np.pi, 250).",
                "Dibuja dos curvas con plt.plot y label.",
                "Agrega plt.legend() y plt.show()."
              ],
              "etiquetas": {
                "programacion": [
                  "Matplotlib"
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
      }
    ],
    "ejemploPrincipal": "Comparación de oscilaciones",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-28-graficas-estadisticas",
    "unidadId": "unidad-6",
    "numero": "6.3",
    "modulo": "Visualización científica con Matplotlib",
    "titulo": "Dispersión, barras e histogramas",
    "subtitulo": "Elige la representación apropiada según el tipo de datos.",
    "icono": "python-plot",
    "objetivos": [
      "Distinguir scatter, bar e hist.",
      "Representar mediciones discretas.",
      "Describir distribuciones mediante histogramas."
    ],
    "secciones": [
      {
        "id": "u6-3-dispersion",
        "titulo": "Diagrama de dispersión",
        "etiqueta": "01 / DIAGRAMA DE DISPERSIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "plt.scatter representa pares de datos sin unirlos automáticamente. Es adecuado para mediciones experimentales relacionadas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-03-scatter",
              "titulo": "Fuerza y elongación medidas",
              "codigo": "import matplotlib.pyplot as plt\nelongacion = [0.01, 0.02, 0.03, 0.04]\nfuerza = [0.5, 1.1, 1.4, 2.0]\nplt.scatter(elongacion, fuerza)\nplt.xlabel(\"Elongación (m)\")\nplt.ylabel(\"Fuerza (N)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Cuatro puntos de fuerza y elongación."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Dispersión"
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
            "id": "u6q3",
            "enunciado": "¿Qué herramienta representa pares de mediciones sin unirlos?",
            "opciones": [
              "plt.scatter()",
              "plt.hist()",
              "plt.bar()"
            ],
            "correcta": 0,
            "explicacion": "scatter muestra observaciones individuales (x,y)."
          }
        ]
      },
      {
        "id": "u6-3-barras",
        "titulo": "Comparar categorías",
        "etiqueta": "02 / COMPARAR CATEGORÍAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "plt.bar resulta útil para comparar magnitudes de categorías distintas. Una barra no indica que exista continuidad entre dos categorías."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-03-barras",
              "titulo": "Energía por sistema",
              "codigo": "import matplotlib.pyplot as plt\nsistemas = [\"A\", \"B\", \"C\"]\nenergias = [12, 9, 15]\nplt.bar(sistemas, energias)\nplt.ylabel(\"Energía (J)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Tres barras de energía."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Barras"
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
        "id": "u6-3-histograma",
        "titulo": "Distribuir frecuencias",
        "etiqueta": "03 / DISTRIBUIR FRECUENCIAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un histograma agrupa valores numéricos en intervalos llamados bins. Su altura refleja la frecuencia de observaciones en cada intervalo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-03-hist",
              "titulo": "Distribución de tiempos",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\ntiempos = np.array([1.9, 2.0, 2.1, 1.95, 2.05, 2.0, 1.98])\nplt.hist(tiempos, bins=4, edgecolor=\"black\")\nplt.xlabel(\"Periodo (s)\")\nplt.ylabel(\"Frecuencia\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Histograma de siete tiempos."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Histogramas"
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
        "id": "u6-3-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Utiliza el conjunto de mediciones 9.7, 9.8, 9.9, 9.8 y 10.0.",
              "Dibuja un histograma de tres intervalos.",
              "Etiqueta ambos ejes con sus unidades."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-03-reto",
              "titulo": "Reto: histograma de aceleraciones",
              "codigo": "import matplotlib.pyplot as plt\na = [9.7, 9.8, 9.9, 9.8, 10.0]\nplt.hist(a, bins=3, edgecolor=\"black\")\nplt.xlabel(\"Aceleración (m/s²)\")\nplt.ylabel(\"Frecuencia\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Histograma de aceleraciones."
              },
              "reto": true,
              "consigna": "Construye un histograma con tres intervalos y etiquetas para cinco mediciones de aceleración.",
              "pistas": [
                "Utiliza una lista a con las cinco mediciones.",
                "Dibuja plt.hist(a, bins=3).",
                "Añade xlabel, ylabel y show."
              ],
              "etiquetas": {
                "programacion": [
                  "Histogramas"
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
      }
    ],
    "ejemploPrincipal": "Análisis visual de mediciones",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-29-subgraficas",
    "unidadId": "unidad-6",
    "numero": "6.4",
    "modulo": "Visualización científica con Matplotlib",
    "titulo": "Subgráficas y mapas de color",
    "subtitulo": "Organiza varios resultados y visualiza funciones de dos variables.",
    "icono": "python-plot",
    "objetivos": [
      "Crear fig y ax con plt.subplots().",
      "Representar dos gráficas relacionadas.",
      "Construir un mapa de calor con imshow()."
    ],
    "secciones": [
      {
        "id": "u6-4-subplots",
        "titulo": "Dos paneles de una misma figura",
        "etiqueta": "01 / DOS PANELES DE UNA MISMA FIGURA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "plt.subplots devuelve una figura y uno o varios objetos axes. Trabajar con ax.plot permite controlar cada panel de forma independiente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-04-subplots",
              "titulo": "Posición y velocidad",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 5, 100)\nfig, ax = plt.subplots(2, 1, figsize=(6, 5))\nax[0].plot(t, 2*t + 1)\nax[0].set_ylabel(\"Posición (m)\")\nax[1].plot(t, np.full_like(t, 2.0))\nax[1].set_xlabel(\"Tiempo (s)\")\nax[1].set_ylabel(\"Velocidad (m/s)\")\nfig.tight_layout()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Dos subgráficas relacionadas."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Subgráficas"
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
            "id": "u6q4",
            "enunciado": "¿Qué devuelve plt.subplots(2, 1)?",
            "opciones": [
              "Dos figuras diferentes",
              "Una figura con dos ejes apilados",
              "Una tabla numérica"
            ],
            "correcta": 1,
            "explicacion": "Se crea una figura con dos paneles verticales."
          }
        ]
      },
      {
        "id": "u6-4-mapas",
        "titulo": "Visualizar un campo sobre una malla",
        "etiqueta": "02 / VISUALIZAR UN CAMPO SOBRE UNA MALLA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "imshow representa una matriz bidimensional como imagen de colores. extent indica los límites físicos y origin=\"lower\" coloca el primer renglón en la parte inferior."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-04-mapa",
              "titulo": "Mapa de un campo escalar",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(-2, 2, 80)\nX, Y = np.meshgrid(x, x)\nU = X**2 + Y**2\nplt.imshow(U, extent=[-2, 2, -2, 2], origin=\"lower\")\nplt.colorbar(label=\"U (u. a.)\")\nplt.xlabel(\"x\")\nplt.ylabel(\"y\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Mapa 2D con barra de color."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Mapas de color"
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
        "id": "u6-4-contornos",
        "titulo": "Curvas de nivel",
        "etiqueta": "03 / CURVAS DE NIVEL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "contour dibuja curvas para las que una función toma el mismo valor. Es una forma útil de visualizar geometría de campos escalares."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-04-contorno",
              "titulo": "Niveles de una función radial",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(-2, 2, 60)\nX, Y = np.meshgrid(x, x)\nU = X**2 + Y**2\ncontornos = plt.contour(X, Y, U, levels=6)\nplt.clabel(contornos)\nplt.xlabel(\"x\")\nplt.ylabel(\"y\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Curvas de nivel concéntricas."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Contornos"
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
        "id": "u6-4-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Genera t entre 0 y 4 s.",
              "Crea dos paneles en vertical.",
              "Representa x=t² en uno y v=2t en el otro con etiquetas."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-04-reto",
              "titulo": "Reto: dos paneles cinemáticos",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 4, 120)\nfig, ax = plt.subplots(2, 1)\nax[0].plot(t, t**2)\nax[0].set_ylabel(\"Posición (m)\")\nax[1].plot(t, 2*t)\nax[1].set_ylabel(\"Velocidad (m/s)\")\nax[1].set_xlabel(\"Tiempo (s)\")\nfig.tight_layout()\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Dos paneles cinemáticos."
              },
              "reto": true,
              "consigna": "Representa x=t² y v=2t entre 0 y 4 s en dos subgráficas verticales.",
              "pistas": [
                "Crea fig, ax = plt.subplots(2, 1).",
                "Usa ax[0].plot(...) y ax[1].plot(...).",
                "Etiqueta los ejes y termina con plt.show()."
              ],
              "etiquetas": {
                "programacion": [
                  "Subgráficas"
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
    "ejemploPrincipal": "Comparación en dos paneles",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-30-graficas-3d",
    "unidadId": "unidad-6",
    "numero": "6.5",
    "modulo": "Visualización científica con Matplotlib",
    "titulo": "Visualización 3D y exportación",
    "subtitulo": "Representa superficies y guarda figuras para informes científicos.",
    "icono": "python-plot",
    "objetivos": [
      "Crear un eje tridimensional.",
      "Dibujar una superficie mediante plot_surface().",
      "Guardar archivos PNG con savefig() y comprender dónde se almacenan."
    ],
    "secciones": [
      {
        "id": "u6-5-superficies",
        "titulo": "Una superficie tridimensional",
        "etiqueta": "01 / UNA SUPERFICIE TRIDIMENSIONAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para representar z=f(x,y) se utiliza un eje con projection=\"3d\". La superficie se genera a partir de matrices de coordenadas de NumPy."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-05-3d",
              "titulo": "Superficie parabólica",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(-2, 2, 40)\nX, Y = np.meshgrid(x, x)\nZ = X**2 + Y**2\nfig = plt.figure()\nax = fig.add_subplot(111, projection=\"3d\")\nax.plot_surface(X, Y, Z, cmap=\"viridis\")\nax.set_xlabel(\"x\")\nax.set_ylabel(\"y\")\nax.set_zlabel(\"Z (u. a.)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Superficie tridimensional."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Visualización 3D"
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
          },
          {
            "tipo": "pregunta",
            "id": "u6q5",
            "enunciado": "¿Qué opción crea un eje para dibujar una superficie 3D?",
            "opciones": [
              "projection=\"3d\"",
              "plt.hist()",
              "plt.legend()"
            ],
            "correcta": 0,
            "explicacion": "El argumento projection=\"3d\" prepara un eje tridimensional."
          }
        ]
      },
      {
        "id": "u6-5-trayectoria",
        "titulo": "Una curva en el espacio",
        "etiqueta": "02 / UNA CURVA EN EL ESPACIO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Además de superficies podemos representar trayectorias (x(t), y(t), z(t)) usando ax.plot con tres secuencias. Las dimensiones deben tener longitudes compatibles."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-05-helix",
              "titulo": "Trayectoria helicoidal",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 4*np.pi, 200)\nfig = plt.figure()\nax = fig.add_subplot(111, projection=\"3d\")\nax.plot(np.cos(t), np.sin(t), t/(2*np.pi))\nax.set_xlabel(\"x\")\nax.set_ylabel(\"y\")\nax.set_zlabel(\"z\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Trayectoria 3D helicoidal."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Visualización 3D"
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
            "tipo": "nota",
            "contenido": "Se trata de una trayectoria geométrica ilustrativa; no se afirma que describa un experimento determinado."
          }
        ]
      },
      {
        "id": "u6-5-guardar",
        "titulo": "Guardar una figura",
        "etiqueta": "03 / GUARDAR UNA FIGURA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "plt.savefig guarda una imagen en el directorio de trabajo del intérprete. En un entorno local aparecerá en la carpeta de ejecución; en Colab se guardará en su sistema de archivos de sesión."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-05-guardar",
              "titulo": "Guardar una figura como PNG",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.linspace(0, 3, 100)\nplt.plot(t, t**2)\nplt.xlabel(\"Tiempo (s)\")\nplt.ylabel(\"Posición (m)\")\nplt.savefig(\"posicion.png\", dpi=150, bbox_inches=\"tight\")\nplt.show()\nprint(\"Figura guardada: posicion.png\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Figura guardada: posicion.png"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Exportación de figuras"
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
            "tipo": "nota",
            "contenido": "La imagen se conserva en el sistema de archivos de la sesión de Python. En CodePhy su visualización aparece en el resultado; para obtener el archivo PNG en tu equipo usa Colab o VS Code. La descarga directa de PNG desde CodePhy se abordará en una ampliación del laboratorio."
          }
        ]
      },
      {
        "id": "u6-5-proyecto",
        "titulo": "Proyecto integrador",
        "etiqueta": "04 / PROYECTO INTEGRADOR",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Construye la malla x,y ∈ [-1,1].",
              "Evalúa Z = sin(πx)cos(πy).",
              "Representa la superficie en 3D con etiquetas y título."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u6-05-proyecto",
              "titulo": "Proyecto: superficie ondulatoria",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(-1, 1, 40)\nX, Y = np.meshgrid(x, x)\nZ = np.sin(np.pi*X) * np.cos(np.pi*Y)\nfig = plt.figure()\nax = fig.add_subplot(111, projection=\"3d\")\nax.plot_surface(X, Y, Z, cmap=\"plasma\")\nax.set_xlabel(\"x\")\nax.set_ylabel(\"y\")\nax.set_zlabel(\"Amplitud (u. a.)\")\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Superficie ondulatoria tridimensional."
              },
              "reto": true,
              "consigna": "Dibuja la superficie z=sin(πx)cos(πy) para x,y entre -1 y 1 con una malla de 40 puntos por eje.",
              "pistas": [
                "Utiliza np.linspace(-1, 1, 40) y np.meshgrid.",
                "Calcula Z = np.sin(np.pi*X) * np.cos(np.pi*Y).",
                "Prepara un eje 3D y usa ax.plot_surface(X, Y, Z)."
              ],
              "etiquetas": {
                "programacion": [
                  "Visualización 3D"
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
      }
    ],
    "ejemploPrincipal": "Superficies y exportación",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  }
];
