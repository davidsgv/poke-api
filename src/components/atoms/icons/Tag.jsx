import SVG from "./SVG";

/**
 * Componente Tag que renderiza un elemento SVG con propiedades personalizables.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de relleno del SVG.
 * @param {string | number} [props.width="30px"] - Ancho del SVG. Por defecto, "30px" si no se especifica.
 * @param {string | number} [props.height="30px"] - Altura del SVG. Por defecto, "30px" si no se especifica.
 */
export default function Tag(props) {
    return (
        <SVG viewBox="0 -960 960 960" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z" />
        </SVG>
    )
}