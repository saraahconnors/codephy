// Unidad 8. Programas de Python científico reproducibles en CodePhy, Colab y VS Code.
export const unidad8 = {
  "id": "unidad-8",
  "numero": 8,
  "titulo": "Estadística, incertidumbre y ajuste",
  "descripcion": "Resume mediciones, cuantifica su dispersión y ajusta modelos físicos a datos experimentales.",
  "objetivos": [
    "Calcular estadísticos descriptivos e interpretar distribuciones.",
    "Representar incertidumbres y barras de error.",
    "Ajustar modelos, estimar parámetros y examinar residuos."
  ],
  "conocimientosPrevios": "Unidad 7: NumPy, Matplotlib y manejo de archivos.",
  "icono": "python-stats",
  "lecciones": [
    "python-36-medidas-de-tendencia-central",
    "python-37-dispersion-y-distribuciones",
    "python-38-incertidumbre-y-propagacion",
    "python-39-regresion-y-ajuste-de-curvas",
    "python-40-residuos-y-calidad-del-ajuste"
  ]
};
export const leccionesUnidad8 = [
  {
    "id": "python-36-medidas-de-tendencia-central",
    "unidadId": "unidad-8",
    "numero": "8.1",
    "modulo": "Estadística, incertidumbre y ajuste",
    "titulo": "Medidas de tendencia central",
    "subtitulo": "Describe un conjunto de mediciones mediante resúmenes numéricos.",
    "icono": "python-stats",
    "objetivos": [
      "Calcular media, mediana y cuantiles.",
      "Reconocer sensibilidad a valores extremos.",
      "Presentar magnitudes con sus unidades."
    ],
    "secciones": [
      {
        "id": "u8-1-seccion-1",
        "titulo": "Media y mediana",
        "etiqueta": "01 / MEDIA Y MEDIANA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La media considera todos los valores y la mediana señala el valor central tras ordenarlos. Cuando hay valores extremos pueden separarse notablemente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-01-medidas",
              "titulo": "Periodos medidos",
              "codigo": "import numpy as np\nperiodos = np.array([1.9, 2.0, 2.1, 2.0, 2.0])\nprint(f'Media: {periodos.mean():.2f} s')\nprint(f'Mediana: {np.median(periodos):.2f} s')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Media: 2.00 s\nMediana: 2.00 s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "periodos medidos",
                  "estadística"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u8-01-medidas-pregunta",
            "enunciado": "¿Qué representa la mediana?",
            "opciones": [
              "El valor central de los datos ordenados",
              "La diferencia entre máximo y mínimo",
              "La suma de todos los datos"
            ],
            "correcta": 0,
            "explicacion": "La mediana divide el conjunto ordenado en dos mitades."
          }
        ]
      },
      {
        "id": "u8-1-seccion-2",
        "titulo": "Valores extremos",
        "etiqueta": "02 / VALORES EXTREMOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una medición extrema puede modificar mucho la media. Antes de retirarla conviene revisar la bitácora y el procedimiento experimental."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-01-extremo",
              "titulo": "Comparar dos resúmenes",
              "codigo": "import numpy as np\nx = np.array([2.0, 2.1, 2.0, 2.1, 4.5])\nprint(f'Media: {x.mean():.2f}')\nprint(f'Mediana: {np.median(x):.2f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Media: 2.54\nMediana: 2.10"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "comparar dos resúmenes",
                  "estadística"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-1-seccion-3",
        "titulo": "Cuartiles",
        "etiqueta": "03 / CUARTILES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Los cuantiles describen posiciones de una distribución y ayudan a detectar asimetrías o dispersión sin suponer una forma específica."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-01-cuantil",
              "titulo": "Cuartiles de lecturas",
              "codigo": "import numpy as np\nx = np.array([1,2,3,4,5,6,7,8,9])\nprint('Q1, Q2, Q3:', np.quantile(x,[.25,.5,.75]))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Q1, Q2, Q3: [3. 5. 7.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "cuartiles de lecturas",
                  "estadística"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-1-seccion-4",
        "titulo": "Practica: resumir lecturas",
        "etiqueta": "04 / PRACTICA: RESUMIR LECTURAS",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea el arreglo [10, 12, 11, 13, 14].",
              "Calcula la media y mediana.",
              "Muestra ambos valores con una cifra decimal."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-01-reto",
              "titulo": "Reto: resumen de mediciones",
              "codigo": "import numpy as np\nx = np.array([10,12,11,13,14])\nprint(f'Media: {x.mean():.1f}')\nprint(f'Mediana: {np.median(x):.1f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Media: 12.0\nMediana: 12.0"
              },
              "reto": true,
              "consigna": "Obtén la media y la mediana de cinco mediciones.",
              "pistas": [
                "Usa np.array para reunir los valores.",
                "El promedio se obtiene con np.mean.",
                "np.median devuelve la mediana."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: resumen de mediciones",
                  "estadística"
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
    "ejemploPrincipal": "Mediciones repetidas de un periodo",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-37-dispersion-y-distribuciones",
    "unidadId": "unidad-8",
    "numero": "8.2",
    "modulo": "Estadística, incertidumbre y ajuste",
    "titulo": "Dispersión y distribuciones",
    "subtitulo": "Distingue variación de datos e incertidumbre del promedio.",
    "icono": "python-stats",
    "objetivos": [
      "Calcular varianza y desviación estándar.",
      "Diferenciar dispersión muestral y error estándar.",
      "Visualizar una distribución mediante un histograma."
    ],
    "secciones": [
      {
        "id": "u8-2-seccion-1",
        "titulo": "Desviación estándar",
        "etiqueta": "01 / DESVIACIÓN ESTÁNDAR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La desviación estándar muestral estima la dispersión de observaciones respecto de la media. NumPy utiliza ddof=0 por defecto; ddof=1 calcula la varianza y desviación muestrales."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-02-disp",
              "titulo": "Dispersión de voltajes",
              "codigo": "import numpy as np\nv = np.array([5.0,5.1,4.9,5.0,5.0])\nprint(f'Desviación muestral: {np.std(v,ddof=1):.3f} V')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Desviación muestral: 0.071 V"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "dispersión de voltajes",
                  "estadística"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u8-02-disp-pregunta",
            "enunciado": "¿Qué hace ddof=1 al calcular std()?",
            "opciones": [
              "Utiliza n−1 en el denominador",
              "Multiplica los datos por 1",
              "Borra una medición"
            ],
            "correcta": 0,
            "explicacion": "Se usa la corrección habitual de la varianza muestral."
          }
        ]
      },
      {
        "id": "u8-2-seccion-2",
        "titulo": "Error estándar del promedio",
        "etiqueta": "02 / ERROR ESTÁNDAR DEL PROMEDIO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La desviación estándar caracteriza la dispersión de observaciones; el error estándar s/√n estima la variabilidad del promedio bajo supuestos de muestreo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-02-sem",
              "titulo": "Estimación del error estándar",
              "codigo": "import numpy as np\nx = np.array([9.7,9.8,9.9,9.8,9.8])\nsem = x.std(ddof=1)/np.sqrt(len(x))\nprint(f'Error estándar: {sem:.3f} m/s²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Error estándar: 0.032 m/s²"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Incertidumbre"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "estimación del error estándar",
                  "incertidumbre"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-2-seccion-3",
        "titulo": "Histograma",
        "etiqueta": "03 / HISTOGRAMA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El histograma agrupa observaciones en intervalos. Sus barras dependen de cómo elijas el número y los límites de los intervalos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-02-hist",
              "titulo": "Distribución de mediciones",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.array([2.0,2.1,2.0,1.9,2.2,2.0,2.1,1.9])\nplt.hist(x, bins=4, edgecolor='black')\nplt.xlabel('Periodo (s)')\nplt.ylabel('Frecuencia')\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Histograma de ocho periodos."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Histogramas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "distribución de mediciones",
                  "histogramas"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-2-seccion-4",
        "titulo": "Practica: variación de una muestra",
        "etiqueta": "04 / PRACTICA: VARIACIÓN DE UNA MUESTRA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Usa [1,2,3,4,5].",
              "Calcula la desviación estándar muestral.",
              "Muestra tres decimales."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-02-reto",
              "titulo": "Reto: desviación muestral",
              "codigo": "import numpy as np\nx = np.array([1,2,3,4,5])\nprint(f'Desviación: {np.std(x,ddof=1):.3f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Desviación: 1.581"
              },
              "reto": true,
              "consigna": "Calcula la desviación estándar muestral de [1,2,3,4,5].",
              "pistas": [
                "Construye un array.",
                "np.std admite el parámetro ddof.",
                "Usa ddof=1 y :.3f."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Estadística"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: desviación muestral",
                  "estadística"
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
    "ejemploPrincipal": "Fluctuaciones de una señal",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-38-incertidumbre-y-propagacion",
    "unidadId": "unidad-8",
    "numero": "8.3",
    "modulo": "Estadística, incertidumbre y ajuste",
    "titulo": "Incertidumbre y propagación",
    "subtitulo": "Relaciona la incertidumbre de una medición con la de una magnitud calculada.",
    "icono": "python-stats",
    "objetivos": [
      "Distinguir variabilidad experimental y resolución instrumental.",
      "Propagar incertidumbres en expresiones sencillas.",
      "Documentar las hipótesis del cálculo."
    ],
    "secciones": [
      {
        "id": "u8-3-seccion-1",
        "titulo": "Producto de dos medidas",
        "etiqueta": "01 / PRODUCTO DE DOS MEDIDAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Si A=ab y las incertidumbres de a y b son pequeñas e independientes, la aproximación de primer orden establece una incertidumbre relativa cuadrática."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-03-area",
              "titulo": "Incertidumbre de un área",
              "codigo": "import numpy as np\na, da = 2.00, 0.02  # m\nb, db = 3.00, 0.03  # m\nA = a*b\ndA = A*np.sqrt((da/a)**2+(db/b)**2)\nprint(f'Área: {A:.2f} ± {dA:.2f} m²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Área: 6.00 ± 0.08 m²"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Incertidumbre"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "incertidumbre de un área",
                  "incertidumbre"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u8-03-area-pregunta",
            "enunciado": "Si las incertidumbres son independientes, ¿cómo se combinan en un producto?",
            "opciones": [
              "Sumando en cuadratura las relativas",
              "Sumando las áreas",
              "Multiplicando sus cuadrados sin raíz"
            ],
            "correcta": 0,
            "explicacion": "Se usa la raíz de la suma de los cuadrados de las incertidumbres relativas."
          }
        ]
      },
      {
        "id": "u8-3-seccion-2",
        "titulo": "Magnitud elevada a una potencia",
        "etiqueta": "02 / MAGNITUD ELEVADA A UNA POTENCIA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para y=x^p, la aproximación de primer orden da |dy/y| ≈ |p| dx/|x|. Es válida para incertidumbres pequeñas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-03-potencia",
              "titulo": "Área de un círculo",
              "codigo": "import numpy as np\nr, dr = 0.50, 0.01\nA = np.pi*r**2\ndA = A*2*dr/r\nprint(f'Área: {A:.3f} ± {dA:.3f} m²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Área: 0.785 ± 0.031 m²"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Incertidumbre"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "área de un círculo",
                  "incertidumbre"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-3-seccion-3",
        "titulo": "Barras de error",
        "etiqueta": "03 / BARRAS DE ERROR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La función plt.errorbar permite representar un valor medido y su incertidumbre. La gráfica debe especificar qué representan las barras."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-03-barras",
              "titulo": "Lecturas con incertidumbre",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt = np.array([0,1,2,3])\nx = np.array([0.1,1.1,2.0,3.2])\nplt.errorbar(t,x,yerr=0.15,fmt='o',capsize=4)\nplt.xlabel('Tiempo (s)')\nplt.ylabel('Posición (m)')\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Gráfica con barras de incertidumbre."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Barras de error"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "lecturas con incertidumbre",
                  "barras de error"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-3-seccion-4",
        "titulo": "Practica: incertidumbre de una velocidad",
        "etiqueta": "04 / PRACTICA: INCERTIDUMBRE DE UNA VELOCIDAD",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Calcula v=d/t con d=10±0.1 m y t=2±0.02 s.",
              "Supón incertidumbres independientes y pequeñas.",
              "Imprime velocidad e incertidumbre con dos decimales."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-03-reto",
              "titulo": "Reto: velocidad e incertidumbre",
              "codigo": "import numpy as np\nd, dd = 10., 0.1\nt, dt = 2., 0.02\nv = d/t\ndv = v*np.sqrt((dd/d)**2+(dt/t)**2)\nprint(f'Velocidad: {v:.2f} ± {dv:.2f} m/s')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Velocidad: 5.00 ± 0.07 m/s"
              },
              "reto": true,
              "consigna": "Propaga la incertidumbre de v=d/t con las mediciones indicadas.",
              "pistas": [
                "Calcula v = d/t.",
                "La incertidumbre relativa usa la raíz de (dd/d)²+(dt/t)².",
                "Multiplica la incertidumbre relativa por v."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Incertidumbre"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: velocidad e incertidumbre",
                  "incertidumbre"
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
    "ejemploPrincipal": "Área de una placa medida",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-39-regresion-y-ajuste-de-curvas",
    "unidadId": "unidad-8",
    "numero": "8.4",
    "modulo": "Estadística, incertidumbre y ajuste",
    "titulo": "Regresión y ajuste de curvas",
    "subtitulo": "Estima parámetros de un modelo físico a partir de observaciones.",
    "icono": "python-stats",
    "objetivos": [
      "Ajustar una recta con mínimos cuadrados.",
      "Reconocer pendiente y ordenada al origen.",
      "Introducir ajustes no lineales."
    ],
    "secciones": [
      {
        "id": "u8-4-seccion-1",
        "titulo": "Ajuste lineal",
        "etiqueta": "01 / AJUSTE LINEAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para datos que siguen aproximadamente y=mx+b, np.polyfit(x,y,1) estima la pendiente y la ordenada al origen por mínimos cuadrados ordinarios."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-04-lineal",
              "titulo": "Estimar una pendiente",
              "codigo": "import numpy as np\nx = np.array([0,1,2,3])\ny = np.array([1,3,5,7])\nm,b = np.polyfit(x,y,1)\nprint(f'Pendiente: {m:.2f}; Intersección: {b:.2f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Pendiente: 2.00; Intersección: 1.00"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Ajuste lineal"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "estimar una pendiente",
                  "ajuste lineal"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u8-04-lineal-pregunta",
            "enunciado": "¿Qué representa m en y=mx+b?",
            "opciones": [
              "La pendiente",
              "El promedio de y",
              "El número de puntos"
            ],
            "correcta": 0,
            "explicacion": "m indica cómo cambia y respecto a x."
          }
        ]
      },
      {
        "id": "u8-4-seccion-2",
        "titulo": "Constante de un resorte",
        "etiqueta": "02 / CONSTANTE DE UN RESORTE",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En la región elástica ideal, la ley de Hooke relaciona fuerza y elongación mediante F=kx. La pendiente de F frente a x estima k."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-04-hooke",
              "titulo": "Ajustar datos de Hooke",
              "codigo": "import numpy as np\nelong = np.array([0.02,0.04,0.06,0.08,0.10,0.12])\nfuerza = np.array([1.,2.,3.,4.,5.,6.])\nk,b = np.polyfit(elong,fuerza,1)\nprint(f'Constante elástica: {k:.1f} N/m')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Constante elástica: 50.0 N/m"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Regresión"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "ajustar datos de hooke",
                  "regresión"
                ],
                "galeria": true,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-4-seccion-3",
        "titulo": "Ajuste no lineal con SciPy",
        "etiqueta": "03 / AJUSTE NO LINEAL CON SCIPY",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "scipy.optimize.curve_fit estima parámetros de una función modelo. Deben examinarse la forma de la curva y la plausibilidad física de los parámetros."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-04-nolineal",
              "titulo": "Estimar una constante de decaimiento",
              "codigo": "import numpy as np\nfrom scipy.optimize import curve_fit\ndef modelo(t,A,lam):\n    return A*np.exp(-lam*t)\nt = np.array([0.,1.,2.,3.])\ny = 10*np.exp(-0.3*t)\ncoef,_ = curve_fit(modelo,t,y,p0=(9,0.2))\nprint(f'Lambda: {coef[1]:.2f} 1/s')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Lambda: 0.30 1/s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Ajuste no lineal"
                ],
                "fisica": [
                  "Física nuclear"
                ],
                "palabrasClave": [
                  "estimar una constante de decaimiento",
                  "ajuste no lineal"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-4-seccion-4",
        "titulo": "Practica: pendiente de Hooke",
        "etiqueta": "04 / PRACTICA: PENDIENTE DE HOOKE",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Utiliza elongaciones [0.01,0.02,0.03] m.",
              "Asocia fuerzas [0.5,1.0,1.5] N.",
              "Calcula k a partir de una recta."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-04-reto",
              "titulo": "Reto: encontrar k",
              "codigo": "import numpy as np\nx = np.array([.01,.02,.03])\nF = np.array([.5,1.,1.5])\nk,b = np.polyfit(x,F,1)\nprint(f'k = {k:.1f} N/m')",
              "resultado": {
                "tipo": "texto",
                "contenido": "k = 50.0 N/m"
              },
              "reto": true,
              "consigna": "Encuentra la constante elástica mediante el ajuste lineal F=kx+b.",
              "pistas": [
                "Crea arreglos para x y F.",
                "Usa np.polyfit(x,F,1).",
                "La pendiente es la constante k."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Regresión"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "reto: encontrar k",
                  "regresión"
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
    "ejemploPrincipal": "Constante elástica de un resorte",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-40-residuos-y-calidad-del-ajuste",
    "unidadId": "unidad-8",
    "numero": "8.5",
    "modulo": "Estadística, incertidumbre y ajuste",
    "titulo": "Residuos y calidad del ajuste",
    "subtitulo": "Examina las diferencias entre mediciones y modelo sin ocultar las limitaciones.",
    "icono": "python-stats",
    "objetivos": [
      "Calcular residuos y error cuadrático medio.",
      "Representar residuos para detectar patrones.",
      "Interpretar con cautela R²."
    ],
    "secciones": [
      {
        "id": "u8-5-seccion-1",
        "titulo": "Residuos",
        "etiqueta": "01 / RESIDUOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El residuo de cada observación es y_obs−y_modelo. Un patrón sistemático en los residuos puede revelar un modelo incompleto."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-05-residuos",
              "titulo": "Residuos de una recta",
              "codigo": "import numpy as np\nx=np.array([0,1,2,3])\ny=np.array([1.0,2.1,2.9,4.0])\ny_modelo=1+x\nprint(np.round(y-y_modelo,2))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[ 0.   0.1 -0.1  0. ]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Residuos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "residuos de una recta",
                  "residuos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u8-05-residuos-pregunta",
            "enunciado": "¿Cuál es el residuo si y_obs=2.1 e y_modelo=2.0?",
            "opciones": [
              "0.1",
              "4.1",
              "-0.1"
            ],
            "correcta": 0,
            "explicacion": "El residuo es observado menos predicho."
          }
        ]
      },
      {
        "id": "u8-5-seccion-2",
        "titulo": "Error cuadrático medio",
        "etiqueta": "02 / ERROR CUADRÁTICO MEDIO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La raíz del promedio de residuos al cuadrado, RMSE, resume la magnitud típica del error de ajuste en las mismas unidades de y."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-05-rmse",
              "titulo": "RMSE de una calibración",
              "codigo": "import numpy as np\nr=np.array([.1,-.1,.2,-.2])\nprint(f'RMSE: {np.sqrt(np.mean(r**2)):.3f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "RMSE: 0.158"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Residuos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "rmse de una calibración",
                  "residuos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-5-seccion-3",
        "titulo": "Gráfica de residuos",
        "etiqueta": "03 / GRÁFICA DE RESIDUOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El gráfico de residuos frente a x ayuda a detectar curvatura, dispersión creciente o tendencias; que parezcan aleatorios no garantiza por sí solo un modelo correcto."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-05-plot",
              "titulo": "Inspeccionar un ajuste",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nx=np.array([0,1,2,3,4])\ny=np.array([1.1,2.9,5.0,7.2,8.8])\nm,b=np.polyfit(x,y,1)\nplt.scatter(x,y-(m*x+b))\nplt.axhline(0,color='black',linestyle='--')\nplt.xlabel('Tiempo (s)')\nplt.ylabel('Residuo (u. a.)')\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Gráfica de residuos."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Residuos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "inspeccionar un ajuste",
                  "residuos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u8-5-seccion-4",
        "titulo": "Proyecto: evaluar un modelo",
        "etiqueta": "04 / PROYECTO: EVALUAR UN MODELO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Construye y_obs=[1.1, 1.9, 3.2] y y_mod=[1,2,3].",
              "Calcula los residuos y el RMSE.",
              "Presenta el RMSE con tres decimales."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u8-05-reto",
              "titulo": "Reto: calidad de predicción",
              "codigo": "import numpy as np\ny=np.array([1.1,1.9,3.2])\np=np.array([1.,2.,3.])\nprint(f'RMSE: {np.sqrt(np.mean((y-p)**2)):.3f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "RMSE: 0.141"
              },
              "reto": true,
              "consigna": "Calcula el RMSE de tres mediciones frente a un modelo.",
              "pistas": [
                "Resta las predicciones a las observaciones.",
                "Eleva al cuadrado, promedia y toma la raíz.",
                "np.sqrt y np.mean resuelven el cálculo."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Residuos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: calidad de predicción",
                  "residuos"
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
    "ejemploPrincipal": "Validación de una calibración",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  }
];
