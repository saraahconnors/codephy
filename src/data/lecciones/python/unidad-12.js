// CodePhy — lecciones de Python científico. Código portable.
export const unidad12 = {
  "id": "unidad-12",
  "numero": 12,
  "titulo": "Modelado, animación y proyectos",
  "descripcion": "Construye programas físicos reproducibles con simulaciones y visualización.",
  "objetivos": [
    "Traducir hipótesis físicas a código.",
    "Construir animaciones y experimentos Monte Carlo.",
    "Organizar un proyecto científico verificable."
  ],
  "conocimientosPrevios": "Unidades 1–11: bases de Python y computación científica.",
  "icono": "python-simulation",
  "lecciones": [
    "python-56-disenar-un-modelo-computacional",
    "python-57-animaciones-de-matplotlib",
    "python-58-monte-carlo-en-fisica",
    "python-59-exploracion-interactiva-de-parametros",
    "python-60-proyecto-integrador-y-reproducibilidad"
  ]
};
export const leccionesUnidad12 = [
  {
    "id": "python-56-disenar-un-modelo-computacional",
    "unidadId": "unidad-12",
    "numero": "12.1",
    "modulo": "Modelado, animación y proyectos",
    "titulo": "Diseñar un modelo computacional",
    "subtitulo": "Del fenómeno físico a un programa reproducible.",
    "icono": "python-simulation",
    "objetivos": [
      "Distinguir hipótesis y parámetros",
      "Definir modelo y resultado",
      "Evaluar consistencia dimensional"
    ],
    "secciones": [
      {
        "id": "u12-1-seccion-1",
        "titulo": "Hipótesis del modelo",
        "etiqueta": "01 / HIPÓTESIS DEL MODELO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La caída libre ideal supone g constante y resistencia del aire despreciable."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-1-01",
              "titulo": "Hipótesis del modelo",
              "codigo": "g=9.81\nh0=20.0\nt=1.0\nh=h0-0.5*g*t**2\nprint(f\"Altura: {h:.2f} m\")",
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
                  "Modelado"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Hipótesis del modelo",
                  "Modelado",
                  "Diseñar un modelo computacional"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-1-01-pregunta",
            "enunciado": "¿Qué simplificación estamos usando?",
            "opciones": [
              "Sin resistencia del aire",
              "g variable con la altura",
              "Sin gravedad"
            ],
            "correcta": 0,
            "explicacion": "El modelo ideal supone aceleración constante."
          }
        ]
      },
      {
        "id": "u12-1-seccion-2",
        "titulo": "Explorar parámetros",
        "etiqueta": "02 / EXPLORAR PARÁMETROS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Modificar un parámetro permite estudiar la sensibilidad de una predicción."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-1-02",
              "titulo": "Explorar parámetros",
              "codigo": "def altura(h0,t,g=9.81):\n    return h0-0.5*g*t**2\nfor t in [0,0.5,1.0]:\n    print(t,round(altura(20,t),3))",
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
                  "Modelado"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Explorar parámetros",
                  "Modelado",
                  "Diseñar un modelo computacional"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-1-02-pregunta",
            "enunciado": "¿Para qué sirve una función?",
            "opciones": [
              "Para evaluar el mismo modelo en varios casos",
              "Para evitar definir parámetros",
              "Para garantizar mediciones perfectas"
            ],
            "correcta": 0,
            "explicacion": "La función reutiliza una expresión con entradas controlables."
          }
        ]
      },
      {
        "id": "u12-1-seccion-3",
        "titulo": "Validación física",
        "etiqueta": "03 / VALIDACIÓN FÍSICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un modelo matemático puede dar valores imposibles después de impactar el suelo; restringimos el intervalo estudiado."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-1-03",
              "titulo": "Validación física",
              "codigo": "import numpy as np\ng=9.81;h0=20.0\ntiempo_impacto=np.sqrt(2*h0/g)\nprint(f\"Impacto: {tiempo_impacto:.2f} s\")",
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
                  "Modelado"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Validación física",
                  "Modelado",
                  "Diseñar un modelo computacional"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-1-03-pregunta",
            "enunciado": "¿Por qué importa el tiempo de impacto?",
            "opciones": [
              "El modelo de caída libre deja de describir la trayectoria después del choque",
              "La gravedad se anula",
              "Los segundos se convierten en metros"
            ],
            "correcta": 0,
            "explicacion": "Las ecuaciones previas al impacto no describen automáticamente la colisión."
          }
        ]
      },
      {
        "id": "u12-1-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Define una función que calcule el tiempo de caída libre desde h, para h=5,10,20 m.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-1-reto",
              "titulo": "Reto: Comparar alturas",
              "codigo": "from math import sqrt\nfor h in [5,10,20]:\n    print(f\"{h} m: {sqrt(2*h/9.81):.2f} s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Define una función que calcule el tiempo de caída libre desde h, para h=5,10,20 m.",
              "pistas": [
                "Usa sqrt(2*h/g).",
                "Importa math o numpy.",
                "Imprime los tres tiempos con dos decimales."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Modelado"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Comparar alturas",
                  "Modelado"
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
    "ejemploPrincipal": "Hipótesis del modelo",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-57-animaciones-de-matplotlib",
    "unidadId": "unidad-12",
    "numero": "12.2",
    "modulo": "Modelado, animación y proyectos",
    "titulo": "Animaciones de Matplotlib",
    "subtitulo": "Construye animaciones científicas con código Python estándar.",
    "icono": "python-simulation",
    "objetivos": [
      "Separar estado y actualización",
      "Utilizar FuncAnimation",
      "Conservar código portable"
    ],
    "secciones": [
      {
        "id": "u12-2-seccion-1",
        "titulo": "Fotogramas de una onda",
        "etiqueta": "01 / FOTOGRAMAS DE UNA ONDA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una animación muestra estados sucesivos calculados por un modelo temporal."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-2-01",
              "titulo": "Fotogramas de una onda",
              "codigo": "import numpy as np\nx=np.linspace(0,2*np.pi,100)\nfor t in [0,np.pi/2,np.pi]:\n    y=np.sin(x-t)\n    print(f\"t={t:.2f}: y(0)={y[0]:.2f}\")",
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
                  "Animaciones"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Fotogramas de una onda",
                  "Animaciones",
                  "Animaciones de Matplotlib"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-2-01-pregunta",
            "enunciado": "¿Qué cambia entre cuadros?",
            "opciones": [
              "La fase temporal",
              "La cantidad de puntos espaciales",
              "La unidad de x"
            ],
            "correcta": 0,
            "explicacion": "La señal usa sin(x−t) con diferentes valores de t."
          }
        ]
      },
      {
        "id": "u12-2-seccion-2",
        "titulo": "FuncAnimation: onda viajera",
        "etiqueta": "02 / FUNCANIMATION: ONDA VIAJERA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La función actualizar modifica la línea de Matplotlib para cada cuadro. En Colab puedes visualizar ani.to_jshtml()."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-2-02",
              "titulo": "FuncAnimation: onda viajera",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfrom matplotlib.animation import FuncAnimation\nx=np.linspace(0,2*np.pi,120)\nfig,ax=plt.subplots()\nlinea,=ax.plot(x,np.sin(x))\nax.set_ylim(-1.2,1.2)\nax.set_xlabel(\"Posición\")\nax.set_ylabel(\"Amplitud\")\ndef actualizar(i):\n    linea.set_ydata(np.sin(x-i*0.15))\n    return linea,\nani=FuncAnimation(fig,actualizar,frames=24,interval=80,blit=True)\nplt.show()",
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
                  "Animaciones"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "FuncAnimation: onda viajera",
                  "Animaciones",
                  "Animaciones de Matplotlib"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-2-02-pregunta",
            "enunciado": "¿Qué función se llama para cada cuadro?",
            "opciones": [
              "actualizar",
              "set_xlabel",
              "linspace"
            ],
            "correcta": 0,
            "explicacion": "FuncAnimation pasa cada índice de fotograma a actualizar."
          }
        ]
      },
      {
        "id": "u12-2-seccion-3",
        "titulo": "FuncAnimation: partícula",
        "etiqueta": "03 / FUNCANIMATION: PARTÍCULA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Animar un punto permite mostrar la trayectoria física de un cuerpo en el tiempo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-2-03",
              "titulo": "FuncAnimation: partícula",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfrom matplotlib.animation import FuncAnimation\nt=np.linspace(0,2,24)\nx=2*t\ny=8*t-4.9*t**2\nfig,ax=plt.subplots()\nax.set_xlim(0,4.2);ax.set_ylim(-5,4)\nax.set_xlabel(\"x (m)\");ax.set_ylabel(\"y (m)\")\npunto,=ax.plot([],[],\"o\")\ndef actualizar(i):\n    punto.set_data([x[i]],[y[i]])\n    return punto,\nani=FuncAnimation(fig,actualizar,frames=len(t),interval=90,blit=True)\nplt.show()",
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
                  "Animaciones"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "FuncAnimation: partícula",
                  "Animaciones",
                  "Animaciones de Matplotlib"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-2-03-pregunta",
            "enunciado": "¿Qué modifica set_data en cada cuadro?",
            "opciones": [
              "La posición del punto",
              "La gravedad del modelo",
              "El tamaño del arreglo t"
            ],
            "correcta": 0,
            "explicacion": "Se reemplazan las coordenadas del marcador."
          }
        ]
      },
      {
        "id": "u12-2-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Construye una animación con 24 cuadros para un péndulo de ángulo pequeño theta(t)=0.3cos(3t).",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-2-reto",
              "titulo": "Reto: Péndulo animado",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfrom matplotlib.animation import FuncAnimation\nt=np.linspace(0,4,24)\ntheta=0.3*np.cos(3*t)\nx=np.sin(theta);y=-np.cos(theta)\nfig,ax=plt.subplots()\nax.set_xlim(-0.5,0.5);ax.set_ylim(-1.2,0.2);ax.set_aspect(\"equal\")\nbarra,=ax.plot([],[],\"o-\")\ndef actualizar(i):\n    barra.set_data([0,x[i]],[0,y[i]])\n    return barra,\nani=FuncAnimation(fig,actualizar,frames=24,interval=90,blit=True)\nplt.show()",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Construye una animación con 24 cuadros para un péndulo de ángulo pequeño theta(t)=0.3cos(3t).",
              "pistas": [
                "Calcula los ángulos con NumPy.",
                "x=sin(theta), y=−cos(theta) para L=1.",
                "Actualiza con set_data y crea FuncAnimation."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Animaciones"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [
                  "Péndulo animado",
                  "Animaciones"
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
    "ejemploPrincipal": "Fotogramas de una onda",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-58-monte-carlo-en-fisica",
    "unidadId": "unidad-12",
    "numero": "12.3",
    "modulo": "Modelado, animación y proyectos",
    "titulo": "Monte Carlo en física",
    "subtitulo": "Utiliza muestreo aleatorio para estimar cantidades.",
    "icono": "python-simulation",
    "objetivos": [
      "Generar muestras reproducibles",
      "Estimar probabilidades",
      "Interpretar fluctuaciones"
    ],
    "secciones": [
      {
        "id": "u12-3-seccion-1",
        "titulo": "Generador reproducible",
        "etiqueta": "01 / GENERADOR REPRODUCIBLE",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La semilla permite repetir una simulación pseudoaleatoria."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-3-01",
              "titulo": "Generador reproducible",
              "codigo": "import numpy as np\nrng=np.random.default_rng(123)\nprint(np.round(rng.random(4),3))",
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
                  "Monte Carlo"
                ],
                "fisica": [
                  "Física estadística"
                ],
                "palabrasClave": [
                  "Generador reproducible",
                  "Monte Carlo",
                  "Monte Carlo en física"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-3-01-pregunta",
            "enunciado": "¿Qué aporta usar la misma semilla?",
            "opciones": [
              "Repetibilidad de la simulación",
              "Eliminar toda aleatoriedad física",
              "Obtener valores idénticos en cualquier algoritmo"
            ],
            "correcta": 0,
            "explicacion": "Con el mismo generador y ambiente se puede repetir una secuencia."
          }
        ]
      },
      {
        "id": "u12-3-seccion-2",
        "titulo": "Estimación de π",
        "etiqueta": "02 / ESTIMACIÓN DE Π",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El cociente de puntos dentro de un círculo unitario en un cuadrado estima π/4."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-3-02",
              "titulo": "Estimación de π",
              "codigo": "import numpy as np\nrng=np.random.default_rng(7)\np=rng.uniform(-1,1,(10000,2))\ndentro=(p[:,0]**2+p[:,1]**2<=1)\nprint(f\"Pi aproximado: {4*dentro.mean():.3f}\")",
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
                  "Monte Carlo"
                ],
                "fisica": [
                  "Física estadística"
                ],
                "palabrasClave": [
                  "Estimación de π",
                  "Monte Carlo",
                  "Monte Carlo en física"
                ],
                "galeria": true,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-3-02-pregunta",
            "enunciado": "¿Qué significa dentro.mean()?",
            "opciones": [
              "La fracción de puntos dentro del círculo",
              "La suma de las coordenadas",
              "La probabilidad exacta de la muestra"
            ],
            "correcta": 0,
            "explicacion": "El promedio booleano estima una fracción de área."
          }
        ]
      },
      {
        "id": "u12-3-seccion-3",
        "titulo": "Distribución de desplazamientos",
        "etiqueta": "03 / DISTRIBUCIÓN DE DESPLAZAMIENTOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una caminata aleatoria produce trayectorias diferentes en cada realización."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-3-03",
              "titulo": "Distribución de desplazamientos",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nrng=np.random.default_rng(4)\npasos=rng.choice([-1,1],size=200)\nx=np.r_[0,np.cumsum(pasos)]\nplt.plot(x);plt.xlabel(\"Paso\");plt.ylabel(\"Posición relativa\");plt.show()",
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
                  "Monte Carlo"
                ],
                "fisica": [
                  "Física estadística"
                ],
                "palabrasClave": [
                  "Distribución de desplazamientos",
                  "Monte Carlo",
                  "Monte Carlo en física"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-3-03-pregunta",
            "enunciado": "¿Por qué varía la posición?",
            "opciones": [
              "Se suman desplazamientos aleatorios",
              "El tiempo cambia de dirección",
              "La masa cambia en cada paso"
            ],
            "correcta": 0,
            "explicacion": "La caminata acumula incrementos de ±1."
          }
        ]
      },
      {
        "id": "u12-3-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Simula 5000 lanzamientos de una moneda equilibrada con semilla 10 y estima la fracción de caras.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-3-reto",
              "titulo": "Reto: Estimación probabilística",
              "codigo": "import numpy as np\nrng=np.random.default_rng(10)\ncaras=rng.integers(0,2,5000)\nprint(f\"{caras.mean():.3f}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Simula 5000 lanzamientos de una moneda equilibrada con semilla 10 y estima la fracción de caras.",
              "pistas": [
                "Crea rng con default_rng(10).",
                "Usa rng.integers(0,2,5000).",
                "Calcula el promedio."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Monte Carlo"
                ],
                "fisica": [
                  "Física estadística"
                ],
                "palabrasClave": [
                  "Estimación probabilística",
                  "Monte Carlo"
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
    "ejemploPrincipal": "Generador reproducible",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-59-exploracion-interactiva-de-parametros",
    "unidadId": "unidad-12",
    "numero": "12.4",
    "modulo": "Modelado, animación y proyectos",
    "titulo": "Exploración interactiva de parámetros",
    "subtitulo": "Estudia cómo cambian resultados al variar parámetros del modelo.",
    "icono": "python-simulation",
    "objetivos": [
      "Separar parámetros del cálculo",
      "Crear funciones reutilizables",
      "Representar comparaciones de escenarios"
    ],
    "secciones": [
      {
        "id": "u12-4-seccion-1",
        "titulo": "Modelo paramétrico",
        "etiqueta": "01 / MODELO PARAMÉTRICO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La carga de un circuito RC depende del tiempo característico tau=RC."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-4-01",
              "titulo": "Modelo paramétrico",
              "codigo": "import numpy as np\nR=1000.0;C=0.001\ntau=R*C\nprint(f\"Constante de tiempo: {tau:.2f} s\")",
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
                  "Parámetros"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [
                  "Modelo paramétrico",
                  "Parámetros",
                  "Exploración interactiva de parámetros"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-4-01-pregunta",
            "enunciado": "¿Qué sucede al duplicar R con C fijo?",
            "opciones": [
              "Se duplica tau",
              "Se reduce tau a la mitad",
              "tau no cambia"
            ],
            "correcta": 0,
            "explicacion": "tau=RC crece proporcionalmente con R."
          }
        ]
      },
      {
        "id": "u12-4-seccion-2",
        "titulo": "Variar escenarios",
        "etiqueta": "02 / VARIAR ESCENARIOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un bucle sirve para comprobar varios valores de resistencia con el mismo modelo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-4-02",
              "titulo": "Variar escenarios",
              "codigo": "import numpy as np\nC=0.001\nfor R in [500,1000,2000]:\n    print(f\"R={R} Ω, tau={R*C:.2f} s\")",
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
                  "Parámetros"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [
                  "Variar escenarios",
                  "Parámetros",
                  "Exploración interactiva de parámetros"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-4-02-pregunta",
            "enunciado": "¿Qué valor produce mayor constante de tiempo?",
            "opciones": [
              "2000 Ω",
              "500 Ω",
              "1000 Ω"
            ],
            "correcta": 0,
            "explicacion": "La resistencia mayor aumenta el tiempo característico."
          }
        ]
      },
      {
        "id": "u12-4-seccion-3",
        "titulo": "Comparar curvas",
        "etiqueta": "03 / COMPARAR CURVAS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La figura muestra la descarga de un capacitor en distintas condiciones iniciales."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-4-03",
              "titulo": "Comparar curvas",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt=np.linspace(0,5,200)\nfor R in [500,1000,2000]:\n    V=5*np.exp(-t/(R*0.001))\n    plt.plot(t,V,label=f\"R={R} Ω\")\nplt.xlabel(\"Tiempo (s)\");plt.ylabel(\"Voltaje (V)\");plt.legend();plt.show()",
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
                  "Parámetros"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [
                  "Comparar curvas",
                  "Parámetros",
                  "Exploración interactiva de parámetros"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-4-03-pregunta",
            "enunciado": "¿Cuál curva disminuye más lentamente?",
            "opciones": [
              "La de R=2000 Ω",
              "La de R=500 Ω",
              "Todas coinciden"
            ],
            "correcta": 0,
            "explicacion": "A mayor RC, el decaimiento es más lento."
          }
        ]
      },
      {
        "id": "u12-4-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea una función V(t,R,C)=5exp(−t/RC) y muestra V(1 s) para R=1000 y C=0.002.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-4-reto",
              "titulo": "Reto: Descarga con parámetro",
              "codigo": "import numpy as np\ndef V(t,R,C): return 5*np.exp(-t/(R*C))\nprint(f\"{V(1,1000,0.002):.2f} V\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Crea una función V(t,R,C)=5exp(−t/RC) y muestra V(1 s) para R=1000 y C=0.002.",
              "pistas": [
                "Define la función usando np.exp.",
                "Utiliza t=1.0.",
                "Imprime el voltaje con dos decimales."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Parámetros"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [
                  "Descarga con parámetro",
                  "Parámetros"
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
    "ejemploPrincipal": "Modelo paramétrico",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-60-proyecto-integrador-y-reproducibilidad",
    "unidadId": "unidad-12",
    "numero": "12.5",
    "modulo": "Modelado, animación y proyectos",
    "titulo": "Proyecto integrador y reproducibilidad",
    "subtitulo": "Construye una pequeña investigación computacional verificable.",
    "icono": "python-simulation",
    "objetivos": [
      "Definir objetivo e hipótesis",
      "Calcular y visualizar un modelo",
      "Guardar resultados reproducibles"
    ],
    "secciones": [
      {
        "id": "u12-5-seccion-1",
        "titulo": "Pregunta y parámetros",
        "etiqueta": "01 / PREGUNTA Y PARÁMETROS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El modelo del oscilador amortiguado depende de condiciones iniciales, frecuencia y amortiguamiento."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-5-01",
              "titulo": "Pregunta y parámetros",
              "codigo": "import numpy as np\nt=np.linspace(0,5,101)\nA=1.0; gamma=0.25; omega=4.0\nx=A*np.exp(-gamma*t)*np.cos(omega*t)\nprint(f\"Puntos: {len(x)}\")",
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
                  "Proyecto científico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Pregunta y parámetros",
                  "Proyecto científico",
                  "Proyecto integrador y reproducibilidad"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-5-01-pregunta",
            "enunciado": "¿Qué parámetro controla la envolvente decreciente?",
            "opciones": [
              "gamma",
              "tamaño del arreglo",
              "print"
            ],
            "correcta": 0,
            "explicacion": "El factor exp(−gamma t) disminuye la amplitud."
          }
        ]
      },
      {
        "id": "u12-5-seccion-2",
        "titulo": "Energía aproximada",
        "etiqueta": "02 / ENERGÍA APROXIMADA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para un modelo amortiguado, la energía mecánica disminuye con el tiempo debido a la disipación."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-5-02",
              "titulo": "Energía aproximada",
              "codigo": "import numpy as np\nt=np.linspace(0,5,101)\ngamma=0.25;omega=4.0\nx=np.exp(-gamma*t)*np.cos(omega*t)\nv=np.exp(-gamma*t)*(-gamma*np.cos(omega*t)-omega*np.sin(omega*t))\nE=0.5*v**2+0.5*omega**2*x**2\nprint(\"E inicial:\",round(E[0],3))\nprint(\"E final:\",round(E[-1],3))",
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
                  "Proyecto científico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Energía aproximada",
                  "Proyecto científico",
                  "Proyecto integrador y reproducibilidad"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-5-02-pregunta",
            "enunciado": "¿Por qué esperamos menor energía al final?",
            "opciones": [
              "Por el amortiguamiento",
              "Porque la masa desaparece",
              "Porque NumPy redondea los datos"
            ],
            "correcta": 0,
            "explicacion": "El amortiguamiento retira energía del sistema."
          }
        ]
      },
      {
        "id": "u12-5-seccion-3",
        "titulo": "Gráficas y archivo reproducible",
        "etiqueta": "03 / GRÁFICAS Y ARCHIVO REPRODUCIBLE",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Guardar parámetros, series numéricas y figuras permite revisar y compartir resultados."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-5-03",
              "titulo": "Gráficas y archivo reproducible",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt=np.linspace(0,5,101)\nx=np.exp(-0.25*t)*np.cos(4*t)\nnp.savetxt(\"oscilador_resultados.csv\",np.column_stack((t,x)),delimiter=\",\",header=\"tiempo_s,posicion_m\",comments=\"\")\nplt.plot(t,x);plt.xlabel(\"Tiempo (s)\");plt.ylabel(\"Posición (m)\");plt.savefig(\"oscilador_figura.png\")\nplt.show()\nprint(\"Datos guardados\")",
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
                  "Proyecto científico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Gráficas y archivo reproducible",
                  "Proyecto científico",
                  "Proyecto integrador y reproducibilidad"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u12-5-03-pregunta",
            "enunciado": "¿Por qué documentar los parámetros del modelo?",
            "opciones": [
              "Para que otros puedan repetir la simulación",
              "Para impedir que otros vean los datos",
              "Para aumentar siempre la exactitud"
            ],
            "correcta": 0,
            "explicacion": "Reproducibilidad requiere conocer métodos, datos y condiciones."
          }
        ]
      },
      {
        "id": "u12-5-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Calcula x(t)=2e^(−0.2t)cos(3t) en 101 tiempos entre 0 y 5 s, genera una gráfica y guarda un CSV.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u12-5-reto",
              "titulo": "Reto: Proyecto: oscilador reproducible",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nt=np.linspace(0,5,101)\nx=2*np.exp(-0.2*t)*np.cos(3*t)\nnp.savetxt(\"proyecto_oscilador.csv\",np.column_stack((t,x)),delimiter=\",\",header=\"tiempo_s,posicion_m\",comments=\"\")\nplt.plot(t,x);plt.xlabel(\"Tiempo (s)\");plt.ylabel(\"Posición (m)\");plt.show()\nprint(\"Proyecto listo\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Calcula x(t)=2e^(−0.2t)cos(3t) en 101 tiempos entre 0 y 5 s, genera una gráfica y guarda un CSV.",
              "pistas": [
                "Genera t con np.linspace.",
                "Calcula x vectorizado.",
                "Guarda dos columnas con np.savetxt y crea una figura."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Proyecto científico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Proyecto: oscilador reproducible",
                  "Proyecto científico"
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
    "ejemploPrincipal": "Pregunta y parámetros",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  }
];
