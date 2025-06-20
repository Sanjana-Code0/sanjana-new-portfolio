// src/components/Journey.jsx

import React from 'react';
import styles from './Journey.module.css';
// We'll add a few more icons to better represent your achievements
import { FaGraduationCap, FaUserTie, FaAward, FaTrophy, FaUsers } from 'react-icons/fa';

// NEW: This data is tailored to your bio to tell a compelling story.
const journeyData = [
  {
    icon: <FaGraduationCap />,
    date: '2024 - 2026',
    title: 'Master of Computer Applications (MCA)',
    subtitle: '(Bhavan’s) Sardar Patel Institute of Technology, Mumbai',
  },
  {
    icon: <FaUserTie />,
    date: '2024 - Present',
    title: 'Institute Roles & Responsibilities',
    subtitle: 'Active as a Training & Placement Officer (TPO) and Creative Subcommittee Member at SPIT, Mumbai.',
  },
  {
    icon: <FaGraduationCap />,
    date: '2021 - 2024',
    title: 'Bachelor of Science in IT (CGPA: 9.75)',
    subtitle: 'Dnyandeep College of Science and Commerce',
  },
  {
    icon: <FaUsers />,
    date: '2021 - 2024',
    title: 'Sustained Leadership & Representation',
    subtitle: 'Served as Class Representative, IQAC Student Representative, and NSS Girls Representative at Dnyandeep College.',
  },
  {
    icon: <FaTrophy />,
    date: '2023 - 2024',
    title: 'Key University-Level Accolades',
    subtitle: 'Secured top ranks in University Debate (North-Ratnagiri) and Creative Writing (DLLE UDAAN Fest).',
  },
  {
    icon: <FaAward />,
    date: '2021 - 2022',
    title: 'Zonal & Inter-College Recognition',
    subtitle: 'Achieved Third Rank in Zonal On-the-Spot Painting and First Rank in an Inter-College competition.',
  }
];

const Journey = () => {
  return (
    <div className={styles.journeySection}>
      <h2>My Journey</h2>
      <div className={styles.timeline}>
        {journeyData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineIcon}>{item.icon}</div>
            <div className={styles.timelineContent}>
              <span className={styles.date}>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;