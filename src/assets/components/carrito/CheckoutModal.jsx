import { useState } from "react";
import { useCart } from "./carrito";
import emailjs from "@emailjs/browser";
import "./CheckoutModal.css";

function CheckoutModal({ isOpen, onClose }) {
  const { totalPrice, clearCart, cart } = useCart();
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  const [completado, setCompletado] = useState(false);
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_nc87ir5",
      "template_fua3iho",
      {
        order_id: Date.now(),
        orders: cart.map(p => ({
          name: p.nombre,
          price: p.precio,
          units: p.cantidad
        })),
        cost: {
          shipping: 0,
          tax: 0,
          total: totalPrice
        },
        nombre: nombre,
        telefono: telefono,
        metodo_pago: metodoPago
      },
      "xhVuN6CiOqZVdnn1v"
    )
    .then(() => {
      setCompletado(true);
      clearCart();
    })
    .catch((error) => console.error(error));
  };

  const handleClose = () => {
    setCompletado(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close-modal" onClick={handleClose}>✕</button>

        {!completado ? (
          <>
            <h2>Finalizar Compra</h2>
            <p className="modal-subtitle">Resumen a pagar: <strong>S/ {totalPrice}</strong></p>

            <form onSubmit={handleSubmit} className="checkout-form">
              <label className="form-label">Método de Pago:</label>
              <div className="payment-options">
                <label className={`payment-option ${metodoPago === "tarjeta" ? "selected" : ""}`}>
                  <input type="radio" name="metodo" value="tarjeta" checked={metodoPago === "tarjeta"} onChange={(e) => setMetodoPago(e.target.value)} />
                  💳 Tarjeta (Débito/Crédito)
                </label>
                <label className={`payment-option ${metodoPago === "yape" ? "selected" : ""}`}>
                  <input type="radio" name="metodo" value="yape" checked={metodoPago === "yape"} onChange={(e) => setMetodoPago(e.target.value)} />
                  📱 Yape / Plin
                </label>
                <label className={`payment-option ${metodoPago === "transferencia" ? "selected" : ""}`}>
                  <input type="radio" name="metodo" value="transferencia" checked={metodoPago === "transferencia"} onChange={(e) => setMetodoPago(e.target.value)} />
                  🏦 Transferencia Bancaria
                </label>
              </div>

              {metodoPago === "tarjeta" && (
                <div className="payment-details">
                  <input type="text" placeholder="Número de Tarjeta" required />
                  <div className="form-row">
                    <input type="text" placeholder="MM/AA" required />
                    <input type="text" placeholder="CVC" required />
                  </div>
                </div>
              )}
              {metodoPago === "yape" && (
                <div className="payment-details qr-box">
                  <p>Escanea el código QR o yapea al número <strong>987 654 321</strong></p>
                  <input type="tel" placeholder="Número de Yape" required />
                </div>
              )}
              {metodoPago === "transferencia" && (
                <div className="payment-details bank-box">
                  <p><strong>BCP Soles:</strong> 191-1234567-0-12</p>
                  <p><strong>CCI:</strong> 002-191-123456789098765-12</p>
                  <input type="text" placeholder="N° de Operación" required />
                </div>
              )}

              <hr />
              <label className="form-label">Datos de Contacto:</label>
              <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              <input type="tel" placeholder="Teléfono / WhatsApp" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

              <button type="submit" className="btn-confirm-pay">
                Pagar S/ {totalPrice}
              </button>
            </form>
          </>
        ) : (
          <div className="success-box">
            <span>🎉</span>
            <h2>¡Pedido Confirmado!</h2>
            <p>Gracias por tu compra.</p>
            <button className="btn-confirm-pay" onClick={handleClose}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
