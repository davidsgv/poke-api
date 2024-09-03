import { ColorsClass, FillColorsClass } from "../../../utils/colors";
import Number from "../../atoms/Number/Number";
import Body3 from "../../atoms/Body3/Body3"
import css from "./PokedexCard.module.css"
import { useNavigate } from "react-router-dom";

/**
 * Componente PokedexCard que representa una tarjeta de la Pokédex con la información básica de un Pokémon.
 * 
 * @param {object} props - Props del componente.
 * @param {number} props.id - El número de identificación del Pokémon en la Pokédex.
 * @param {string} props.img - URL de la imagen del Pokémon.
 * @param {string} props.name - Nombre del Pokémon.
 */
export default function PokedexCard(props) {
    const { id, img, name } = props


    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${id}`);
    }

    return (
        <div className={css.card} onClick={handleClick}>
            <Number color={ColorsClass.grayscaleMedium} fill={FillColorsClass.grayscaleMedium}>{id}</Number>
            <div className={css.name}>
                <img src={img} alt={name} />
                <Body3 color={ColorsClass.grayscaleDark}>{name}</Body3>
            </div>
        </div>
    )
}