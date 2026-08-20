import { useCart } from "./carrito";
import "./cartdrawer.css";

function CartDrawer() {
  const { cart, removeFromCart, totalPrice, isOpen, closeCart, openCheckout } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="btn-close" onClick={closeCart}>✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="cart-empty">El carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.nombre}</h4>
                  <p>Cantidad: {item.cantidad}</p>
                  <p className="cart-item-price">S/ {item.precio * item.cantidad}</p>
                </div>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total-row">
              <span>Total:</span>
              <strong>S/ {totalPrice}</strong>
            </div>
            
            <button 
              className="btn-checkout" 
              type="button" 
              onClick={openCheckout}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;