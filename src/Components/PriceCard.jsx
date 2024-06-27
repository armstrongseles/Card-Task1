import React from 'react';
import './PriceCard.css';

const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <div>
        <h2>{plan.name}</h2>
        <h3>{plan.price}</h3>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index} className={feature.enabled ? '' : 'disabled'}>
              {feature.enabled ? '✔' : 'x'} {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="price-card-button">BUTTON</button>
    </div>
  );
};

export default PriceCard;
