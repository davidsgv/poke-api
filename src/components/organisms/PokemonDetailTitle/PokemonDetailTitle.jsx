import { useNavigate } from "react-router-dom"
import ArrowBack from "../../atoms/icons/ArrowBack"
import Number from "../../atoms/Number/Number"
import IconTitle from "../../molecules/IconTitle/IconTitle"
import css from './PokemonDetailTitle.module.css'

export default function PokemonDetailTitle(props) {
    const { color, fill, id, name } = props

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className={css.container}>
            <IconTitle fill={fill} color={color} Icon={ArrowBack} onClickIcon={handleClick}>
                {name}
            </IconTitle>
            <Number color={color} fill={fill}>{id}</Number>
        </div>
    )
}