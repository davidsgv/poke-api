import Headline from '../../atoms/Headline/Headline'
import ArrowBack from '../../atoms/icons/ArrowBack'
import css from './ArrowBackTitle.module.css'

/**
 * Componente ArrowBackTitle que renderiza un titulo con una flecha y un color de fondo personalizadp.
 * 
 * @param {object} props - Props del componente.
 * @param {string} [props.fill] - Nombre de la clase CSS que define el color de la flecha.
 * @param {string} [props.color] - Nombre de la clase CSS que define el color del titulo.
 * @param {string} props.children - Texto que se muestra dentro del titulo.
 */
export default function ArrowBackTitle(props) {
    const { color, fill, children } = props

    return (
        <div className={css.container}>
            <ArrowBack fill={fill} width="40px" height="40px" />
            <Headline color={color}>{children}</Headline>
        </div>
    )
}