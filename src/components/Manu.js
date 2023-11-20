import pizzaData from '../data';
import Pizza from './Pizza';

function Menu() {
  const pizzas = pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />);

  return <div>{pizzas}</div>;
}

export default Menu;
