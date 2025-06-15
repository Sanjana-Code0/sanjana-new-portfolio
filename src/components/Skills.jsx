import React from 'react';
import styles from './Skills.module.css';
import { FaJava, FaPython, FaReact, FaCode, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C#', icon: <FaCode /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
];

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h2>Skills & Expertise</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// EXPORT LINE ADDED
export default Skills;