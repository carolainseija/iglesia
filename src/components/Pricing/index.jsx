// src/components/Pricing.js
import React from 'react';
import OptionCard from '../OptionCard';
import "./style.css"

const Pricing = () => {
  const options = [
    {
      style: 'Estilo Clásico',
      price: '$500',
      features: ['Diseño elegante', 'Funcionalidades esenciales', 'Soporte técnico básico'],
    },
    {
      style: 'Estilo Moderno',
      price: '$750',
      features: ['Diseño contemporáneo', 'Funcionalidades avanzadas', 'Soporte técnico prioritario'],
    },
    {
      style: 'Estilo Minimalista',
      price: '$600',
      features: ['Diseño limpio', 'Funcionalidades esenciales', 'Soporte técnico estándar'],
    },
  ];

  return (
    <section className="pricing-section">
      <h2>Elige tu Estilo</h2>
      <div className="pricing-container">
        {options.map((option, index) => (
          <OptionCard key={index} option={option} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
