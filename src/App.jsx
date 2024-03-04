// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import Pricing from './components/Pricing';
import { NavBarPages } from './components/NavbarPages';
import multimedia from "./assets/multimedia.png"
import acceso from "./assets/acceso.png"
import comunicacion from "./assets/comunicacion.png"
import alcance from "./assets/alcance.png"


// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween } from 'react-gsap';

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

  const faqData = [
    {
      question: '¿Cómo puedo comprar el sitio web?',
      answer: 'Actualmente, ofrecemos un proceso de compra en línea directamente desde nuestro sitio web. Simplemente...',
    }, {
      question: '¿Puedo personalizar el diseño del sitio web?',
      answer: 'Actualmente, ofrecemos un proceso de compra en línea directamente desde nuestro sitio web. Simplemente navega hasta la página de productos, selecciona el paquete que mejor se adapte a tus necesidades y sigue las instrucciones para completar la transacción.',
    }, {
      question: '¿Puedo personalizar el diseño del sitio web?',
      answer: '¡Sí! Ofrecemos opciones de personalización para adaptar el diseño a tus preferencias. Durante el proceso de compra, tendrás la oportunidad de especificar tus requisitos de diseño o puedes comunicarte con nuestro equipo después de la compra para discutir las personalizaciones.',
    }, {
      question: '¿Qué incluye el paquete estándar de diseño del sitio web?',
      answer: 'Nuestro paquete estándar incluye el diseño y desarrollo del sitio web, integración de características esenciales, optimización para dispositivos móviles y pruebas de calidad. Para detalles específicos, revisa la descripción detallada en la página del producto.',
    }, {
      question: '¿Cuánto tiempo lleva completar el proceso de diseño y desarrollo del sitio?',
      answer: 'El tiempo de entrega puede variar según la complejidad del proyecto y la cantidad de personalizaciones requeridas. Sin embargo, generalmente proporcionamos una estimación de tiempo durante el proceso de compra. Además, nuestro equipo se comunicará contigo para brindarte actualizaciones a lo largo del proceso.',
    },
    {
      question: '¿Ofrecen servicios de mantenimiento después de la compra?',
      answer: 'Sí, ofrecemos servicios de mantenimiento para garantizar el rendimiento continuo de tu sitio web. Estos servicios pueden incluir actualizaciones de seguridad, corrección de errores y soporte técnico. Puedes seleccionar un plan de mantenimiento durante el proceso de compra o comunicarte con nosotros más tarde para obtener más detalles.',
    }
    // Agrega más preguntas y respuestas según sea necesario
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const benefits = [
    { icon: alcance, title: 'Alcance más amplio', content: 'Un sitio web permite que la iglesia alcance a un público más amplio. Las personas interesadas en encontrar una comunidad religiosa pueden descubrir la iglesia en línea, lo que puede resultar en un crecimiento de la congregación.' },
    { icon: comunicacion ,title: 'Comunicación efectiva', content: 'Un sitio web sirve como una plataforma centralizada para compartir información clave, como horarios de servicios, eventos especiales, actividades comunitarias y noticias relevantes. ' },
    { icon: acceso, title: 'Accesibilidad las 24 horas del día, los 7 días de la semana', content: 'Un sitio web permite que la iglesia esté disponible en línea en todo momento. Los miembros de la comunidad pueden acceder a información relevante, eventos, mensajes y recursos en cualquier momento.' },
    { icon: multimedia, title: 'Contenido Accesible y Centralizado', content: 'Los usuarios pueden acceder a toda la variedad de contenido multimedia desde un solo lugar, eliminando la necesidad de navegar por diferentes secciones del sitio.' },
  ]



  
  return (
    <div className="App">
        <NavBarPages />
      <header className="App-header">
        {/* <h1>Páginas Web para Iglesias</h1>
        <p>Transforma la presencia online de tu iglesia con nuestro servicio de diseño de páginas web.</p> */}
      </header>
      <section>
        <h2>¿Por qué es necesario tener una página web para tu iglesia?</h2>
        <p>
          Tener una presencia online es esencial en la era digital actual. Aquí te mostramos algunos beneficios:
        </p>
        <div className="church-section">
      {benefits.map((benefit, index) => (
        <>
          <div className="benefit">
          <img className='iconBenefit' src={benefit.icon} />
            <h3>{benefit.title}</h3>
            <p>{benefit.content}</p>
          </div>
        </>
      ))}
    </div>
   
      </section>
      <h1>Sección de Preguntas Frecuentes</h1>

      <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
          <h3>{item.question}</h3>
          <p className="answer">{item.answer}</p>
        </div>
      ))}
    </div>

    <div className="contenedorPrincipal">
      <div className="contenedorSuperior">
        <h2>Título Superior</h2>
        <p>Texto del contenedor superior</p>
      </div>
      <div className="contenedorInferior">
        <h2>Título Inferior</h2>
        <p>Texto del contenedor inferior</p>
      </div>
      <div className="imagenSuperpuesta">
        <img src={multimedia} alt="Descripción de la imagen" />
      </div>
    </div>
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
