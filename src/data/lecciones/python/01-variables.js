// Una lección es un conjunto de datos: contenido separado de su presentación.
// Los ejemplos de la galería permanecen en src/data/ejemplos.js.
export const leccionVariables = {
  id: "python-variables",
  modulo: "Fundamentos de Python",
  numero: "01",
  titulo: "Variables y tipos de datos",
  subtitulo: "Representa magnitudes físicas y realiza tu primer cálculo en Python.",
  tiempo: "15–20 min (estimado)",
  nivel: "Inicial",
  objetivos: [
    "Identificar qué hace una variable y cómo se le asigna un valor.",
    "Distinguir los tipos int, float, str y bool; reconocer complex.",
    "Calcular e interpretar la energía cinética conservando sus unidades."
  ],
  // Pega aquí el enlace que hayas copiado desde la celda de Google Colab.
  // Cuando una URL exista, aparecerá el botón activo junto a «Copiar código».
  colab: {
    inicial: "",
    completo: "",
    reto: "",
  },
  ecuaciones: {
    energia: String.raw`E_c = \frac{1}{2}mv^2`,
    sustitucion: String.raw`E_c = \frac{1}{2}(2\,\mathrm{kg})(3\,\mathrm{m/s})^2 = 9\,\mathrm{J}`,
  },
  codigoInicial: `masa = 2.0       # masa en kg
velocidad = 3.0  # velocidad en m/s
energia = 0.5 * masa * velocidad ** 2
print(energia)`,
  codigoCompleto: `# Energía cinética de un objeto en movimiento
masa = 2.0         # kg
velocidad = 3.0    # m/s
energia = 0.5 * masa * velocidad ** 2

print(f"Energía cinética: {energia:.2f} J")`,
  codigoReto: `masa = 2.0       # kg
velocidad = 6.0  # m/s
energia = 0.5 * masa * velocidad ** 2
print(f"Energía cinética: {energia:.2f} J")`,
};
