import { useEffect, useRef, useState } from 'react';
import TextoLegible from './TextoLegible.jsx';
import { ejecutarPythonLeccion, detenerPythonLecciones, observarPythonLecciones, prepararPythonLeccion, cargarCSVLeccion } from '../lib/pythonLessonRuntime.js';

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
  const acierto = Number(respuesta) === bloque.correcta;
  return <div className="prediccion-en-ejemplo">
    <fieldset className="opciones-leccion"><legend>Antes de ejecutar · <TextoLegible texto={bloque.enunciado}/></legend>
      {bloque.opciones.map((texto,i)=><label className="opcion-leccion" key={i}>
        <input type="radio" name={bloque.id} checked={respuesta===String(i)} onChange={()=>{setRespuesta(String(i));onComprobar?.();}}/><TextoLegible texto={texto}/>
      </label>)}
    </fieldset>
    {respuesta !== '' && <div className={`retroalimentacion ${acierto?'acierto':'reintento'}`} role="status"><strong>{acierto?'¡Correcto!':'Revisa tu razonamiento.'}</strong><p><TextoLegible texto={bloque.explicacion}/></p></div>}
  </div>;
}

export default function EjemploEjecutable({ ejemplo, prediccion }) {
  const esReto = Boolean(ejemplo.reto);
  const archivoRequerido = ejemplo.archivosRequeridos?.[0] || null;
  const [cargandoArchivo, setCargandoArchivo] = useState(false);
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
  const contenedorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [preparado, setPreparado] = useState(false);
  const [errorPreparacion, setErrorPreparacion] = useState('');
  const [entorno, setEntorno] = useState({ status: 'Preparando Python…', busy: false, ready: false, uploadedFiles: [] });
  const archivoCargado = Boolean(archivoRequerido && entorno.uploadedFiles?.includes(archivoRequerido.nombre));
  useEffect(() => observarPythonLecciones(setEntorno), []);
  useEffect(() => {
    const element = contenedorRef.current;
    if (!element) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(item => item.isIntersecting)) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: '450px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible || !codigo.trim() || !entorno.ready) { setPreparado(false); return; }
    let active = true;
    setPreparado(false); setErrorPreparacion('');
    prepararPythonLeccion(codigo).then(() => { if (active) setPreparado(true); })
      .catch(err => { if (active) setErrorPreparacion(String(err.message || err)); });
    return () => { active = false; };
  }, [visible, codigo, entorno.ready]);
  useEffect(() => { if (consola) entradaRef.current?.focus(); }, [consola?.indice]);

  async function cargarArchivo(event) {
    const file = event.target.files?.[0];
    if (!file || !archivoRequerido) return;
    setCargandoArchivo(true); setError('');
    try { await cargarCSVLeccion(file, archivoRequerido); }
    catch (err) { setError(String(err.message || err)); }
    finally { setCargandoArchivo(false); }
  }
  function descargarArchivoGenerado(file) {
    const binary = atob(file.base64);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    const url = URL.createObjectURL(new Blob([bytes], {type:'text/csv;charset=utf-8'}));
    const a = document.createElement('a'); a.href=url; a.download=file.name; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),3000);
  }
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
    if (archivoRequerido && !archivoCargado) { setError(`Carga primero ${archivoRequerido.nombre}.`); return; }
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
  return <section ref={contenedorRef} className={`ejemplo-ejecutable ${esReto?'ejemplo-reto':''}`} aria-label={`${esReto?'Reto':'Ejemplo'}: ${ejemplo.titulo}`}>
    <div className="ejemplo-ejecutable-titulo">
      <div><span className="ejemplo-etiqueta">{esReto?'PRÁCTICA · ':''}{ejemplo.etiquetas?.programacion?.join(' · ') || 'PYTHON'}</span><h3>{ejemplo.titulo}</h3></div>
      <span className="ejemplo-lenguaje">Python</span>
    </div>
    {esReto && <>
      <p className="reto-instruccion"><TextoLegible texto={ejemplo.consigna || 'Escribe una solución a la actividad utilizando las instrucciones que aprendiste.'}/></p>
      <p className="reto-aclaracion">El editor comienza vacío para que escribas tu propia solución. Puedes ejecutar tu código todas las veces que necesites.</p>
      <div className="reto-pistas">
        {pistas.map((pista,i)=> <div key={i}>
          {pistasVisibles > i ? <p><strong>Pista {i+1}:</strong> <TextoLegible texto={pista}/></p> : i===pistasVisibles ? <button type="button" className="boton" onClick={()=>setPistasVisibles(i+1)}>Pista {i+1}</button> : null}
        </div>)}
      </div>
    </>}
    <label className="ejemplo-label" htmlFor={`codigo-${ejemplo.id}`}>{esReto?'Escribe tu solución en Python':'Código editable'}</label>
    <textarea className="ejemplo-editor" id={`codigo-${ejemplo.id}`} spellCheck="false" value={codigo}
      onChange={e => {setCodigo(e.target.value);setCopiado(false);setConsola(null);setResultado(null);}} rows={esReto?8:Math.min(19,Math.max(5,codigo.split('\n').length+1))}
      placeholder={esReto?'Escribe tu código aquí…':undefined}/>
    {prediccion && !esReto && <PreguntaPrevia bloque={prediccion} onComprobar={()=>setPrediccionComprobada(true)}/>}
    {archivoRequerido && <div className="leccion-archivo">
      <strong>Datos para esta actividad</strong>
      <p>Descarga <code>{archivoRequerido.nombre}</code> y cárgalo en CodePhy. Basta hacerlo una vez: podrás reutilizarlo en otras actividades mientras permanezca activo el entorno Python. Si usas otro entorno, coloca el archivo en su directorio de trabajo (en Google Colab puedes subirlo desde el panel de archivos).</p>
      <a className="boton" href={`${import.meta.env.BASE_URL}datos/${archivoRequerido.nombre}`} download={archivoRequerido.nombre}>↓ Descargar {archivoRequerido.nombre}</a>
      <label className="leccion-archivo-cargar">Cargar archivo en CodePhy <input type="file" accept=".csv,text/csv" onChange={cargarArchivo}/></label>
      <p role="status">{cargandoArchivo ? 'Validando CSV…' : archivoCargado ? 'Archivo cargado y disponible para las actividades que lo requieran.' : 'Debes cargar el archivo para habilitar la ejecución.'}</p>
    </div>}
    <div className="ejemplo-acciones">
      <button className="boton" type="button" disabled={!codigo.trim()} onClick={copiar}><svg className="icono-copiar" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M8 3H17V6H20V20H8V3Z"/><path d="M4 7H6V22H17"/><path d="M17 3V6H20"/></svg> {copiado?'Copiado':'Copiar'}</button>
      <button className="boton boton-principal" type="button" disabled={!codigo.trim() || !entorno.ready || !preparado || ejecutando || entorno.busy || Boolean(consola) || (prediccion && !prediccionComprobada) || (archivoRequerido && !archivoCargado)} onClick={empezar}>{ejecutando ? 'Ejecutando…' : !codigo.trim() ? '▶ Ejecutar' : !entorno.ready || !preparado ? '◌ Cargando' : '▶ Ejecutar'}</button>
      {ejecutando && <button type="button" className="boton" onClick={detenerPythonLecciones}>■ Detener</button>}
      {errorPreparacion && <span className="ejemplo-estado" role="alert">No se pudo preparar Python: {errorPreparacion}</span>}
    </div>
    {prediccion && !prediccionComprobada && <p className="ejemplo-indicacion">Selecciona una respuesta para habilitar «Ejecutar».</p>}
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
      {resultado.error && <div className="salida-error-detalle"><pre className="ejemplo-error">{resultado.error}</pre>
        {resultado.errorDetail && <details><summary>Ver detalles técnicos</summary><pre className="ejemplo-error">{resultado.errorDetail}</pre></details>}</div>}
      {!resultado.stdout && !resultado.error && !resultado.plots?.length && !resultado.charts?.length && <p>El programa terminó sin mostrar texto.</p>}
      {(resultado.files||[]).map((file,i)=><button key={i} type="button" className="boton" onClick={()=>descargarArchivoGenerado(file)}>↓ Descargar {file.name}</button>)}
      {(resultado.plots||[]).map((grafica,i)=><img key={i} src={`data:image/png;base64,${grafica}`} alt={`Gráfica generada por Python ${i+1}`}/>)}
    </div>}
    {esReto ? <details className="reto-respuesta"><summary>Respuesta de referencia</summary>
      <p>Una posible solución para comparar con la tuya. No se realiza una corrección automática del programa.</p>
      <pre>{ejemplo.codigo}</pre>
      {ejemplo.resultado?.contenido && <><strong>Salida esperada con estos datos:</strong><pre>{ejemplo.resultado.contenido}</pre></>}
    </details> : ejemplo.resultado?.nota && <p className="ejemplo-ayuda">{ejemplo.resultado.nota}</p>}
  </section>;
}
