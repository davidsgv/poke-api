import { ColorsClass } from '../../../utils/colors'
import Body3 from '../../atoms/Body3/Body3'
import Subtitle1 from '../../atoms/Subtitle1/Subtitle1'
import PokemonInfo from '../../molecules/PokemonInfo/PokemonInfo'
import PokemonStats from '../../molecules/PokemonStats/PokemonStats'
import TypeGroup from '../../molecules/TypeGroup/TypeGroup'
import css from './PokemonCard.module.css'


export default function PokemonCard(props) {
    const { color, background, description, types, stats, sprite, moves } = props

    return (
        <div className={css.card}>
            <img className={css.img} src={sprite}></img>
            <TypeGroup types={types} />

            <Subtitle1 color={color}>About</Subtitle1>

            <PokemonInfo weight="6.9" height="0.7" moves={moves} />

            <Body3 color={ColorsClass.grayscaleDark}>{description}</Body3>

            <Subtitle1 color={color}>Base Stats</Subtitle1>

            <PokemonStats color={color} background={background} stats={stats} />
        </div>
    )
}