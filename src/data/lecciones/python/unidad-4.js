// Unidad 4. Python estándar: ejecutable en CodePhy, Colab y VS Code.
export const unidad4 = {
  "id": "unidad-4",
  "numero": 4,
  "titulo": "Estructuras de datos y funciones",
  "icono": "python-functions",
  "descripcion": "Organiza mediciones en colecciones y crea funciones reutilizables para cálculos físicos.",
  "objetivos": [
    "Trabajar con listas, tuplas, cadenas y diccionarios.",
    "Escribir funciones con argumentos, valores de retorno y documentación.",
    "Usar el módulo math y construir un programa modular para resolver un problema físico."
  ],
  "conocimientosPrevios": "Unidades 1–3: variables, condicionales y ciclos.",
  "lecciones": [
    "python-16-colecciones",
    "python-17-diccionarios",
    "python-18-funciones",
    "python-19-math",
    "python-20-proyecto-funciones"
  ]
};
export const leccionesUnidad4 = [
  {
    "id": "python-16-colecciones",
    "unidadId": "unidad-4",
    "numero": "4.1",
    "modulo": "Estructuras de datos y funciones",
    "titulo": "Listas, índices y cadenas",
    "subtitulo": "Organiza mediciones y accede a elementos por posición.",
    "icono": "python-functions",
    "objetivos": [
      "Crear listas y consultar elementos mediante índices.",
      "Extraer subconjuntos con rebanadas.",
      "Distinguir datos numéricos de cadenas de texto."
    ],
    "secciones": [
      {
        "id": "u4-1-listas",
        "titulo": "Una colección ordenada",
        "etiqueta": "01 / UNA COLECCIÓN ORDENADA",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una lista guarda varios valores bajo un mismo nombre. Los índices empiezan en cero y los negativos cuentan desde el final."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-01-lista",
              "titulo": "Tres mediciones de longitud",
              "codigo": "medidas = [1.20, 1.24, 1.22]  # m\nprint(\"Primera:\", medidas[0], \"m\")\nprint(\"Última:\", medidas[-1], \"m\")\nprint(\"Cantidad:\", len(medidas))",
              "resultado": {
                "tipo": "texto",
                "contenido": "Primera: 1.2 m\nÚltima: 1.22 m\nCantidad: 3"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Listas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u4q1",
            "enunciado": "¿Qué devuelve medidas[1] si medidas = [1.20, 1.24, 1.22]?",
            "opciones": [
              "1.20",
              "1.24",
              "1.22"
            ],
            "correcta": 1,
            "explicacion": "El segundo elemento tiene índice 1."
          }
        ]
      },
      {
        "id": "u4-1-segmentos",
        "titulo": "Rebanadas y operaciones",
        "etiqueta": "02 / REBANADAS Y OPERACIONES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "La expresión datos[inicio:fin] selecciona desde inicio hasta antes de fin. No altera la lista original."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-01-slice",
              "titulo": "Primeras mediciones",
              "codigo": "temperaturas = [20, 21, 23, 22, 24]\nprint(temperaturas[:3])\nprint(temperaturas[2:])",
              "resultado": {
                "tipo": "texto",
                "contenido": "[20, 21, 23]\n[23, 22, 24]"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Listas"
                ],
                "fisica": [
                  "Termodinámica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "nota",
            "contenido": "Una lista permite mezclar tipos, aunque en una tabla de mediciones conviene conservar valores con significado y unidades coherentes."
          }
        ]
      },
      {
        "id": "u4-1-cadenas",
        "titulo": "Cadenas de texto",
        "etiqueta": "03 / CADENAS DE TEXTO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una cadena str guarda texto, por ejemplo el nombre de una magnitud. Podemos combinarla con sus unidades para preparar una salida legible."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-01-texto",
              "titulo": "Etiqueta de una magnitud",
              "codigo": "magnitud = \"longitud\"\nunidad = \"m\"\nprint(magnitud.upper())\nprint(f\"Unidad de {magnitud}: {unidad}\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "LONGITUD\nUnidad de longitud: m"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Cadenas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-1-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea una lista con cuatro tiempos: 0.5, 0.7, 0.6 y 0.8 s.",
              "Imprime el segundo tiempo y los dos últimos.",
              "Incluye la unidad en el mensaje."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-01-reto",
              "titulo": "Reto: seleccionar tiempos",
              "codigo": "tiempos = [0.5, 0.7, 0.6, 0.8]\nprint(\"Segundo:\", tiempos[1], \"s\")\nprint(\"Últimos:\", tiempos[-2:], \"s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Segundo: 0.7 s\nÚltimos: [0.6, 0.8] s"
              },
              "reto": true,
              "consigna": "Selecciona el segundo valor y los dos últimos tiempos de una lista de cuatro mediciones.",
              "pistas": [
                "Los índices comienzan en cero.",
                "El segundo elemento tiene índice 1.",
                "Usa tiempos[-2:] para obtener los últimos dos."
              ],
              "etiquetas": {
                "programacion": [
                  "Listas"
                ],
                "fisica": [
                  "Física experimental"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Selección de mediciones",
    "dificultadProgramacion": "Básico",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-17-diccionarios",
    "unidadId": "unidad-4",
    "numero": "4.2",
    "modulo": "Estructuras de datos y funciones",
    "titulo": "Tuplas y diccionarios",
    "subtitulo": "Distingue colecciones por posición y por nombre.",
    "icono": "python-functions",
    "objetivos": [
      "Reconocer una tupla y su carácter inmutable.",
      "Crear diccionarios y consultar valores por clave.",
      "Recorrer pares de datos para describir un sistema físico."
    ],
    "secciones": [
      {
        "id": "u4-2-tuplas",
        "titulo": "Tuplas para pares de valores",
        "etiqueta": "01 / TUPLAS PARA PARES DE VALORES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una tupla se escribe con paréntesis y agrupa elementos ordenados que no pueden modificarse directamente. Sirve para representar un par de coordenadas fijo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-02-tupla",
              "titulo": "Posición en el plano",
              "codigo": "posicion = (3.0, 4.0)  # m\nx, y = posicion\nprint(f\"x={x:.1f} m; y={y:.1f} m\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "x=3.0 m; y=4.0 m"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Tuplas"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u4q2",
            "enunciado": "¿Qué instrucción obtiene la coordenada y de la tupla posicion?",
            "opciones": [
              "posicion[0]",
              "posicion[1]",
              "posicion[2]"
            ],
            "correcta": 1,
            "explicacion": "La coordenada y ocupa el índice 1."
          }
        ]
      },
      {
        "id": "u4-2-diccionarios",
        "titulo": "Información con claves",
        "etiqueta": "02 / INFORMACIÓN CON CLAVES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un diccionario relaciona claves con valores. Una propiedad física puede identificarse con un nombre como masa o rapidez; las unidades se documentan en la explicación."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-02-dict",
              "titulo": "Datos de un cuerpo",
              "codigo": "cuerpo = {\"masa\": 2.5, \"rapidez\": 4.0}\nprint(\"Masa:\", cuerpo[\"masa\"], \"kg\")\nprint(\"Rapidez:\", cuerpo[\"rapidez\"], \"m/s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Masa: 2.5 kg\nRapidez: 4.0 m/s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Diccionarios"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-2-recorrido",
        "titulo": "Recorrer pares clave-valor",
        "etiqueta": "03 / RECORRER PARES CLAVE-VALOR",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "El método items() devuelve pares (clave, valor) que podemos recorrer con for. Es útil para describir los parámetros de un experimento."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-02-items",
              "titulo": "Parámetros de una práctica",
              "codigo": "parametros = {\"tension_V\": 12, \"corriente_A\": 3}\nfor nombre, valor in parametros.items():\n    print(nombre, \"=\", valor)",
              "resultado": {
                "tipo": "texto",
                "contenido": "tension_V = 12\ncorriente_A = 3"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Diccionarios"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-2-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Crea un diccionario con frecuencia = 50 y periodo = 0.02.",
              "Lee los dos valores usando sus claves.",
              "Muestra cada magnitud con su unidad."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-02-reto",
              "titulo": "Reto: parámetros de una onda",
              "codigo": "onda = {\"frecuencia\": 50, \"periodo\": 0.02}\nprint(\"Frecuencia:\", onda[\"frecuencia\"], \"Hz\")\nprint(\"Periodo:\", onda[\"periodo\"], \"s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Frecuencia: 50 Hz\nPeriodo: 0.02 s"
              },
              "reto": true,
              "consigna": "Organiza frecuencia y periodo de una señal en un diccionario y muestra sus unidades.",
              "pistas": [
                "Define un diccionario con dos claves.",
                "Usa onda[\"frecuencia\"] para recuperar un valor.",
                "Muestra Hz y s como parte de los textos impresos."
              ],
              "etiquetas": {
                "programacion": [
                  "Diccionarios"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Organización de magnitudes",
    "dificultadProgramacion": "Básico",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-18-funciones",
    "unidadId": "unidad-4",
    "numero": "4.3",
    "modulo": "Estructuras de datos y funciones",
    "titulo": "Crear funciones con def",
    "subtitulo": "Separa un cálculo en una función que puedas utilizar con distintos valores.",
    "icono": "python-functions",
    "objetivos": [
      "Definir funciones y llamar sus nombres.",
      "Distinguir parámetros, argumentos y return.",
      "Comprender por qué reutilizar funciones mejora un programa."
    ],
    "secciones": [
      {
        "id": "u4-3-definicion",
        "titulo": "Definir y llamar una función",
        "etiqueta": "01 / DEFINIR Y LLAMAR UNA FUNCIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una función se declara con def, recibe argumentos mediante parámetros y puede devolver un resultado usando return. El código del cuerpo se indenta."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-03-def",
              "titulo": "Energía potencial",
              "codigo": "def energia_potencial(masa, altura):\n    return masa * 9.81 * altura\n\nprint(f\"{energia_potencial(2, 5):.2f} J\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "98.10 J"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u4q3",
            "enunciado": "¿Qué devuelve energia_potencial(2, 5) con g = 9.81?",
            "opciones": [
              "9.81 J",
              "98.1 J",
              "10 J"
            ],
            "correcta": 1,
            "explicacion": "La expresión calcula 2 × 9.81 × 5 = 98.1 J."
          }
        ]
      },
      {
        "id": "u4-3-retorno",
        "titulo": "return no es print",
        "etiqueta": "02 / RETURN NO ES PRINT",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "print() muestra información, pero return entrega un valor que puede almacenarse y usarse en otro cálculo."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-03-return",
              "titulo": "Reutilizar un resultado",
              "codigo": "def presion(fuerza, area):\n    return fuerza / area\n\np = presion(30, 0.5)\nprint(f\"Presión: {p:.1f} Pa\")\nprint(f\"Presión doble: {2*p:.1f} Pa\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Presión: 60.0 Pa\nPresión doble: 120.0 Pa"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "nota",
            "contenido": "Se supone una fuerza normal uniformemente distribuida sobre un área positiva."
          }
        ]
      },
      {
        "id": "u4-3-parametros",
        "titulo": "Parámetros con valores predeterminados",
        "etiqueta": "03 / PARÁMETROS CON VALORES PREDETERMINADOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un parámetro puede tener un valor predeterminado. Podemos utilizar el mismo cálculo en diferentes condiciones sin copiar la fórmula."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-03-default",
              "titulo": "Energía cinética reusable",
              "codigo": "def energia_cinetica(masa, rapidez=3.0):\n    return 0.5 * masa * rapidez**2\n\nprint(energia_cinetica(2.0))\nprint(energia_cinetica(2.0, 5.0))",
              "resultado": {
                "tipo": "texto",
                "contenido": "9.0\n25.0"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-3-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Define una función densidad(masa, volumen).",
              "Devuelve el cociente masa / volumen.",
              "Evalúa una masa de 6 kg y volumen de 2 m³."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-03-reto",
              "titulo": "Reto: función de densidad",
              "codigo": "def densidad(masa, volumen):\n    return masa / volumen\n\nprint(f\"{densidad(6, 2):.1f} kg/m³\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "3.0 kg/m³"
              },
              "reto": true,
              "consigna": "Crea una función que calcule densidad para 6 kg y 2 m³ y muestra el resultado con unidades.",
              "pistas": [
                "Declara def densidad(masa, volumen):",
                "Dentro devuelve masa / volumen.",
                "Llama a la función con 6 y 2 e imprime el valor."
              ],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Cálculos físicos reutilizables",
    "dificultadProgramacion": "Básico",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-19-math",
    "unidadId": "unidad-4",
    "numero": "4.4",
    "modulo": "Estructuras de datos y funciones",
    "titulo": "Funciones matemáticas y alcance",
    "subtitulo": "Utiliza el módulo math y distingue variables locales de las definidas fuera de una función.",
    "icono": "python-functions",
    "objetivos": [
      "Importar math y llamar sqrt, sin y pi.",
      "Convertir grados a radianes antes de usar trigonometría.",
      "Comprender alcance local y documentar funciones."
    ],
    "secciones": [
      {
        "id": "u4-4-math",
        "titulo": "El módulo math",
        "etiqueta": "01 / EL MÓDULO MATH",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "math incluye funciones y constantes matemáticas comunes. math.sqrt(x) obtiene una raíz cuadrada y math.pi representa π."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-04-math",
              "titulo": "Periodo de un péndulo ideal",
              "codigo": "import math\nlongitud = 1.0  # m\ng = 9.81  # m/s²\nperiodo = 2 * math.pi * math.sqrt(longitud / g)\nprint(f\"Periodo aproximado: {periodo:.3f} s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Periodo aproximado: 2.006 s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Módulo math"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "nota",
            "contenido": "La fórmula corresponde a pequeñas oscilaciones. No describe de forma exacta los periodos a amplitudes grandes."
          },
          {
            "tipo": "pregunta",
            "id": "u4q4",
            "enunciado": "¿Qué expresión calcula la raíz cuadrada de longitud / g?",
            "opciones": [
              "math.sqrt(longitud / g)",
              "math.pi(longitud / g)",
              "math.sin(longitud / g)"
            ],
            "correcta": 0,
            "explicacion": "sqrt() calcula la raíz cuadrada."
          }
        ]
      },
      {
        "id": "u4-4-angulos",
        "titulo": "Ángulos en radianes",
        "etiqueta": "02 / ÁNGULOS EN RADIANES",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "math.sin() y math.cos() reciben ángulos en radianes. Convierte grados mediante math.radians() antes de evaluar funciones trigonométricas."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-04-angulo",
              "titulo": "Componente horizontal de una velocidad",
              "codigo": "import math\nrapidez = 10.0  # m/s\nangulo = math.radians(60)\nvx = rapidez * math.cos(angulo)\nprint(f\"Componente horizontal: {vx:.1f} m/s\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Componente horizontal: 5.0 m/s"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Trigonometría"
                ],
                "fisica": [
                  "Mecánica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-4-alcance",
        "titulo": "Variables locales y documentación",
        "etiqueta": "03 / VARIABLES LOCALES Y DOCUMENTACIÓN",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Una variable creada dentro de una función pertenece normalmente a su ámbito local. Una docstring documenta su propósito y puede consultarse con help()."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-04-local",
              "titulo": "Función documentada",
              "codigo": "def frecuencia(periodo):\n    \"\"\"Devuelve la frecuencia en Hz desde un periodo positivo en s.\"\"\"\n    f = 1 / periodo\n    return f\n\nprint(f\"{frecuencia(0.02):.1f} Hz\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "50.0 Hz"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Ondas y óptica"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-4-practica",
        "titulo": "Practica lo aprendido",
        "etiqueta": "04 / PRACTICA LO APRENDIDO",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Importa math.",
              "Escribe una función que reciba el radio de un círculo.",
              "Devuelve el área para r = 2 m y muestra dos decimales."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-04-reto",
              "titulo": "Reto: superficie circular",
              "codigo": "import math\ndef area_circulo(radio):\n    return math.pi * radio**2\nprint(f\"{area_circulo(2):.2f} m²\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "12.57 m²"
              },
              "reto": true,
              "consigna": "Escribe una función que calcule el área de un círculo de radio 2 m usando math.pi.",
              "pistas": [
                "Importa math al principio.",
                "Define area_circulo(radio) y devuelve math.pi * radio**2.",
                "Muestra el resultado con :.2f y unidades de m²."
              ],
              "etiquetas": {
                "programacion": [
                  "Módulo math"
                ],
                "fisica": [
                  "Métodos matemáticos para física"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Cálculos trigonométricos",
    "dificultadProgramacion": "Básico",
    "dificultadFisica": "Introductoria"
  },
  {
    "id": "python-20-proyecto-funciones",
    "unidadId": "unidad-4",
    "numero": "4.5",
    "modulo": "Estructuras de datos y funciones",
    "titulo": "Proyecto: calculadora modular",
    "subtitulo": "Reúne estructuras de datos, decisiones y funciones para analizar un sistema físico.",
    "icono": "python-functions",
    "objetivos": [
      "Crear funciones independientes con responsabilidades claras.",
      "Guardar parámetros y resultados en un diccionario.",
      "Validar datos y comunicar resultados con unidades."
    ],
    "secciones": [
      {
        "id": "u4-5-diseño",
        "titulo": "Separar datos y cálculos",
        "etiqueta": "01 / SEPARAR DATOS Y CÁLCULOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Un programa modular conserva sus fórmulas en funciones distintas de la presentación. Aquí modelamos un resistor óhmico ideal con la ley V = IR."
          },
          {
            "tipo": "ecuacion",
            "latex": "V=IR"
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-05-ohm",
              "titulo": "Funciones para un resistor",
              "codigo": "def corriente(voltaje, resistencia):\n    return voltaje / resistencia\n\ndef potencia(voltaje, intensidad):\n    return voltaje * intensidad\n\nI = corriente(12.0, 4.0)\nprint(f\"Corriente: {I:.1f} A\")\nprint(f\"Potencia: {potencia(12.0, I):.1f} W\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Corriente: 3.0 A\nPotencia: 36.0 W"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          },
          {
            "tipo": "pregunta",
            "id": "u4q5",
            "enunciado": "Si el voltaje es 12 V y la resistencia 4 Ω, ¿cuál es la corriente?",
            "opciones": [
              "48 A",
              "3 A",
              "0.33 A"
            ],
            "correcta": 1,
            "explicacion": "I = V/R = 12/4 = 3 A."
          }
        ]
      },
      {
        "id": "u4-5-diccionario",
        "titulo": "Organizar resultados",
        "etiqueta": "02 / ORGANIZAR RESULTADOS",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Los diccionarios permiten guardar los resultados sin mezclar sus nombres con su posición en una lista."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-05-resumen",
              "titulo": "Diccionario de resultados",
              "codigo": "def analizar(V, R):\n    I = V / R\n    return {\"corriente_A\": I, \"potencia_W\": V * I}\n\nres = analizar(9.0, 3.0)\nfor clave, valor in res.items():\n    print(clave, \":\", valor)",
              "resultado": {
                "tipo": "texto",
                "contenido": "corriente_A : 3.0\npotencia_W : 27.0"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Diccionarios"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-5-validacion",
        "titulo": "Comprobar el dominio físico",
        "etiqueta": "03 / COMPROBAR EL DOMINIO FÍSICO",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "En el modelo de un resistor pasivo, la resistencia debe ser positiva. Antes de dividir es necesario revisar esta condición."
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-05-validar",
              "titulo": "Entrada válida",
              "codigo": "def corriente(V, R):\n    if R <= 0:\n        return None\n    return V / R\n\nresultado = corriente(12, 0)\nif resultado is None:\n    print(\"Resistencia no válida\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "Resistencia no válida"
              },
              "reto": false,
              "consigna": "",
              "pistas": [],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      },
      {
        "id": "u4-5-proyecto",
        "titulo": "Proyecto integrador",
        "etiqueta": "04 / PROYECTO INTEGRADOR",
        "bloques": [
          {
            "tipo": "pasos",
            "items": [
              "Define una función que reciba el voltaje y resistencia de un resistor.",
              "Para R <= 0 devuelve None y presenta un mensaje.",
              "Para R > 0 devuelve un diccionario con intensidad y potencia.",
              "Comprueba con 10 V y 5 Ω."
            ]
          },
          {
            "tipo": "ejemplo",
            "ejemplo": {
              "id": "u4-05-proyecto",
              "titulo": "Proyecto: analizar un resistor",
              "codigo": "def analizar_resistor(V, R):\n    if R <= 0:\n        return None\n    I = V / R\n    return {\"corriente\": I, \"potencia\": V * I}\n\nresultados = analizar_resistor(10, 5)\nif resultados is None:\n    print(\"Resistencia no válida\")\nelse:\n    print(f\"I={resultados['corriente']:.1f} A\")\n    print(f\"P={resultados['potencia']:.1f} W\")",
              "resultado": {
                "tipo": "texto",
                "contenido": "I=2.0 A\nP=20.0 W"
              },
              "reto": true,
              "consigna": "Construye una función que valide R, calcule I y P y devuelva un diccionario. Prueba con V = 10 V y R = 5 Ω.",
              "pistas": [
                "La función recibe V y R, y comprueba R <= 0.",
                "Calcula I = V / R y P = V * I.",
                "Devuelve un diccionario y utiliza sus claves para imprimir I y P."
              ],
              "etiquetas": {
                "programacion": [
                  "Funciones"
                ],
                "fisica": [
                  "Electromagnetismo"
                ],
                "palabrasClave": [],
                "galeria": false,
                "dificultadProgramacion": "Básico",
                "dificultadFisica": "Introductoria"
              }
            }
          }
        ]
      }
    ],
    "ejemploPrincipal": "Análisis de resistores",
    "dificultadProgramacion": "Básico",
    "dificultadFisica": "Intermedia"
  }
];
