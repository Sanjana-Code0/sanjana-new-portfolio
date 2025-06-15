import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills" style={{backgroundColor: 'var(--card-bg)'}}><Skills /></section>
        <section id="journey"><Journey /></section>
        <section id="contact" style={{backgroundColor: 'var(--card-bg)'}}><Contact /></section>
      </main>
      <footer style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--gray-text)' }}>
        <p>© {new Date().getFullYear()} Sanjana Palkar. Crafted with passion.</p>
      </footer>
    </div>
  );
}

export default App;