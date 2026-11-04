import { useState } from "react";
import CodeBlock from "./CodeBlock.jsx";
import PixelIcon from "./PixelIcon.jsx";
import MathEquation from "./MathEquation.jsx";
import { leccionVariables as leccion } from "../data/lecciones/python/01-variables.js";

const respuestas = [
  { valor: "a", texto: "9.00 J" },
  { valor: "b", texto: "18.00 J" },
  { valor: "c", texto: "36.00 J" },
];

export default function LessonPage() {
  const [respuesta, setRespuesta] = useState("");
  const [comprobada, setComprobada] = useState(false);
  const [mostrarReto, setMostrarReto] = useState(false);
  const correcta = respuesta === "c";
  return (
    <article className="pagina leccion">
      <a className="volver-leccion" href="#/aprender">← Volver a los módulos</a>
      <div className="leccion-encabezado">
        <div>
          <p className="etiqueta">▸ MÓDULO 01 / LECCIÓN {leccion.numero}</p>
          <h1>{leccion.titulo}</h1>
          <p className="leccion-subtitulo">{leccion.subtitulo}</p>
          <div className="metadatos"><span>{leccion.nivel}</span><span>{leccion.tiempo}</span><span>{leccion.modulo}</span></div>
        </div>
        <PixelIcon name="terminal" size={88} />
      </div>
      <div className="leccion-columnas">
        <div className="leccion-cuerpo">
          <section id="objetivos" className="leccion-panel objetivos">
            <p className="etiqueta">MISIONES DE ESTA LECCIÓN</p>
            <h2>Al terminar podrás…</h2>
            <ul>{leccion.objetivos.map(o => <li key={o}>{o}</li>)}</ul>
          </section>

          <section id="concepto" className="leccion-bloque">
            <p className="etiqueta">01 / CONCEPTO</p>
            <h2>¿Qué es una variable?</h2>
            <p>En Python, una variable es un nombre asociado a un valor. Por ejemplo, podemos guardar la masa y la velocidad de un objeto para utilizarlas en un cálculo físico.</p>
            <CodeBlock codigo={leccion.codigoInicial} titulo="Primer cálculo de energía cinética" colabUrl={leccion.colab.inicial} />
            <p>El signo <code>=</code> <strong>asigna</strong> un valor; no significa que Python esté comprobando una igualdad matemática. Los comentarios que comienzan con <code>#</code> explican qué representan los datos y no se ejecutan.</p>
            <div className="leccion-nota"><strong>Observa:</strong> <code>**</code> es el operador de potencia; <code>velocidad ** 2</code> significa velocidad al cuadrado.</div>
          </section>

          <section id="tipos" className="leccion-bloque">
            <p className="etiqueta">02 / DATO Y TIPO</p>
            <h2>No todos los valores son iguales</h2>
            <p>Python reconoce distintos tipos de datos. Estos aparecen en los fundamentos del manual y se utilizan según la información que necesitemos representar.</p>
            <div className="tabla-desplazable"><table className="tabla-leccion"><thead><tr><th>Tipo</th><th>Ejemplo</th><th>¿Qué representa?</th></tr></thead><tbody>
              <tr><td><code>int</code></td><td><code>20</code></td><td>Un conteo entero, como el número de mediciones.</td></tr>
              <tr><td><code>float</code></td><td><code>9.81</code></td><td>Un número real aproximado, como una aceleración.</td></tr>
              <tr><td><code>str</code></td><td><code>"velocidad"</code></td><td>Texto para identificar una magnitud.</td></tr>
              <tr><td><code>bool</code></td><td><code>True</code></td><td>Un valor verdadero o falso.</td></tr>
              <tr><td><code>complex</code></td><td><code>3 + 4j</code></td><td>Un número complejo, útil en temas más avanzados.</td></tr>
            </tbody></table></div>
            <p>Una variable puede cambiar de valor durante el programa. Conviene elegir nombres descriptivos y coherentes con las magnitudes físicas.</p>
          </section>

          <section id="fisica" className="leccion-bloque">
            <p className="etiqueta">03 / APLICACIÓN FÍSICA</p>
            <h2>Calcula la energía cinética</h2>
            <p>Para un objeto de masa <em>m</em> y rapidez <em>v</em>, la energía cinética clásica es:</p>
            <MathEquation latex={leccion.ecuaciones.energia} label="Energía cinética igual a un medio por masa por velocidad al cuadrado" />
            <p>Si la masa es 2 kg y la rapidez es 3 m/s, sustituimos los valores:</p>
            <MathEquation latex={leccion.ecuaciones.sustitucion} label="La energía cinética con dos kilogramos y tres metros por segundo es nueve julios" />
            <p>En el código utilizamos los mismos valores. La energía se expresa en <strong>julios (J)</strong>, equivalentes a kg·m²/s².</p>
            <CodeBlock codigo={leccion.codigoCompleto} titulo="Programa completo de energía cinética" colabUrl={leccion.colab.completo} />
            <h3>Resultado esperado</h3>
            <pre className="resultado"><samp>Energía cinética: 9.00 J</samp></pre>
            <div className="leccion-nota"><strong>Interpretación:</strong> con los datos indicados, el objeto tiene una energía cinética de 9 J. Que el programa se ejecute sin errores no garantiza por sí solo que las unidades o el modelo físico sean correctos.</div>
          </section>

          <section id="practica" className="leccion-bloque">
            <p className="etiqueta">04 / PREDICE ANTES DE EJECUTAR</p>
            <h2>¿Qué pasa si duplicas la velocidad?</h2>
            <p>Mantenemos la masa en 2 kg y cambiamos la rapidez de 3 m/s a 6 m/s. ¿Qué energía cinética obtendremos?</p>
            <fieldset className="opciones-leccion"><legend>Selecciona una respuesta</legend>
              {respuestas.map(opcion => <label className="opcion-leccion" key={opcion.valor}><input type="radio" name="prediccion" checked={respuesta===opcion.valor} onChange={()=>{setRespuesta(opcion.valor);setComprobada(false);}} /> {opcion.texto}</label>)}
            </fieldset>
            <button className="boton boton-principal" type="button" disabled={!respuesta} onClick={()=>setComprobada(true)}>Comprobar respuesta</button>
            {comprobada && <div className={correcta?"retroalimentacion acierto":"retroalimentacion reintento"} role="status">
              <strong>{correcta ? "¡Correcto!" : "Aún no. Revisa el cuadrado de la velocidad."}</strong>
              <p>La energía depende de v². Al duplicar la rapidez, la energía se multiplica por 4: 9 J × 4 = <strong>36 J</strong>.</p>
            </div>}
          </section>

          <section id="reto" className="leccion-bloque">
            <p className="etiqueta">05 / RETO DE LABORATORIO</p>
            <h2>Modifica el código y comprueba</h2>
            <ol className="pasos-leccion"><li>Abre el ejemplo con «Abrir en Colab» cuando tenga enlace, o copia el programa a un cuaderno propio.</li><li>Modifica la rapidez a 6 m/s y predice el resultado antes de ejecutarlo.</li><li>Ejecuta el programa y compara su salida con tu predicción.</li><li>Prueba cambiar la masa y explica por qué cambia la energía.</li></ol>
            <button className="boton" type="button" aria-expanded={mostrarReto} onClick={()=>setMostrarReto(v=>!v)}>{mostrarReto ? "Ocultar solución de referencia ↑" : "Ver solución de referencia ↓"}</button>
            {mostrarReto && <div className="solucion-leccion"><CodeBlock codigo={leccion.codigoReto} titulo="Solución del reto de energía cinética" colabUrl={leccion.colab.reto} /><pre className="resultado"><samp>Energía cinética: 36.00 J</samp></pre></div>}
            <p className="aviso">La página muestra código y resultados preparados. La ejecución de Python se realiza en un entorno externo; no se ejecuta dentro de CodePhy.</p>
          </section>

          <section id="errores" className="leccion-bloque">
            <p className="etiqueta">06 / DEPURACIÓN</p>
            <h2>Errores frecuentes</h2>
            <ul className="lista-errores"><li><strong>Escribir <code>^</code> en lugar de <code>**</code>:</strong> en Python, <code>^</code> no es el operador de potencia.</li><li><strong>Olvidar definir una variable:</strong> debe existir antes de utilizarla en el cálculo.</li><li><strong>Mezclar unidades:</strong> si la masa está en gramos en lugar de kg, la salida no corresponderá directamente a julios.</li><li><strong>Confundir código correcto con física correcta:</strong> verifica siempre la ecuación, los valores y sus unidades.</li></ul>
          </section>
          <div className="leccion-cierre"><strong>✓ FIN DE LA LECCIÓN 01</strong><p>Esta es nuestra lección piloto. Las siguientes se incorporarán después de revisar su estructura.</p><a className="boton" href="#/aprender">← Volver a la ruta de aprendizaje</a></div>
        </div>
        <aside className="leccion-lateral" aria-label="Contenido de esta lección"><div className="leccion-indice"><p className="etiqueta">EN ESTA LECCIÓN</p><a href="#objetivos" onClick={e=>{e.preventDefault();document.getElementById("objetivos")?.scrollIntoView({behavior:"smooth"});}}>Objetivos</a><a href="#concepto" onClick={e=>{e.preventDefault();document.getElementById("concepto")?.scrollIntoView({behavior:"smooth"});}}>01 · Variables</a><a href="#tipos" onClick={e=>{e.preventDefault();document.getElementById("tipos")?.scrollIntoView({behavior:"smooth"});}}>02 · Tipos de datos</a><a href="#fisica" onClick={e=>{e.preventDefault();document.getElementById("fisica")?.scrollIntoView({behavior:"smooth"});}}>03 · Energía cinética</a><a href="#practica" onClick={e=>{e.preventDefault();document.getElementById("practica")?.scrollIntoView({behavior:"smooth"});}}>04 · Predicción</a><a href="#reto" onClick={e=>{e.preventDefault();document.getElementById("reto")?.scrollIntoView({behavior:"smooth"});}}>05 · Reto</a><a href="#errores" onClick={e=>{e.preventDefault();document.getElementById("errores")?.scrollIntoView({behavior:"smooth"});}}>06 · Errores</a></div></aside>
      </div>
    </article>
  );
}
