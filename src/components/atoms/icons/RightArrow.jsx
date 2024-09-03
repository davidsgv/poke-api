import SVG from "./SVG";

/**
 * Componente LeftArrow que renderiza un elemento SVG con propiedades personalizables.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de relleno del SVG.
 * @param {string | number} [props.width="30px"] - Ancho del SVG. Por defecto, "30px" si no se especifica.
 * @param {string | number} [props.height="30px"] - Altura del SVG. Por defecto, "30px" si no se especifica.
 */
export default function RightArrow(props) {
    return (
        <SVG viewBox="0 -960 960 960" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </SVG>
    )
}