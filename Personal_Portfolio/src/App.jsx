// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navbar from './sections/Navbar/navbar';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      
      <Navbar
        scrollToSection={(section) => {
          document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
