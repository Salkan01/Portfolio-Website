export type Lang = 'en' | 'sv' | 'ar';

export const translations: Record<Lang, Record<string, string>> = {
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
    chat_default: "I'm sorry, I can help with email requests.",
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
