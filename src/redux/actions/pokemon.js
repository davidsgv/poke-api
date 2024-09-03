import { SET_ALL_POKEMON, COMPLETE_POKEMON_INFO, POKEDEX_CHANGE_NEXT_PAGE, POKEDEX_CHANGE_PREV_PAGE } from "../types/pokemon";

export const completePokemon = (pokemons) => ({
    type: COMPLETE_POKEMON_INFO,
    payload: pokemons
})

export const setAllPokemons = (count, pokemons) => ({
    type: SET_ALL_POKEMON,
    payload: {count, pokemons}
})

export const nextPage = () => ({
    type: POKEDEX_CHANGE_NEXT_PAGE,
})
export const prevPage = () => ({
    type: POKEDEX_CHANGE_PREV_PAGE,
})

export const setPageSize = (size) => ({
    type: POKEDEX_SET_PAGE_SIZE,
    payload: size
})