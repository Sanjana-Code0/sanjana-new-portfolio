import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo}>SanjanaPalkar</a>
      <div className={styles.navLinks}>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#journey">Journey</a>
        <a href="#contact" className={styles.contactButton}>Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;