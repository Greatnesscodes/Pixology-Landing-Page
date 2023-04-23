import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants';
import { IonIcon } from '@ionic/react';


const Header = () => {
  
  
  return (
    <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">Pixology</a>

      <nav className="navbar" data-navbar>

        <div className="wrapper">
          <a href="#" className="logo">Pixology</a>

          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <IonIcon name="close-outline" aria-hidden="true" />
          </button>
        </div>
        <ul className="navbar-list">
          {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="navbar-item"
          >
            <a href={`#${nav.id}` } className="navbar-link" data-nav-link>{nav.title}</a>
          </li>
        ))}
        </ul> 
      </nav>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <IonIcon name="menu-outline" aria-hidden="true" />
      </button>

      <a href="#" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>

  )
}

export default Header
