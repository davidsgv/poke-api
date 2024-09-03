import PokedexCard from "../../molecules/PokedexCard/PokedexCard"
import css from './PokemonResultList.module.css'

/**
 * Componente PokemonResultList que renderiza una lista de tarjetas de Pokémon.
 * 
 * @param {object} props - Props del componente.
 * @param {Array.<{id: number, sprite: string, name: string}>} props.pokemonList - Lista de Pokémon que se mostrarán en la lista. Cada objeto en la lista debe contener un `id`, `sprite` (URL de la imagen del Pokémon), y `name`.
 */
export default function PokemonResultList(props) {
    const { pokemonList } = props

    return (
        <div className={css.container}>
            {pokemonList?.map((element) => {
                return (
                    <PokedexCard
                        key={element.id}
                        id={element.id}
                        img={element.sprite}
                        name={element.name}
                    />
                )
            })}
        </div>
    )
}