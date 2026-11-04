import { useEffect, useState } from "react";
import CodeBlock from "./components/CodeBlock.jsx";
import LessonPage from "./components/LessonPage.jsx";
import PixelIcon from "./components/PixelIcon.jsx";
import { ejemplos, modulos } from "./data/ejemplos.js";
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
  { ruta: "/aprender", nombre: "Aprender programación" },
  { ruta: "/galeria", nombre: "Galería de código" },
  { ruta: "/areas", nombre: "Áreas de física" },
];

function leerRuta() {
  return window.location.hash.slice(1) || "/";
}

function enlaceEjemplo(id) {
  return `#/ejemplo/${id}`;
}

function App() {
  const [ruta, setRuta] = useState(leerRuta);

  const ejemploActual = ejemplos.find(
    (ejemplo) => ruta === `/ejemplo/${ejemplo.id}`,
  );

  const paginaActual = paginas.find((pagina) => pagina.ruta === ruta);
  const areasCatalogadas = new Set(
    [...categoriasFisica, ...categoriasMatematicas].flatMap((categoria) => categoria.areas),
  );
  const areasAdicionales = [...new Set(ejemplos.map((ejemplo) => ejemplo.area))]
    .filter((area) => !areasCatalogadas.has(area));
  const esLeccion = ruta === "/leccion/python-variables";
  const rutaValida = Boolean(paginaActual || ejemploActual || esLeccion);

  useEffect(() => {
    function actualizarRuta() {
      setRuta(leerRuta());
    }

    window.addEventListener("hashchange", actualizarRuta);

    return () => {
      window.removeEventListener("hashchange", actualizarRuta);
    };
  }, []);

  useEffect(() => {
    const titulo =
      (esLeccion ? "Variables y tipos de datos" : ejemploActual?.titulo ?? paginaActual?.nombre) ?? "Página no encontrada";

    document.title = `${titulo} | CodePhy`;
    window.scrollTo(0, 0);
    document.getElementById("contenido")?.focus();
  }, [ruta, ejemploActual, paginaActual, esLeccion]);

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
        <a className="marca" href="#/" aria-label="CodePhy: inicio">
          <PixelIcon name="terminal" size={36} />
          CodePhy<span className="marca-exe">.exe</span>
          <span className="cursor-marca" aria-hidden="true">
            _
          </span>
        </a>

        <p className="descripcion-marca">
          Programación científica con Python para física
        </p>

        <nav className="navegacion" aria-label="Navegación principal">
          {paginas.map((pagina) => (
            <a
              key={pagina.ruta}
              href={`#${pagina.ruta}`}
              aria-current={ruta === pagina.ruta ? "page" : undefined}
            >
              {pagina.nombre}
            </a>
          ))}
        </nav>
      </header>

      <main id="contenido" tabIndex={-1}>
        {ruta === "/" && (
          <>
            <section className="portada">
              <p className="etiqueta">▸ INICIAR SISTEMA / CODEPHY v0.1</p>
              <h1><span className="titulo-amarillo">CodePhy</span><br />Programación en Python para Física<span className="cursor-marca">_</span></h1>
              <p className="introduccion">
                Comprende el código, modifica sus parámetros e interpreta sus
                resultados. Aprende desde los fundamentos o consulta
                herramientas para tus tareas y prácticas.
              </p>
              <div className="acciones-portada"><a className="boton boton-principal" href="#/aprender">▶ Iniciar curso</a><a className="boton" href="#/galeria">Explorar galería →</a></div>
              <p className="aviso">
                Prototipo con contenido demostrativo. Python se ejecuta fuera de
                esta plataforma; los resultados mostrados son referencias
                preparadas.
              </p>
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
            <p className="etiqueta">RUTA PROGRESIVA</p>
            <h1>Aprender programación</h1>
            <p>Organización inicial de los módulos, todavía ajustable.</p>

            <ol className="lista-modulos">
              {modulos.map((modulo, indice) => {
                const recursos = ejemplos.filter(
                  (ejemplo) => ejemplo.modulo === modulo,
                );

                return (
                  <li className="tarjeta modulo" key={modulo}>
                    <PixelIcon name={indice===0 ? "terminal" : indice===1 ? "folder" : indice===2 ? "graph" : indice===3 ? "numeric" : "flask"} size={48}/><span className="numero-modulo" aria-hidden="true">
                      {String(indice + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="titulo-tarjeta">{modulo}</h2>

                      {indice === 0 && <div className="leccion-destacada"><span className="etiqueta">NUEVA · LECCIÓN COMPLETA</span><a href="#/leccion/python-variables">01 · Variables y tipos de datos →</a><p>Aprende con una aplicación de energía cinética y un ejercicio interactivo.</p></div>}

                      {recursos.length > 0 ? (
                        <ul className="lista-recursos">
                          {recursos.map((ejemplo) => (
                            <li key={ejemplo.id}>
                              <a href={enlaceEjemplo(ejemplo.id)}>
                                {ejemplo.titulo}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="estado">
                          Contenido pendiente de desarrollar.
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {ruta === "/galeria" && (
          <section className="pagina">
            <p className="etiqueta">CONSULTA POR TAREA</p>
            <h1>Galería de código</h1>
            <p className="aviso">
              Ejemplos demostrativos para probar las funciones. No constituyen
              el contenido didáctico definitivo.
            </p>

            <div className="recorridos">
              {ejemplos.map((ejemplo) => (
                <article className="tarjeta ficha" key={ejemplo.id}>
                  <PixelIcon name={ejemplo.id === "posicion-mru" ? "graph" : ejemplo.id === "energia-foton" ? "optics" : "measurement"} size={48}/><p className="categoria">{ejemplo.tarea}</p>
                  <h2 className="titulo-tarjeta">{ejemplo.titulo}</h2>
                  <p>{ejemplo.descripcion}</p>

                  <h3 className="titulo-previa">Resultado de referencia</h3>
                  <pre className="resultado">
                    <samp>{ejemplo.resultado}</samp>
                  </pre>

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

        {esLeccion && <LessonPage />}

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
            <CodeBlock
              key={ejemploActual.id}
              codigo={ejemploActual.codigo}
              titulo={ejemploActual.titulo}
            />

            <h2>Resultado de referencia</h2>
            <pre className="resultado">
              <samp>{ejemploActual.resultado}</samp>
            </pre>

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
          <p>Podrás comunicar errores, sugerir mejoras y proponer ejemplos.</p>
          <p className="estado">Canal de contacto pendiente de habilitar.</p>
          <p className="firma">CodePhy · Plataforma educativa en desarrollo.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
