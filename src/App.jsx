// src/App.js
import React, { useState } from 'react';
import Pricing from './components/Pricing';
import { NavBarPages } from './components/NavbarPages';

function App() {

  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Función para manejar cambios en el formulario
  const handleFormChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos a un servidor
    // y mostrar un mensaje de éxito o error.
    console.log('Formulario enviado:', contactFormData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBarPages />
        <h1>Páginas Web para Iglesias</h1>
        <p>Transforma la presencia online de tu iglesia con nuestro servicio de diseño de páginas web.</p>
      </header>
      <section>
        <h2>¿Por qué es necesario tener una página web para tu iglesia?</h2>
        <p>
          Tener una presencia online es esencial en la era digital actual. Aquí te mostramos algunos beneficios:
        </p>
        <ul>
          <li>Alcance más amplio de la comunidad.</li>
          <li>Comunicación efectiva de eventos y actividades.</li>
          <li>Recopilación de donaciones de manera segura.</li>
          <li>Creación de una comunidad en línea.</li>
        </ul>
      </section>
      <Pricing />
      <section>
        <h2>¡Contáctanos!</h2>
        <form onSubmit={handleSubmitForm}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={contactFormData.message}
              onChange={handleFormChange}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
