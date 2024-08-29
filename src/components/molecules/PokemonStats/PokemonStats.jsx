import { Fragment } from "react";
import { ColorsClass } from "../../../utils/colors";
import Body3 from "../../atoms/Body3/Body3";
import Progress from "../../atoms/Progress/Progress";
import Subtitle3 from "../../atoms/Subtitle3/Subtitle3";
import css from './PokemonStats.module.css'

const lineStyles = {
    padding: "5px 0 5px 10px",
    borderLeft: "1px var(--grayscale-light  ) solid"
}

/**
 * Componente PokemonStats que renderiza las estadísticas de un Pokémon en forma de lista, mostrando el nombre de la estadística, su valor numérico y una barra de progreso.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.color - Clase CSS para el color del texto de los subtítulos.
 * @param {string} props.background - Clase CSS para el color de fondo de la barra de progreso.
 * @param {Array<{ stat: string, value: number }>} props.stats - Lista de estadísticas del Pokémon, cada una con un nombre (`stat`) y un valor numérico (`value`).
 */
export default function PokemonStats(props) {
    const { color, background, stats } = props
    return (
        <div className={css.container}>
            {stats?.map((element, index) => {
                return (
                    <Fragment key={index}>
                        <Subtitle3 color={color}>{element.stat}</Subtitle3>
                        <div style={lineStyles}>
                            <Body3 color={ColorsClass.grayscaleDark}>{element.value}</Body3>
                        </div>
                        <Progress height={7} value={element.value} background={background} />
                    </Fragment>
                )
            })}
        </div>
    )
}