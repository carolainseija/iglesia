// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import Pricing from './components/Pricing';
import { NavBarPages } from './components/NavbarPages';



import Questions from './components/Questions';
import Benefit from './components/Benefits';
import Contact from './components/Contact';
import FixImage from './components/FixImage';
import WebSection from './components/WebSection';
import AboutUsSection from './components/AboutUsSection';


import newsMembers from "./assets/members.png"
import time from "./assets/time.png"
import lider from "./assets/lider.png"

// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween } from 'react-gsap';

function Home() {

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

  const PastorCard = ({ nombre, descripcion, fotoUrl }) => {
    return (
      <div className="pastor-card">
        <div className="pastor-photo" style={{ backgroundImage: `url(${fotoUrl})` }}></div>
        <h5>{nombre}</h5>
        <p>{descripcion}</p>
      </div>
    );
  };
  
  return (
    <div className="App">
      <NavBarPages />
      <header className="App-header">
      </header>
      <div className="pastor-section-container">
      <h2>Nuestros Pastores</h2>
      <div className="pastor-section">
        <div className="pastor-card">
          <div className="pastor-photo"></div>
          <div className="pastor-info">
            <h3>Moises y Rebeca Lopez</h3>
            <p>Iglesia "Fuentes eternas"</p>
          </div>
        </div>
        <div className="pastor-description">
        <p>
            El pastor Moises Lopez y su esposa Rebeca Castro comenzaron su servicio en nuestra iglesia en 2003. Con una visión clara y un llamado pastoral, lideran con amor y dedicación a la congregación.
            Actualmente, la iglesia cuenta con 80 miembros, y bajo su liderazgo, se han llevado a cabo diversas iniciativas y programas que han fortalecido la comunidad y fomentado el crecimiento espiritual.
          </p>
        </div>
      </div>
      

      <div className="church-info-section-container">
      <h2>Información de la Iglesia</h2>
      <div className="church-info-section">
        <div className="info-card">
        <img src={time} className="info-icon" />
          <p>Inicio desde el año 2003</p>
        </div>
        <div className="info-card">
          <img src={newsMembers} className="info-icon" />
          <p>80 miembros</p>
        </div>
        <div className="info-card">
        <img src={lider} className="info-icon" />
          <p>Más de 30 líderes</p>
        </div>
      </div>
    </div>
    </div>
      <Benefit />
      <FixImage />
      <WebSection />
      {/* <Questions /> */}
      <AboutUsSection />
      <Contact />
    </div>
  );
}

export default Home;
