import CuentaRegresiva from "./cuentaRegresiva";
import { useCart } from "../carrito/carrito";
import "./oferta.css";

function PromocionEspecial({
    imagen,
    titulo,
    precioAntes,
    precioAhora,
    fechaFin
}) {
    const { addToCart } = useCart();
    const precioNumerico = Number(String(precioAhora).replace(/[^0-9.]/g, ""));

    const agregarPromocion = () => {
        addToCart({
            id: "promo-set-personalizado",
            imagen,
            nombre: titulo,
            precio: precioNumerico || 0,
        });
    };

    return (
        <>
            <section className="bannerOferta">
                <h1>LA OFERTA TERMINA EN:</h1>
                <CuentaRegresiva fechaLimite={fechaFin} />
                
                <section className="promoBanner">
                <div className="promoImagen">
                    <img src={imagen} alt={titulo} />
                </div>

                <div className="promoInfo">
                    <h2>{titulo}</h2>
                    <p className="descripcion">Set personalizado de plata con inicial grabada</p>
                    <div className="precios">
                        <span className="precioAnterior">Antes: {precioAntes}</span> 
                        
                        <span className="precioOferta">Ahora: {precioAhora}</span>
                    </div>
                    <button className="botonComprar" type="button" onClick={agregarPromocion}>
                        Obtener Promoción
                    </button>
                </div>
            </section>
            </section>

            
        </>
    );
}

export default PromocionEspecial;
