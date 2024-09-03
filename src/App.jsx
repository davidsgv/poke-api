import Index from './components/pages/Index/Index';
import PokemonDetail, { pokemonDetailLoader } from './components/pages/PokemonDetail/PokemonDetail'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

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
    return <RouterProvider router={router} />
}