import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">E-Commerce</div>
      <div className="header-right">
        <button className="header-button">POS</button>
        <button className="header-button">Admin</button>
      </div>
    </header>
  );
}

export default Header;
