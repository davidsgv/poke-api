import { BackgroundColorsClass, ColorsClass, FillColorsClass } from "../../utils/colors"
import PokeBall from "../atoms/icons/PokeBall"
import PokemonCard from "../organisms/PokemonCard/PokemonCard"
import PokemonDetailTitle from "../organisms/PokemonDetailTitle/PokemonDetailTitle"
import css from './PokemonDetail.module.css'

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

const stats = [
  {
    stat: "HP",
    value: 45,
  },
  {
    stat: "ATK",
    value: 60,
  },
  {
    stat: "DEF",
    value: 49,
  },
  {
    stat: "SATK",
    value: 65,
  },
  {
    stat: "SDEF",
    value: 65,
  },
  {
    stat: "SPD",
    value: 45,
  }
]

export default function PokemonDetail() {
  const background = BackgroundColorsClass.grass;

  return (
    <div className={`${css.page} ${background}`}>
      <div className={css.title}>
        <PokemonDetailTitle
          fill={FillColorsClass.grayscaleWhite}
          color={ColorsClass.grayscaleWhite}
          id="999"
          name="Bulbasaur"
        />
      </div>

      <div className={css.pokeball}>
        <PokeBall width={300} height={300} fill={FillColorsClass.grayscaleWhite} />
      </div>

      <PokemonCard color={ColorsClass.dark} background={BackgroundColorsClass.dark} types={types} stats={stats} />

    </div>
  )
}