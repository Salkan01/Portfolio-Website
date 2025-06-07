import React, { useState, useEffect } from 'react';
import styles from './styles/App.module.css';
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
