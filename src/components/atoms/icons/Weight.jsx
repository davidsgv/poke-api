import SVG from "./SVG";

/**
 * Componente Weight que renderiza un elemento SVG con propiedades personalizables.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de relleno del SVG.
 * @param {string | number} [props.width="30px"] - Ancho del SVG. Por defecto, "30px" si no se especifica.
 * @param {string | number} [props.height="30px"] - Altura del SVG. Por defecto, "30px" si no se especifica.
 */
export default function Weight(props) {
    return (
        <SVG viewBox="0 -960 960 960" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M240-200h480l-57-400H297l-57 400Zm240-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm113 0h70q30 0 52 20t27 49l57 400q5 36-18.5 63.5T720-120H240q-37 0-60.5-27.5T161-211l57-400q5-29 27-49t52-20h70q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5ZM240-200h480-480Z" />
        </SVG>
    )
}
