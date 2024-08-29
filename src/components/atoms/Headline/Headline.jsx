import css from './Headline.module.css'

/**
 * Componente Headline que renderiza un título principal (`<h1>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Headline(props) {
    const { children, color } = props
    return <h1 className={`${css.headline} ${color}`}>{children}</h1>
}