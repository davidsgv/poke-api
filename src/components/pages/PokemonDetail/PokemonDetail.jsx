import { BackgroundColorsClass, ColorsClass, FillColorsClass } from "../../../utils/colors"
import PokeBall from "../../atoms/icons/PokeBall"
import PokemonDetailCard from "../../organisms/PokemonDetailCard/PokemonDetailCard"
import PokemonDetailTitle from "../../organisms/PokemonDetailTitle/PokemonDetailTitle"
import { GetPokemonById } from "../../../services/pokemonservices"
import { useLoaderData, useNavigate } from "react-router-dom"
import MainLayout from "../../layout/MainLayout/MainLayout"
import LeftArrow from "../../atoms/icons/LeftArrow"
import RightArrow from "../../atoms/icons/RightArrow"
import css from './PokemonDetail.module.css'

/**
 * Loader para obtener los detalles de un Pokémon por su ID.
 *
 * @param {object} params - Parámetros del router, incluyendo el ID del Pokémon.
 * @returns {Promise<object>} Un objeto que contiene la información del Pokémon.
 */
export async function pokemonDetailLoader({ params }) {
    const pokemon = await GetPokemonById(params.pokemonId);
    return { pokemon }
}

/**
 * Componente PokemonDetail que renderiza la página de detalles de un Pokémon.
 *
 */
export default function PokemonDetail() {
    const { pokemon } = useLoaderData()

    const navigate = useNavigate()

    const background = BackgroundColorsClass[pokemon?.types[0]];
    const color = ColorsClass[pokemon?.types[0]]
    //const fill = FillColorsClass[pokemon?.types[0]]


    const handleLeftClick = () => {
        navigate(`/${pokemon.id - 1}`);
    }

    const handleRightClick = () => {
        navigate(`/${pokemon.id + 1}`);
    }

    return (
        <MainLayout background={background}>
            <div className={css.title}>
                <PokemonDetailTitle
                    fill={FillColorsClass.grayscaleWhite}
                    color={ColorsClass.grayscaleWhite}
                    id={pokemon?.id}
                    name={pokemon?.name}
                />
            </div>

            <div className={css.pokeball}>
                <PokeBall width={150} height={150} fill={FillColorsClass.grayscaleWhite} />
            </div>

            <div className={css.control}>
                <LeftArrow height={100} width={100} fill={FillColorsClass.grayscaleWhite} onClick={handleLeftClick} />
                <RightArrow height={100} width={100} fill={FillColorsClass.grayscaleWhite} onClick={handleRightClick} />
            </div>

            <PokemonDetailCard
                sprite={pokemon?.sprite}
                color={color}
                background={background}
                description={pokemon?.description}
                info={pokemon?.info}
                types={pokemon?.types}
                stats={pokemon?.stats}
                moves={pokemon?.moves}
            />
        </MainLayout>
    )
}