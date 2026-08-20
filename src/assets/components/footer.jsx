import "./footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer-contenido">

                <div className="footer-columna">
                    <h4>SERVICIO AL CLIENTE</h4>
                    <a href="#"><p>Política de Pagos</p></a>
                    <a href="#"><p>Política de envíos</p></a>
                    <a href="#"><p>Política de Cambios</p></a>
                </div>

                <div className="footer-columna centro">
                    <h4>SÍGUENOS</h4>
                    <div className="redes">
                        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://www.tiktok.com/" aria-label="TikTok" target="_blank" rel="noreferrer"><FaTiktok /></a>
                        <a href="https://www.whatsapp.com/" aria-label="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    </div>
                </div>

                <div className="footer-columna">
                    <h4>CONTÁCTANOS</h4>
                    <a href="#"><p>📞 (01) 4523947</p></a>
                    <a href=""><p>✉ Joyerialucia@gmail.com</p></a>
                </div>

            </div>

            <div className="pagos">
                <img src="/visa.png" alt="Visa" />
                <img src="/bbva.png" alt="BBVA" />
                <img src="/bcp.png" alt="BCP" />
            </div>

            <div className="footer-copy">
                <p>© 2024 Lucia Joyería. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
