import { useEffect, useLayoutEffect, useState } from "react";
import EjemploCodigo from "./components/EjemploCodigo.jsx";
import LessonPage from "./components/LessonPage.jsx";
import LaboratorioPython from "./components/LaboratorioPython.jsx";
import PixelIcon from "./components/PixelIcon.jsx";
import { ejemplos } from "./data/ejemplos.js";
import { buscarLeccion, buscarUnidad } from "./data/lecciones/index.js";
import "./App.css";

// Categorías visibles aunque todavía no existan lecciones para ellas.
const categoriasFisica = [
  { nombre: "Mecánica clásica", icono: "mechanics", areas: ["Mecánica"] },
  { nombre: "Calor, ondas y fluidos", icono: "thermowaves", areas: ["Calor, ondas y fluidos"] },
  { nombre: "Óptica", icono: "optics", areas: ["Óptica"] },
  { nombre: "Fenomenología cuántica y relativista", icono: "quantum", areas: ["Fenomenología cuántica y relativista"] },
  { nombre: "Electromagnetismo", icono: "electromagnetism", areas: ["Electromagnetismo"] },
];
const categoriasMatematicas = [
  { nombre: "Análisis vectorial", icono: "vector", areas: ["Análisis vectorial"] },
  { nombre: "Métodos numéricos", icono: "numeric", areas: ["Métodos numéricos"] },
  { nombre: "Funciones especiales", icono: "special", areas: ["Funciones especiales"] },
  { nombre: "Álgebra lineal", icono: "linear", areas: ["Álgebra lineal"] },
];

const paginas = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "/aprender", nombre: "Aprende" },
  { ruta: "/galeria", nombre: "Galería" },
  { ruta: "/areas", nombre: "Física" },
  { ruta: "/contacto", nombre: "Contacto" },
];

function leerRuta() {
  return window.location.hash.slice(1) || "/";
}

function enlaceEjemplo(id) {
  return `#/ejemplo/${id}`;
}

// El icono de pestaña representa la sección actual y usa los SVG ya incluidos.
function iconoDeRuta(ruta, ejemplo) {
  if (ruta === "/") return "atom";
  if (ruta === "/aprender" || ruta.startsWith("/leccion/") || ruta.startsWith("/unidad/")) return "python-intro";
  if (ruta === "/galeria") return "folder";
  if (ruta === "/laboratorio") return "terminal";
  if (ruta === "/contacto") return "folder";
  if (ruta === "/areas") return "atom";
  if (ejemplo) {
    const porArea = {
      "Mecánica": "mechanics",
      "Óptica": "optics",
      "Calor, ondas y fluidos": "thermowaves",
      "Electromagnetismo": "electromagnetism",
      "Fenomenología cuántica y relativista": "quantum",
      "Métodos numéricos": "numeric",
      "Álgebra lineal": "linear",
      "Análisis vectorial": "vector",
      "Funciones especiales": "special",
    };
    return porArea[ejemplo.area] || "measurement";
  }
  return "atom";
}

function App() {
  const [ruta, setRuta] = useState(leerRuta);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const ejemploActual = ejemplos.find(
    (ejemplo) => ruta === `/ejemplo/${ejemplo.id}`,
  );

  const paginaActual = paginas.find((pagina) => pagina.ruta === ruta);
  const areasCatalogadas = new Set(
    [...categoriasFisica, ...categoriasMatematicas].flatMap((categoria) => categoria.areas),
  );
  const areasAdicionales = [...new Set(ejemplos.map((ejemplo) => ejemplo.area))]
    .filter((area) => !areasCatalogadas.has(area));
  const leccionActual = ruta.startsWith("/leccion/") ? buscarLeccion(ruta.slice("/leccion/".length)) : null;
  const esLeccion = Boolean(leccionActual);
  const unidadActual = ruta.startsWith("/unidad/") ? buscarUnidad(ruta.slice("/unidad/".length)) : null;
  const rutaValida = Boolean(paginaActual || ejemploActual || esLeccion || unidadActual || ruta === "/laboratorio");

  useEffect(() => {
    // La navegación entre vistas no debe recuperar la posición de la página anterior.
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.getElementById('contenido')?.focus({ preventScroll: true });
    const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, [ruta]);

  useEffect(() => {
    function actualizarRuta() {
      setRuta(leerRuta());
      setMenuAbierto(false);
    }

    window.addEventListener("hashchange", actualizarRuta);

    return () => {
      window.removeEventListener("hashchange", actualizarRuta);
    };
  }, []);

  useEffect(() => {
    const titulo =
      (esLeccion ? leccionActual.titulo : unidadActual?.titulo ?? ejemploActual?.titulo ?? paginaActual?.nombre) ?? "Página no encontrada";

    document.title = `${titulo} | CodePhy`;
    const icono = iconoDeRuta(ruta, ejemploActual);
    const iconUrl = `${import.meta.env.BASE_URL}icons/${icono}.svg`;
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.type = "image/svg+xml";
    favicon.href = iconUrl;

  }, [ruta, ejemploActual, paginaActual, esLeccion, leccionActual, unidadActual]);

  return (
    <>
      <a
        className="saltar-contenido"
        href="#contenido"
        onClick={(evento) => {
          evento.preventDefault();
          document.getElementById("contenido")?.focus();
        }}
      >
        Saltar al contenido
      </a>

      <header className="cabecera">
        <div className="cabecera-superior">
          <a className="marca" href="#/" aria-label="CodePhy: inicio" onClick={() => setMenuAbierto(false)}>
            <PixelIcon name="terminal" size={32} />
            <span>CodePhy<span className="marca-exe">.exe</span><span className="cursor-marca" aria-hidden="true">_</span></span>
          </a>
          <button
            className="boton-menu"
            type="button"
            aria-expanded={menuAbierto}
            aria-controls="menu-codephy"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <span aria-hidden="true">{menuAbierto ? "✕" : "☰"}</span>
            <span>{menuAbierto ? "Cerrar" : "Menú"}</span>
          </button>
        </div>
        <nav id="menu-codephy" className={`navegacion ${menuAbierto ? "navegacion-abierta" : ""}`} aria-label="Navegación principal">
          {paginas.map((pagina) => (
            <a key={pagina.ruta} href={`#${pagina.ruta}`}
              aria-current={ruta === pagina.ruta ? "page" : undefined}
              onClick={() => setMenuAbierto(false)}>
              {pagina.nombre}
            </a>
          ))}
        </nav>
      </header>

      <main id="contenido" tabIndex={-1}>
        {ruta === "/" && (
          <>
            <section className="portada">
              <p className="etiqueta">▸ APRENDE · PROGRAMA · EXPLORA</p>
              <h1><span className="titulo-amarillo">CodePhy</span><br />Programación en Python para Física<span className="cursor-marca">_</span></h1>
              <p className="introduccion">
                Comprende el código, modifica sus parámetros e interpreta sus
                resultados. Aprende desde los fundamentos o consulta
                herramientas para tus tareas y prácticas.
              </p>
              <div className="acciones-portada"><a className="boton boton-principal" href="#/aprender">▶ Iniciar curso</a><a className="boton" href="#/galeria">Explorar galería →</a></div>

            </section>

            <section className="seccion">
              <h2>▸ Selecciona una ruta</h2>

              <div className="recorridos">
                <a className="tarjeta acceso verde" href="#/aprender">
                  <PixelIcon name="terminal" size={52} /><span className="etiqueta">01 · APRENDER</span>
                  <h3>Ruta de programación</h3>
                  <p>Recorre los módulos desde los fundamentos.</p>
                  <span className="acceso-enlace">Ver la ruta →</span>
                </a>

                <a className="tarjeta acceso azul" href="#/galeria">
                  <PixelIcon name="folder" size={52} /><span className="etiqueta">02 · CONSULTAR</span>
                  <h3>Galería de código</h3>
                  <p>Encuentra programas por tarea y resultado.</p>
                  <span className="acceso-enlace">Explorar código →</span>
                </a>

                <a className="tarjeta acceso amarillo" href="#/areas">
                  <PixelIcon name="atom" size={52} /><span className="etiqueta">03 · EXPLORAR</span>
                  <h3>Áreas de física</h3>
                  <p>Encuentra recursos por su contexto físico.</p>
                  <span className="acceso-enlace">Consultar áreas →</span>
                </a>
              </div>
            </section>
          </>
        )}

        {ruta === "/aprender" && (
          <section className="pagina">
            <p className="etiqueta">APRENDE PYTHON PARA FÍSICA</p>
            <h1>Ruta de aprendizaje</h1>
            <p>Aprende a programar desde los fundamentos y aplica cada concepto a problemas científicos. Avanza a tu ritmo y experimenta con código ejecutable.</p>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-intro" size={84}/>
              <div><p className="etiqueta">UNIDAD 01</p><h2>Introducción a Python</h2><p>Instrucciones, variables, operaciones, conversiones, entrada de datos y depuración.</p>
                <p className="unidad-conteo">5 lecciones · Python básico · Sin requisitos previos</p>
                <a className="boton boton-principal" href="#/unidad/unidad-1">Explorar unidad →</a></div>
            </div>
            <h2 className="subtitulo-areas">▸ Recorrido del curso</h2>
            <div className="temario-resumen">
              {['Condicionales y lógica','Ciclos y automatización','Estructuras y funciones','Computación con NumPy','Visualización con Matplotlib','Archivos y datos experimentales','Estadística y ajuste','Álgebra lineal y SymPy','Métodos numéricos','Ecuaciones diferenciales','Simulaciones y proyectos'].map((nombre, i) =>
                <div className="temario-resumen-item" key={nombre}><span>{String(i+2).padStart(2,'0')}</span>{nombre}</div>)}
            </div>
          </section>
        )}

        {unidadActual && <section className="pagina unidad-pagina">
          <a href="#/aprender">← Ruta de aprendizaje</a>
          <div className="unidad-cabecera">
            <PixelIcon name={unidadActual.icono} size={104}/>
            <div><p className="etiqueta">UNIDAD {String(unidadActual.numero).padStart(2,'0')}</p><h1>{unidadActual.titulo}</h1><p>{unidadActual.descripcion}</p></div>
          </div>
          <div className="unidad-panel"><h2>Qué aprenderás</h2><ul>{unidadActual.objetivos.map(obj => <li key={obj}>{obj}</li>)}</ul><p><strong>Conocimientos previos:</strong> {unidadActual.conocimientosPrevios}</p></div>
          <h2>Lecciones de la unidad</h2>
          <ol className="unidad-lista">
            {unidadActual.lecciones.map(id => {const item = buscarLeccion(id); return item && <li key={id} className="tarjeta unidad-leccion">
              <span className="unidad-numero">{item.numero}</span><div><h3>{item.titulo}</h3><p>{item.subtitulo}</p><p className="unidad-ejemplo">Aplicación: {item.ejemploPrincipal}</p><a href={`#/leccion/${item.id}`} className="boton">Abrir lección →</a></div>
            </li>;})}
          </ol>
          <a className="boton boton-principal" href={`#/leccion/${unidadActual.lecciones[0]}`}>▶ Comenzar la unidad</a>
        </section>}

        {ruta === "/galeria" && (
          <section className="pagina">
            <p className="etiqueta">CONSULTA POR TAREA</p>
            <h1>Galería de código</h1>


            <div className="recorridos">
              {ejemplos.map((ejemplo) => (
                <article className="tarjeta ficha" key={ejemplo.id}>
                  <PixelIcon name={ejemplo.id === "posicion-mru" ? "graph" : ejemplo.id === "energia-foton" ? "optics" : "measurement"} size={48}/><p className="categoria">{ejemplo.tarea}</p>
                  <h2 className="titulo-tarjeta">{ejemplo.titulo}</h2>
                  <p>{ejemplo.descripcion}</p>


                  <a className="boton" href={enlaceEjemplo(ejemplo.id)}>
                    Ver programa →
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {ruta === "/areas" && (
          <section className="pagina">
            <p className="etiqueta">CONSULTA TEMÁTICA</p>
            <h1>Áreas de física</h1>
            <p>
              Explora los ejemplos por disciplina. Las categorías sin recursos todavía están
              señaladas como próximas incorporaciones.
            </p>
            <h2 className="subtitulo-areas">▸ Física</h2>
            <div className="recorridos areas-grid">
              {categoriasFisica.map((categoria) => {
                const recursos = ejemplos.filter((ejemplo) => categoria.areas.includes(ejemplo.area));
                return (
                  <article className="tarjeta tarjeta-area" key={categoria.nombre}>
                    <PixelIcon name={categoria.icono} size={64} />
                    <h3 className="titulo-tarjeta">{categoria.nombre}</h3>
                    {recursos.length ? (
                      <ul className="lista-recursos">
                        {recursos.map((ejemplo) => <li key={ejemplo.id}><a href={enlaceEjemplo(ejemplo.id)}>{ejemplo.titulo}</a></li>)}
                      </ul>
                    ) : <p className="estado estado-pendiente">Próximamente · sin ejemplos publicados</p>}
                  </article>
                );
              })}
            </div>
            <h2 className="subtitulo-areas">▸ Herramientas matemáticas</h2>
            <div className="recorridos areas-grid">
              {categoriasMatematicas.map((categoria) => {
                const recursos = ejemplos.filter((ejemplo) => categoria.areas.includes(ejemplo.area));
                return (
                  <article className="tarjeta tarjeta-area" key={categoria.nombre}>
                    <PixelIcon name={categoria.icono} size={64} />
                    <h3 className="titulo-tarjeta">{categoria.nombre}</h3>
                    {recursos.length ? (
                      <ul className="lista-recursos">
                        {recursos.map((ejemplo) => <li key={ejemplo.id}><a href={enlaceEjemplo(ejemplo.id)}>{ejemplo.titulo}</a></li>)}
                      </ul>
                    ) : <p className="estado estado-pendiente">Próximamente · sin ejemplos publicados</p>}
                  </article>
                );
              })}
            </div>
            {areasAdicionales.length > 0 && (
              <>
                <h2 className="subtitulo-areas">▸ Otros temas</h2>
                <div className="recorridos areas-grid">
                  {areasAdicionales.map((area) => (
                    <article className="tarjeta tarjeta-area" key={area}>
                      <PixelIcon name="measurement" size={64} />
                      <h3 className="titulo-tarjeta">{area}</h3>
                      <ul className="lista-recursos">
                        {ejemplos.filter((ejemplo) => ejemplo.area === area).map((ejemplo) => (
                          <li key={ejemplo.id}><a href={enlaceEjemplo(ejemplo.id)}>{ejemplo.titulo}</a></li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {ruta === "/contacto" && (
          <section className="pagina contacto-pagina">
            <p className="etiqueta">COMUNIDAD CODEPHY</p>
            <h1>Contacto y colaboraciones</h1>
            <p>CodePhy es una plataforma educativa de acceso libre para aprender programación científica aplicada a la física.</p>
            <div className="tarjeta contacto-tarjeta">
              <h2>Participa en el proyecto</h2>
              <p>¿Encontraste un error, quieres proponer un ejemplo o te interesa aportar conocimientos, materiales o apoyar voluntariamente el proyecto? Escríbenos para conversar sobre tu propuesta.</p>
              <p><strong>Correo:</strong> <a href="mailto:codephy.lab@gmail.com">codephy.lab@gmail.com</a></p>
              <a className="boton boton-principal" href="mailto:codephy.lab@gmail.com?subject=Contacto%20CodePhy">Escribir un correo</a>
              <p className="estado">El botón abre tu aplicación de correo configurada. No se solicitan pagos ni se reciben donaciones directamente desde la página.</p>
            </div>
          </section>
        )}

        {ruta === "/laboratorio" && <LaboratorioPython />}

        {esLeccion && <LessonPage key={leccionActual.id} leccion={leccionActual} />}

        {ejemploActual && (
          <article className="pagina">
            <a href="#/galeria">← Galería de código</a>
            <p className="etiqueta etiqueta-ejemplo">PROGRAMA DEMOSTRATIVO</p>
            <h1>{ejemploActual.titulo}</h1>
            <p>{ejemploActual.descripcion}</p>

            <div className="metadatos">
              <span>{ejemploActual.modulo}</span>
              <span>{ejemploActual.area}</span>
            </div>

            <h2>Código Python</h2>
            <EjemploCodigo key={ejemploActual.id} ejemplo={ejemploActual} />

            <p className="aviso">{ejemploActual.nota}</p>
          </article>
        )}

        {!rutaValida && (
          <section className="pagina">
            <h1>Página no encontrada</h1>
            <a href="#/">Volver al inicio</a>
          </section>
        )}
      </main>

      <footer className="pie">
        <div className="pie-contenido">
          <p className="etiqueta">CONTACTO Y APORTACIONES</p>
          <h2>Ayuda a mejorar CodePhy</h2>
          <p>Puedes comunicar errores, sugerir mejoras y proponer ejemplos.</p>
          <p><a href="mailto:codephy.lab@gmail.com">codephy.lab@gmail.com</a> · <a href="#/contacto">Contacto y colaboraciones</a></p>
          <p className="firma">CodePhy · Programación científica de acceso libre.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
