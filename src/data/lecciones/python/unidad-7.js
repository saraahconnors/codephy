// Unidad 7. Programas de Python científico reproducibles en CodePhy, Colab y VS Code.
export const unidad7 = {
  "id": "unidad-7",
  "numero": 7,
  "titulo": "Archivos y datos experimentales",
  "descripcion": "Organiza archivos, importa mediciones y prepara datos reproducibles para su análisis científico.",
  "objetivos": [
    "Identificar el directorio de trabajo y las rutas relativas.",
    "Leer, validar y exportar archivos CSV con Python y NumPy.",
    "Utilizar DataFrames de Pandas para explorar y limpiar mediciones."
  ],
  "conocimientosPrevios": "Unidades 1–6: funciones, NumPy y representación de datos.",
  "icono": "python-files",
  "lecciones": [
    "python-31-archivos-y-rutas-de-trabajo",
    "python-32-leer-y-escribir-archivos-csv",
    "python-33-introduccion-a-pandas",
    "python-34-limpieza-y-seleccion-de-datos",
    "python-35-proyecto-datos-de-laboratorio"
  ]
};
export const leccionesUnidad7 = [
  {
    "id": "python-31-archivos-y-rutas-de-trabajo",
    "unidadId": "unidad-7",
    "numero": "7.1",
    "modulo": "Archivos y datos experimentales",
    "titulo": "Archivos y rutas de trabajo",
    "subtitulo": "Comprende dónde guarda y busca archivos Python y qué significa una ruta relativa.",
    "icono": "python-files",
    "objetivos": [
      "Reconocer la carpeta actual de ejecución.",
      "Crear, leer y cerrar archivos con with.",
      "Guardar resultados con un nombre de archivo claro."
    ],
    "secciones": [
      {
        "id": "u7-1-seccion-1",
        "titulo": "Directorio de trabajo",
        "etiqueta": "01 / DIRECTORIO DE TRABAJO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Las rutas relativas se interpretan desde el directorio de trabajo actual. En Colab los archivos pueden desaparecer al finalizar la sesión; en VS Code dependen de la carpeta desde la cual ejecutes el programa. En CodePhy pertenecen al entorno temporal del navegador."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-01-ruta",
              "titulo": "¿Dónde se ejecuta Python?",
              "codigo": "from pathlib import Path\nprint('Carpeta actual:', Path.cwd())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Se muestra la ruta del directorio de trabajo actual."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Archivos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "¿dónde se ejecuta python?",
                  "archivos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u7-01-ruta-pregunta",
            "enunciado": "¿Qué muestra Path.cwd()?",
            "opciones": [
              "El directorio actual",
              "Un archivo CSV",
              "El tamaño de una matriz"
            ],
            "correcta": 0,
            "explicacion": "cwd significa current working directory."
          }
        ]
      },
      {
        "id": "u7-1-seccion-2",
        "titulo": "Escribir mediciones",
        "etiqueta": "02 / ESCRIBIR MEDICIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El bloque with cierra el archivo al terminar. El modo w sobrescribe cualquier archivo existente con el mismo nombre; úsalo con cuidado."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-01-escribir",
              "titulo": "Crear una bitácora",
              "codigo": "with open('bitacora.txt', 'w', encoding='utf-8') as f:\n    f.write('Temperatura: 23.5 °C\\n')\n    f.write('Presión: 101325 Pa\\n')\nprint('Bitácora creada')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Bitácora creada"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Archivos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "crear una bitácora",
                  "archivos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-1-seccion-3",
        "titulo": "Leer el archivo",
        "etiqueta": "03 / LEER EL ARCHIVO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El modo r permite leer un archivo existente. Si no existe, Python muestra FileNotFoundError; es una señal útil para revisar la ruta y el nombre."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-01-leer",
              "titulo": "Leer una bitácora",
              "codigo": "from pathlib import Path\nruta = Path('lecturas.txt')\nruta.write_text('Longitud: 1.25 m\\n', encoding='utf-8')\nprint(ruta.read_text(encoding='utf-8').strip())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Longitud: 1.25 m"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Archivos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "leer una bitácora",
                  "archivos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-1-seccion-4",
        "titulo": "Practica: guardar observaciones",
        "etiqueta": "04 / PRACTICA: GUARDAR OBSERVACIONES",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea un archivo observacion.txt.",
              "Guarda un valor de masa con su unidad.",
              "Lee el archivo y muestra su contenido."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-01-reto",
              "titulo": "Reto: observación de laboratorio",
              "codigo": "from pathlib import Path\nruta = Path('observacion.txt')\nruta.write_text('Masa: 0.35 kg\\n', encoding='utf-8')\nprint(ruta.read_text(encoding='utf-8').strip())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Masa: 0.35 kg"
              },
              "reto": true,
              "consigna": "Escribe, guarda y vuelve a leer una observación de masa de 0.35 kg.",
              "pistas": [
                "Usa Path de pathlib.",
                "write_text crea o sobrescribe un texto.",
                "read_text recupera el contenido guardado."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Archivos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: observación de laboratorio",
                  "archivos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Bitácora de mediciones",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-32-leer-y-escribir-archivos-csv",
    "unidadId": "unidad-7",
    "numero": "7.2",
    "modulo": "Archivos y datos experimentales",
    "titulo": "Leer y escribir archivos CSV",
    "subtitulo": "Importa un conjunto de datos de gravedad y crea una tabla procesada.",
    "icono": "python-files",
    "objetivos": [
      "Descargar y cargar datos antes de ejecutar.",
      "Reconocer encabezados, filas y separadores.",
      "Calcular un resultado a partir de columnas numéricas."
    ],
    "secciones": [
      {
        "id": "u7-2-seccion-1",
        "titulo": "Preparación del archivo",
        "etiqueta": "01 / PREPARACIÓN DEL ARCHIVO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Descarga mediciones_gravedad.csv y colócalo en tu carpeta de trabajo. En Colab puedes subirlo desde el panel de archivos; en CodePhy selecciona el archivo en el control del ejemplo. El código solo se ejecutará cuando el recurso requerido esté disponible."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-02-csv",
              "titulo": "Media de mediciones con NumPy",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\ng = datos[:, 1]\nprint(f'Mediciones: {g.size}')\nprint(f'Promedio: {np.mean(g):.3f} m/s²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Mediciones: 6\nPromedio: 9.807 m/s²"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "media de mediciones con numpy",
                  "csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u7-02-csv-pregunta",
            "enunciado": "¿Por qué usamos skiprows=1?",
            "opciones": [
              "Para ignorar el encabezado",
              "Para leer una única fila",
              "Para ordenar los datos"
            ],
            "correcta": 0,
            "explicacion": "La primera fila contiene nombres, no números."
          }
        ]
      },
      {
        "id": "u7-2-seccion-2",
        "titulo": "Interpretar columnas",
        "etiqueta": "02 / INTERPRETAR COLUMNAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La notación datos[:, 0] toma todos los tiempos y datos[:, 1] toma todas las aceleraciones. Es importante conocer qué representa cada columna antes de calcular."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-02-columnas",
              "titulo": "Valores de aceleración",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\nprint('Primera aceleración:', datos[0, 1], 'm/s²')\nprint('Último tiempo:', datos[-1, 0], 's')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Primera aceleración: 9.79 m/s²\nÚltimo tiempo: 5.0 s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "valores de aceleración",
                  "csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-2-seccion-3",
        "titulo": "Exportar un CSV",
        "etiqueta": "03 / EXPORTAR UN CSV",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "np.savetxt genera un archivo numérico. En CodePhy se ofrecerá para descargar el archivo generado; fuera del navegador quedará en el directorio de ejecución."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-02-exportar",
              "titulo": "Crear resultados procesados",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\naceleraciones = datos[:, 1]\nnormalizadas = aceleraciones - aceleraciones.mean()\nnp.savetxt('desviaciones.csv', normalizadas, delimiter=',', header='desviacion_m_s2', comments='')\nprint('Archivo generado: desviaciones.csv')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Archivo generado: desviaciones.csv"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Exportación CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "crear resultados procesados",
                  "exportación csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-2-seccion-4",
        "titulo": "Practica: seleccionar mediciones",
        "etiqueta": "04 / PRACTICA: SELECCIONAR MEDICIONES",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Carga mediciones_gravedad.csv.",
              "Cuenta cuántas aceleraciones son superiores a 9.81 m/s².",
              "Imprime el total con su significado."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-02-reto",
              "titulo": "Reto: recuento de mediciones",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\nconteo = np.count_nonzero(datos[:, 1] > 9.81)\nprint('Mediciones mayores a 9.81:', conteo)",
              "resultado": {
                "tipo": "texto",
                "contenido": "Mediciones mayores a 9.81: 2"
              },
              "reto": true,
              "consigna": "Cuenta las aceleraciones mayores que 9.81 m/s² en el archivo descargado.",
              "pistas": [
                "Carga el CSV con np.loadtxt.",
                "Selecciona la columna de aceleraciones.",
                "Utiliza np.count_nonzero con una comparación."
              ],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: recuento de mediciones",
                  "csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Mediciones de aceleración gravitacional",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-33-introduccion-a-pandas",
    "unidadId": "unidad-7",
    "numero": "7.3",
    "modulo": "Archivos y datos experimentales",
    "titulo": "Introducción a Pandas",
    "subtitulo": "Explora datos experimentales con tablas etiquetadas.",
    "icono": "python-files",
    "objetivos": [
      "Importar pandas como pd.",
      "Interpretar DataFrames y columnas.",
      "Calcular agregados a partir de las mediciones."
    ],
    "secciones": [
      {
        "id": "u7-3-seccion-1",
        "titulo": "Qué es un DataFrame",
        "etiqueta": "01 / QUÉ ES UN DATAFRAME",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Pandas representa datos tabulares mediante DataFrames con nombres de columnas. Es especialmente práctico cuando una tabla reúne diferentes magnitudes."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-03-pandas",
              "titulo": "Crear una tabla de calibración",
              "codigo": "import pandas as pd\ntabla = pd.DataFrame({'fuerza_N':[1.0,2.0,3.0], 'elongacion_m':[0.02,0.04,0.06]})\nprint('Filas:', len(tabla))\nprint('Columnas:', list(tabla.columns))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Filas: 3\nColumnas: ['fuerza_N', 'elongacion_m']"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Pandas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "crear una tabla de calibración",
                  "pandas"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u7-03-pandas-pregunta",
            "enunciado": "¿Cómo recuperas una columna llamada fuerza_N?",
            "opciones": [
              "tabla[\"fuerza_N\"]",
              "tabla(0)",
              "tabla.fila"
            ],
            "correcta": 0,
            "explicacion": "La notación de corchetes selecciona una columna por su nombre."
          }
        ]
      },
      {
        "id": "u7-3-seccion-2",
        "titulo": "Importar una tabla real",
        "etiqueta": "02 / IMPORTAR UNA TABLA REAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El archivo resorte.csv contiene fuerza aplicada y elongación. Descárgalo y cárgalo antes de ejecutar. El archivo debe mantener exactamente sus nombres de columnas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-03-read",
              "titulo": "Lectura del experimento",
              "codigo": "import pandas as pd\ntabla = pd.read_csv('resorte.csv')\nprint('Mediciones:', len(tabla))\nprint('Fuerza máxima:', tabla['fuerza_N'].max(), 'N')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Mediciones: 6\nFuerza máxima: 6 N"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "resorte.csv",
                  "columnas": [
                    "fuerza_N",
                    "elongacion_m"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Pandas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "lectura del experimento",
                  "pandas"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-3-seccion-3",
        "titulo": "Seleccionar una columna",
        "etiqueta": "03 / SELECCIONAR UNA COLUMNA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una serie es una columna de un DataFrame. Podemos calcular un promedio sin reconstruir manualmente la tabla."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-03-col",
              "titulo": "Promedio de elongaciones",
              "codigo": "import pandas as pd\ntabla = pd.read_csv('resorte.csv')\nprint(f\"Elongación media: {tabla['elongacion_m'].mean():.3f} m\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Elongación media: 0.070 m"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "resorte.csv",
                  "columnas": [
                    "fuerza_N",
                    "elongacion_m"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Pandas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "promedio de elongaciones",
                  "pandas"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-3-seccion-4",
        "titulo": "Practica: datos etiquetados",
        "etiqueta": "04 / PRACTICA: DATOS ETIQUETADOS",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Carga el archivo resorte.csv.",
              "Selecciona los datos de fuerza.",
              "Calcula la fuerza promedio y muéstrala con una cifra decimal."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-03-reto",
              "titulo": "Reto: fuerza media",
              "codigo": "import pandas as pd\ntabla = pd.read_csv('resorte.csv')\nprint(f\"Fuerza media: {tabla['fuerza_N'].mean():.1f} N\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Fuerza media: 3.5 N"
              },
              "reto": true,
              "consigna": "Obtén la media de la columna fuerza_N mediante Pandas.",
              "pistas": [
                "Importa pandas como pd.",
                "Usa pd.read_csv para crear la tabla.",
                "Selecciona la columna y llama al método mean()."
              ],
              "archivosRequeridos": [
                {
                  "nombre": "resorte.csv",
                  "columnas": [
                    "fuerza_N",
                    "elongacion_m"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Pandas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: fuerza media",
                  "pandas"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Calibración de un resorte",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-34-limpieza-y-seleccion-de-datos",
    "unidadId": "unidad-7",
    "numero": "7.4",
    "modulo": "Archivos y datos experimentales",
    "titulo": "Limpieza y selección de datos",
    "subtitulo": "Identifica valores faltantes y aplica filtros a una tabla experimental.",
    "icono": "python-files",
    "objetivos": [
      "Reconocer datos faltantes.",
      "Filtrar filas mediante condiciones.",
      "Trabajar con copias de tablas limpias."
    ],
    "secciones": [
      {
        "id": "u7-4-seccion-1",
        "titulo": "Detectar datos incompletos",
        "etiqueta": "01 / DETECTAR DATOS INCOMPLETOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En un experimento puede faltar una lectura. Pandas representa los valores ausentes con NaN; antes de calcular hay que decidir cómo tratarlos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-04-nulos",
              "titulo": "Contar lecturas faltantes",
              "codigo": "import pandas as pd\ntabla = pd.DataFrame({'temperatura_C':[20.0, None, 22.5, None, 21.0]})\nprint('Lecturas faltantes:', tabla['temperatura_C'].isna().sum())",
              "resultado": {
                "tipo": "texto",
                "contenido": "Lecturas faltantes: 2"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Limpieza de datos"
                ],
                "fisica": [
                  "Termodinámica"
                ],
                "palabrasClave": [
                  "contar lecturas faltantes",
                  "limpieza de datos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u7-04-nulos-pregunta",
            "enunciado": "¿Qué devuelve isna()?",
            "opciones": [
              "Una máscara de valores faltantes",
              "Las filas ordenadas",
              "Un histograma"
            ],
            "correcta": 0,
            "explicacion": "isna identifica las entradas ausentes."
          }
        ]
      },
      {
        "id": "u7-4-seccion-2",
        "titulo": "Eliminar registros incompletos",
        "etiqueta": "02 / ELIMINAR REGISTROS INCOMPLETOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "dropna elimina filas que contienen valores ausentes en la columna indicada. Antes de eliminar datos reales, documenta cuántos registros se descartaron."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-04-drop",
              "titulo": "Media de lecturas válidas",
              "codigo": "import pandas as pd\ntabla = pd.DataFrame({'temp_C':[20.0,None,22.0,24.0]})\nvalidas = tabla.dropna(subset=['temp_C'])\nprint('Lecturas válidas:', len(validas))\nprint(f\"Media: {validas['temp_C'].mean():.1f} °C\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Lecturas válidas: 3\nMedia: 22.0 °C"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Limpieza de datos"
                ],
                "fisica": [
                  "Termodinámica"
                ],
                "palabrasClave": [
                  "media de lecturas válidas",
                  "limpieza de datos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-4-seccion-3",
        "titulo": "Filtrar intervalos",
        "etiqueta": "03 / FILTRAR INTERVALOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una máscara selecciona filas que cumplen una condición. No confundas un dato atípico con un error: los criterios de filtrado deben justificarse físicamente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-04-filtro",
              "titulo": "Lecturas en intervalo",
              "codigo": "import pandas as pd\ntabla = pd.DataFrame({'voltaje_V':[1.2,4.0,2.5,8.1]})\nvalidas = tabla[(tabla['voltaje_V'] >= 1.0) & (tabla['voltaje_V'] <= 5.0)]\nprint('Lecturas conservadas:', len(validas))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Lecturas conservadas: 3"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Filtros"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "lecturas en intervalo",
                  "filtros"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-4-seccion-4",
        "titulo": "Practica: limpiar lecturas",
        "etiqueta": "04 / PRACTICA: LIMPIAR LECTURAS",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea un DataFrame con mediciones 4, 5, None y 6.",
              "Elimina la lectura faltante.",
              "Calcula el promedio de las tres observaciones válidas."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-04-reto",
              "titulo": "Reto: media sin faltantes",
              "codigo": "import pandas as pd\ntabla = pd.DataFrame({'mediciones':[4.0,5.0,None,6.0]})\nvalidas = tabla.dropna()\nprint(f\"Media válida: {validas['mediciones'].mean():.1f}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Media válida: 5.0"
              },
              "reto": true,
              "consigna": "Calcula el promedio de [4, 5, None, 6] ignorando la lectura ausente.",
              "pistas": [
                "Construye un pd.DataFrame.",
                "Aplica dropna() para retirar el registro vacío.",
                "Calcula mean() sobre la columna restante."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Limpieza de datos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "reto: media sin faltantes",
                  "limpieza de datos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Temperaturas experimentales",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-35-proyecto-datos-de-laboratorio",
    "unidadId": "unidad-7",
    "numero": "7.5",
    "modulo": "Archivos y datos experimentales",
    "titulo": "Proyecto: datos de laboratorio",
    "subtitulo": "Procesa un conjunto de mediciones y documenta su salida.",
    "icono": "python-files",
    "objetivos": [
      "Reutilizar datos importados en varios cálculos.",
      "Crear una gráfica a partir de archivos.",
      "Exportar una tabla procesada."
    ],
    "secciones": [
      {
        "id": "u7-5-seccion-1",
        "titulo": "Lectura y representación",
        "etiqueta": "01 / LECTURA Y REPRESENTACIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un análisis reproducible comienza identificando qué archivo se utilizó, las unidades de cada variable y las operaciones aplicadas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-05-grafica",
              "titulo": "Gráfica de la gravedad medida",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\nplt.plot(datos[:, 0], datos[:, 1], 'o-')\nplt.xlabel('Tiempo (s)')\nplt.ylabel('Aceleración (m/s²)')\nplt.grid(True)\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Gráfica de seis mediciones."
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Visualización de datos"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "gráfica de la gravedad medida",
                  "visualización de datos"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u7-05-grafica-pregunta",
            "enunciado": "¿Qué representa datos[:, 0]?",
            "opciones": [
              "Los tiempos",
              "La aceleración",
              "El encabezado"
            ],
            "correcta": 0,
            "explicacion": "La primera columna almacena el tiempo."
          }
        ]
      },
      {
        "id": "u7-5-seccion-2",
        "titulo": "Comparación con una referencia",
        "etiqueta": "02 / COMPARACIÓN CON UNA REFERENCIA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un valor de referencia puede ayudar a contextualizar mediciones, pero por sí solo no prueba que un instrumento esté calibrado."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-05-desvio",
              "titulo": "Desviación respecto a una referencia",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\nmedia = datos[:, 1].mean()\nprint(f'Diferencia respecto a 9.81: {media-9.81:.3f} m/s²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Diferencia respecto a 9.81: -0.003 m/s²"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Análisis CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "desviación respecto a una referencia",
                  "análisis csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-5-seccion-3",
        "titulo": "Tabla resumida",
        "etiqueta": "03 / TABLA RESUMIDA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una tabla procesada puede conservarse en un CSV diferente del archivo original. Mantener ambos evita perder las observaciones iniciales."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-05-resumen",
              "titulo": "Guardar un resumen",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\nmedia = datos[:, 1].mean()\nnp.savetxt('resumen_gravedad.csv', [[len(datos), media]], delimiter=',', header='n,media_m_s2', comments='', fmt='%.4f')\nprint('Resumen generado')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Resumen generado"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Exportación CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "guardar un resumen",
                  "exportación csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      },
      {
        "id": "u7-5-seccion-4",
        "titulo": "Proyecto: estudiar mediciones",
        "etiqueta": "04 / PROYECTO: ESTUDIAR MEDICIONES",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Descarga y carga mediciones_gravedad.csv.",
              "Calcula la media de las aceleraciones y la diferencia respecto a 9.81.",
              "Muestra ambas cantidades con tres decimales."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u7-05-reto",
              "titulo": "Proyecto: informe de gravedad",
              "codigo": "import numpy as np\ndatos = np.loadtxt('mediciones_gravedad.csv', delimiter=',', skiprows=1)\ng = datos[:, 1]\nprint(f'Media: {g.mean():.3f} m/s²')\nprint(f'Diferencia: {g.mean()-9.81:.3f} m/s²')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Media: 9.807 m/s²\nDiferencia: -0.003 m/s²"
              },
              "reto": true,
              "consigna": "Obtén la media y su diferencia respecto a 9.81 m/s² usando el CSV descargado.",
              "pistas": [
                "Carga el archivo con skiprows=1.",
                "Selecciona la columna de aceleración.",
                "Resta 9.81 al promedio y formatea tres decimales."
              ],
              "archivosRequeridos": [
                {
                  "nombre": "mediciones_gravedad.csv",
                  "columnas": [
                    "tiempo_s",
                    "gravedad_m_s2"
                  ],
                  "minimoFilas": 6
                }
              ],
              "etiquetas": {
                "programacion": [
                  "Análisis CSV"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [
                  "proyecto: informe de gravedad",
                  "análisis csv"
                ],
                "galeria": false,
                "dificultadProgramacion": "Intermedio",
                "dificultadFisica": "Intermedia"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Análisis de una serie temporal de gravedad",
    "dificultadProgramacion": "Intermedio",
    "dificultadFisica": "Intermedia"
  }
];
