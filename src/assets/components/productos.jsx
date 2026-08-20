import "./productos.css"

function Productos({ imagen1, imagen2, nombre, precio }) {
    return (
        <div className="producto">
            <img className="imagen1" src={imagen1} alt={nombre} />
            <img className="imagen2" src={imagen2} alt={nombre} />
            <div className="info">
                <h3>{nombre}</h3>
                <p>{precio}</p>
            </div>
        </div>
    )
}

export default Productos


