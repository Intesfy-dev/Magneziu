import React from 'react';
import './Header.css';
function Header(){
    return(
        <header className="header-container">
      <h1 className="logo">Magnezius</h1>
      <nav className="nav-links">
        <a href="#acasa">Acasă</a>
        <a href="#descriere">Descriere</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    );
}

export default Header