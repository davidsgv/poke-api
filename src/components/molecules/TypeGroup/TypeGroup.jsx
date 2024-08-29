import Type from "../../atoms/Type/Type"
import css from './TypeGroup.module.css'

/**
 * Componente TypeGroup que renderiza un grupo de badges con colores de fondo personalizados.
 * 
 * @param {object} props - Props del componente.
 * @param {Array<{text: string, background: string}>} props.types - Arreglo de objetos que contienen el texto y la clase CSS de fondo para cada badge.
 */
export default function TypeGroup(props) {
    const { types } = props

    return (
        <div className={css.container}>
            {types?.map((element, index) => <Type key={index} background={element.background}>{element.text}</Type>)}
        </div>
    )
}