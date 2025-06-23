
// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="about" className="section"><About /></section>
      <section id="resume" className="section"><Resume /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="experience" className="section"><Experience /></section>
      <section id="education" className="section"><Education /></section>
      <section id="contact" className="section"><Contact /></section>

      <Footer />
    </>
  );
}

export default App;
