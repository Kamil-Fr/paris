import React from 'react';
import Navigation from './Navigation.jsx';
import '../scss/_header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <Navigation />
    </header>
  );
}

export default Header;
