import BarraSuperior from "../navbar"
import BannerPrincipal from "../bannerPrincipal"
import Productos from "../productos"
import PromocionEspecial from "../comp_oferta/oferta"
import Envios from "../envios"
import Footer from "../footer"

import img1a from "../img/AretesF.jpg"
import img1b from "../img/AretesM.jpg"
import img2a from "../img/anillopandora.jpeg"
import img2b from "../img/anilloTulipan2.jpg"
import img3a from "../img/pulseratrojo.jpeg"
import img3b from "../img/pulseratulipan.jpeg"
import img4a from "../img/CollarFlor.jpg"
import img4b from "../img/Inicial1.jpg"

import imgPromocion from "../comp_oferta/img/ofertatimepolimitado-optimizado.jpg"

import "./inicio.css"

function Inicio() {
    return (
        <div id="inicio">
            <BarraSuperior/>
            <BannerPrincipal/>
            <PromocionEspecial
                imagen={imgPromocion}
                titulo="Juego collar mas anillo mas pulsera personalizada"
                precioAntes="S/ 180"
                precioAhora="S/ 100"
                fechaFin="2026-08-31T23:59:59"
            />
            <div id="productos" className="productos-lista">
                <Productos imagen1={img1a} imagen2={img1b} nombre="Aretes :" precio="S/. 75" />
                <Productos imagen1={img2a} imagen2={img2b} nombre="Anillos :" precio="S/. 110" />
                <Productos imagen1={img3a} imagen2={img3b} nombre="Pulseras :" precio="S/. 95" />
                <Productos imagen1={img4a} imagen2={img4b} nombre="Collares :" precio="S/. 95" />
            </div>
            <Envios/>
            <Footer/>
        </div>
    )
}

export default Inicio