import { useEffect, useState } from 'react';
import PixelIcon from './PixelIcon.jsx';
import EjemploEjecutable from './EjemploEjecutable.jsx';
import MathEquation from './MathEquation.jsx';
import { lecciones } from '../data/lecciones/index.js';
import { precargarPythonLecciones } from '../lib/pythonLessonRuntime.js';
import TextoLegible from './TextoLegible.jsx';
import { sintaxisPorLeccion } from '../data/sintaxis.js';

function Pregunta({ bloque, onComprobar }) {
  const [respuesta, setRespuesta] = useState('');
  const acierto = Number(respuesta) === bloque.correcta;
  return <div className="pregunta-leccion">
    <fieldset className="opciones-leccion"><legend><TextoLegible texto={bloque.enunciado || 'Predice el resultado'}/></legend>
      {bloque.opciones.map((texto,i) => <label className="opcion-leccion" key={i}>
        <input type="radio" name={bloque.id} checked={respuesta===String(i)} onChange={()=>{setRespuesta(String(i));onComprobar?.();}} /><TextoLegible texto={texto}/>
      </label>)}
    </fieldset>
    {respuesta !== '' && <div className={`retroalimentacion ${acierto?'acierto':'reintento'}`} role="status"><strong>{acierto?'¡Correcto!':'Revisa tu razonamiento.'}</strong><p><TextoLegible texto={bloque.explicacion}/></p></div>}
  </div>;
}
function Bloque({ bloque, prediccion }) {
  switch (bloque.tipo) {
    case 'texto': return <p><TextoLegible texto={bloque.contenido}/></p>;
    case 'ecuacion': return <MathEquation latex={bloque.latex}/>;
    case 'nota': return <div className="leccion-nota"><TextoLegible texto={bloque.contenido}/></div>;
    case 'ejemplo': return <EjemploEjecutable key={bloque.ejemplo.id} ejemplo={bloque.ejemplo} prediccion={prediccion}/>;
    case 'pregunta': return <Pregunta bloque={bloque}/>;
    case 'pasos': return <ol className="pasos-leccion">{bloque.items.map((item,i)=><li key={i}><TextoLegible texto={item}/></li>)}</ol>;
    case 'lista': return <ul className="lista-errores">{bloque.items.map((item,i)=><li key={i}><TextoLegible texto={item}/></li>)}</ul>;
    case 'tabla': return <div className="tabla-desplazable"><table className="tabla-leccion"><thead><tr>{bloque.columnas.map((col,i)=><th key={i} scope="col"><TextoLegible texto={col}/></th>)}</tr></thead><tbody>{bloque.filas.map((fila,i)=><tr key={i}>{fila.map((v,j)=><td key={j}><TextoLegible texto={v}/></td>)}</tr>)}</tbody></table></div>;
    default: return null;
  }
}
export default function LessonPage({ leccion }) {
  useEffect(() => { precargarPythonLecciones(); }, []);
  const unidadNumero = Number(leccion.numero.split('.')[0]);
  const unidadRuta = `#/unidad/${leccion.unidadId}`;
  const unidadNombre = leccion.modulo;
  const indice = lecciones.findIndex(l => l.id === leccion.id);
  const anterior = indice > 0 ? lecciones[indice-1] : null;
  const siguiente = indice < lecciones.length-1 ? lecciones[indice+1] : null;
  return <article className="pagina leccion">
    <a className="volver-leccion" href={unidadRuta}>← Unidad {unidadNumero} · {unidadNombre}</a>
    <div className="leccion-encabezado"><div><p className="etiqueta">UNIDAD {unidadNumero} · LECCIÓN {leccion.numero}</p><h1>{leccion.titulo}</h1><p className="leccion-subtitulo">{leccion.subtitulo}</p>
      <div className="metadatos"><span>Programación · {leccion.dificultadProgramacion}</span><span>Física · {leccion.dificultadFisica}</span></div></div>
      <PixelIcon name={leccion.icono || "python-intro"} size={82}/></div>
    <div className="leccion-columnas"><div className="leccion-cuerpo">
      <section id="objetivos" className="leccion-panel objetivos"><p className="etiqueta">OBJETIVOS</p><h2>Al terminar podrás…</h2><ul>{leccion.objetivos.map((objetivo,i)=><li key={i}>{objetivo}</li>)}</ul></section>
      {leccion.secciones.map(seccion => {
        const tienePractica = seccion.bloques.some(b => b.tipo === 'ejemplo' || b.tipo === 'pregunta');
        const dibujarBloques = (bloques) => bloques.map(({ bloque, indice }) => {
          if (bloque.tipo === 'pregunta' && seccion.bloques[indice - 1]?.tipo === 'ejemplo') return null;
          return <Bloque key={bloque.id || bloque.ejemplo?.id || indice} bloque={bloque}
            prediccion={bloque.tipo === 'ejemplo' && seccion.bloques[indice + 1]?.tipo === 'pregunta' ? seccion.bloques[indice + 1] : undefined}/>;
        });
        const bloquesConIndice = seccion.bloques.map((bloque, indice) => ({ bloque, indice }));
        const teoria = bloquesConIndice.filter(({ bloque }) => bloque.tipo !== 'ejemplo' && bloque.tipo !== 'pregunta');
        const practica = bloquesConIndice.filter(({ bloque }) => bloque.tipo === 'ejemplo' || bloque.tipo === 'pregunta');
        return <section id={seccion.id} className={`leccion-bloque ${tienePractica ? 'leccion-bloque-doble' : ''}`} key={seccion.id}>
          <p className="etiqueta">{seccion.etiqueta}</p><h2>{seccion.titulo}</h2>
          {leccion.secciones[0]?.id === seccion.id && sintaxisPorLeccion[leccion.numero] && <div className="leccion-sintaxis" aria-label="Sintaxis general">
            <p className="etiqueta">SINTAXIS GENERAL</p>
            <p>{sintaxisPorLeccion[leccion.numero].descripcion}</p>
            <pre><code>{sintaxisPorLeccion[leccion.numero].codigo}</code></pre>
            <p className="sintaxis-ayuda">{sintaxisPorLeccion[leccion.numero].ayuda}</p>
          </div>}
          {tienePractica ? <div className="leccion-distribucion">
            <div className="leccion-teoria">{dibujarBloques(teoria)}</div>
            <div className="leccion-practica">{dibujarBloques(practica)}</div>
          </div> : dibujarBloques(bloquesConIndice)}
        </section>;
      })}
      <div className="leccion-cierre"><strong>✓ Lección terminada · {leccion.numero}</strong><p>Has llegado al final de esta lección. Puedes continuar al siguiente tema o regresar a practicar los ejercicios cuando lo necesites.</p>
        <div className="leccion-navegacion">{anterior ? <a className="boton" href={`#/leccion/${anterior.id}`}>← {anterior.numero}</a> : <a className="boton" href={unidadRuta}>← Unidad {unidadNumero}</a>}{siguiente ? <a className="boton boton-principal" href={`#/leccion/${siguiente.id}`}>Siguiente · {siguiente.numero} →</a> : <a className="boton boton-principal" href={unidadRuta}>Ver unidad →</a>}</div>
      </div>
    </div><aside className="leccion-lateral" aria-label="Contenido de esta lección"><div className="leccion-indice"><p className="etiqueta">EN ESTA LECCIÓN</p><a href="#objetivos" onClick={e=>{e.preventDefault();document.getElementById('objetivos')?.scrollIntoView({behavior:'smooth'});}}>Objetivos</a>{leccion.secciones.map(sec=><a key={sec.id} href={`#${sec.id}`} onClick={e=>{e.preventDefault();document.getElementById(sec.id)?.scrollIntoView({behavior:'smooth'});}}>{sec.titulo}</a>)}</div></aside></div>
  </article>;
}
