import Number from "../../atoms/Number/Number"
import ArrowBackTitle from "../../molecules/BackArrowTitle/ArrowBackTitle"
import css from './PokemonDetailTitle.module.css'

export default function PokemonDetailTitle(props) {
    const { color, fill, id, name } = props

    return (
        <div className={css.container}>
            <ArrowBackTitle fill={fill} color={color}>
                {name}
            </ArrowBackTitle>
            <Number color={color} fill={fill}>{id}</Number>
        </div>
    )
}