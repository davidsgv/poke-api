import css from './Subtitle1.module.css'

/**
 * Componente Subtitle2 que renderiza un título principal (`<h3>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Subtitle1(props) {
    const { children, color } = props
    return <h2 className={`${css.subtitle1} ${color}`}>{children}</h2>
}