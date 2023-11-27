import pizzaData from '../data';
import Pizza from './Pizza';

function Menu() {
  const pizzas = pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">{pizzas}</ul>
    </main>
  );
}

export default Menu;
