import React from 'react';
import './style.css';
import iglesia from "../../assets/iglesia.png"

const AboutUsSection = () => {
  return (
   <div id='about' className='about'>
 <div className="about-us-section">
    <img src={iglesia} alt="Logo de la empresa" className="logo" />
    <h2>2 Corintios 5:17-18</h2>
    <p>
    De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas. Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación.    </p>
    <p>
    Es un hermoso recordatorio de la gracia y la obra redentora de Dios.    </p>
  </div>
   </div>
  );
};

export default AboutUsSection;
