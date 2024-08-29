import css from './Subtitle3.module.css'

/**
 * Componente Subtitle3 que renderiza un título principal (`<h4>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Subtitle3(props) {
    const { children, color } = props
    return <h4 className={`${css.subtitle3} ${color}`}>{children}</h4>
}