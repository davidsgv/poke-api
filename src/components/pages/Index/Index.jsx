import { ColorsClass, FillColorsClass } from "../../../utils/colors";
import PokemondexTitle from "../../organisms/PokedexTitle/PokedexTitle";
import { BackgroundColorsClass } from "../../../utils/colors";
import PokedexResultList from "../../organisms/PokedexResultList/PokedexResultList";
import MainLayout from "../../layout/MainLayout/MainLayout";
import usePokemonPagination from "../../../hooks/usePokemonPagination";
import LeftArrow from "../../atoms/icons/LeftArrow";
import RightArrow from "../../atoms/icons/RightArrow";
import css from "./Index.module.css"


export default function Index() {

    const { pokemonsList, existNextPage, existPrevPage, nextPage, prevPage } = usePokemonPagination();

    return (
        <MainLayout background={BackgroundColorsClass.identity}>
            <PokemondexTitle fill={FillColorsClass.grayscaleWhite} color={ColorsClass.grayscaleWhite} name="Pokédex" />

            {existPrevPage &&
                <div className={`${css.control} ${css.left}`}>
                    <LeftArrow
                        height={100}
                        width={100}
                        fill={FillColorsClass.grayscaleDark}
                        onClick={prevPage}
                    />
                </div>
            }

            {existNextPage &&
                <div className={`${css.control} ${css.right}`}>
                    <RightArrow height={80} width={80} fill={FillColorsClass.grayscaleDark} onClick={nextPage} />
                </div>
            }

            <PokedexResultList pokemonList={pokemonsList} />
        </MainLayout>
    )
}