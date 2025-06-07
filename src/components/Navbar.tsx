import React from 'react';
import styles from '../styles/App.module.css';
import { Lang } from '../i18n/translations';

interface NavbarProps {
  t: (key: string) => string;
  lang: Lang;
  onLangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, lang, onLangChange }) => (
  <nav className={styles.navbar}>
    <div>Salaheddin Kanaya</div>
    <ul className={styles.navList}>
      <li className={styles.navItem}><a href="#projects">{t('navProjects')}</a></li>
      <li className={styles.navItem}><a href="#about">{t('navAbout')}</a></li>
      <li className={styles.navItem}><a href="#contact">{t('navContact')}</a></li>
    </ul>
    <select value={lang} onChange={onLangChange}>
      <option value="en">English</option>
      <option value="sv">Svenska</option>
      <option value="ar">العربية</option>
    </select>
  </nav>
);

export default Navbar;
