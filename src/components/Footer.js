function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We Currently {isOpen ? 'Open' : 'Closed'}! */}
      {isOpen ? (
        <Order closeHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
