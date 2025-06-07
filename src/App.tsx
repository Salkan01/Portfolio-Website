import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ChatBot from './components/ChatBot';
import { translations, Lang } from './i18n/translations';


import 'react-toastify/dist/ReactToastify.css'
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
      <Navbar t={t} lang={lang} onLangChange={handleLangChange} />
      <Hero t={t} />
      <ProjectsSection t={t} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ContactSection t={t} />
      <ChatBot t={t} />
    </div>
  );
}

export default App
