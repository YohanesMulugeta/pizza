import Search from '../reusables/Search';
import Logo from './Logo';

function Nav({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

export default Nav;
