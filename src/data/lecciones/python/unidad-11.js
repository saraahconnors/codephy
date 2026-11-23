// CodePhy — lecciones de Python científico. Código portable.
export const unidad11 = {
  "id": "unidad-11",
  "numero": 11,
  "titulo": "Ecuaciones diferenciales",
  "descripcion": "Modela evolución temporal con Euler, Runge-Kutta y solvers de SciPy.",
  "objetivos": [
    "Plantear ecuaciones de evolución.",
    "Implementar y comparar integradores.",
    "Modelar sistemas acoplados y difusión."
  ],
  "conocimientosPrevios": "Unidad 10: métodos numéricos, además de funciones y arreglos.",
  "icono": "python-odes",
  "lecciones": [
    "python-51-el-metodo-de-euler",
    "python-52-runge-kutta-de-cuarto-orden",
    "python-53-integracion-con-scipy",
    "python-54-sistemas-acoplados",
    "python-55-difusion-de-calor"
  ]
};
export const leccionesUnidad11 = [
  {
    "id": "python-51-el-metodo-de-euler",
    "unidadId": "unidad-11",
    "numero": "11.1",
    "modulo": "Ecuaciones diferenciales",
    "titulo": "El método de Euler",
    "subtitulo": "Resuelve paso a paso una ecuación diferencial sencilla.",
    "icono": "python-odes",
    "objetivos": [
      "Convertir una EDO en pasos",
      "Implementar Euler",
      "Comparar con una solución analítica"
    ],
    "secciones": [
      {
        "id": "u11-1-seccion-1",
        "titulo": "Ecuación de enfriamiento",
        "etiqueta": "01 / ECUACIÓN DE ENFRIAMIENTO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En el modelo de Newton, dT/dt=−k(T−Ta). Euler actualiza T usando la pendiente presente."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-1-01",
              "titulo": "Ecuación de enfriamiento",
              "codigo": "T=80.0\nTa=20.0\nk=0.1\ndt=1.0\nT=T+dt*(-k*(T-Ta))\nprint(f\"T siguiente: {T:.1f} °C\")",
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
                  "EDO"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Ecuación de enfriamiento",
                  "EDO",
                  "El método de Euler"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-1-01-pregunta",
            "enunciado": "¿Qué ocurre al aumentar T−Ta?",
            "opciones": [
              "Aumenta el ritmo de enfriamiento",
              "La temperatura deja de cambiar",
              "Se invierte necesariamente el tiempo"
            ],
            "correcta": 0,
            "explicacion": "La rapidez inicial depende de la diferencia de temperatura."
          }
        ]
      },
      {
        "id": "u11-1-seccion-2",
        "titulo": "Varios pasos de Euler",
        "etiqueta": "02 / VARIOS PASOS DE EULER",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un ciclo repite la misma regla para aproximar una evolución completa."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-1-02",
              "titulo": "Varios pasos de Euler",
              "codigo": "T=80.0\nTa=20.0\nk=0.1\ndt=1.0\nfor _ in range(10):\n    T+=dt*(-k*(T-Ta))\nprint(f\"Después de 10 s: {T:.2f} °C\")",
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
                  "EDO"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Varios pasos de Euler",
                  "EDO",
                  "El método de Euler"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-1-02-pregunta",
            "enunciado": "¿Qué condición debe cumplir un paso razonable?",
            "opciones": [
              "Debe ser suficientemente pequeño para la precisión y estabilidad requeridas",
              "Debe ser siempre mayor que 10",
              "Debe ser igual a cero"
            ],
            "correcta": 0,
            "explicacion": "El paso temporal influye en error y estabilidad numéricos."
          }
        ]
      },
      {
        "id": "u11-1-seccion-3",
        "titulo": "Euler frente a solución exacta",
        "etiqueta": "03 / EULER FRENTE A SOLUCIÓN EXACTA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Comparar con una expresión analítica ayuda a validar un algoritmo numérico."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-1-03",
              "titulo": "Euler frente a solución exacta",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nk=0.1; Ta=20; dt=1\nt=np.arange(0,11,dt)\nT=np.zeros(len(t)); T[0]=80\nfor i in range(len(t)-1):\n    T[i+1]=T[i]-dt*k*(T[i]-Ta)\nplt.plot(t,T,\"o-\",label=\"Euler\")\nplt.plot(t,Ta+60*np.exp(-k*t),label=\"Exacta\")\nplt.xlabel(\"Tiempo (s)\");plt.ylabel(\"T (°C)\");plt.legend();plt.show()",
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
                  "EDO"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Euler frente a solución exacta",
                  "EDO",
                  "El método de Euler"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-1-03-pregunta",
            "enunciado": "¿Para qué sirve la curva exacta?",
            "opciones": [
              "Para evaluar la aproximación numérica",
              "Para modificar el paso de forma automática",
              "Para cancelar el enfriamiento"
            ],
            "correcta": 0,
            "explicacion": "Una solución conocida proporciona una referencia de validación."
          }
        ]
      },
      {
        "id": "u11-1-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Aproxima dy/dt=−0.2y con y(0)=10 y dt=0.5 durante 5 s.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-1-reto",
              "titulo": "Reto: Decaimiento por Euler",
              "codigo": "y=10.0\ndt=0.5\nfor _ in range(10):\n    y+=dt*(-0.2*y)\nprint(f\"{y:.3f}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Aproxima dy/dt=−0.2y con y(0)=10 y dt=0.5 durante 5 s.",
              "pistas": [
                "Usa un bucle de 10 iteraciones.",
                "Aplica y+=dt*(-0.2*y).",
                "Muestra el resultado final."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "EDO"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Decaimiento por Euler",
                  "EDO"
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
    "ejemploPrincipal": "Ecuación de enfriamiento",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-52-runge-kutta-de-cuarto-orden",
    "unidadId": "unidad-11",
    "numero": "11.2",
    "modulo": "Ecuaciones diferenciales",
    "titulo": "Runge-Kutta de cuarto orden",
    "subtitulo": "Aumenta la precisión de la integración temporal.",
    "icono": "python-odes",
    "objetivos": [
      "Entender pendientes intermedias",
      "Aplicar RK4",
      "Comparar con Euler"
    ],
    "secciones": [
      {
        "id": "u11-2-seccion-1",
        "titulo": "Definir una derivada",
        "etiqueta": "01 / DEFINIR UNA DERIVADA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Separar la ecuación diferencial en una función facilita reutilizar integradores."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-2-01",
              "titulo": "Definir una derivada",
              "codigo": "def f(t,y):\n    return -0.2*y\nprint(f(0,10))",
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
                  "Runge-Kutta"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Definir una derivada",
                  "Runge-Kutta",
                  "Runge-Kutta de cuarto orden"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-2-01-pregunta",
            "enunciado": "¿Qué interpreta f(t,y)?",
            "opciones": [
              "La derivada dy/dt",
              "La solución exacta y(t)",
              "El error absoluto"
            ],
            "correcta": 0,
            "explicacion": "La función devuelve la pendiente del sistema para un estado y tiempo dados."
          }
        ]
      },
      {
        "id": "u11-2-seccion-2",
        "titulo": "Un paso de RK4",
        "etiqueta": "02 / UN PASO DE RK4",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "RK4 combina cuatro estimaciones de pendiente en cada paso."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-2-02",
              "titulo": "Un paso de RK4",
              "codigo": "def f(t,y): return -0.2*y\nt,y,h=0.,10.,0.5\nk1=f(t,y)\nk2=f(t+h/2,y+h*k1/2)\nk3=f(t+h/2,y+h*k2/2)\nk4=f(t+h,y+h*k3)\ny+=h*(k1+2*k2+2*k3+k4)/6\nprint(f\"y={y:.4f}\")",
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
                  "Runge-Kutta"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Un paso de RK4",
                  "Runge-Kutta",
                  "Runge-Kutta de cuarto orden"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-2-02-pregunta",
            "enunciado": "¿Cuántas pendientes evalúa RK4 por paso?",
            "opciones": [
              "Cuatro",
              "Dos",
              "Una"
            ],
            "correcta": 0,
            "explicacion": "Se utilizan k1, k2, k3 y k4."
          }
        ]
      },
      {
        "id": "u11-2-seccion-3",
        "titulo": "Comparación de errores",
        "etiqueta": "03 / COMPARACIÓN DE ERRORES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La solución conocida permite calcular diferencias para un paso de igual tamaño."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-2-03",
              "titulo": "Comparación de errores",
              "codigo": "import numpy as np\nh=1.0; y0=10.0\neuler=y0+h*(-0.2*y0)\nf=lambda y:-0.2*y\nk1=f(y0);k2=f(y0+h*k1/2);k3=f(y0+h*k2/2);k4=f(y0+h*k3)\nrk=y0+h*(k1+2*k2+2*k3+k4)/6\nexacta=y0*np.exp(-0.2*h)\nprint(\"Error Euler:\",round(abs(euler-exacta),5))\nprint(\"Error RK4:\",round(abs(rk-exacta),5))",
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
                  "Runge-Kutta"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Comparación de errores",
                  "Runge-Kutta",
                  "Runge-Kutta de cuarto orden"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-2-03-pregunta",
            "enunciado": "¿Qué solución ofrece menor error para este caso?",
            "opciones": [
              "RK4",
              "Euler",
              "Ambas son idénticas"
            ],
            "correcta": 0,
            "explicacion": "Para esta ecuación suave, RK4 es más preciso con h=1."
          }
        ]
      },
      {
        "id": "u11-2-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Implementa un paso RK4 con f(t,T)=−0.1(T−20), T0=80 y h=1.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-2-reto",
              "titulo": "Reto: Un paso de enfriamiento",
              "codigo": "def f(t,T): return -0.1*(T-20)\nt,T,h=0.,80.,1.\nk1=f(t,T)\nk2=f(t+h/2,T+h*k1/2)\nk3=f(t+h/2,T+h*k2/2)\nk4=f(t+h,T+h*k3)\nT+=h*(k1+2*k2+2*k3+k4)/6\nprint(f\"{T:.3f} °C\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Implementa un paso RK4 con f(t,T)=−0.1(T−20), T0=80 y h=1.",
              "pistas": [
                "Define la derivada f.",
                "Calcula k1 a k4.",
                "Combínalas usando los pesos 1,2,2,1."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Runge-Kutta"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Un paso de enfriamiento",
                  "Runge-Kutta"
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
    "ejemploPrincipal": "Definir una derivada",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-53-integracion-con-scipy",
    "unidadId": "unidad-11",
    "numero": "11.3",
    "modulo": "Ecuaciones diferenciales",
    "titulo": "Integración con SciPy",
    "subtitulo": "Resuelve sistemas dinámicos con un integrador adaptable.",
    "icono": "python-odes",
    "objetivos": [
      "Definir un sistema de primer orden",
      "Utilizar solve_ivp",
      "Evaluar resultados en tiempos definidos"
    ],
    "secciones": [
      {
        "id": "u11-3-seccion-1",
        "titulo": "Decaimiento con solve_ivp",
        "etiqueta": "01 / DECAIMIENTO CON SOLVE_IVP",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "solve_ivp aproxima problemas de valor inicial en un intervalo temporal."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-3-01",
              "titulo": "Decaimiento con solve_ivp",
              "codigo": "from scipy.integrate import solve_ivp\ndef f(t,y): return [-0.2*y[0]]\nsol=solve_ivp(f,(0,5),[10.0],t_eval=[0,5])\nprint(f\"y(5)={sol.y[0,-1]:.3f}\")",
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
                  "SciPy solve_ivp"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Decaimiento con solve_ivp",
                  "SciPy solve_ivp",
                  "Integración con SciPy"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-3-01-pregunta",
            "enunciado": "¿Qué representa [10.0]?",
            "opciones": [
              "La condición inicial",
              "El intervalo temporal",
              "El paso de tiempo"
            ],
            "correcta": 0,
            "explicacion": "La lista indica el estado inicial del sistema."
          }
        ]
      },
      {
        "id": "u11-3-seccion-2",
        "titulo": "Oscilador como sistema",
        "etiqueta": "02 / OSCILADOR COMO SISTEMA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una EDO de segundo orden se transforma en dos EDO de primer orden para posición y velocidad."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-3-02",
              "titulo": "Oscilador como sistema",
              "codigo": "from scipy.integrate import solve_ivp\ndef f(t,y):\n    x,v=y\n    return [v,-4*x]\nsol=solve_ivp(f,(0,3),[1,0],t_eval=[0,3])\nprint(\"Posición final:\",round(sol.y[0,-1],3))",
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
                  "SciPy solve_ivp"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Oscilador como sistema",
                  "SciPy solve_ivp",
                  "Integración con SciPy"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-3-02-pregunta",
            "enunciado": "¿Qué contiene y?",
            "opciones": [
              "Posición y velocidad",
              "Masa y temperatura",
              "Dos pasos temporales"
            ],
            "correcta": 0,
            "explicacion": "La primera componente es x, la segunda v."
          }
        ]
      },
      {
        "id": "u11-3-seccion-3",
        "titulo": "Trayectoria calculada",
        "etiqueta": "03 / TRAYECTORIA CALCULADA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una figura de posición contra tiempo permite interpretar el movimiento oscilatorio."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-3-03",
              "titulo": "Trayectoria calculada",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.integrate import solve_ivp\ndef f(t,y): return [y[1],-4*y[0]]\nt=np.linspace(0,8,200)\nsol=solve_ivp(f,(0,8),[1,0],t_eval=t)\nplt.plot(sol.t,sol.y[0]);plt.xlabel(\"Tiempo (s)\");plt.ylabel(\"Posición (m)\");plt.show()",
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
                  "SciPy solve_ivp"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Trayectoria calculada",
                  "SciPy solve_ivp",
                  "Integración con SciPy"
                ],
                "galeria": true,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-3-03-pregunta",
            "enunciado": "¿Qué indica una curva periódica?",
            "opciones": [
              "Que la posición oscila",
              "Que la aceleración es cero",
              "Que el tiempo retrocede"
            ],
            "correcta": 0,
            "explicacion": "La solución del modelo ideal intercambia energía cinética y potencial."
          }
        ]
      },
      {
        "id": "u11-3-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Integra dV/dt=−V/2 con V(0)=5 V hasta t=4 s usando solve_ivp.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-3-reto",
              "titulo": "Reto: Circuito RC",
              "codigo": "from scipy.integrate import solve_ivp\ndef f(t,V): return [-V[0]/2]\nsol=solve_ivp(f,(0,4),[5.0],t_eval=[4])\nprint(f\"{sol.y[0,-1]:.3f} V\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Integra dV/dt=−V/2 con V(0)=5 V hasta t=4 s usando solve_ivp.",
              "pistas": [
                "Importa solve_ivp.",
                "Devuelve [-V[0]/2] en tu función.",
                "Usa t_eval=[4] y muestra el valor."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "SciPy solve_ivp"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Circuito RC",
                  "SciPy solve_ivp"
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
    "ejemploPrincipal": "Decaimiento con solve_ivp",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-54-sistemas-acoplados",
    "unidadId": "unidad-11",
    "numero": "11.4",
    "modulo": "Ecuaciones diferenciales",
    "titulo": "Sistemas acoplados",
    "subtitulo": "Estudia movimientos con varias variables de estado.",
    "icono": "python-odes",
    "objetivos": [
      "Representar sistemas de EDO",
      "Identificar acoplamientos",
      "Interpretar trayectorias de fase"
    ],
    "secciones": [
      {
        "id": "u11-4-seccion-1",
        "titulo": "Modelo depredador-presa",
        "etiqueta": "01 / MODELO DEPREDADOR-PRESA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un modelo matemático acoplado muestra cómo la evolución de una variable depende de otra."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-4-01",
              "titulo": "Modelo depredador-presa",
              "codigo": "def f(t,y):\n    x,z=y\n    return [x-0.1*x*z,-z+0.02*x*z]\nprint(f(0,[20,5]))",
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
                  "Sistemas dinámicos"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Modelo depredador-presa",
                  "Sistemas dinámicos",
                  "Sistemas acoplados"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-4-01-pregunta",
            "enunciado": "¿Qué hace que el sistema esté acoplado?",
            "opciones": [
              "Cada derivada depende de más de una variable",
              "No existen derivadas",
              "Las variables son constantes"
            ],
            "correcta": 0,
            "explicacion": "Las dos ecuaciones incluyen productos entre las variables."
          }
        ]
      },
      {
        "id": "u11-4-seccion-2",
        "titulo": "Péndulo sin aproximación lineal",
        "etiqueta": "02 / PÉNDULO SIN APROXIMACIÓN LINEAL",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un péndulo ideal obedece theta=−(g/L)sin(theta); para ángulos grandes la solución no es exactamente armónica."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-4-02",
              "titulo": "Péndulo sin aproximación lineal",
              "codigo": "import numpy as np\nfrom scipy.integrate import solve_ivp\ng=9.81;L=1.0\ndef f(t,y): return [y[1],-g/L*np.sin(y[0])]\nsol=solve_ivp(f,(0,2),[0.5,0],t_eval=[0,2])\nprint(\"Ángulo final:\",round(sol.y[0,-1],3))",
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
                  "Sistemas dinámicos"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Péndulo sin aproximación lineal",
                  "Sistemas dinámicos",
                  "Sistemas acoplados"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-4-02-pregunta",
            "enunciado": "¿Qué función introduce la no linealidad?",
            "opciones": [
              "sin(theta)",
              "t_eval",
              "round"
            ],
            "correcta": 0,
            "explicacion": "El seno hace que el modelo difiera del oscilador lineal para ángulos grandes."
          }
        ]
      },
      {
        "id": "u11-4-seccion-3",
        "titulo": "Espacio de fases",
        "etiqueta": "03 / ESPACIO DE FASES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La gráfica de posición contra velocidad muestra la evolución del estado, no su posición temporal aislada."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-4-03",
              "titulo": "Espacio de fases",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.integrate import solve_ivp\ndef f(t,y):return [y[1],-4*y[0]-0.1*y[1]]\nt=np.linspace(0,12,350)\ns=solve_ivp(f,(0,12),[1,0],t_eval=t)\nplt.plot(s.y[0],s.y[1]);plt.xlabel(\"x (m)\");plt.ylabel(\"v (m/s)\");plt.show()",
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
                  "Sistemas dinámicos"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Espacio de fases",
                  "Sistemas dinámicos",
                  "Sistemas acoplados"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-4-03-pregunta",
            "enunciado": "¿Qué representan los ejes del espacio de fases?",
            "opciones": [
              "Posición y velocidad",
              "Tiempo y fuerza",
              "Energía y masa"
            ],
            "correcta": 0,
            "explicacion": "El espacio de fases representa componentes del estado del sistema."
          }
        ]
      },
      {
        "id": "u11-4-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Integra x+0.4x+9x=0 escrita como dos EDO de primer orden con x0=1 y v0=0.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-4-reto",
              "titulo": "Reto: Oscilador amortiguado",
              "codigo": "from scipy.integrate import solve_ivp\ndef f(t,y):\n    x,v=y\n    return [v,-0.4*v-9*x]\ns=solve_ivp(f,(0,4),[1,0],t_eval=[4])\nprint(f\"x={s.y[0,-1]:.3f} m\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Integra x+0.4x+9x=0 escrita como dos EDO de primer orden con x0=1 y v0=0.",
              "pistas": [
                "Haz y=[x,v].",
                "Devuelve [v,-0.4*v-9*x].",
                "Muestra x al tiempo 4 s."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Sistemas dinámicos"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [
                  "Oscilador amortiguado",
                  "Sistemas dinámicos"
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
    "ejemploPrincipal": "Modelo depredador-presa",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  },
  {
    "id": "python-55-difusion-de-calor",
    "unidadId": "unidad-11",
    "numero": "11.5",
    "modulo": "Ecuaciones diferenciales",
    "titulo": "Difusión de calor",
    "subtitulo": "Introduce diferencias finitas para una ecuación en derivadas parciales.",
    "icono": "python-odes",
    "objetivos": [
      "Discretizar una barra",
      "Aplicar esquema explícito",
      "Respetar condiciones de contorno y estabilidad"
    ],
    "secciones": [
      {
        "id": "u11-5-seccion-1",
        "titulo": "Segunda diferencia",
        "etiqueta": "01 / SEGUNDA DIFERENCIA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La derivada espacial segunda se aproxima mediante los puntos vecinos de una malla."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-5-01",
              "titulo": "Segunda diferencia",
              "codigo": "import numpy as np\nT=np.array([20.,20.,80.,20.,20.])\ndx=1.0\ncurvatura=(T[3]-2*T[2]+T[1])/dx**2\nprint(curvatura)",
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
                  "Diferencias finitas"
                ],
                "fisica": [
                  "Termodinámica y física estadística"
                ],
                "palabrasClave": [
                  "Segunda diferencia",
                  "Diferencias finitas",
                  "Difusión de calor"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-5-01-pregunta",
            "enunciado": "¿Qué significa la curvatura negativa en el máximo?",
            "opciones": [
              "La temperatura local supera a sus vecinos",
              "La temperatura es uniforme",
              "La barra no conduce calor"
            ],
            "correcta": 0,
            "explicacion": "En un máximo interior, la segunda diferencia es negativa."
          }
        ]
      },
      {
        "id": "u11-5-seccion-2",
        "titulo": "Un paso de difusión",
        "etiqueta": "02 / UN PASO DE DIFUSIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El método explícito tiene una condición de estabilidad en una dimensión: alpha*dt/dx²≤1/2."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-5-02",
              "titulo": "Un paso de difusión",
              "codigo": "import numpy as np\nT=np.array([20.,20.,80.,20.,20.])\nr=0.2\nnuevo=T.copy()\nnuevo[1:-1]=T[1:-1]+r*(T[2:]-2*T[1:-1]+T[:-2])\nprint(nuevo)",
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
                  "Diferencias finitas"
                ],
                "fisica": [
                  "Termodinámica y física estadística"
                ],
                "palabrasClave": [
                  "Un paso de difusión",
                  "Diferencias finitas",
                  "Difusión de calor"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-5-02-pregunta",
            "enunciado": "¿Qué ocurre con el punto caliente?",
            "opciones": [
              "Disminuye su temperatura",
              "Se hace negativo",
              "No cambia"
            ],
            "correcta": 0,
            "explicacion": "La diferencia local provoca transferencia hacia los vecinos."
          }
        ]
      },
      {
        "id": "u11-5-seccion-3",
        "titulo": "Evolución de una barra",
        "etiqueta": "03 / EVOLUCIÓN DE UNA BARRA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Repetir pasos muestra cómo una perturbación térmica se extiende a lo largo de una barra con extremos fijos."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-5-03",
              "titulo": "Evolución de una barra",
              "codigo": "import numpy as np\nimport matplotlib.pyplot as plt\nT=np.full(31,20.0);T[15]=80.0\nplt.plot(T,label=\"Inicial\")\nfor _ in range(40):\n    nuevo=T.copy()\n    nuevo[1:-1]=T[1:-1]+0.2*(T[2:]-2*T[1:-1]+T[:-2])\n    T=nuevo\nplt.plot(T,label=\"40 pasos\")\nplt.xlabel(\"Nodo espacial\");plt.ylabel(\"Temperatura (°C)\");plt.legend();plt.show()",
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
                  "Diferencias finitas"
                ],
                "fisica": [
                  "Termodinámica y física estadística"
                ],
                "palabrasClave": [
                  "Evolución de una barra",
                  "Diferencias finitas",
                  "Difusión de calor"
                ],
                "galeria": false,
                "dificultadProgramacion": "Avanzado",
                "dificultadFisica": "Intermedia"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u11-5-03-pregunta",
            "enunciado": "¿Qué se mantiene fijo en el modelo?",
            "opciones": [
              "La temperatura de los extremos",
              "La posición del punto más caliente",
              "Todas las temperaturas interiores"
            ],
            "correcta": 0,
            "explicacion": "Los extremos no se actualizan en el bucle."
          }
        ]
      },
      {
        "id": "u11-5-seccion-4",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRÁCTICA",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Partiendo de T=[20,20,60,20,20], ejecuta 10 pasos con r=0.2 y extremos fijos.",
              "Escribe tu solución sin abrir la respuesta de referencia.",
              "Ejecuta el programa, interpreta el resultado y modifica un parámetro."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u11-5-reto",
              "titulo": "Reto: Difusión estable",
              "codigo": "import numpy as np\nT=np.array([20.,20.,60.,20.,20.])\nfor _ in range(10):\n    u=T.copy()\n    u[1:-1]=T[1:-1]+0.2*(T[2:]-2*T[1:-1]+T[:-2])\n    T=u\nprint(np.round(T,2))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Compara tu solución con la respuesta de referencia."
              },
              "reto": true,
              "consigna": "Partiendo de T=[20,20,60,20,20], ejecuta 10 pasos con r=0.2 y extremos fijos.",
              "pistas": [
                "Crea un arreglo de tipo float.",
                "Actualiza solo las posiciones interiores.",
                "Usa una copia para evitar mezclar tiempos."
              ],
              "archivosRequeridos": [],
              "etiquetas": {
                "programacion": [
                  "Diferencias finitas"
                ],
                "fisica": [
                  "Termodinámica y física estadística"
                ],
                "palabrasClave": [
                  "Difusión estable",
                  "Diferencias finitas"
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
    "ejemploPrincipal": "Segunda diferencia",
    "dificultadProgramacion": "Avanzado",
    "dificultadFisica": "Intermedia"
  }
];
