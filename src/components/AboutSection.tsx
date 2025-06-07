import React from 'react';
import styles from '../styles/App.module.css';

interface AboutProps {
  t: (key: string) => string;
}

const AboutSection: React.FC<AboutProps> = ({ t }) => (
  <section id="about" className={styles.section}>
    <h2>{t('aboutHeading')}</h2>
    <p>{t('aboutText')}</p>
    <p>Let me show you what I can do.</p>
  </section>
);

export default AboutSection;
