import React from 'react';
import './style.css';

const WebSection = () => {
  const websites = [
    {
      name: 'Marcando fututo',
      link: '#',
    },
    {
      name: 'Vigilia anual',
      link: '#',
    },
    {
      name: 'Talleres para maestros',
      link: '#',
    },
  ];

  return (
    <div id='proyectos' className="web-section">
    <div className="section-header">
      <h1>Nuestros eventos</h1>
      <p>Explora nuestras increíbles opciones de eventos para toda las edades.</p>
    </div>
    <div className="websites-container">
      {websites.map((website, index) => (
        <div key={index} className="website-card">
          <h2>{website.name}</h2>
          <a href={website.link} target="_blank" rel="noopener noreferrer">
            Más Informacion
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};



export default WebSection


// mi css

