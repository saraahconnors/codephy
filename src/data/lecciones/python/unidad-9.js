// Unidad 9. Programas de Python científico reproducibles en CodePhy, Colab y VS Code.
export const unidad9 = {
  "id": "unidad-9",
  "numero": 9,
  "titulo": "Álgebra lineal y cálculo simbólico",
  "descripcion": "Aplica matrices, sistemas lineales y expresiones simbólicas a problemas físicos.",
  "objetivos": [
    "Realizar operaciones vectoriales y matriciales con NumPy.",
    "Resolver sistemas lineales y calcular autovalores.",
    "Manipular expresiones, derivadas e integrales simbólicas con SymPy."
  ],
  "conocimientosPrevios": "Unidades 4–8: funciones, NumPy, Matplotlib y análisis de datos.",
  "icono": "python-linear",
  "lecciones": [
    "python-41-vectores-y-productos",
    "python-42-matrices-y-sistemas-lineales",
    "python-43-autovalores-y-modos-normales",
    "python-44-primeros-pasos-con-sympy",
    "python-45-derivadas-e-integrales-simbolicas"
  ]
};
export const leccionesUnidad9 = [
  {
    "id": "python-41-vectores-y-productos",
    "unidadId": "unidad-9",
    "numero": "9.1",
    "modulo": "Álgebra lineal y cálculo simbólico",
    "titulo": "Vectores y productos",
    "subtitulo": "Representa direcciones y operaciones geométricas en tres dimensiones.",
    "icono": "python-linear",
    "objetivos": [
      "Calcular normas y productos escalares.",
      "Interpretar productos vectoriales.",
      "Distinguir escalares y vectores."
    ],
    "secciones": [
      {
        "id": "u9-1-seccion-1",
        "titulo": "Producto escalar",
        "etiqueta": "01 / PRODUCTO ESCALAR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El trabajo de una fuerza constante durante un desplazamiento se escribe W=F·d. El producto escalar devuelve un escalar y depende del ángulo entre ambos vectores."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-01-dot",
              "titulo": "Trabajo de una fuerza",
              "codigo": "import numpy as np\nF=np.array([3.,4.,0.])\nd=np.array([2.,0.,0.])\nprint(f'Trabajo: {np.dot(F,d):.1f} J')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Trabajo: 6.0 J"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Álgebra lineal"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "trabajo de una fuerza",
                  "álgebra lineal"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u9-01-dot-pregunta",
            "enunciado": "¿Qué devuelve el producto escalar de dos vectores?",
            "opciones": [
              "Un escalar",
              "Una matriz 3×3",
              "Un vector perpendicular"
            ],
            "correcta": 0,
            "explicacion": "El producto escalar contrae los dos vectores en un número."
          }
        ]
      },
      {
        "id": "u9-1-seccion-2",
        "titulo": "Norma y dirección",
        "etiqueta": "02 / NORMA Y DIRECCIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "np.linalg.norm calcula la magnitud de un vector en la norma euclidiana. Para construir un vector unitario divide por su módulo, siempre que no sea cero."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-01-norma",
              "titulo": "Módulo de una fuerza",
              "codigo": "import numpy as np\nF=np.array([3.,4.,0.])\nprint(f'Módulo: {np.linalg.norm(F):.1f} N')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Módulo: 5.0 N"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Álgebra lineal"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "módulo de una fuerza",
                  "álgebra lineal"
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
        "id": "u9-1-seccion-3",
        "titulo": "Producto vectorial",
        "etiqueta": "03 / PRODUCTO VECTORIAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El vector r×F define el torque respecto a un origen, según la convención de orientación del sistema de coordenadas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-01-cross",
              "titulo": "Torque de una fuerza",
              "codigo": "import numpy as np\nr=np.array([1.,0.,0.])\nF=np.array([0.,2.,0.])\ntau=np.cross(r,F)\nprint(tau)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[0. 0. 2.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Álgebra lineal"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "torque de una fuerza",
                  "álgebra lineal"
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
        "id": "u9-1-seccion-4",
        "titulo": "Practica: vectores ortogonales",
        "etiqueta": "04 / PRACTICA: VECTORES ORTOGONALES",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Define a=[1,0,0] y b=[0,3,0].",
              "Calcula su producto escalar.",
              "Calcula su producto vectorial."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-01-reto",
              "titulo": "Reto: operaciones vectoriales",
              "codigo": "import numpy as np\na=np.array([1,0,0])\nb=np.array([0,3,0])\nprint('Escalar:',np.dot(a,b))\nprint('Vectorial:',np.cross(a,b))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Escalar: 0\nVectorial: [0 0 3]"
              },
              "reto": true,
              "consigna": "Encuentra los productos escalar y vectorial de dos vectores ortogonales.",
              "pistas": [
                "Importa numpy.",
                "np.dot calcula el escalar.",
                "np.cross calcula el producto vectorial."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Álgebra lineal"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "reto: operaciones vectoriales",
                  "álgebra lineal"
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
    "ejemploPrincipal": "Trabajo mecánico y torque",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-42-matrices-y-sistemas-lineales",
    "unidadId": "unidad-9",
    "numero": "9.2",
    "modulo": "Álgebra lineal y cálculo simbólico",
    "titulo": "Matrices y sistemas lineales",
    "subtitulo": "Resuelve ecuaciones acopladas sin invertir manualmente la matriz.",
    "icono": "python-linear",
    "objetivos": [
      "Crear matrices bidimensionales.",
      "Usar multiplicación matricial con @.",
      "Resolver Ax=b con np.linalg.solve."
    ],
    "secciones": [
      {
        "id": "u9-2-seccion-1",
        "titulo": "Producto de matrices",
        "etiqueta": "01 / PRODUCTO DE MATRICES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El operador @ representa multiplicación matricial; * realiza multiplicación elemento a elemento entre arreglos de forma compatible."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-02-matmul",
              "titulo": "Transformación de un vector",
              "codigo": "import numpy as np\nA=np.array([[2,0],[0,3]])\nv=np.array([4,5])\nprint(A @ v)",
              "resultado": {
                "tipo": "texto",
                "contenido": "[ 8 15]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Matrices"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "transformación de un vector",
                  "matrices"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u9-02-matmul-pregunta",
            "enunciado": "¿Qué operador corresponde al producto matricial?",
            "opciones": [
              "@",
              "*",
              "**"
            ],
            "correcta": 0,
            "explicacion": "@ se utiliza para multiplicación matricial en Python."
          }
        ]
      },
      {
        "id": "u9-2-seccion-2",
        "titulo": "Sistemas de ecuaciones",
        "etiqueta": "02 / SISTEMAS DE ECUACIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "np.linalg.solve resuelve un sistema cuadrado no singular Ax=b. Suele ser numéricamente preferible a calcular explícitamente A⁻¹b."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-02-solve",
              "titulo": "Resolver dos corrientes",
              "codigo": "import numpy as np\nA=np.array([[2.,1.],[1.,-1.]])\nb=np.array([5.,1.])\nx=np.linalg.solve(A,b)\nprint(np.round(x,2))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[2. 1.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Sistemas lineales"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [
                  "resolver dos corrientes",
                  "sistemas lineales"
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
        "id": "u9-2-seccion-3",
        "titulo": "Determinante",
        "etiqueta": "03 / DETERMINANTE",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un determinante cero indica que una matriz cuadrada es singular, aunque para detectar problemas numéricos conviene considerar también el número de condición."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-02-det",
              "titulo": "Determinante de matriz",
              "codigo": "import numpy as np\nA=np.array([[2.,1.],[1.,3.]])\nprint(f'Determinante: {np.linalg.det(A):.1f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "Determinante: 5.0"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Matrices"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "determinante de matriz",
                  "matrices"
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
        "id": "u9-2-seccion-4",
        "titulo": "Practica: sistema 2×2",
        "etiqueta": "04 / PRACTICA: SISTEMA 2×2",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Resuelve 3x+y=7 y x+y=3.",
              "Escribe la matriz de coeficientes y el vector derecho.",
              "Obtén x e y con solve."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-02-reto",
              "titulo": "Reto: sistema de ecuaciones",
              "codigo": "import numpy as np\nA=np.array([[3.,1.],[1.,1.]])\nb=np.array([7.,3.])\nprint(np.linalg.solve(A,b))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[2. 1.]"
              },
              "reto": true,
              "consigna": "Resuelve el sistema 3x+y=7, x+y=3 mediante NumPy.",
              "pistas": [
                "Forma una matriz con las filas [3,1] y [1,1].",
                "El vector del lado derecho es [7,3].",
                "Usa np.linalg.solve(A,b)."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Sistemas lineales"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "reto: sistema de ecuaciones",
                  "sistemas lineales"
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
    "ejemploPrincipal": "Circuitos de dos ecuaciones",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-43-autovalores-y-modos-normales",
    "unidadId": "unidad-9",
    "numero": "9.3",
    "modulo": "Álgebra lineal y cálculo simbólico",
    "titulo": "Autovalores y modos normales",
    "subtitulo": "Interpreta autovalores y autovectores de matrices físicas.",
    "icono": "python-linear",
    "objetivos": [
      "Calcular autovalores con NumPy.",
      "Interpretar los autovectores como direcciones características.",
      "Relacionar matrices de rigidez con modos de oscilación."
    ],
    "secciones": [
      {
        "id": "u9-3-seccion-1",
        "titulo": "El problema de autovalores",
        "etiqueta": "01 / EL PROBLEMA DE AUTOVALORES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un autovector v satisface Av=λv. Sus componentes describen direcciones invariantes de la transformación, mientras λ da el factor de escala."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-03-eig",
              "titulo": "Autovalores de una matriz",
              "codigo": "import numpy as np\nA=np.array([[2.,0.],[0.,5.]])\nvals,vecs=np.linalg.eig(A)\nprint('Autovalores:',np.sort(vals))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Autovalores: [2. 5.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Autovalores"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "autovalores de una matriz",
                  "autovalores"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u9-03-eig-pregunta",
            "enunciado": "¿Qué representa λ en Av=λv?",
            "opciones": [
              "El factor de escala del autovector",
              "El tamaño de A",
              "El número de filas"
            ],
            "correcta": 0,
            "explicacion": "λ multiplica al autovector en esa dirección."
          }
        ]
      },
      {
        "id": "u9-3-seccion-2",
        "titulo": "Matriz simétrica",
        "etiqueta": "02 / MATRIZ SIMÉTRICA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Para matrices reales simétricas es preferible np.linalg.eigh, que utiliza esa estructura. Los autovalores aparecen ordenados."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-03-eigh",
              "titulo": "Modos de una matriz de rigidez",
              "codigo": "import numpy as np\nK=np.array([[2.,-1.],[-1.,2.]])\nvals,vecs=np.linalg.eigh(K)\nprint('Autovalores:',vals)",
              "resultado": {
                "tipo": "texto",
                "contenido": "Autovalores: [1. 3.]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Autovalores"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "modos de una matriz de rigidez",
                  "autovalores"
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
        "id": "u9-3-seccion-3",
        "titulo": "Frecuencias de modos",
        "etiqueta": "03 / FRECUENCIAS DE MODOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En un sistema de masas unitarias y matriz de rigidez K expresada en unidades compatibles, las frecuencias angulares normales satisfacen ω²=λ."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-03-omega",
              "titulo": "Frecuencias angulares normales",
              "codigo": "import numpy as np\nK=np.array([[2.,-1.],[-1.,2.]])\nvalores=np.linalg.eigvalsh(K)\nprint(np.round(np.sqrt(valores),3))",
              "resultado": {
                "tipo": "texto",
                "contenido": "[1.    1.732]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Autovalores"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "frecuencias angulares normales",
                  "autovalores"
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
        "id": "u9-3-seccion-4",
        "titulo": "Practica: matriz diagonal",
        "etiqueta": "04 / PRACTICA: MATRIZ DIAGONAL",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea la matriz diagonal con 4 y 9.",
              "Calcula sus autovalores.",
              "Interprétalos como cuadrados de frecuencias angulares y muestra las raíces."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-03-reto",
              "titulo": "Reto: frecuencias normales",
              "codigo": "import numpy as np\nK=np.diag([4.,9.])\nw=np.sqrt(np.linalg.eigvalsh(K))\nprint('Frecuencias angulares:',w)",
              "resultado": {
                "tipo": "texto",
                "contenido": "Frecuencias angulares: [2. 3.]"
              },
              "reto": true,
              "consigna": "Calcula las frecuencias angulares a partir de una matriz diagonal de rigidez.",
              "pistas": [
                "Construye K con np.diag.",
                "np.linalg.eigvalsh devuelve autovalores de una matriz simétrica.",
                "Calcula la raíz cuadrada de los autovalores."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Autovalores"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "reto: frecuencias normales",
                  "autovalores"
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
    "ejemploPrincipal": "Dos osciladores acoplados",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-44-primeros-pasos-con-sympy",
    "unidadId": "unidad-9",
    "numero": "9.4",
    "modulo": "Álgebra lineal y cálculo simbólico",
    "titulo": "Primeros pasos con SymPy",
    "subtitulo": "Manipula expresiones matemáticas sin reemplazar números hasta que sea necesario.",
    "icono": "python-linear",
    "objetivos": [
      "Declarar símbolos algebraicos.",
      "Simplificar y factorizar expresiones.",
      "Sustituir parámetros para obtener valores numéricos."
    ],
    "secciones": [
      {
        "id": "u9-4-seccion-1",
        "titulo": "Símbolos y expresiones",
        "etiqueta": "01 / SÍMBOLOS Y EXPRESIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "SymPy trabaja con expresiones exactas. A diferencia de una variable numérica, un símbolo representa una cantidad algebraica no evaluada."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-04-simbolos",
              "titulo": "Energía simbólica",
              "codigo": "import sympy as sp\nm,v=sp.symbols('m v')\nE=sp.Rational(1,2)*m*v**2\nprint(E)",
              "resultado": {
                "tipo": "texto",
                "contenido": "m*v**2/2"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "SymPy"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "energía simbólica",
                  "sympy"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u9-04-simbolos-pregunta",
            "enunciado": "¿Para qué sirve sp.symbols?",
            "opciones": [
              "Crear símbolos algebraicos",
              "Guardar imágenes",
              "Leer CSV"
            ],
            "correcta": 0,
            "explicacion": "symbols permite representar incógnitas algebraicas."
          }
        ]
      },
      {
        "id": "u9-4-seccion-2",
        "titulo": "Simplificar expresiones",
        "etiqueta": "02 / SIMPLIFICAR EXPRESIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "simplify intenta encontrar una representación equivalente más sencilla; factor expone productos de factores."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-04-factor",
              "titulo": "Factorizar un polinomio",
              "codigo": "import sympy as sp\nx=sp.symbols('x')\nprint(sp.factor(x**2-4))",
              "resultado": {
                "tipo": "texto",
                "contenido": "(x - 2)*(x + 2)"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "SymPy"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "factorizar un polinomio",
                  "sympy"
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
        "id": "u9-4-seccion-3",
        "titulo": "Sustituir y evaluar",
        "etiqueta": "03 / SUSTITUIR Y EVALUAR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "subs reemplaza símbolos por valores. evalf produce una aproximación decimal cuando se necesita."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-04-subs",
              "titulo": "Potencial elástico",
              "codigo": "import sympy as sp\nk,x=sp.symbols('k x')\nU=sp.Rational(1,2)*k*x**2\nprint(U.subs({k:100,x:sp.Rational(1,10)}))",
              "resultado": {
                "tipo": "texto",
                "contenido": "1/2"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "SymPy"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "potencial elástico",
                  "sympy"
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
        "id": "u9-4-seccion-4",
        "titulo": "Practica: una expresión de movimiento",
        "etiqueta": "04 / PRACTICA: UNA EXPRESIÓN DE MOVIMIENTO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Declara los símbolos v y t.",
              "Construye x=v*t.",
              "Sustituye v=3 y t=4."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-04-reto",
              "titulo": "Reto: posición simbólica",
              "codigo": "import sympy as sp\nv,t=sp.symbols('v t')\nx=v*t\nprint(x.subs({v:3,t:4}))",
              "resultado": {
                "tipo": "texto",
                "contenido": "12"
              },
              "reto": true,
              "consigna": "Crea una expresión simbólica para x=vt y evalúala con v=3 y t=4.",
              "pistas": [
                "Importa sympy como sp.",
                "Define símbolos mediante sp.symbols.",
                "Llama a subs para reemplazar los dos parámetros."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "SymPy"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "reto: posición simbólica",
                  "sympy"
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
    "ejemploPrincipal": "Potencial armónico simbólico",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-45-derivadas-e-integrales-simbolicas",
    "unidadId": "unidad-9",
    "numero": "9.5",
    "modulo": "Álgebra lineal y cálculo simbólico",
    "titulo": "Derivadas e integrales simbólicas",
    "subtitulo": "Conecta una función matemática con su derivada e integral usando SymPy.",
    "icono": "python-linear",
    "objetivos": [
      "Calcular derivadas simbólicas con diff.",
      "Encontrar integrales definidas e indefinidas.",
      "Comparar un resultado exacto con una aproximación numérica."
    ],
    "secciones": [
      {
        "id": "u9-5-seccion-1",
        "titulo": "Derivar una función",
        "etiqueta": "01 / DERIVAR UNA FUNCIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La velocidad instantánea es la derivada de la posición respecto al tiempo en un modelo diferenciable. SymPy calcula esa derivada simbólicamente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-05-diff",
              "titulo": "Derivar una trayectoria",
              "codigo": "import sympy as sp\nt=sp.symbols('t')\nx=2*t**2+3*t\nprint(sp.diff(x,t))",
              "resultado": {
                "tipo": "texto",
                "contenido": "4*t + 3"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Cálculo simbólico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "derivar una trayectoria",
                  "cálculo simbólico"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u9-05-diff-pregunta",
            "enunciado": "¿Qué calcula diff(x,t)?",
            "opciones": [
              "La derivada de x respecto a t",
              "El promedio de x",
              "Una gráfica"
            ],
            "correcta": 0,
            "explicacion": "diff implementa derivación simbólica."
          }
        ]
      },
      {
        "id": "u9-5-seccion-2",
        "titulo": "Integrar una expresión",
        "etiqueta": "02 / INTEGRAR UNA EXPRESIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La integral definida de una velocidad sobre un intervalo da el desplazamiento acumulado, con su signo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-05-integral",
              "titulo": "Desplazamiento exacto",
              "codigo": "import sympy as sp\nt=sp.symbols('t')\nv=2*t+1\nprint(sp.integrate(v,(t,0,3)))",
              "resultado": {
                "tipo": "texto",
                "contenido": "12"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Cálculo simbólico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "desplazamiento exacto",
                  "cálculo simbólico"
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
        "id": "u9-5-seccion-3",
        "titulo": "Evaluar una integral especial",
        "etiqueta": "03 / EVALUAR UNA INTEGRAL ESPECIAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "SymPy puede conservar resultados exactos con constantes como π. La conversión a float entrega una aproximación decimal."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-05-pi",
              "titulo": "Integral de seno",
              "codigo": "import sympy as sp\nx=sp.symbols('x')\nres=sp.integrate(sp.sin(x),(x,0,sp.pi))\nprint(res)\nprint(f'{float(res):.2f}')",
              "resultado": {
                "tipo": "texto",
                "contenido": "2\n2.00"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Cálculo simbólico"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [
                  "integral de seno",
                  "cálculo simbólico"
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
        "id": "u9-5-seccion-4",
        "titulo": "Proyecto: posición a partir de velocidad",
        "etiqueta": "04 / PROYECTO: POSICIÓN A PARTIR DE VELOCIDAD",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Define v=3t² con SymPy.",
              "Integra de 0 a 2 s.",
              "Imprime el desplazamiento exacto."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u9-05-reto",
              "titulo": "Reto: integrar una velocidad",
              "codigo": "import sympy as sp\nt=sp.symbols('t')\nv=3*t**2\nprint(sp.integrate(v,(t,0,2)))",
              "resultado": {
                "tipo": "texto",
                "contenido": "8"
              },
              "reto": true,
              "consigna": "Integra simbólicamente v(t)=3t² de t=0 a t=2.",
              "pistas": [
                "Crea el símbolo t.",
                "Define v = 3*t**2.",
                "sp.integrate(v,(t,0,2)) calcula la integral definida."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Cálculo simbólico"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "reto: integrar una velocidad",
                  "cálculo simbólico"
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
    "ejemploPrincipal": "Velocidad y desplazamiento de una partícula",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  }
];
