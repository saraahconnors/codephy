import { useEffect, useRef, useState } from "react";

function enlaceColabValido(enlace) {
  if (!enlace) return null;
  try {
    const url = new URL(enlace);
    return url.protocol === "https:" && url.hostname === "colab.research.google.com"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export default function CodeBlock({ codigo, titulo, colabUrl = "" }) {
  const [estado, setEstado] = useState("inicial");
  const enlaceColab = enlaceColabValido(colabUrl);
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

        <div className="acciones-codigo">
          <button
            type="button"
            className="boton-copiar"
            onClick={copiarCodigo}
            aria-label={`Copiar código: ${titulo}`}
          >
            {estado === "copiado" ? "¡Copiado!" : "Copiar código"}
          </button>
          {enlaceColab ? (
            <a className="boton-colab" href={enlaceColab} target="_blank" rel="noopener noreferrer"
               aria-label={`Abrir en Google Colab: ${titulo}`}>
              ↗ Abrir en Colab
            </a>
          ) : null}
        </div>
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
