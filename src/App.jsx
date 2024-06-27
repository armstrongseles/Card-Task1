import React from 'react';
import PriceCard from './Components/PriceCard';
import './App.css';

const plans = [
  {
    name:'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', enabled: true },
      { name: '50GB Storage', enabled: true },
      { name: 'Unlimited Public Projects', enabled: true },
      { name: 'Community Access', enabled: true },
      { name: 'Unlimited Private Projects', enabled: false },
      { name: 'Dedicated Phone Support', enabled: false },
      { name: 'Free Subdomain', enabled: false },
      { name: 'Monthly Status Reports', enabled: false },
    ],
  },
  {
    name: 'PLUS',
    price: '$9/month',
    features: [
      { name: '5 Users', enabled: true },
      { name: '50GB Storage', enabled: true },
      { name: 'Unlimited Public Projects', enabled: true },
      { name: 'Community Access', enabled: true },
      { name: 'Unlimited Private Projects', enabled: true },
      { name: 'Dedicated Phone Support', enabled: true },
      { name: 'Free Subdomain', enabled: false },
      { name: 'Monthly Status Reports', enabled: false },
    ],
  },
  {
    name: 'PRO',
    price: '$49/month',
    features: [
      { name: 'Unlimited Users', enabled: true },
      { name: '50GB Storage', enabled: true },
      { name: 'Unlimited Public Projects', enabled: true },
      { name: 'Community Access', enabled: true },
      { name: 'Unlimited Private Projects', enabled: true },
      { name: 'Dedicated Phone Support', enabled: true },
      { name: 'Free Subdomain', enabled: true },
      { name: 'Monthly Status Reports', enabled: true },
    ],
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="price-cards">
        {plans.map((plan, index) => (
          <PriceCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
