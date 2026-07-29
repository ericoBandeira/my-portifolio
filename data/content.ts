import { ContentSection } from '../types';

export const content: Record<'pt' | 'en', ContentSection> = {
  pt: {
    nav: { about: "Sobre", stack: "Stack", exp: "Carreira", edu: "Educação", contact: "Contato" },
    role: "Engenheiro de Software Sênior",
    headline: "Transformando complexidade em software escalável.",
    available: "Disponível para projetos",
    about: "Engenheiro de Software Sênior com mais de 6 anos de experiência na construção de aplicações web e mobile de alta escala para ambientes corporativos e produtos B2B globais. Contribuí para plataformas críticas em empresas multinacionais como ExxonMobil e AB InBev, com foco constante em performance, confiabilidade e experiência do usuário.",
    sections: {
      stack: "Arsenais Tecnológicos",
      exp: "Jornada Profissional",
      edu: "Formação Acadêmica & Certificações",
      contact: "Vamos trabalhar juntos?",
      contactSub: "Estou sempre aberto a discutir novos projetos e inovação."
    },
    buttons: {
      email: "Enviar E-mail",
      linkedin: "LinkedIn",
      github: "GitHub"
    }
  },
  en: {
    nav: { about: "About", stack: "Stack", exp: "Experience", edu: "Education", contact: "Contact" },
    role: "Senior Software Engineer",
    headline: "Transforming complexity into scalable software.",
    available: "Open to Work",
    about: "Senior Software Engineer with 6+ years of experience building high-scale web and mobile applications for enterprise environments and global B2B products. I've contributed to data-driven, mission-critical platforms at multinational companies such as ExxonMobil and AB InBev, consistently focusing on performance, reliability, and user experience.",
    sections: {
      stack: "Tech Stack",
      exp: "Professional Journey",
      edu: "Education & Certifications",
      contact: "Let's work together?",
      contactSub: "Always open to discuss new projects and innovation."
    },
    buttons: {
      email: "Send E-mail",
      linkedin: "LinkedIn",
      github: "GitHub"
    }
  }
};
