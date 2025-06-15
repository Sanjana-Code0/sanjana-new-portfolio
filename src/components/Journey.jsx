import React from 'react';
import styles from './Journey.module.css';
import { FaGraduationCap, FaUserTie, FaAward } from 'react-icons/fa';

const journeyData = [
  {
    icon: <FaGraduationCap />,
    date: '2024 - 2026',
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'Sardar Patel Institute of Technology, Mumbai',
  },
  {
    icon: <FaUserTie />,
    date: '2024 - Present',
    title: 'Creative Subcommittee Member',
    subtitle: 'Leading creative design and promotion for technical events.',
  },
  {
    icon: <FaGraduationCap />,
    date: '2021 - 2024',
    title: 'Bachelor of Science in IT (CGPA: 9.75)',
    subtitle: 'Dnyandeep College of Science and Commerce',
  },
  {
    icon: <FaAward />,
    date: '2021 - 2024',
    title: 'University-Level Awards & Leadership',
    subtitle: 'Secured top ranks in Debate & Writing; Served as IQAC and Class Representative.',
  },
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

// THIS IS THE FIX
export default Journey;