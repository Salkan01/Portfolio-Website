export type Lang = 'en' | 'sv' | 'ar';

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    heroHeading: 'Frontend Developer & Aspiring Full-Stack Engineer',
    tagline:
      'I build multilingual web applications with React, TypeScript, and clean design systems.',
    cta: 'View my work',
    featured: 'Featured Projects',
    movie: 'Movie Ranking',
    birthday: 'Birthday Invite',
    aboutHeading: 'About Me',
    aboutText:
      "Hi! I'm Salah Eddin Kanaya, a programmer passionate about clean code and scalable systems. " +
      'I\'m studying Innovative Programming at Link\xF6ping University and enjoy solving complex problems with JavaScript, TypeScript, and React. ' +
      'Previously I studied Software Engineering at Blekinge Institute of Technology where I completed projects involving web interfaces, REST APIs and multilingual systems. ' +
      'My goal is to become a full-stack developer who bridges design and logic with simplicity and clarity.',
    contactHeading: 'Contact',
    contactEmail: 'salahkanaya2001@gmail.com',
    contactPhone: '0700187034',
    skillsHeading: 'Skills & Experience',
    experienceHeading: 'Experience',
    chat_greeting: 'Hi! How can I help you today?',
    chat_ask_name: "Sure, what's your name?",
    chat_ask_email: "Great, what's your email address?",
    chat_confirm: 'Thanks! I will email Salah now.',
    chat_default: "I'm sorry, I can help with email requests.",
    chat_placeholder: 'Type a message...'
  },
  sv: {
    navProjects: 'Projekt',
    navAbout: 'Om',
    navContact: 'Kontakt',
    heroHeading: 'Frontendutvecklare & blivande fullstackingenj\xF6r',
    tagline:
      'Jag bygger flerspr\xE5kiga webbapplikationer med React, TypeScript och rena designsystem.',
    cta: 'Se mina projekt',
    featured: 'Utvalda projekt',
    movie: 'Filmbetyg',
    birthday: 'F\xF6delsedagsinbjudan',
    aboutHeading: 'Om mig',
    aboutText:
      'Hej! Jag heter Salah Eddin Kanaya och studerar Innovative Programming vid Link\xF6pings universitet. ' +
      'Jag gillar att l\xF6sa komplexa problem med JavaScript, TypeScript och React och experimenterar med systemn\xE4ra kod och Node.js. ' +
      'Tidigare studerade jag Software Engineering vid Blekinge Tekniska H\xF6gskola och har gjort projekt med webbgr\xE4nssnitt, REST API:er och flerspr\xE5kiga system. ' +
      'Mitt m\xE5l \xE4r att bli en fullstackutvecklare som f\xF6renar design och logik med enkelhet och tydlighet.',
    contactHeading: 'Kontakt',
    contactEmail: 'salahkanaya2001@gmail.com',
    contactPhone: '0700187034',
    skillsHeading: 'F\xE4rdigheter & Erfarenhet',
    experienceHeading: 'Erfarenhet',
    chat_greeting: 'Hej! Hur kan jag hj\xE4lpa dig?',
    chat_ask_name: 'Sj\xE4lvklart, vad heter du?',
    chat_ask_email: 'Bra, vilken \xE4r din e-postadress?',
    chat_confirm: 'Tack! Jag skickar ett mail till Salah nu.',
    chat_default: 'Jag kan hj\xE4lpa dig att skicka ett mail.',
    chat_placeholder: 'Skriv ett meddelande...'
  },
  ar: {
    navProjects: 'مشاريع',
    navAbout: 'من أنا',
    navContact: 'اتصل',
    heroHeading: 'مطور واجهات أمامية وطالب تطوير متكامل',
    tagline:
      'أبني تطبيقات ويب متعددة اللغات باستخدام React وTypeScript وأنظمة تصميم نظيفة.',
    cta: 'عرض مشاريعي',
    featured: 'أبرز المشاريع',
    movie: 'تقييم الأفلام',
    birthday: 'دعوة عيد ميلاد',
    aboutHeading: 'من أنا',
    aboutText:
      'مرحبًا! أنا صلاح الدين قناية، مبرمج شغوف بالكود النظيف والأنظمة القابلة للتوسع. أدرس البرمجة الابتكارية في جامعة لينشوبينغ وأستمتع بحل المشاكل المعقدة باستخدام JavaScript وTypeScript وReact. ' +
      'درست سابقًا هندسة البرمجيات في جامعة بليكينجه للتكنولوجيا وأكملت مشاريع تتعلق بواجهات الويب وواجهات REST والأنظمة متعددة اللغات. ' +
      'هدفي أن أصبح مطورًا متكاملًا يربط بين التصميم والمنطق ببساطة ووضوح.',
    contactHeading: 'اتصل',
    contactEmail: 'salahkanaya2001@gmail.com',
    contactPhone: '0700187034',
    skillsHeading: 'المهارات والخبرة',
    experienceHeading: 'الخبرة',
    chat_greeting: 'مرحبًا! كيف يمكنني مساعدتك؟',
    chat_ask_name: 'ما اسمك؟',
    chat_ask_email: 'ما بريدك الإلكتروني؟',
    chat_confirm: 'شكرًا! سأرسل بريدًا إلى صلاح الآن.',
    chat_default: 'يمكنني مساعدتك في إرسال بريد.',
    chat_placeholder: 'اكتب رسالة...'
  }
};
