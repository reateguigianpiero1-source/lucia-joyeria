import "./nosotros.css"
import NosotrosHero from "../nosotroshero"
import BarraSuperior from "../navbar"
import Footer from "../footer"

function Nosotros() {
  return (
    <div className="nosotros">
      <BarraSuperior/>
      <NosotrosHero/>
      <div className="presentacion">
        <h1>¿Quienes Somos?</h1>
        <p>En Lucía Joyería creemos que cada joya cuenta una historia.
        Nacimos de la pasión por la moda y el amor por los detalles,
        creando piezas únicas que acompañan cada momento especial de tu vida.
        Belleza que brilla contigo.</p>
      </div>

      <div className="contenedor-mv">
         <div className="mision">
        <h1>Misión</h1>
        <p>Brindar accesorios de bisutería de buena calidad, modernos y
          accesibles, ofreciendo diseños variados que permitan a nuestros
          clientes expresar su estilo y personalidad, acompañados de una 
          atención amable y personalizada.
        </p>
      </div>
      
      <div className="vision">
        <h1>Visión</h1>
        <p>Ser una bisutería reconocida por la calidad, creatividad y
          variedad de nuestros productos, logrando posicionarnos en el
          mercado y convertirnos en la opción preferida de nuestros 
          clientes.
        </p>
      </div>
     
      </div>
      <div className="metodos">
        <h2>Envío y Pago</h2>
        <div className="metodos-grid">
          <div className="metodo">
            <span>🚚</span>
            <h4>Delivery</h4>
            <p>Envíos a todo el Perú</p>
          </div>
          <div className="metodo">
            <span>📦</span>
            <h4>Recojo en tienda</h4>
            <p>Retira tu pedido gratis</p>
          </div>
          <div className="metodo">
            <span>💳</span>
            <h4>Pagos seguros</h4>
            <p>VISA · BCP · BBVA</p>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Nosotros