import "./categoria.css"
import { FaGem, FaRing, FaHeart, FaStar } from "react-icons/fa"


function Categorias() {
    return (
        <div className="categorias">

            <div className="categorias-titulo">
                <h2>NUESTRAS COLECCIONES</h2>
            </div>

            <div className="categorias-lista">

                <div className="categoria">
                    <span className="icono-categoria">
                        <FaGem />
                    </span>
                    <p>ARETES</p>
                    <small>Elegancia que Brilla</small>
                </div>

                <div className="categoria">
                    <span className="icono-categoria">
                        <FaRing />
                    </span>
                    <p>ANILLOS</p>
                    <small>Símbolos para Siempre</small>
                </div>

                <div className="categoria">
                    <span className="icono-categoria">
                        <FaHeart />
                    </span>
                    <p>PULSERAS</p>
                    <small>El Detalle Perfecto</small>
                </div>

                <div className="categoria">
                    <span className="icono-categoria">
                        <FaStar />
                    </span>
                    <p>COLLARES</p>
                    <small>Combina con tu Look</small>
                </div>

            </div>
        </div>
    )
}

export default Categorias
