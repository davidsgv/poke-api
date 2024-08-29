import css from './Body3.module.css'

/**
 * Componente Body3 que renderiza un texto pequeño (`<p>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Body3(props) {
    const { children, color } = props
    return <p className={`${css.body3} ${color}`}>{children}</p>
}