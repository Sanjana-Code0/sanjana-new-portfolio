import React from 'react';
import styles from './Projects.module.css';
// === IMPORTANT: Place your project images in src/assets/projects/ ===
import project1Img from '../assets/projects/project1.gif';
import project2Img from '../assets/projects/project2.webp';
import project3Img from '../assets/projects/project3.gif';
import project4Img from '../assets/projects/project4.gif';
import project5Img from '../assets/projects/project5.gif';

const projectsData = [
  {
    title: 'Explainable AI Financial Advisor', image: project1Img,
    description: 'An AI-driven system using Python and XGBoost for personalized financial advice with SHAP for model explainability.',
    tags: ['Python', 'XAI', 'Scikit-learn', 'Streamlit'],
    liveDemo: 'https://aifinancialadvisorindia.streamlit.app/', github: 'https://github.com/Sanjana-Code0/ai_financial_advisor_india.git', // <-- Add your links here
  },
  {
    title: 'Online Student Feedback System', image: project2Img,
    description: 'A full-featured web application built with Java Servlets and JSP, allowing students to submit feedback and admins to view analytics.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL'],
    liveDemo: 'https://github.com/Sanjana-Code0/JavaProject.git', github: 'https://github.com/Sanjana-Code0/JavaProject.git', // <-- Add your links here
  },
   {
    title: 'College Management System', image: project3Img,
    description: 'Built a comprehensive desktop application using C# and MySQL for managing student and faculty data. Designed a normalized database schema to ensure data integrity and efficient performance.',
    tags: ['.net Framework', 'aspx', 'C#', 'MySQL'],
    liveDemo:'https://github.com/Sanjana-Code0/ASPX-Code.git' , github: 'https://github.com/Sanjana-Code0/ASPX-Code.git', // <-- Add your links here
  },
   {
    title: 'Online Sneakers shopping website', image: project4Img,
    description: 'A Flutter-based mobile application to browse and manage sneaker collections. The project is currently under development, utilizing Firebase for backend integration and modern Material Design principles.',
    tags: ['Firebase CLI','Android studio', 'Flutter SDK', 'Dart','Android SDK'],
    liveDemo: 'https://github.com/Sanjana-Code0/MPCapstone.git', github: 'https://github.com/Sanjana-Code0/MPCapstone.git', // <-- Add your links here
  },
   {
    title: 'BCA Career Guidance App', image: project5Img,
    description: 'A Flutter-based mobile application to Your comprehensive mobile guide to navigating a successful career after a Bachelor of Computer Applications (BCA). This Flutter application is designed to be a one-stop resource for BCA students and recent graduates, helping them explore career paths, discover further studies, and understand the skills required to succeed in the tech industry.',
    tags: ['Firebase CLI','Android studio', 'Flutter SDK', 'Dart','Android SDK'],
    liveDemo: 'https://github.com/Sanjana-Code0/BCA_Career_guide_app.git', github: 'https://github.com/Sanjana-Code0/BCA_Career_guide_app.git', // <-- Add your links here
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