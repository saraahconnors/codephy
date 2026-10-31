import { useEffect, useRef, useState } from "react";

export default function CodeBlock({ codigo, titulo }) {
  const [estado, setEstado] = useState("inicial");
  const temporizador = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(temporizador.current);
  }, []);

  async function copiarCodigo() {
    window.clearTimeout(temporizador.current);

    try {
      await navigator.clipboard.writeText(codigo);
      setEstado("copiado");

      temporizador.current = window.setTimeout(() => {
        setEstado("inicial");
      }, 2500);
    } catch {
      setEstado("error");
    }
  }

  return (
    <div className="bloque-codigo">
      <div className="barra-codigo">
        <span>Python</span>

        <button
          type="button"
          className="boton-copiar"
          onClick={copiarCodigo}
          aria-label={`Copiar código: ${titulo}`}
        >
          {estado === "copiado" ? "¡Copiado!" : "Copiar código"}
        </button>
      </div>

      <pre>
        <code>{codigo}</code>
      </pre>

      <p className="mensaje-copia" role="status">
        {estado === "copiado" &&
          "Código copiado con sus saltos de línea y sangría."}

        {estado === "error" &&
          "No se pudo copiar. Selecciona el código y cópialo manualmente."}
      </p>
    </div>
  );
}
