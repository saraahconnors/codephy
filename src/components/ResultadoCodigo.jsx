import { useState } from "react";

// Las rutas de archivos son relativas a public/resultados/.
// Vite usa BASE_URL para funcionar también en GitHub Pages (/codephy/).
function rutaResultado(archivo) {
  if (!archivo || archivo.startsWith("/") || archivo.includes("..") || /^[a-z]+:/i.test(archivo)) return null;
  return `${import.meta.env.BASE_URL}resultados/${archivo}`;
}

function ContenidoResultado({ resultado }) {
  if (!resultado) return <p className="resultado-pendiente">Resultado pendiente de registrar desde Colab.</p>;
  if (resultado.tipo === "mixto") {
    return <div className="resultado-mixto">{(resultado.elementos || []).map((elemento, i) => <ContenidoResultado key={i} resultado={elemento} />)}</div>;
  }
  if (resultado.tipo === "texto") return <pre className="resultado salida-consola"><samp>{resultado.contenido}</samp></pre>;
  if (resultado.tipo === "tabla") {
    return <div className="tabla-desplazable"><table className="tabla-leccion"><thead><tr>{(resultado.columnas || []).map((col, i) => <th key={i} scope="col">{col}</th>)}</tr></thead><tbody>{(resultado.filas || []).map((fila, i) => <tr key={i}>{fila.map((celda, j) => <td key={j}>{celda}</td>)}</tr>)}</tbody></table></div>;
  }
  const url = rutaResultado(resultado.archivo);
  if (resultado.tipo === "imagen") return url ? <figure className="figura-resultado"><img src={url} alt={resultado.descripcion || "Salida gráfica de Python"} loading="lazy" /><figcaption>{resultado.descripcion}</figcaption></figure> : <p className="resultado-pendiente">Imagen pendiente: agrega la ruta del archivo exportado de Colab.</p>;
  if (resultado.tipo === "video") {
    if (!url) return <p className="resultado-pendiente">Animación pendiente: agrega el archivo MP4 o WebM de Colab.</p>;
    const poster = rutaResultado(resultado.poster);
    return <figure className="figura-resultado"><video controls preload="metadata" playsInline poster={poster || undefined}><source src={url} type={url.toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4"} />Tu navegador no puede reproducir este video.</video><figcaption>{resultado.descripcion}</figcaption></figure>;
  }
  return <p className="resultado-pendiente">Tipo de resultado no reconocido: {resultado.tipo}</p>;
}

export default function ResultadoCodigo({ resultado, titulo = "Resultado de referencia" }) {
  const [visible, setVisible] = useState(false);
  return <div className="resultado-interactivo">
    <div className="resultado-interactivo-barra">
      <span className="etiqueta">▸ {titulo}</span>
      <button className="boton boton-revelar" type="button" aria-expanded={visible} onClick={() => setVisible(v => !v)}>
        {visible ? "◀ Ocultar resultado" : "▶ Mostrar resultado"}
      </button>
    </div>
    {visible ? <div className="resultado-interactivo-contenido"><ContenidoResultado resultado={resultado} />{resultado?.nota && <p className="leccion-nota">{resultado.nota}</p>}</div> : <p className="resultado-invitacion">Antes de revelar la salida, predice qué mostrará el programa. Después puedes comprobarlo en Colab.</p>}
  </div>;
}
