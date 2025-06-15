import React from 'react';
import styles from './Projects.module.css';
// === IMPORTANT: Place your project images in src/assets/projects/ ===
import project1Img from '../assets/projects/project1.gif';
import project2Img from '../assets/projects/project2.png';

const projectsData = [
  {
    title: 'Explainable AI Financial Advisor', image: project1Img,
    description: 'An AI-driven system using Python and XGBoost for personalized financial advice with SHAP for model explainability.',
    tags: ['Python', 'XAI', 'Scikit-learn', 'Streamlit'],
    liveDemo: '#', github: '#', // <-- Add your links here
  },
  {
    title: 'Online Student Feedback System', image: project2Img,
    description: 'A full-featured web application built with Java Servlets and JSP, allowing students to submit feedback and admins to view analytics.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL'],
    liveDemo: '#', github: '#', // <-- Add your links here
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
              <div className={styles.links}>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;