import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/** Muestra fórmulas LaTeX como ecuaciones accesibles y legibles. */
export default function MathEquation({ latex, block = true, label }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: block,
        throwOnError: false,
        strict: "warn",
        trust: false,
        output: "htmlAndMathml",
      });
    } catch {
      return null;
    }
  }, [latex, block]);
  if (!html) return <code>{latex}</code>;
  const Element = block ? "div" : "span";
  return (
    <Element
      className={block ? "ecuacion-leccion ecuacion-katex" : "ecuacion-en-linea"}
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
