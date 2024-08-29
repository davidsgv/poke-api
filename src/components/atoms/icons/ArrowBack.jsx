import SVG from "./SVG";

/**
 * Componente ArrowBack que renderiza un elemento SVG con propiedades personalizables.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de relleno del SVG.
 * @param {string | number} [props.width="30px"] - Ancho del SVG. Por defecto, "30px" si no se especifica.
 * @param {string | number} [props.height="30px"] - Altura del SVG. Por defecto, "30px" si no se especifica.
 */
export default function ArrowBack(props) {
    return (
        <SVG viewBox="0 -960 960 960" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </SVG>
    )
}