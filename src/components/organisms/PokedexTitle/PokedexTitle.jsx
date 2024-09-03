import PokeBall from "../../atoms/icons/PokeBall"
import IconTitle from "../../molecules/IconTitle/IconTitle"
// import css from './PokemonDetailTitle.module.css'

/**
 * Componente PokedexTitle que renderiza un título con un ícono de PokéBall y el nombre de un Pokémon.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.color - Clase CSS para aplicar un color personalizado al texto del título.
 * @param {string} props.fill - Clase CSS para aplicar un color de relleno personalizado al ícono de la PokéBall.
 * @param {string} props.name - Nombre del Pokémon que se mostrará en el título.
 */
export default function PokedexTitle(props) {
    const { color, fill, name } = props

    return (
        <IconTitle fill={fill} color={color} Icon={PokeBall}>
            {name}
        </IconTitle>
    )
}