import { useEffect, useRef, useState } from 'react';
import { ejecutarPythonLeccion, detenerPythonLecciones, observarPythonLecciones } from '../lib/pythonLessonRuntime.js';

// Sólo identificamos los input() con prompts literales utilizados en esta unidad.
// El código que copia el estudiante sigue siendo Python estándar.
function detectarEntradas(codigo) {
  const regex = /\binput\s*\(\s*(?:"([^"]*)"|'([^']*)')?\s*\)/g;
  const halladas = [];
  let match;
  while ((match = regex.exec(codigo))) halladas.push(match[1] ?? match[2] ?? 'Introduce un valor: ');
  return halladas;
}

function PreguntaPrevia({ bloque, onComprobar }) {
  const [respuesta, setRespuesta] = useState('');
  const [comprobada, setComprobada] = useState(false);
  const acierto = Number(respuesta) === bloque.correcta;
  return <div className="prediccion-en-ejemplo">
    <fieldset className="opciones-leccion"><legend>Antes de ejecutar · {bloque.enunciado}</legend>
      {bloque.opciones.map((texto,i)=><label className="opcion-leccion" key={i}>
        <input type="radio" name={bloque.id} checked={respuesta===String(i)} onChange={()=>{setRespuesta(String(i));setComprobada(false);}}/>{texto}
      </label>)}
    </fieldset>
    <button className="boton" type="button" disabled={respuesta===''} onClick={()=>{setComprobada(true);onComprobar();}}>Comprobar predicción</button>
    {comprobada && <div className={`retroalimentacion ${acierto?'acierto':'reintento'}`} role="status"><strong>{acierto?'¡Correcto!':'Revisa tu razonamiento.'}</strong><p>{bloque.explicacion}</p></div>}
  </div>;
}

export default function EjemploEjecutable({ ejemplo, prediccion }) {
  const esReto = Boolean(ejemplo.reto);
  const [codigo, setCodigo] = useState(esReto ? '' : ejemplo.codigo);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [ejecutando, setEjecutando] = useState(false);
  const [prediccionComprobada, setPrediccionComprobada] = useState(false);
  const [pistasVisibles, setPistasVisibles] = useState(0);
  const [consola, setConsola] = useState(null);
  const [valorEntrada, setValorEntrada] = useState('');
  const entradaRef = useRef(null);
  const [entorno, setEntorno] = useState({ status: 'Preparando Python…', busy: false, ready: false });
  useEffect(() => observarPythonLecciones(setEntorno), []);
  useEffect(() => { if (consola) entradaRef.current?.focus(); }, [consola?.indice]);

  async function copiar() {
    try { await navigator.clipboard.writeText(codigo); setCopiado(true); }
    catch { setError('No se pudo copiar automáticamente. Selecciona el código para copiarlo.'); }
  }

  async function ejecutarConEntradas(entradas) {
    setResultado(null); setError(''); setEjecutando(true);
    try { setResultado(await ejecutarPythonLeccion(codigo, entradas)); }
    catch (err) { setError(String(err.message || err)); }
    finally { setEjecutando(false); }
  }

  function empezar() {
    const prompts = detectarEntradas(codigo);
    setError(''); setResultado(null);
    if (prompts.length) { setConsola({ prompts, indice: 0, valores: [], historial: [] }); setValorEntrada(''); }
    else ejecutarConEntradas([]);
  }

  function enviarEntrada(event) {
    event.preventDefault();
    if (!consola) return;
    const valor = valorEntrada;
    const valores = [...consola.valores, valor];
    const historial = [...consola.historial, { prompt: consola.prompts[consola.indice], valor }];
    setValorEntrada('');
    if (consola.indice+1 < consola.prompts.length) setConsola({ ...consola, indice: consola.indice+1, valores, historial });
    else { setConsola(null); ejecutarConEntradas(valores); }
  }

  const pistas = ejemplo.pistas || [];
  return <section className={`ejemplo-ejecutable ${esReto?'ejemplo-reto':''}`} aria-label={`${esReto?'Reto':'Ejemplo'}: ${ejemplo.titulo}`}>
    <div className="ejemplo-ejecutable-titulo">
      <div><span className="ejemplo-etiqueta">{esReto?'PRÁCTICA · ':''}{ejemplo.etiquetas?.programacion?.join(' · ') || 'PYTHON'}</span><h3>{ejemplo.titulo}</h3></div>
      <span className="ejemplo-lenguaje">Python</span>
    </div>
    {esReto && <>
      <p className="reto-instruccion">{ejemplo.consigna || 'Escribe una solución a la actividad utilizando las instrucciones que aprendiste.'}</p>
      <p className="reto-aclaracion">El editor comienza vacío para que escribas tu propia solución. Puedes ejecutar tu código todas las veces que necesites.</p>
      <div className="reto-pistas">
        {pistas.map((pista,i)=> <div key={i}>
          {pistasVisibles > i ? <p><strong>Pista {i+1}:</strong> {pista}</p> : i===pistasVisibles ? <button type="button" className="boton" onClick={()=>setPistasVisibles(i+1)}>Solicitar pista {i+1}</button> : null}
        </div>)}
      </div>
    </>}
    <label className="ejemplo-label" htmlFor={`codigo-${ejemplo.id}`}>{esReto?'Escribe tu solución en Python':'Código editable'}</label>
    <textarea className="ejemplo-editor" id={`codigo-${ejemplo.id}`} spellCheck="false" value={codigo}
      onChange={e => {setCodigo(e.target.value);setCopiado(false);setConsola(null);setResultado(null);}} rows={esReto?8:Math.min(19,Math.max(5,codigo.split('\n').length+1))}
      placeholder={esReto?'Escribe tu código aquí…':undefined}/>
    {prediccion && !esReto && <PreguntaPrevia bloque={prediccion} onComprobar={()=>setPrediccionComprobada(true)}/>}
    <div className="ejemplo-acciones">
      <button className="boton" type="button" disabled={!codigo.trim()} onClick={copiar}><svg className="icono-copiar" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M8 3H17V6H20V20H8V3Z"/><path d="M4 7H6V22H17"/><path d="M17 3V6H20"/></svg> {copiado?'Código copiado':'Copiar código'}</button>
      <button className="boton boton-principal" type="button" disabled={!codigo.trim() || ejecutando || entorno.busy || Boolean(consola) || (prediccion && !prediccionComprobada)} onClick={empezar}>▶ Ejecutar</button>
      {ejecutando && <button type="button" className="boton" onClick={detenerPythonLecciones}>■ Detener</button>}
      <span className="ejemplo-estado" role="status">{ejecutando?'Ejecutando…':entorno.status}</span>
    </div>
    {prediccion && !prediccionComprobada && <p className="ejemplo-indicacion">Comprueba primero tu predicción para habilitar «Ejecutar».</p>}
    {consola && <div className="terminal-input" aria-label="Consola de entrada">
      <strong>Consola de Python · Entrada {consola.indice+1} de {consola.prompts.length}</strong>
      {consola.historial.map((entrada,i)=><div className="terminal-historial" key={i}>{entrada.prompt} {entrada.valor}</div>)}
      <form onSubmit={enviarEntrada} className="terminal-fila">
        <label htmlFor={`input-${ejemplo.id}`}>{consola.prompts[consola.indice]}</label>
        <input ref={entradaRef} id={`input-${ejemplo.id}`} value={valorEntrada} onChange={e=>setValorEntrada(e.target.value)} autoComplete="off" aria-label={consola.prompts[consola.indice] || 'Valor de entrada'}/>
        <button type="submit" className="boton boton-principal">Enter ↵</button>
      </form>
      <button type="button" className="boton boton-cancelar" onClick={()=>setConsola(null)}>Cancelar ejecución</button>
    </div>}
    {error && <pre className="ejemplo-error" role="alert">{error}</pre>}
    {resultado && <div className="ejemplo-salida" aria-live="polite"><strong>Salida de Python</strong>
      {resultado.stdout && <pre>{resultado.stdout}</pre>}
      {resultado.error && <pre className="ejemplo-error">{resultado.error}</pre>}
      {!resultado.stdout && !resultado.error && !resultado.plots?.length && !resultado.charts?.length && <p>El programa terminó sin mostrar texto.</p>}
      {(resultado.plots||[]).map((grafica,i)=><img key={i} src={`data:image/png;base64,${grafica}`} alt={`Gráfica generada por Python ${i+1}`}/>)}
    </div>}
    {esReto ? <details className="reto-respuesta"><summary>Respuesta de referencia</summary>
      <p>Una posible solución para comparar con la tuya. No se realiza una corrección automática del programa.</p>
      <pre>{ejemplo.codigo}</pre>
      {ejemplo.resultado?.contenido && <><strong>Salida esperada con estos datos:</strong><pre>{ejemplo.resultado.contenido}</pre></>}
    </details> : ejemplo.resultado?.nota && <p className="ejemplo-ayuda">{ejemplo.resultado.nota}</p>}
  </section>;
}
