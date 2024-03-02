// src/components/OptionCard.js
import React from 'react';

const OptionCard = ({ option }) => {
  return (
    <div className="option-card">
      <h3>{option.style}</h3>
      <p>Precio: {option.price}</p>
      <ul>
        {option.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Seleccionar</button>
    </div>
  );
};

export default OptionCard;
