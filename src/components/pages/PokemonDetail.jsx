import { useEffect, useState } from "react"
import { BackgroundColorsClass, ColorsClass, FillColorsClass } from "../../utils/colors"
import PokeBall from "../atoms/icons/PokeBall"
import PokemonCard from "../organisms/PokemonCard/PokemonCard"
import PokemonDetailTitle from "../organisms/PokemonDetailTitle/PokemonDetailTitle"
import css from './PokemonDetail.module.css'
import { GetPokemonById } from "../../services/pokemonservices"

const types = [
    {
        background: BackgroundColorsClass.bug,
        text: "bug"
    },
    {
        background: BackgroundColorsClass.dark,
        text: "dark"
    }
]

export default function PokemonDetail() {
    const [pokemon, setPokemon] = useState()

    const background = BackgroundColorsClass[pokemon?.types[0]];
    const color = ColorsClass[pokemon?.types[0]]
    const fill = FillColorsClass[pokemon?.types[0]]

    useEffect(() => {
        GetPokemonById(150)
            .then((data) => {
                setPokemon(data);
                console.log(data)
            })
    }, []);

    return (
        <div className={`${css.page} ${background}`}>
            <div className={css.title}>
                <PokemonDetailTitle
                    fill={FillColorsClass.grayscaleWhite}
                    color={ColorsClass.grayscaleWhite}
                    id={pokemon?.id}
                    name={pokemon?.name}
                />
            </div>

            <div className={css.pokeball}>
                <PokeBall width={300} height={300} fill={FillColorsClass.grayscaleWhite} />
            </div>

            <PokemonCard
                sprite={pokemon?.sprite}
                color={color}
                background={background}
                description={pokemon?.description}
                types={pokemon?.types}
                stats={pokemon?.stats}
                moves={pokemon?.moves}
            />

        </div>
    )
}