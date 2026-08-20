import { useState, useEffect } from "react"
import "./nosotroshero.css"

const imagenes = [
    "/Nosotros/Nosotros.png",  // ← cambia por la imagen
    "/Nosotros/Nosotros2.png",  // ← cambia por la imagen
    "/public/Nosotros/Nosotros3.jpg",  // ← cambia por la imagen
]

function NosotrosHero() {
    const [actual, setActual] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setActual((ant) => (ant + 1) % imagenes.length)
                setVisible(true)
            }, 600)
        }, 4000)
        return () => clearInterval(intervalo)
    }, [])

    return (
        <div className="nosotros-hero">
            <img
                src={imagenes[actual]}
                alt="Lucía Joyería"
                className={visible ? "hero-img visible" : "hero-img oculto"}
            />
            <div className="hero-overlay">
                <h1>Lucía Joyería</h1>
                <p>Belleza que brilla contigo</p>
            </div>
        </div>
    )
}

export default NosotrosHero