import React from 'react';
import styles from '../styles/App.module.css';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => (
  <header className={styles.hero}>
    <h1>Salah Eddin Kanaya</h1>
    <h2>{t('heroHeading')}</h2>
    <p>{t('tagline')}</p>
    <div className={styles.social}>
      <a href="https://github.com/Salkan01" aria-label="GitHub">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/salah-eddin-kanaya/" aria-label="LinkedIn">
        LinkedIn
      </a>
      <a href="mailto:salahkanaya2001@gmail.com" aria-label="Email">
        Email
      </a>
    </div>
    <a className={styles.cta} href="#projects">
      {t('cta')}
    </a>
  </header>
);

export default Hero;
