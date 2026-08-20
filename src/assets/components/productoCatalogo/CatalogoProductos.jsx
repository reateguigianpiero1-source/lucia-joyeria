import { useState } from "react"
import { useCart } from "../carrito/carrito"
import "./CatalogoProductos.css"

function CatalogoProductos({ productos }) {
    const [inicio, setInicio] = useState(0)
    const [visible, setVisible] = useState(true)
    const { addToCart } = useCart()

    const cambiar = (nuevoInicio) => {
        setVisible(false)
        setTimeout(() => {
            setInicio(nuevoInicio)
            setVisible(true)
        }, 300)
    }

    const anterior = () => cambiar((inicio - 3 + productos.length) % productos.length)
    const siguiente = () => cambiar((inicio + 3) % productos.length)

    if (productos.length === 0) return null

    const visibles = productos.length <= 3
        ? productos
        : [0, 1, 2].map(i => productos[(inicio + i) % productos.length])
    const mostrarFlechas = productos.length > 3

    return (
        <div className="catalogo">
            {mostrarFlechas && <button className="flecha-cat" onClick={anterior}>❮</button>}
            <div className={`catalogo-grid ${visible ? "visible" : "oculto"}`}>
                {visibles.map((p) => (
                    <div key={p.id} className="card-producto">
                        <img src={p.imagen} alt={p.nombre} />
                        <h4>{p.nombre}</h4>
                        <p>S/ {p.precio}</p>
                        <button className="btn-carrito" onClick={() => addToCart(p)}>
                            Añadir al Carrito
                        </button>
                    </div>
                ))}
            </div>
            {mostrarFlechas && <button className="flecha-cat" onClick={siguiente}>❯</button>}
        </div>
    )
}

export default CatalogoProductos
