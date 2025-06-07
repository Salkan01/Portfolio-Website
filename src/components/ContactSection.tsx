import React from 'react';
import styles from '../styles/App.module.css';
import ContactForm from './ContactForm';

interface ContactProps {
  t: (key: string) => string;
}

const ContactSection: React.FC<ContactProps> = ({ t }) => (
  <section id="contact" className={styles.section}>
    <h2>{t('contactHeading')}</h2>
    <ContactForm />
  </section>
);

export default ContactSection;
