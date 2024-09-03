import css from "./Progress.module.css";

/**
 * Componente Progress que muestra una barra de progreso con el porcentaje indicado.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.background - Clase CSS que define el color de fondo de la barra de progreso.
 * @param {number} props.value - Porcentaje de completitud de la barra de progreso, representado como un número entre 0 y 100.
 * @param {string} [props.height] - Altura de la barra de progreso, especificada en cualquier unidad CSS válida (ej. "10px", "1em").
 */
export default function Progress(props) {
    const { background, value, height } = props;

    var realValue = value;
    if (realValue > 100) {
        realValue = 100;
    }

    return (
        <div className={css.container}>
            <span className={`${background} ${css.bar}`} style={{ height: height }}></span>
            <span className={`${background} ${css.fill}`} style={{ width: realValue + "%", height: height }}></span>
        </div>
    );
}
