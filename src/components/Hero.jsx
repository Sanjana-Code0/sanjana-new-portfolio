import React from 'react';
import styles from './Hero.module.css';
import resumePDF from '../assets/sanjana_resume.pdf'; // <-- Place your resume PDF here

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Sanjana Palkar.</h1>
        <p className={styles.subtitle}>Full-Stack Developer & AI Enthusiast</p>
        <p className={styles.description}>I build intelligent and beautiful digital experiences, from backend logic to pixel-perfect UIs.</p>
        <div className={styles.buttonContainer}>
          <a href={resumePDF} download="Sanjana_Palkar_Resume.pdf" className={styles.primaryButton}>
            Download Resume
          </a>
          <a href="#projects" className={styles.secondaryButton}>
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;