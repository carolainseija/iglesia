import React from 'react';
import './style.css';

const WebSection = () => {
  const websites = [
    {
      name: 'Web Design 01',
      link: 'https://landing01-7a483.firebaseapp.com/',
    },
    {
      name: 'Web Design 02',
      link: 'https://landing02-ff2a4.firebaseapp.com/',
    },
    {
      name: 'Web Design 03',
      link: 'https://landing03-e86f3.firebaseapp.com/',
    },
  ];

  return (
    <div id='proyectos' className="web-section">
    <div className="section-header">
      <h1>Opciones Disponibles de Diseño</h1>
      <p>Explora nuestras increíbles opciones de diseño para encontrar inspiración.</p>
    </div>
    <div className="websites-container">
      {websites.map((website, index) => (
        <div key={index} className="website-card">
          <h2>{website.name}</h2>
          <a href={website.link} target="_blank" rel="noopener noreferrer">
            Ver diseño
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};



export default WebSection


// mi css

