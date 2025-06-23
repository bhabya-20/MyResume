// src/components/Header.js
import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <h1>My Resume</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#ecf0f1' : '#1abc9c',
          color: darkMode ? '#2c3e50' : 'white',
          transition: 'all 0.3s ease'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;

