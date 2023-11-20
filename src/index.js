import React from 'react';
import ReactDOM from 'react-dom/client';

import pizzaData from './data';
import Pizza from './components/Pizza';

function App() {
  const pizzas = pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />);

  return (
    <div>
      <h1>Hello React!</h1>
      {pizzas}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
