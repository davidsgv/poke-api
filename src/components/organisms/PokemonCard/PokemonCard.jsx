import Body3 from '../../atoms/Body3/Body3'
import Subtitle1 from '../../atoms/Subtitle1/Subtitle1'
import PokemonInfo from '../../molecules/PokemonInfo/PokemonInfo'
import PokemonStats from '../../molecules/PokemonStats/PokemonStats'
import TypeGroup from '../../molecules/TypeGroup/TypeGroup'
import css from './PokemonCard.module.css'


export default function PokemonCard(props) {
    const { color, background, types, stats } = props

    return (
        <div className={css.card}>
            <img className={css.img} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'></img>
            <TypeGroup types={types} />

            <Subtitle1 color={color}>About</Subtitle1>

            <PokemonInfo weight="6.9" height="0.7" moves={["Chlorophyll", "Overgrow"]} />

            <Body3 color={color}>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</Body3>

            <Subtitle1 color={color}>Base Stats</Subtitle1>

            <PokemonStats color={color} background={background} stats={stats} />
        </div>
    )
}