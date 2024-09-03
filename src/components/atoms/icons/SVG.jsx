/**
 * Componente SVG que renderiza un elemento SVG con propiedades personalizables.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de relleno del SVG.
 * @param {string | number} [props.width="30px"] - Ancho del SVG. Por defecto, "30px" si no se especifica.
 * @param {string | number} [props.height="30px"] - Altura del SVG. Por defecto, "30px" si no se especifica.
 * @param {string} [props.viewBox] - Atributo `viewBox` del SVG que define la posición y dimensión del dibujo.
 * @param {React.ReactNode} [props.children] - Contenido dentro del SVG, como otros elementos SVG.
 */

export default function SVG(props) {
    const { fill, width = "30px", height = "30px", viewBox, children, xmlns, onClick } = props

    var style = {}
    if (onClick) style.cursor = "pointer"

    return (
        <svg className={fill}
            xmlns={xmlns}
            height={height}
            viewBox={viewBox}
            width={width}
            onClick={onClick}
            style={style}
        >
            {children}
        </svg>
    )
}