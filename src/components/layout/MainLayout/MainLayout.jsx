/**
 * Componente MainLayout que envuelve el contenido de la página con un fondo personalizado.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.background - Clase CSS que define el color de la página.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro del layout.
 */
export default function MainLayout(props) {
    const { background, children } = props

    return (
        <div className={`page ${background}`}>
            {children}
        </div>
    )
}