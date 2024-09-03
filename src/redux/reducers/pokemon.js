import { COMPLETE_POKEMON_INFO, POKEDEX_CHANGE_NEXT_PAGE, POKEDEX_CHANGE_PREV_PAGE, POKEDEX_SET_PAGE_SIZE, SET_ALL_POKEMON } from "../types/pokemon";

const initialState = {
    count: 0,
    list: [],
    showingPokemon: [],
    pagination:{
        page: 1,
        pageSize: 10,
        existNextPage: true,
        existPrevPage: false,
    },
}

export default function pokemonReducer(state = initialState, action){
    switch (action.type) {
        case COMPLETE_POKEMON_INFO:
            var newState = {...state};

            //reemplazar los datos en el id
            action.payload.map((addPoke)=>{
                addPoke.isComplete = true;
                var index = newState.list.findIndex(poke => poke.id == addPoke.id);
                newState.list[index] = addPoke;
            })

            var calc = calcPagePokemons(newState.pagination, newState.list);
            newState.pagination = calc.pagination;
            newState.showingPokemon = calc.showingPokemon;
            return newState;
        case SET_ALL_POKEMON:
            var newState = {...state};

            newState.count = action.payload.count;
            if(newState.list.length == 0){
                newState.list = action.payload.pokemons;
                newState.list.sort((a,b)=> a.id - b.id);
            }
            
            var calc = calcPagePokemons(newState.pagination, newState.list);
            newState.pagination = calc.pagination;
            newState.showingPokemon = calc.showingPokemon;
            return newState;
        case POKEDEX_CHANGE_NEXT_PAGE:
            var newState = {...state};
            if(newState.pagination.existNextPage){
                newState.pagination.page++;
                var calc = calcPagePokemons(newState.pagination, newState.list);
                newState.pagination = calc.pagination;
                newState.showingPokemon = calc.showingPokemon;
            }
            return newState;
        case POKEDEX_CHANGE_PREV_PAGE:
            var newState = {...state};
            if(newState.pagination.existPrevPage){
                newState.pagination.page--;
                var calc = calcPagePokemons(newState.pagination, newState.list);
                newState.pagination = calc.pagination;
                newState.showingPokemon = calc.showingPokemon;
            }
            return newState;
        case POKEDEX_SET_PAGE_SIZE:
            var newState = {...state};
            newState.pagination.pageSize = action.payload;

            var calc = calcPagePokemons(newState.pagination, newState.list);
            newState.pagination = calc.pagination;
            newState.showingPokemon = calc.showingPokemon;
            return newState;
        default:
            return state;
    }
}

function calcPagePokemons(pagination, pokemons){
    const pageIndex = (pagination.page - 1) * pagination.pageSize;
    const existNextPage = pokemons?.length / (pageIndex + pagination.pageSize) > 1;
    const existPrevPage = pagination.page > 1; 

    return {
        pagination:{
            ...pagination,
            existNextPage,
            existPrevPage
        },
        showingPokemon: pokemons?.slice(pageIndex, pageIndex + pagination.pageSize)
    };
}