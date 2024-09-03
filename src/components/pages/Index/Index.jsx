import { ColorsClass, FillColorsClass } from "../../../utils/colors";
import PokemondexTitle from "../../organisms/PokedexTitle/PokedexTitle";
import { BackgroundColorsClass } from "../../../utils/colors";
import PokedexResultList from "../../organisms/PokedexResultList/PokedexResultList";
import { useEffect, useState } from "react";
import { GetAllPokemon } from "../../../services/pokemonservices";
import MainLayout from "../../layout/MainLayout/MainLayout";


export default function Index() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        GetAllPokemon(1).then((pokemons) => {
            setPokemons(pokemons)
        });
    }, []);

    return (
        <MainLayout background={BackgroundColorsClass.identity}>
            <PokemondexTitle fill={FillColorsClass.grayscaleWhite} color={ColorsClass.grayscaleWhite} name="Pokédex" />
            <PokedexResultList pokemonList={pokemons} />
        </MainLayout>
    )
}