import { useState } from "react";
import PixelIcon from "./PixelIcon.jsx";
import EjemploCodigo from "./EjemploCodigo.jsx";
import MathEquation from "./MathEquation.jsx";

function Pregunta({ bloque }) {
  const [respuesta, setRespuesta] = useState("");
  const [comprobada, setComprobada] = useState(false);
  const acierto = Number(respuesta) === bloque.correcta;
  return <div className="pregunta-leccion">
    <fieldset className="opciones-leccion"><legend>Predice el resultado y selecciona una respuesta</legend>
      {bloque.opciones.map((texto, i) => <label className="opcion-leccion" key={i}>
        <input type="radio" name={bloque.id} checked={respuesta === String(i)} onChange={() => {setRespuesta(String(i));setComprobada(false);}} />{texto}
      </label>)}
    </fieldset>
    <button className="boton boton-principal" type="button" disabled={respuesta === ""} onClick={() => setComprobada(true)}>Comprobar respuesta</button>
    {comprobada && <div className={`retroalimentacion ${acierto ? "acierto" : "reintento"}`} role="status"><strong>{acierto ? "¡Correcto!" : "Revisa tu razonamiento."}</strong><p>{bloque.explicacion}</p></div>}
  </div>;
}

function BloqueLeccion({ bloque }) {
  switch (bloque.tipo) {
    case "texto": return <p>{bloque.contenido}</p>;
    case "ecuacion": return <MathEquation latex={bloque.latex} label={bloque.descripcion} />;
    case "nota": return <div className="leccion-nota">{bloque.contenido}</div>;
    case "ejemplo": return <EjemploCodigo ejemplo={bloque.ejemplo} />;
    case "pregunta": return <Pregunta bloque={bloque} />;
    case "pasos": return <ol className="pasos-leccion">{bloque.items.map((item, i) => <li key={i}>{item}</li>)}</ol>;
    case "lista": return <ul className="lista-errores">{bloque.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
    case "tabla": return <div className="tabla-desplazable"><table className="tabla-leccion"><thead><tr>{bloque.columnas.map((col, i) => <th key={i} scope="col">{col}</th>)}</tr></thead><tbody>{bloque.filas.map((fila, i) => <tr key={i}>{fila.map((valor, j) => <td key={j}>{valor}</td>)}</tr>)}</tbody></table></div>;
    default: return null;
  }
}

export default function LessonPage({ leccion }) {
  if (!leccion) return null;
  return <article className="pagina leccion">
    <a className="volver-leccion" href="#/aprender">← Volver a los módulos</a>
    <div className="leccion-encabezado"><div><p className="etiqueta">▸ {leccion.modulo} / LECCIÓN {leccion.numero}</p><h1>{leccion.titulo}</h1><p className="leccion-subtitulo">{leccion.subtitulo}</p><div className="metadatos"><span>{leccion.nivel}</span><span>{leccion.tiempo}</span><span>{leccion.modulo}</span></div></div><PixelIcon name={leccion.icono || "terminal"} size={88}/></div>
    <div className="leccion-columnas"><div className="leccion-cuerpo">
      <section id="objetivos" className="leccion-panel objetivos"><p className="etiqueta">MISIONES DE ESTA LECCIÓN</p><h2>Al terminar podrás…</h2><ul>{leccion.objetivos.map((objetivo, i) => <li key={i}>{objetivo}</li>)}</ul></section>
      {leccion.secciones.map(seccion => <section id={seccion.id} className="leccion-bloque" key={seccion.id}><p className="etiqueta">{seccion.etiqueta}</p><h2>{seccion.titulo}</h2>{seccion.bloques.map((bloque, i) => <BloqueLeccion key={bloque.id || bloque.ejemplo?.id || i} bloque={bloque} />)}</section>)}
      <div className="leccion-cierre"><strong>✓ FIN DE LA LECCIÓN {leccion.numero}</strong><p>Compara tus predicciones con los resultados de referencia y comprueba los programas en Colab cuando estén vinculados.</p><a className="boton" href="#/aprender">← Volver a la ruta de aprendizaje</a></div>
    </div><aside className="leccion-lateral" aria-label="Contenido de esta lección"><div className="leccion-indice"><p className="etiqueta">EN ESTA LECCIÓN</p><a href="#objetivos" onClick={e=>{e.preventDefault();document.getElementById("objetivos")?.scrollIntoView({behavior:"smooth"});}}>Objetivos</a>{leccion.secciones.map(seccion=><a href={`#${seccion.id}`} key={seccion.id} onClick={e=>{e.preventDefault();document.getElementById(seccion.id)?.scrollIntoView({behavior:"smooth"});}}>{seccion.etiqueta.split(" /")[0]} · {seccion.titulo}</a>)}</div></aside></div>
  </article>;
}
