export function Footer(){
    return(
        <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Dirección de la iglesia</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@iglesia.com</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/acerca">Acerca de nosotros</a></li>
              <li><a href="/eventos">Eventos</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Iglesia Nombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
}