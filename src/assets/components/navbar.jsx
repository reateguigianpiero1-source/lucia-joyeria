import { Link, NavLink, useNavigate } from "react-router-dom"
import { useCart } from "./carrito/carrito"
import logo from "./img/logosinfondo.png"
import lupa from "./img/lupa.png"
import carro from "./img/carro.png"
import "./navbar.css"

function BarraSuperior() {
  const { totalItems, toggleCart } = useCart();
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    const termino = new FormData(e.currentTarget).get("buscar");
    const texto = typeof termino === "string" ? termino.trim() : "";
    if (texto) {
      navigate(`/productos?buscar=${encodeURIComponent(texto)}`);
    }
  };

  return (
    <nav className="barra-superior">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Joyería DEW" className="logo"/>
      </Link>

      <ul className="menu-principal">
  <li>
    <NavLink to="/">INICIO</NavLink>
  </li>

  <li>
    <NavLink to="/productos">PRODUCTOS</NavLink>
  </li>

  <li>
    <NavLink to="/nosotros">NOSOTROS</NavLink>
  </li>
</ul>
      <form className="buscador" onSubmit={handleBuscar}>
        <img src={lupa} alt="" className="icono-buscador"/>
        <input
          type="text"
          name="buscar"
          aria-label="Buscar productos"
          placeholder="Buscar"
        />
        <button className="icono-buscar" type="submit">Buscar</button>
      </form>

      {}
      <button 
        className="icono-boton" 
        type="button" 
        aria-label="Ver carrito"
        onClick={toggleCart}
      >
        <img className="icono" src={carro} alt="Carrito" />
        {totalItems > 0 && <span className="contador">{totalItems}</span>}
      </button>
    </nav>
  )
}

export default BarraSuperior
