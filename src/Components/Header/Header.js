import './Header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;