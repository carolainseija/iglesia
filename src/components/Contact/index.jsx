// Contact.js
import React from "react";
import "./style.css";
import contactImage from "../../assets/footer.png"

const Contact = () => {
  return (
    <div className="contact-section" style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-text">
            <h2>Contacto</h2>
            <p>¡Estamos aquí para ayudarte! Ponte en contacto con nosotros.</p>
          </div>

          <div className="contact-details">
            <div className="detail">
              <i className="fas fa-phone-alt"></i>
              <p>Teléfono: (123) 456-7890</p>
            </div>
            <div className="detail">
              <i className="far fa-envelope"></i>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    
      <div className="footer-bottom">
      <div className="footer-social">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nombre de tu Empresa. Todos los derechos reservados.</p>
      </div>
      {/* jhvhj */}
      </div>
    </div>
  );
};

export default Contact;
