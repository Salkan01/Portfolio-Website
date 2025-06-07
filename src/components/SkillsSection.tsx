import React from 'react';
import styles from '../styles/App.module.css';

interface Props {
  t: (key: string) => string;
}

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Node.js',
  'Git',
  'GitLab',
  'Vite',
  'CSS Modules',
];

const SkillsSection: React.FC<Props> = ({ t }) => (
  <section id="skills" className={styles.section}>
    <h2>{t('skillsHeading')}</h2>
    <ul className={styles.skillsList}>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    <h3>{t('experienceHeading')}</h3>
    <ul className={styles.experienceList}>
      <li>Student Developer – Linköping University, Innovative Programming</li>
      <li>Freelance/Personal Projects</li>
    </ul>
  </section>
);

export default SkillsSection;
