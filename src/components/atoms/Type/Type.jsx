import css from './type.module.css'
import { ColorsClass } from '../../../utils/colors'
import { capitalize } from '../../../utils/strings'

/**
 * Componente Type que renderiza un badge con color de fondo personalizadp.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.children - Texto que se muestra dentro del badge.
 * @param {string} props.background - Clase CSS adicional para aplicar un color de fondo personalizado al badge.
 * 
 */
export default function Type(props) {
    const { children, background } = props

    return (
        <span className={`${css.type} ${background} ${ColorsClass.grayscaleWhite}`}>{capitalize(children)}</span>
    )
}

