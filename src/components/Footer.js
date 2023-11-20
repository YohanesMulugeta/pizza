function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer>
      {new Date().toLocaleTimeString()} We Currently {isOpen ? 'Open' : 'Closed'}!
    </footer>
  );
}

export default Footer;
