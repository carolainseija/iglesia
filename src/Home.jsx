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

  return (
    <div className="App">
      <NavBarPages />
      <header className="App-header">
      </header>
      <AboutUsSection />
      <Benefit />
      <FixImage />
      <WebSection />
      <Questions />
      <Contact />
    </div>
  );
}

export default Home;
