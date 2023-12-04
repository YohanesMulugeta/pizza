import React from 'react';
import pizzaData from '../data';
import Pizza from './Pizza';
// const pizzaData = [];

function Menu() {
  const pizzas = pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <>
          {/* <React.Fragment> */}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">{pizzas}</ul>
          {/* </React.Fragment> */}
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

export default Menu;
