/** Aplica Geist Pixel exclusivamente a * y ^ en el texto didáctico.
 * Los editores, la terminal y los fragmentos de código conservan Consolas. */
export default function TextoLegible({ texto }) {
  if (typeof texto !== 'string') return texto;
  return texto.split(/([*^])/g).map((parte, indice) =>
    parte === '*' || parte === '^'
      ? <span className="simbolo-geist" key={indice}>{parte}</span>
      : parte
  );
}
