// src/components/Accolades.jsx

import React from 'react';
import styles from './Accolades.module.css';
import { FaTrophy, FaPaintBrush, FaRunning, FaPenFancy } from 'react-icons/fa';

const accolades = {
  university: [
    "3rd Rank, On-the-Spot Painting (Zonal Youth Fest '21-22)",
    "3rd Rank, English Debate (North-Ratnagiri Youth Fest '23-24)",
    "3rd Rank, Creative Writing (DLLE UDAAN Fest '23-24)",
  ],
  interCollege: [
    "1st Rank, On-the-Spot Competition ('21-22)",
    "2nd & 3rd Rank, Shivcharitra Drawing ('22-23 & '23-24)",
  ],
  intraCollege: [
    "1st Rank, Rangoli Competition (2 years)",
    "1st Rank, AdMad Show, Treasure Hunt & Drawing",
    "2nd Rank, Essay Writing (2 years)",
  ],
  sports: [
    "1st Rank, Table Tennis ('22-23)",
    "2nd Rank, Dodge Ball ('22-23)",
    "3rd Rank, 100m Running ('22-23)",
  ],
};

const Accolades = () => {
  return (
    <div className={styles.accoladesSection}>
      <h2>Accolades & Achievements</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
            <FaTrophy className={styles.icon} />
            <h3>University Level</h3>
            <ul>{accolades.university.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className={styles.card}>
            <FaPaintBrush className={styles.icon} />
            <h3>Inter-College</h3>
            <ul>{accolades.interCollege.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className={styles.card}>
            <FaPenFancy className={styles.icon} />
            <h3>Intra-College</h3>
            <ul>{accolades.intraCollege.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className={styles.card}>
            <FaRunning className={styles.icon} />
            <h3>Sports</h3>
            <ul>{accolades.sports.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Accolades;