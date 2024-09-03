//pagina del diseño 
//https://dribbble.com/shots/22223916-Pok-dex

import Index from './components/pages/Index/Index';
import PokemonDetail, { pokemonDetailLoader } from './components/pages/PokemonDetail/PokemonDetail'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/:pokemonId",
        loader: pokemonDetailLoader,
        element: <PokemonDetail />,
    },
]);

export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}