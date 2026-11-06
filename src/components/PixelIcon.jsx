// Íconos pixel art originales de CodePhy, en SVG dentro de public/icons/.
// BASE_URL permite que funcionen tanto en local como en GitHub Pages (/codephy/).
const etiquetas = {
  "python-intro": "Introducción a Python", "python-logic": "Condicionales y lógica", "python-loops": "Ciclos y automatización", terminal: "Terminal", folder: "Carpeta", atom: "Átomo", graph: "Gráfica", flask: "Simulación",
  mechanics: "Mecánica clásica", thermowaves: "Calor, ondas y fluidos",
  optics: "Óptica", quantum: "Fenomenología cuántica y relativista",
  electromagnetism: "Electromagnetismo", vector: "Análisis vectorial",
  numeric: "Métodos numéricos", special: "Funciones especiales",
  linear: "Álgebra lineal", measurement: "Mediciones",
};
export default function PixelIcon({ name = "terminal", size = 42 }) {
  const nombre = Object.hasOwn(etiquetas, name) ? name : "terminal";
  return (
    <img
      src={`${import.meta.env.BASE_URL}icons/${nombre}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="pixel-icon"
      style={{ flexShrink: 0 }}
    />
  );
}
