import { useEffect, useLayoutEffect, useState } from "react";
import EjemploCodigo from "./components/EjemploCodigo.jsx";
import EjemploEjecutable from "./components/EjemploEjecutable.jsx";
import LessonPage from "./components/LessonPage.jsx";
import LaboratorioPython from "./components/LaboratorioPython.jsx";
import PixelIcon from "./components/PixelIcon.jsx";
import { ejemplosGaleria as ejemplos } from "./data/galeria.js";
import { unidades, buscarLeccion, buscarUnidad } from "./data/lecciones/index.js";
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
  if (ruta === "/aprender") return "python-intro";
  if (ruta === "/unidad/unidad-10" || /^\/leccion\/python-(4[6-9]|50)-/.test(ruta)) return "python-numerical";
  if (ruta === "/unidad/unidad-11" || /^\/leccion\/python-5[1-5]-/.test(ruta)) return "python-odes";
  if (ruta === "/unidad/unidad-12" || /^\/leccion\/python-(5[6-9]|60)-/.test(ruta)) return "python-simulation";
  if (ruta === "/unidad/unidad-7" || ruta === "/leccion/python-31-archivos-y-rutas-de-trabajo" || ruta === "/leccion/python-32-leer-y-escribir-archivos-csv" || ruta === "/leccion/python-33-introduccion-a-pandas" || ruta === "/leccion/python-34-limpieza-y-seleccion-de-datos" || ruta === "/leccion/python-35-proyecto-datos-de-laboratorio") return "python-files";
  if (ruta === "/unidad/unidad-8" || ruta === "/leccion/python-36-medidas-de-tendencia-central" || ruta === "/leccion/python-37-dispersion-y-distribuciones" || ruta === "/leccion/python-38-incertidumbre-y-propagacion" || ruta === "/leccion/python-39-regresion-y-ajuste-de-curvas" || ruta === "/leccion/python-40-residuos-y-calidad-del-ajuste") return "python-stats";
  if (ruta === "/unidad/unidad-9" || ruta === "/leccion/python-41-vectores-y-productos" || ruta === "/leccion/python-42-matrices-y-sistemas-lineales" || ruta === "/leccion/python-43-autovalores-y-modos-normales" || ruta === "/leccion/python-44-primeros-pasos-con-sympy" || ruta === "/leccion/python-45-derivadas-e-integrales-simbolicas") return "python-linear";
  if (ruta === "/unidad/unidad-6" || ruta.startsWith("/leccion/python-26-") || ruta.startsWith("/leccion/python-27-") || ruta.startsWith("/leccion/python-28-") || ruta.startsWith("/leccion/python-29-") || ruta.startsWith("/leccion/python-30-")) return "python-plot";
  if (ruta === "/unidad/unidad-5" || ruta.startsWith("/leccion/python-21-") || ruta.startsWith("/leccion/python-22-") || ruta.startsWith("/leccion/python-23-") || ruta.startsWith("/leccion/python-24-") || ruta.startsWith("/leccion/python-25-")) return "python-numpy";
  if (ruta === "/unidad/unidad-4" || ruta.startsWith("/leccion/python-16-") || ruta.startsWith("/leccion/python-17-") || ruta.startsWith("/leccion/python-18-") || ruta.startsWith("/leccion/python-19-") || ruta.startsWith("/leccion/python-20-")) return "python-functions";
  if (ruta === "/unidad/unidad-3" || ruta.startsWith("/leccion/python-11-") || ruta.startsWith("/leccion/python-12-") || ruta.startsWith("/leccion/python-13-") || ruta.startsWith("/leccion/python-14-") || ruta.startsWith("/leccion/python-15-")) return "python-loops";
  if (ruta === "/unidad/unidad-2" || ruta.startsWith("/leccion/python-06-") || ruta.startsWith("/leccion/python-07-") || ruta.startsWith("/leccion/python-08-") || ruta.startsWith("/leccion/python-09-") || ruta.startsWith("/leccion/python-10-")) return "python-logic";
  if (ruta.startsWith("/leccion/") || ruta.startsWith("/unidad/")) return "python-intro";
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
  const [submenuAbierto, setSubmenuAbierto] = useState(null);
  const [busquedaGaleria, setBusquedaGaleria] = useState("");
  const [areaGaleria, setAreaGaleria] = useState("Todas");
  const areasGaleria = [...new Set(ejemplos.map(ejemplo => ejemplo.area))].sort((a,b) => a.localeCompare(b, "es"));
  const resultadosGaleria = ejemplos.filter(ejemplo => {
    const texto = [ejemplo.titulo, ejemplo.descripcion, ejemplo.area, ejemplo.tarea, ejemplo.modulo, ...(ejemplo.palabrasClave || [])].join(" ").toLocaleLowerCase("es");
    return (areaGaleria === "Todas" || ejemplo.area === areaGaleria) && texto.includes(busquedaGaleria.trim().toLocaleLowerCase("es"));
  });

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
      setSubmenuAbierto(null);
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
          {paginas.map((pagina) => {
            const esAprende = pagina.ruta === "/aprender";
            const esFisica = pagina.ruta === "/areas";
            const subitems = esAprende
              ? unidades.map((unidad) => ({ ruta: `/unidad/${unidad.id}`, nombre: `${unidad.numero}. ${unidad.titulo}` }))
              : esFisica
                ? [...categoriasFisica, ...categoriasMatematicas].map((area) => ({ ruta: `/areas`, nombre: area.nombre }))
                : [];
            const tieneSubmenu = subitems.length > 0;
            return <div key={pagina.ruta} className={`navegacion-grupo ${submenuAbierto === pagina.ruta ? 'submenu-abierto' : ''}`}>
              <a href={`#${pagina.ruta}`} aria-current={ruta === pagina.ruta ? "page" : undefined}
                onClick={() => { setMenuAbierto(false); setSubmenuAbierto(null); }}>{pagina.nombre}</a>
              {tieneSubmenu && <button className="submenu-toggle" type="button"
                aria-label={`Mostrar opciones de ${pagina.nombre}`} aria-expanded={submenuAbierto === pagina.ruta}
                onClick={() => setSubmenuAbierto(v => v === pagina.ruta ? null : pagina.ruta)}>▾</button>}
              {tieneSubmenu && <div className="submenu-panel" aria-label={`Opciones de ${pagina.nombre}`}>
                {subitems.map((item, i) => <a key={`${item.ruta}-${i}`} href={`#${item.ruta}`}
                  onClick={() => { setMenuAbierto(false); setSubmenuAbierto(null); }}>{item.nombre}</a>)}
              </div>}
            </div>;
          })}
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
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-logic" size={84}/>
              <div><p className="etiqueta">UNIDAD 02</p><h2>Condicionales y lógica</h2>
                <p>Comparaciones, operadores lógicos, if, elif, else y validación de parámetros físicos.</p>
                <p className="unidad-conteo">5 lecciones · Python básico · Requiere Unidad 1</p>
                <a className="boton boton-principal" href="#/unidad/unidad-2">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-loops" size={84}/>
              <div><p className="etiqueta">UNIDAD 03</p><h2>Ciclos y automatización</h2>
                <p>for, while, range(), acumuladores, control de ciclos y automatización de cálculos físicos.</p>
                <p className="unidad-conteo">5 lecciones · Python básico · Requiere Unidades 1 y 2</p>
                <a className="boton boton-principal" href="#/unidad/unidad-3">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-functions" size={84}/>
              <div><p className="etiqueta">UNIDAD 04</p><h2>Estructuras de datos y funciones</h2><p>Organiza mediciones en colecciones y crea funciones reutilizables para cálculos físicos.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–3</p><a className="boton boton-principal" href="#/unidad/unidad-4">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-numpy" size={84}/>
              <div><p className="etiqueta">UNIDAD 05</p><h2>Computación con NumPy</h2><p>Utiliza arreglos para realizar cálculos sobre conjuntos de mediciones y magnitudes físicas.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–4</p><a className="boton boton-principal" href="#/unidad/unidad-5">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-plot" size={84}/>
              <div><p className="etiqueta">UNIDAD 06</p><h2>Visualización científica con Matplotlib</h2><p>Transforma resultados numéricos en gráficas legibles, reproducibles y con unidades.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidad 5</p><a className="boton boton-principal" href="#/unidad/unidad-6">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-files" size={84}/>
              <div><p className="etiqueta">UNIDAD 07</p><h2>Archivos y datos experimentales</h2><p>Organiza archivos, importa mediciones y prepara datos reproducibles para su análisis científico.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–6</p><a className="boton boton-principal" href="#/unidad/unidad-7">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-stats" size={84}/>
              <div><p className="etiqueta">UNIDAD 08</p><h2>Estadística, incertidumbre y ajuste</h2><p>Resume mediciones, cuantifica su dispersión y ajusta modelos físicos a datos experimentales.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–7</p><a className="boton boton-principal" href="#/unidad/unidad-8">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-linear" size={84}/>
              <div><p className="etiqueta">UNIDAD 09</p><h2>Álgebra lineal y cálculo simbólico</h2><p>Aplica matrices, sistemas lineales y expresiones simbólicas a problemas físicos.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–8</p><a className="boton boton-principal" href="#/unidad/unidad-9">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-numerical" size={84}/>
              <div><p className="etiqueta">UNIDAD 10</p><h2>Métodos numéricos fundamentales</h2><p>Resuelve ecuaciones, integra funciones, aproxima derivadas y analiza señales con FFT.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–9</p><a className="boton boton-principal" href="#/unidad/unidad-10">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-odes" size={84}/>
              <div><p className="etiqueta">UNIDAD 11</p><h2>Ecuaciones diferenciales</h2><p>Modela procesos físicos con Euler, Runge-Kutta, SciPy y diferencias finitas.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidad 10</p><a className="boton boton-principal" href="#/unidad/unidad-11">Explorar unidad →</a></div>
            </div>
            <div className="unidad-destacada tarjeta">
              <PixelIcon name="python-simulation" size={84}/>
              <div><p className="etiqueta">UNIDAD 12</p><h2>Modelado, animación y proyectos</h2><p>Diseña simulaciones reproducibles, animaciones, métodos Monte Carlo y un proyecto final.</p>
                <p className="unidad-conteo">5 lecciones · Requiere Unidades 1–11</p><a className="boton boton-principal" href="#/unidad/unidad-12">Explorar unidad →</a></div>
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
            <p className="etiqueta">CONSULTA POR TAREA Y DISCIPLINA</p>
            <h1>Galería de código</h1>
            <p>Explora programas científicos, modifica sus parámetros y ejecuta su código Python. Los ejemplos del curso mantienen un enlace a la lección donde se explican.</p>
            <div className="galeria-filtros">
              <label>Buscar programas
                <input type="search" value={busquedaGaleria} onChange={e => setBusquedaGaleria(e.target.value)} placeholder="Ej. oscilaciones, FFT, mecánica…" />
              </label>
              <label>Área
                <select value={areaGaleria} onChange={e => setAreaGaleria(e.target.value)}>
                  <option value="Todas">Todas las áreas</option>
                  {areasGaleria.map(area => <option key={area} value={area}>{area}</option>)}
                </select>
              </label>
            </div>
            <p className="galeria-contador" role="status">{resultadosGaleria.length} {resultadosGaleria.length === 1 ? "programa" : "programas"}</p>
            {resultadosGaleria.length === 0 && <p>No encontramos programas con esos filtros. Prueba otra palabra o área.</p>}
            <div className="recorridos">
              {resultadosGaleria.map(ejemplo => (
                <article className="tarjeta ficha" key={ejemplo.id}>
                  <PixelIcon name={ejemplo.origenLeccion ? "graph" : ejemplo.id === "energia-foton" ? "optics" : "measurement"} size={48}/>
                  <p className="categoria">{ejemplo.area}</p>
                  <h2 className="titulo-tarjeta">{ejemplo.titulo}</h2>
                  <p>{ejemplo.descripcion}</p>
                  <p className="galeria-metadatos">{ejemplo.tarea}{ejemplo.dificultadProgramacion ? ` · ${ejemplo.dificultadProgramacion}` : ""}</p>
                  <a className="boton" href={enlaceEjemplo(ejemplo.id)}>Ver programa →</a>
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
            <p className="etiqueta etiqueta-ejemplo">{ejemploActual.origenLeccion ? "PROGRAMA CIENTÍFICO" : "PROGRAMA DEMOSTRATIVO"}</p>
            <h1>{ejemploActual.titulo}</h1>
            <p>{ejemploActual.descripcion}</p>

            <div className="metadatos">
              <span>{ejemploActual.modulo}</span>
              <span>{ejemploActual.area}</span>
            </div>

            {ejemploActual.origenLeccion && <p><a href={`#/leccion/${ejemploActual.leccionId}`}>Aprender este programa en la lección: {ejemploActual.leccionTitulo} →</a></p>}
            <h2>Código Python</h2>
            {ejemploActual.origenLeccion
              ? <EjemploEjecutable key={ejemploActual.id} ejemplo={ejemploActual} />
              : <EjemploCodigo key={ejemploActual.id} ejemplo={ejemploActual} />}

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
