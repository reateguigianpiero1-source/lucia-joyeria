import { useState, useEffect } from "react"
import "./bannerPrincipal.css"
import img1 from "./img/bannerprincipal.jpeg"
import img2 from "./img/banner1.jpeg"
import img3 from "./img/banner2.jpeg"
import img4 from "./img/banner3.jpeg"

const imagenes = [img1, img2, img3, img4]

function BannerPrincipal() {
    const [actual, setActual] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setActual((ant) => (ant + 1) % imagenes.length)
                setVisible(true)
            }, 500)
        }, 6000)
        return () => clearInterval(intervalo)
    }, [])

    const anterior = () => {
        setVisible(false)
        setTimeout(() => {
            setActual((ant) => (ant - 1 + imagenes.length) % imagenes.length)
            setVisible(true)
        }, 500)
    }

    const siguiente = () => {
        setVisible(false)
        setTimeout(() => {
            setActual((ant) => (ant + 1) % imagenes.length)
            setVisible(true)
        }, 500)
    }

    return (
        <div className="banner">
            <img
                src={imagenes[actual]}
                alt="Banner promocional de joyeria"
                className={visible ? "visible" : "oculto"}
            />
            <button className="flecha izq" onClick={anterior}>❮</button>
            <button className="flecha der" onClick={siguiente}>❯</button>
        </div>
    )
}

export default BannerPrincipal