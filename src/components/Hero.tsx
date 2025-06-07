import React from 'react';
import styles from '../styles/App.module.css';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => (
  <header className={styles.hero}>
    <h1>{t('heroHeading')}</h1>
    <p>{t('tagline')}</p>
    <a className={styles.cta} href="#projects">
      {t('cta')}
    </a>
  </header>
);

export default Hero;
