import React from 'react';
import './style.css';
import logo from "../../assets/logo-white.png"

const AboutUsSection = () => {
  return (
   <div id='about' className='about'>
 <div className="about-us-section">
    <img src={logo} alt="Logo de la empresa" className="logo" />
    <h2>Sobre Nosotros</h2>
    <p>
      Somos un equipo apasionado dedicado a la creación de sitios web para iglesias. Nos motiva el deseo de brindar a cada comunidad un espacio en línea único y significativo. Creemos en la importancia de la presencia digital para conectar, inspirar y compartir la palabra de manera efectiva.
    </p>
    <p>
      Nuestra misión es proporcionar soluciones web que reflejen la esencia y la misión de cada iglesia. Nos comprometemos a trabajar con pasión y dedicación para construir plataformas que faciliten la comunicación, la participación y el crecimiento espiritual.
    </p>
  </div>
   </div>
  );
};

export default AboutUsSection;
