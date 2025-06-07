import React from 'react';
import styles from '../styles/App.module.css';

interface ProjectsProps {
  t: (key: string) => string;
}

const movieImg = 'https://via.placeholder.com/300x200.png?text=Movie+Ranking';
const birthdayImg = 'https://via.placeholder.com/300x200.png?text=Birthday+Invite';

const ProjectsSection: React.FC<ProjectsProps> = ({ t }) => (
  <section id="projects" className={styles.section}>
    <h2>{t('featured')}</h2>
    <div className={styles.projectGrid}>
      <div className={styles.projectCard}>
        <img src={movieImg} alt="Movie Ranking" />
        <h3>{t('movie')}</h3>
      </div>
      <div className={styles.projectCard}>
        <img src={birthdayImg} alt="Birthday Invite" />
        <h3>{t('birthday')}</h3>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
