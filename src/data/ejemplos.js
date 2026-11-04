// Contenido demostrativo para comprobar la interfaz.
// Coloca en colabUrl el enlace compartido al notebook/celda correspondiente.
// Mientras sea vacío, el botón indicará «Colab pendiente».

export const modulos = [
  "Fundamentos de Python",
  "Datos y arreglos con NumPy",
  "Visualización",
  "Métodos numéricos",
  "Simulaciones y animaciones",
];

export const ejemplos = [
  {
    colabUrl: "",
    id: "promedio-mediciones",
    titulo: "Promedio de mediciones",
    modulo: "Fundamentos de Python",
    area: "Medición y análisis de datos",
    tarea: "Calcular un promedio",
    descripcion: "Lista de mediciones con un resultado numérico.",
    codigo: `longitudes = [10.2, 10.4, 10.3, 10.5, 10.1]  # cm

promedio = sum(longitudes) / len(longitudes)

print(f"Longitud promedio: {promedio:.2f} cm")`,
    resultado: "Longitud promedio: 10.30 cm",
    nota: "El promedio por sí solo no expresa la dispersión ni la incertidumbre.",
  },
  {
    colabUrl: "",
    id: "posicion-mru",
    titulo: "Movimiento rectilíneo uniforme",
    modulo: "Fundamentos de Python",
    area: "Mecánica",
    tarea: "Generar una tabla",
    descripcion: "Ciclo que calcula posiciones para distintos tiempos.",
    codigo: `posicion_inicial = 2.0  # m
velocidad = 3.0  # m/s
tiempos = [0, 1, 2, 3]

print("t (s) | x (m)")

for tiempo in tiempos:
    posicion = posicion_inicial + velocidad * tiempo
    print(f"{tiempo:5.1f} | {posicion:5.1f}")`,
    resultado: `t (s) | x (m)
  0.0 |   2.0
  1.0 |   5.0
  2.0 |   8.0
  3.0 |  11.0`,
    nota: "El modelo supone velocidad constante.",
  },
  {
    colabUrl: "",
    id: "energia-foton",
    titulo: "Energía de un fotón",
    modulo: "Fundamentos de Python",
    area: "Óptica",
    tarea: "Utilizar una función",
    descripcion:
      "Función con validación de entrada y un resultado en notación científica.",
    codigo: `def energia_foton(longitud_onda):
    if longitud_onda <= 0:
        raise ValueError("La longitud de onda debe ser positiva.")

    h = 6.62607015e-34  # J s
    c = 299792458  # m/s

    return h * c / longitud_onda


longitud_onda = 500e-9  # m
energia = energia_foton(longitud_onda)

print(f"Energía: {energia:.3e} J")`,
    resultado: "Energía: 3.973e-19 J",
    nota: "La longitud de onda se expresa en metros y corresponde al vacío.",
  },
];
