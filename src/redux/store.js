import { combineReducers, createStore } from "redux";
import pokemonReducer from "./reducers/pokemon";


const reducer = combineReducers({
    pokemons: pokemonReducer,
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    reducer,
    devtools
);
export default store