import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./assets/components/carrito/carrito";
import CartDrawer from "./assets/components/carrito/cartdrawer";
import CheckoutModal from "./assets/components/carrito/CheckoutModal";
import Inicio from "./assets/components/pages/inicio";
import ProductoInicio from "./assets/components/pages/productoinicio";
import Nosotros from "./assets/components/pages/nosotros";


function ModalContainer() {
  const { isCheckoutOpen, closeCheckout } = useCart();
  return <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductoInicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <CartDrawer />
        <ModalContainer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
