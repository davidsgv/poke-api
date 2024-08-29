import Subtitle2 from "../Subtitle2/Subtitle2"
import Tag from '../icons/Tag'
import css from './Number.module.css'

/**
 * Componente Number que renderiza un título con un # de prefijo (`<h3>`) con estilos personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - Contenido que se muestra dentro del título, como texto o elementos.
 * @param {string} props.color - Clase CSS adicional para aplicar un color personalizado al título.
 * 
 */
export default function Number(props) {
    const { children, color, fill } = props
    const size = "12px";

    return (
        <div className={css.container}>
            <Tag fill={fill} width={size} height={size} />
            <Subtitle2 color={color}>{children}</Subtitle2>
        </div>
    )
}