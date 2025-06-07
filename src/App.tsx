import React, { useState } from 'react';
import ChatBot from './ChatBot';

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
  const t = (key: string) => translations[lang][key];
  return (
    <div className="pt-16 text-center font-sans">
      <nav className="fixed top-0 inset-x-0 bg-gray-900 text-white flex items-center justify-between px-4 py-3">
        <div className="font-bold">Salaheddin Kanaya</div>
        <ul className="hidden sm:flex space-x-4">
          <li><a className="hover:text-blue-300" href="#projects">{t('navProjects')}</a></li>
          <li><a className="hover:text-blue-300" href="#about">{t('navAbout')}</a></li>
          <li><a className="hover:text-blue-300" href="#contact">{t('navContact')}</a></li>
        </ul>
        <select
          className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm focus:outline-none"
          value={lang}
          onChange={e => setLang(e.target.value as Lang)}
        >
          <option value="en">English</option>
          <option value="sv">Svenska</option>
          <option value="ar">العربية</option>
        </select>
      </nav>

      <header className="flex flex-col items-center justify-center text-center py-24 bg-gray-100 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('heroHeading')}</h1>
        <p className="text-lg text-gray-700 mb-6">{t('tagline')}</p>
        <a
          className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          href="#projects"
        >
          {t('cta')}
        </a>
      </header>

      <section id="projects" className="py-12 bg-white">
        <h2 className="text-3xl font-bold mb-8">{t('featured')}</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          <div className="bg-gray-100 rounded shadow hover:shadow-lg overflow-hidden">
            <img className="w-full" src={movieImg} alt="Movie Ranking" />
            <h3 className="p-4 font-semibold">{t('movie')}</h3>
          </div>
          <div className="bg-gray-100 rounded shadow hover:shadow-lg overflow-hidden">
            <img className="w-full" src={birthdayImg} alt="Birthday Invite" />
            <h3 className="p-4 font-semibold">{t('birthday')}</h3>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 px-4 max-w-3xl mx-auto text-left space-y-4">
        <h2 className="text-3xl font-bold">{t('aboutHeading')}</h2>
        <p>{t('aboutText')}</p>
        <p>Let me show you what I can do.</p>
      </section>

      <section id="contact" className="py-12 text-center space-y-2">
        <h2 className="text-3xl font-bold">{t('contactHeading')}</h2>
        <p>
          <a className="text-blue-600 hover:underline" href={`mailto:${t('contactEmail')}`}>{t('contactEmail')}</a>
        </p>
      </section>

      <ChatBot t={t} />
    </div>
  );
}

export default App;
