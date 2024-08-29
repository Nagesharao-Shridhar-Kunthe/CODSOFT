// src/components/Navbar/Navbar.js

import React from 'react';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection('hero')}>About Me</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
