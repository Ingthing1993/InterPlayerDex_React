import './Header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header-content">
      <img src={logo} alt="logo" />
      <h1>Inter Playerdex</h1>
    </header>
  );
};

export default Header;