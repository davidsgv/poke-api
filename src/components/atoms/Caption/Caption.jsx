import css from './Caption.module.css'

/**
 * Componente Caption que renderiza un texto extra pequeño (`<p>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Caption(props) {
    const { children, color } = props
    return <p className={`${css.caption} ${color}`}>{children}</p>
}