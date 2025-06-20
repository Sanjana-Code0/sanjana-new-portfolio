// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Accolades from './components/Accolades';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Section 1: Introduction */}
        <section id="home"><Hero /></section>
        
        {/* Section 2: Key Technical Skills */}
        <section id="skills" style={{backgroundColor: 'var(--card-bg)'}}><Skills /></section>
        
        {/* Section 3: Featured Projects (NOW BEFORE JOURNEY) */}
        <section id="projects"><Projects /></section>

        {/* Section 4: Education and Experience Timeline */}
        <section id="journey" style={{backgroundColor: 'var(--card-bg)'}}><Journey /></section>

        {/* Section 5: Detailed Achievements */}
        <section id="accolades"><Accolades /></section>
        
        {/* Section 6: Strengths & Certifications */}
        <section id="certifications" style={{backgroundColor: 'var(--card-bg)'}}><Certifications /></section>
        
        {/* Section 7: Contact Info */}
        <section id="contact"><Contact /></section>
      </main>
      <footer style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--gray-text)' }}>
        <p>© {new Date().getFullYear()} Sanjana Palkar. Crafted with passion.</p>
      </footer>
    </div>
  );
}

export default App;