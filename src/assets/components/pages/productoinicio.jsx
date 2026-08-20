import { useSearchParams } from "react-router-dom"
import BarraSuperior from "../navbar"
import Categorias from "../productoCatalogo/categoria"
import CatalogoProductos from "../productoCatalogo/CatalogoProductos"
import Footer from "../footer"
import "./productoinicio.css"

const aretes = [
    { id: 1, imagen: "/Productos/Aretes/Aretes1.jpg", nombre: "Aretes Topo", precio: 120 },
    { id: 2, imagen: "/Productos/Aretes/Aretes2.jpg", nombre: "Aretes Colibri", precio: 85 },
    { id: 3, imagen: "/Productos/Aretes/Aretes3.png", nombre: "Aretes Aro", precio: 150 },
    { id: 4, imagen: "/Productos/Aretes/Aretes4.jpeg", nombre: "Aretes Universo", precio: 150 },
    { id: 5, imagen: "/Productos/Aretes/Aretes5.jpg", nombre: "Aretes Palmera", precio: 150 },
    { id: 6, imagen: "/Productos/Aretes/Aretes6.jpg", nombre: "Aretes Corazón", precio: 150 },
    { id: 7, imagen: "/Productos/Aretes/Aretes7.jpg", nombre: "Arete Flor", precio: 150 },
    { id: 8, imagen: "/Productos/Aretes/Aretes8.jpg", nombre: "Arete Tulipan", precio: 150 },
    { id: 9, imagen: "/Productos/Aretes/Aretes9.jpg", nombre: "Arete Perla", precio: 150 },
    { id: 10, imagen: "/Productos/Aretes/Aretes10.jpg", nombre: "Arete Cori", precio: 150 },
]
const anillos = [
    { id: 11, imagen: "/Productos/Anillos/Anillo1.jpg", nombre: "Anillo Diamante de Corazón", precio: 95 },
    { id: 12, imagen: "/Productos/Anillos/Anillo2.jpeg", nombre: "Anillo Corazón", precio: 200 },
    { id: 13, imagen: "/Productos/Anillos/Anillo3.jpg", nombre: "Anillo Diamante", precio: 110 },
    { id: 14, imagen: "/Productos/Anillos/Anillo4.jpg", nombre: "Anillo Corazones", precio: 95 },
    { id: 15, imagen: "/Productos/Anillos/Anillo5.jpg", nombre: "Anillo Corazón Rojo", precio: 200 },
    { id: 16, imagen: "/Productos/Anillos/Anillo6.jpg", nombre: "Anillo Rose", precio: 110 },
    { id: 17, imagen: "/Productos/Anillos/Anillo7.jpg", nombre: "Anillo 7", precio: 95 },
    { id: 18, imagen: "/Productos/Anillos/Anillo8.jpg", nombre: "Anillo Tulipan", precio: 200 },
    { id: 19, imagen: "/Productos/Anillos/AnilloHombre1.jpg", nombre: "Anillo de Plata", precio: 110 },
    { id: 20, imagen: "/Productos/Anillos/AnilloHombre2.jpg", nombre: "Anillo de Oro", precio: 95 },
]
const pulseras = [
    { id: 21, imagen: "/Productos/Pulseras/Pulsera1.jpg", nombre: "Pulsera Corazones", precio: 130 },
    { id: 22, imagen: "/Productos/Pulseras/Pulsera2.jpg", nombre: "Pulsera Virgen", precio: 175 },
    { id: 23, imagen: "/Productos/Pulseras/Pulsera3.jpg", nombre: "Pulsera Corazón", precio: 99 },
    { id: 24, imagen: "/Productos/Pulseras/Pulsera4.jpg", nombre: "Pulsera Laia", precio: 130 },
    { id: 25, imagen: "/Productos/Pulseras/Pulsera5.jpg", nombre: "Pulsera Sirena", precio: 175 },
    { id: 26, imagen: "/Productos/Pulseras/Pulsera6.jpeg", nombre: "Pulsera Tulipan", precio: 99 },
    { id: 27, imagen: "/Productos/Pulseras/Pulsera7.jpeg", nombre: "Pulsera Tulipan plata", precio: 130 },
]
const collares = [
    { id: 30, imagen: "/Productos/Collares/Collar1.jpg", nombre: "Collar Mariposa", precio: 130 },
    { id: 31, imagen: "/Productos/Collares/Collar2.jpg", nombre: "Collar Corazón Infinity", precio: 175 },
    { id: 32, imagen: "/Productos/Collares/Collar3.jpg", nombre: "Collar Cruz", precio: 99 },
    { id: 33, imagen: "/Productos/Collares/Collar4.jpg", nombre: "Collar Quince", precio: 175 },
    { id: 34, imagen: "/Productos/Collares/Collar5.jpg", nombre: "Collar Estrella", precio: 99 },
    { id: 35, imagen: "/Productos/Collares/Collar6.jpg", nombre: "Collar Luna + Estrella", precio: 175 },
    { id: 36, imagen: "/Productos/Collares/Collar7.jpg", nombre: "Collar Sombrero Luffy", precio: 99 },
    { id: 37, imagen: "/Productos/Collares/Collar8.jpg", nombre: "Collar Inicial", precio: 175 },
    { id: 38, imagen: "/Productos/Collares/Collar9.jpeg", nombre: "Collar Corazon de Mar ", precio: 99 },
]

function ProductoInicio() {
    const [searchParams] = useSearchParams()
    const normalizar = (texto) => texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const busquedaOriginal = (searchParams.get("buscar") || "").trim()
    const busqueda = normalizar(busquedaOriginal)

    const filtrar = (productos, categoria) => {
        if (!busqueda) return productos
        return productos.filter((producto) => {
            const textoProducto = normalizar(`${producto.nombre} ${categoria}`)
            return textoProducto.includes(busqueda)
        })
    }

    const secciones = [
        { titulo: "Aretes que te pueden interesar", productos: filtrar(aretes, "aretes") },
        { titulo: "Anillos que te pueden interesar", productos: filtrar(anillos, "anillos") },
        { titulo: "Pulseras que te pueden interesar", productos: filtrar(pulseras, "pulseras") },
        { titulo: "Collares que te pueden interesar", productos: filtrar(collares, "collares") },
    ]
    const hayResultados = secciones.some((seccion) => seccion.productos.length > 0)

    const seccionesCompletas = [
        { titulo: "Aretes que te pueden interesar", productos: aretes },
        { titulo: "Anillos que te pueden interesar", productos: anillos },
        { titulo: "Pulseras que te pueden interesar", productos: pulseras },
        { titulo: "Collares que te pueden interesar", productos: collares },
    ]

    return (
        <div>
            <BarraSuperior />

            {busqueda && (
                <>
                    <p className="resultado-busqueda">Resultados para: <strong>{busquedaOriginal}</strong></p>

                    {hayResultados ? secciones.map((seccion) => (
                        seccion.productos.length > 0 && (
                            <section key={seccion.titulo}>
                                <h3>{seccion.titulo}</h3>
                                <CatalogoProductos productos={seccion.productos} />
                            </section>
                        )
                    )) : (
                        <p className="resultado-vacio">No encontramos productos con esa búsqueda.</p>
                    )}
                </>
            )}

            <h1>Mas productos para ti....</h1>
            <Categorias/>

            {seccionesCompletas.map((seccion) => (
                <section key={seccion.titulo}>
                    <h3>{seccion.titulo}</h3>
                    <CatalogoProductos productos={seccion.productos} />
                </section>
            ))}

            <Footer/>
        </div>
    )
}

export default ProductoInicio
