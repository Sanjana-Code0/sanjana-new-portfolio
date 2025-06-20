// src/components/Certifications.jsx

import React from 'react';
// IMPORTANT: Update the CSS import path
import styles from './Certifications.module.css'; 

const skillsData = {
  technical: ["Emotional Intelligence(NPTEL)", "Recommendation Systems"],
  soft: ["Leadership", "Teamwork", "Public Speaking", "Event Organization"],
  hobbies: ["Painting", "Creative Writing", "Debating", "Volunteering (NSS)"]
};

// IMPORTANT: Rename the component
const Certifications = () => {
  return (
    // You can use the same style names, that's fine
    <div className={styles.skillsSection}>
        <h2>Strengths & Certifications</h2>
        <div className={styles.skillsContainer}>
            <div>
                <h3>Technical Certifications</h3>
                <div className={styles.tagContainer}>
                    {skillsData.technical.map(skill => <span key={skill} className={styles.tag}>{skill}</span>)}
                </div>
            </div>
            <div>
                <h3>Core Strengths</h3>
                <div className={styles.tagContainer}>
                    {skillsData.soft.map(skill => <span key={skill} className={styles.tag}>{skill}</span>)}
                </div>
            </div>
             <div>
                <h3>Hobbies & Interests</h3>
                <div className={styles.tagContainer}>
                    {skillsData.hobbies.map(skill => <span key={skill} className={styles.tag}>{skill}</span>)}
                </div>
            </div>
        </div>
    </div>
  );
};

// IMPORTANT: Update the export
export default Certifications;