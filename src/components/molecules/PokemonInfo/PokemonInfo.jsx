import Weight from "../../atoms/icons/Weight"
import { ColorsClass, FillColorsClass } from "../../../utils/colors"
import Body3 from '../../atoms/Body3/Body3'
import Caption from '../../atoms/Caption/Caption'
import css from './PokemonInfo.module.css'

/**
 * Componente PokemonInfo que renderiza las estadisticas de un pokemon.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.height - Altura del Pokémon en metros, representada como texto.
 * @param {string} props.weight - Peso del Pokémon en kilogramos, representado como texto.
 * @param {Array<string>} props.moves - Lista de movimientos del Pokémon, donde cada movimiento es un texto.
 */
export default function PokemonInfo(props) {
    const { height, weight, moves } = props

    return (
        <div className={css.grid}>
            <div className={css.box}>
                <div className={css.info}>
                    <Weight fill={FillColorsClass.grayscaleDark} width="10px" height="10px" />
                    <Body3 color={ColorsClass.grayscaleDark}>{weight} Kg</Body3>
                </div>
                <Caption color={ColorsClass.grayscaleMedium}>Weight</Caption>
            </div>
            <div className={css.box}>
                <div className={css.info}>
                    <Weight fill={FillColorsClass.grayscaleDark} width="10px" height="10px" />
                    <Body3 color={ColorsClass.grayscaleDark}>{height} m</Body3>
                </div>
                <Caption color={ColorsClass.grayscaleMedium}>Height</Caption>
            </div>
            <div className={css.box}>
                <div>
                    {moves?.map((element, index) => <Body3 key={index} color={ColorsClass.grayscaleDark}>{element}</Body3>)}
                </div>
                <Caption color={ColorsClass.grayscaleMedium}>Moves</Caption>
            </div>
        </div>
    )
}