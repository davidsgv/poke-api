import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPokemon, GetPokemonById } from "../services/pokemonservices";
import { setAllPokemons, nextPage, prevPage, completePokemon } from "../redux/actions/pokemon";


export default function usePokemonPagination(){
    const pokemon = useSelector((state)=> state.pokemons)
    const dispatch = useDispatch()

    useEffect(()=>{
        GetAllPokemon()
        .then((pokemons) => {
            dispatch(setAllPokemons(pokemons.count, pokemons.results))
        })
    },[])

    useEffect(()=>{
        const incompletePokemon = pokemon.showingPokemon?.filter(p => !p.isComplete);
        if (incompletePokemon.length > 0) {
            Promise.all(incompletePokemon.map((element) => {
                return GetPokemonById(element?.id);
            })).then((pokemonsDetail)=>{
                dispatch(completePokemon(pokemonsDetail));
            });
        }
    }, [pokemon.showingPokemon])

    const handleNextPage = ()=>{
        dispatch(nextPage())
    }

    const handlePrevPage = ()=>{
        dispatch(prevPage())
    }

    return {
        count: pokemon.count,
        pokemonsList: pokemon.showingPokemon,
        existNextPage: pokemon.pagination.existNextPage,
        nextPage: handleNextPage,
        existPrevPage: pokemon.pagination.existPrevPage,
        prevPage: handlePrevPage
    }
}