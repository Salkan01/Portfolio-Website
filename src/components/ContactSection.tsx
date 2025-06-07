import React from 'react';
import styles from '../styles/App.module.css';
import ContactForm from './ContactForm';

interface ContactProps {
  t: (key: string) => string;
}

const ContactSection: React.FC<ContactProps> = ({ t }) => (
  <section id="contact" className={styles.section}>
    <h2>{t('contactHeading')}</h2>
    <p>
      <a href={`mailto:${t('contactEmail')}`}>{t('contactEmail')}</a>
    </p>
    <p>{t('contactPhone')}</p>
    <ContactForm />
  </section>
);

export default ContactSection;
