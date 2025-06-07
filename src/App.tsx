import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot';
import ContactForm from './ContactForm';
import styles from './App.module.css';

type Lang = 'en' | 'sv' | 'ar';

const translations: Record<Lang, Record<string, string>> = {
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    heroHeading: 'Welcome to my portfolio',
    tagline: 'I build modern web applications with TypeScript and React.',
    cta: 'View my work',
    featured: 'Featured Projects',
    movie: 'Movie Ranking',
    birthday: 'Birthday Invite',
    aboutHeading: 'About Me',
    aboutText:
      "Hi, I'm Salah Eddin Kanaya — a passionate programmer studying " +
      'Innovative Programming at Linköping University. I enjoy solving problems with clean, scalable code.',
    contactHeading: 'Contact',
    contactEmail: 'me@example.com',
    chat_greeting: 'Hi! How can I help you today?',
    chat_ask_name: "Sure, what's your name?",
    chat_ask_email: "Great, what's your email address?",
    chat_confirm: 'Thanks! I will email Salah now.',
    chat_default: 'I\'m sorry, I can help with email requests.',
    chat_placeholder: 'Type a message...'
  },
  sv: {
    navProjects: 'Projekt',
    navAbout: 'Om',
    navContact: 'Kontakt',
    heroHeading: 'Välkommen till min portfolio',
    tagline: 'Jag bygger moderna webbapplikationer med TypeScript och React.',
    cta: 'Se mina projekt',
    featured: 'Utvalda projekt',
    movie: 'Filmbetyg',
    birthday: 'Födelsedagsinbjudan',
    aboutHeading: 'Om mig',
    aboutText:
      'Hej, jag heter Salah Eddin Kanaya och studerar Innovative Programming på Linköping University. Jag gillar att bygga webb- och systemapplikationer.',
    contactHeading: 'Kontakt',
    contactEmail: 'me@example.com',
    chat_greeting: 'Hej! Hur kan jag hjälpa dig?',
    chat_ask_name: 'Självklart, vad heter du?',
    chat_ask_email: 'Bra, vilken är din e-postadress?',
    chat_confirm: 'Tack! Jag skickar ett mail till Salah nu.',
    chat_default: 'Jag kan hjälpa dig att skicka ett mail.',
    chat_placeholder: 'Skriv ett meddelande...'
  },
  ar: {
    navProjects: 'مشاريع',
    navAbout: 'من أنا',
    navContact: 'اتصل',
    heroHeading: 'مرحباً بكم في معرض أعمالي',
    tagline: 'أبني تطبيقات ويب حديثة باستخدام TypeScript و React.',
    cta: 'عرض مشاريعي',
    featured: 'أبرز المشاريع',
    movie: 'تقييم الأفلام',
    birthday: 'دعوة عيد ميلاد',
    aboutHeading: 'من أنا',
    aboutText:
      'مرحباً، أنا صلاح الدين قناية أدرس البرمجة الابتكارية في جامعة لينشوبينغ.',
    contactHeading: 'اتصل',
    contactEmail: 'me@example.com',
    chat_greeting: 'مرحباً! أنا مساعدك. كيف يمكنني المساعدة؟',
    chat_ask_name: 'ما اسمك؟',
    chat_ask_email: 'ما بريدك الإلكتروني؟',
    chat_confirm: 'شكراً! سأرسل بريداً إلى صلاح الآن.',
    chat_default: 'يمكنني مساعدتك في إرسال بريد.',
    chat_placeholder: 'اكتب رسالة...'
  }
};

const movieImg = "https://via.placeholder.com/300x200.png?text=Movie+Ranking";
const birthdayImg = "https://via.placeholder.com/300x200.png?text=Birthday+Invite";

function App() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null;
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browser = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en').split('-')[0];
      const supported: Lang[] = ['en', 'sv', 'ar'];
      const initial = supported.includes(browser as Lang) ? (browser as Lang) : 'en';
      setLang(initial);
      localStorage.setItem('lang', initial);
    }
  }, []);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Lang;
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
  const t = (key: string) => translations[lang][key];
  return (
    <div>
      <nav className={styles.navbar}>
        <div>Salaheddin Kanaya</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#projects">{t('navProjects')}</a></li>
          <li className={styles.navItem}><a href="#about">{t('navAbout')}</a></li>
          <li className={styles.navItem}><a href="#contact">{t('navContact')}</a></li>
        </ul>
        <select value={lang} onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="sv">Svenska</option>
          <option value="ar">العربية</option>
        </select>
      </nav>

      <header className={styles.hero}>
        <h1>{t('heroHeading')}</h1>
        <p>{t('tagline')}</p>
        <a className={styles.cta} href="#projects">
          {t('cta')}
        </a>
      </header>

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

      <section id="about" className={styles.section}>
        <h2>{t('aboutHeading')}</h2>
        <p>{t('aboutText')}</p>
        <p>Let me show you what I can do.</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>{t('contactHeading')}</h2>
        <ContactForm />
      </section>

      <ChatBot t={t} />
    </div>
  );
}

export default App;
