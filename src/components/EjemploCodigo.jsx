import CodeBlock from "./CodeBlock.jsx";
import ResultadoCodigo from "./ResultadoCodigo.jsx";

// Un mismo ejemplo se puede utilizar en una lección y en la galería.
export default function EjemploCodigo({ ejemplo }) {
  return <div className="ejemplo-didactico">
    <CodeBlock codigo={ejemplo.codigo} titulo={ejemplo.titulo} colabUrl={ejemplo.colabUrl || ""} />
    <ResultadoCodigo key={ejemplo.id} resultado={ejemplo.resultado} />
  </div>;
}
