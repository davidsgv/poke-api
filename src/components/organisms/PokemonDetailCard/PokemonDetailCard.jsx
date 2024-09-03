import { ColorsClass } from '../../../utils/colors'
import Body3 from '../../atoms/Body3/Body3'
import Subtitle1 from '../../atoms/Subtitle1/Subtitle1'
import PokemonInfo from '../../molecules/PokemonInfo/PokemonInfo'
import PokemonStats from '../../molecules/PokemonStats/PokemonStats'
import TypeGroup from '../../molecules/TypeGroup/TypeGroup'
import css from './PokemonDetailCard.module.css'

/**
 * Componente PokemonCard que renderiza la información detallada de un Pokémon, incluyendo su imagen, tipos, descripción, estadísticas, y más.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.color - Clase CSS para aplicar un color personalizado a los textos del componente.
 * @param {string} props.background - Clase CSS para aplicar un color de fondo personalizado a ciertos elementos del componente.
 * @param {string} props.description - Descripción del Pokémon.
 * @param {object} props.info - Información adicional del Pokémon, como su peso y altura.
 * @param {string} props.info.weight - Peso del Pokémon.
 * @param {string} props.info.height - Altura del Pokémon.
 * @param {string[]} props.types - Lista de tipos del Pokémon.
 * @param {Array<{ stat: string, value: number }>} props.stats - Estadísticas base del Pokémon.
 * @param {string} props.sprite - URL de la imagen del sprite del Pokémon.
 * @param {string[]} props.moves - Lista de movimientos del Pokémon.
 * 
 * @returns {JSX.Element} Una tarjeta detallada con la información completa de un Pokémon.
 */
export default function PokemonCard(props) {
    const { color, background, description, info, types, stats, sprite, moves } = props

    return (
        <div className={css.card}>
            <img className={css.img} src={sprite}></img>
            <TypeGroup types={types} />

            <Subtitle1 color={color}>About</Subtitle1>

            <PokemonInfo weight={info?.weight} height={info?.height} moves={moves} />

            <Body3 color={ColorsClass.grayscaleDark}>{description}</Body3>

            <Subtitle1 color={color}>Base Stats</Subtitle1>

            <PokemonStats color={color} background={background} stats={stats} />
        </div>
    )
}