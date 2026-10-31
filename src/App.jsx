import { useEffect, useState } from "react";
import CodeBlock from "./components/CodeBlock.jsx";
import { ejemplos, modulos } from "./data/ejemplos.js";
import "./App.css";

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
  const areas = [...new Set(ejemplos.map((ejemplo) => ejemplo.area))];
  const rutaValida = Boolean(paginaActual || ejemploActual);

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
      ejemploActual?.titulo ?? paginaActual?.nombre ?? "Página no encontrada";

    document.title = `${titulo} | CodePhy`;
    window.scrollTo(0, 0);
    document.getElementById("contenido")?.focus();
  }, [ruta, ejemploActual, paginaActual]);

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
          <span className="marca-simbolo" aria-hidden="true">
            {">"}
          </span>
          CodePhy
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
              <p className="etiqueta">EXPLORA · PROGRAMA · INTERPRETA</p>
              <h1>Aprende a programar con problemas de física.</h1>
              <p className="introduccion">
                Comprende el código, modifica sus parámetros e interpreta sus
                resultados. Aprende desde los fundamentos o consulta
                herramientas para tus tareas y prácticas.
              </p>
              <p className="aviso">
                Prototipo con contenido demostrativo. Python se ejecuta fuera de
                esta plataforma; los resultados mostrados son referencias
                preparadas.
              </p>
            </section>

            <section className="seccion">
              <h2>Tres formas de explorar</h2>

              <div className="recorridos">
                <a className="tarjeta acceso verde" href="#/aprender">
                  <span className="etiqueta">01 · APRENDER</span>
                  <h3>Ruta de programación</h3>
                  <p>Recorre los módulos desde los fundamentos.</p>
                  <span className="acceso-enlace">Ver la ruta →</span>
                </a>

                <a className="tarjeta acceso azul" href="#/galeria">
                  <span className="etiqueta">02 · CONSULTAR</span>
                  <h3>Galería de código</h3>
                  <p>Encuentra programas por tarea y resultado.</p>
                  <span className="acceso-enlace">Explorar código →</span>
                </a>

                <a className="tarjeta acceso amarillo" href="#/areas">
                  <span className="etiqueta">03 · EXPLORAR</span>
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
                    <span className="numero-modulo" aria-hidden="true">
                      {String(indice + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="titulo-tarjeta">{modulo}</h2>

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
                  <p className="categoria">{ejemplo.tarea}</p>
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
              Las categorías se generan a partir de los ejemplos disponibles.
            </p>

            <div className="recorridos">
              {areas.map((area) => (
                <article className="tarjeta" key={area}>
                  <h2 className="titulo-tarjeta">{area}</h2>
                  <ul className="lista-recursos">
                    {ejemplos
                      .filter((ejemplo) => ejemplo.area === area)
                      .map((ejemplo) => (
                        <li key={ejemplo.id}>
                          <a href={enlaceEjemplo(ejemplo.id)}>
                            {ejemplo.titulo}
                          </a>
                        </li>
                      ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

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
