import React from 'react';
import styles from './Contact.module.css';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'Email',
    icon: <FiMail />,
    href: 'mailto:sanjana.palkar01@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/sanjana-palkar-2987a82a6', // Your LinkedIn URL
  },
  {
    name: 'GitHub',
    icon: <FiGithub />,
    href: 'https://github.com/Sanjana-Code0', // Your GitHub URL
  },
];

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <h2>Let's Create Something Amazing.</h2>
      <p>Have a project in mind or just want to connect? My inbox is always open.</p>
      <div className={styles.socialIcons}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={styles.iconLink}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

// THIS IS THE FIX
export default Contact;