"use client";

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Code2, 
  Layers, 
  Globe,
  GraduationCap,
  BookOpen,
  Briefcase,
  Menu, // Novo ícone para mobile
  X     // Novo ícone para fechar menu
} from 'lucide-react';

// --- CONFIGURAÇÃO GITHUB PAGES ---
const BASE_PATH = "/my-portifolio"; // Mantenha isso se seu repo for "my-portifolio"

const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  return `${BASE_PATH}${path}`;
};

// --- TIPOS ---
type Language = 'pt' | 'en';

interface MultiLangString {
  pt: string;
  en: string;
}

interface Experience {
  company: string;
  role: MultiLangString;
  period: MultiLangString;
  description: MultiLangString;
  logo: string | null;
  tags: string[];
}

interface Education {
  school: string;
  degree: MultiLangString;
  period: string;
}

export default function Portfolio() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Novo estado para o menu mobile

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  const content = {
    pt: {
      nav: { about: "Sobre", stack: "Stack", exp: "Carreira", edu: "Educação", contact: "Contato" },
      role: "Engenheiro de Software",
      headline: "Transformando complexidade em software escalável.",
      available: "Disponível para projetos",
      about: "Engenheiro de Software formado pela Universidade de Brasília (UnB). Apaixonado por desenvolvimento web e mobile, com foco em arquiteturas de alta performance, migração para nuvem e soluções full-stack. Histórico comprovado em grandes corporações e liderança técnica.",
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
      role: "Software Engineer",
      headline: "Transforming complexity into scalable software.",
      available: "Open to Work",
      about: "Software Engineer graduated from University of Brasília (UnB). Passionate about web and mobile development, focusing on high-performance architectures, cloud migration, and full-stack solutions. Proven track record in major corporations and technical leadership.",
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

  const t = content[lang];

  const profile = {
    name: "Erico Bandeira",
    social: {
      photoUrl: "https://github.com/ericoBandeira.png", 
      linkedin: "https://www.linkedin.com/in/ericobandeira/",
      github: "https://github.com/ericobandeira",
      email: "mailto:ericobandeira@hotmail.com"
    }
  };

  const experiences: Experience[] = [
    {
      company: "ExxonMobil (via Pantheon Inc)",
      role: { pt: "Desenvolvedor Full Stack Sênior", en: "Senior Full Stack Developer" },
      period: { pt: "Dez 2024 - Atual", en: "Dec 2024 - Present" },
      description: {
        pt: "Desenvolvimento de soluções para plataformas de Trading & Supply e Petrochemical Analytics. Criação de APIs com Python (FastAPI), pipelines no Snowflake e dashboards com ReactJS.",
        en: "Developing solutions for Trading & Supply and Petrochemical Analytics platforms. Creating APIs with Python (FastAPI), Snowflake pipelines, and ReactJS dashboards."
      },
      logo: "/img/exxon.png", 
      tags: ["Python", "Snowflake", "AWS", "ReactJS", "FastAPI"]
    },
    {
      company: "BEES (Ambev)",
      role: { pt: "Desenvolvedor Mobile e Front-end", en: "Mobile & Front-end Developer" },
      period: { pt: "Abr 2022 - Abr 2023", en: "Apr 2022 - Apr 2023" },
      description: {
        pt: "Desenvolvimento e manutenção da versão Lite do app para distribuidores de bebidas. Foco em otimização de processos de vendas e gerenciamento de inventário.",
        en: "Developing and maintaining the Lite version of the app for beverage distributors. Focus on streamlining sales processes and inventory management."
      },
      logo: "/img/ambev.jpg", 
      tags: ["React Native", "TypeScript", "Jest", "Scrum"]
    },
    {
      company: "USEND (Inter&Co)",
      role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
      period: { pt: "Jun 2021 - Abr 2022", en: "Jun 2021 - Apr 2022" },
      description: {
        pt: "Desenvolvimento do front-end web e mobile de app B2B para transferências internacionais (BRL para USD). Integração de gateways de pagamento.",
        en: "Developed web and mobile front-end for a B2B app for international transfers (BRL to USD). Integrated payment gateways."
      },
      logo: "/img/inter-us.png",
      tags: ["ReactJS", "React Native", "TypeScript", "Jest"]
    },
    {
      company: "AutoForce",
      role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      period: { pt: "Mar 2021 - Jun 2021", en: "Mar 2021 - Jun 2021" },
      description: {
        pt: "Desenvolvimento de e-commerce automotivo. Implementação de interfaces responsivas e otimização de performance e segurança.",
        en: "Developed an automotive e-commerce website. Implemented responsive interfaces and optimized performance and security."
      },
      logo: null,
      tags: ["Next.js", "Ruby on Rails", "ReactJS"]
    },
    {
      company: "ANCAT",
      role: { pt: "Gerente de Desenvolvimento", en: "Project Development Manager" },
      period: { pt: "Jun 2020 - Out 2020", en: "Jun 2020 - Oct 2020" },
      description: {
        pt: "Gestão de projetos utilizando Scrum e Kanban. Definição de requisitos, cronogramas e mitigação de riscos.",
        en: "Project management using Scrum and Kanban. Defined requirements, schedules, and risk mitigation."
      },
      logo: null,
      tags: ["Scrum", "Kanban", "Management"]
    },
    {
      company: "MediPreço",
      role: { pt: "Desenvolvedor Mobile e Front-end", en: "Mobile & Front-end Developer" },
      period: { pt: "Jun 2019 - Dez 2019", en: "Jun 2019 - Dec 2019" },
      description: {
        pt: "Desenvolvimento de app híbrido para entrega de suprimentos médicos e plataforma B2B para gestão de insumos.",
        en: "Developed hybrid app for medical supplies delivery and B2B platform for supply management."
      },
      logo: null,
      tags: ["React Native", "ReactJS"]
    },
    {
      company: "ANEEL",
      role: { pt: "Gerente de Data Science", en: "Data Science Manager" },
      period: { pt: "Mai 2019 - Jun 2019", en: "May 2019 - Jun 2019" },
      description: {
        pt: "Análise de dados do mercado de energia e desenvolvimento de modelos preditivos com Machine Learning.",
        en: "Energy market data analysis and development of predictive models using Machine Learning."
      },
      logo: null,
      tags: ["Python", "Machine Learning", "Data Science"]
    },
    {
      company: "Orc'estra Gamificação",
      role: { pt: "Desenvolvedor Full-stack", en: "Full-stack Developer" },
      period: { pt: "Mai 2017 - Nov 2018", en: "May 2017 - Nov 2018" },
      description: {
        pt: "Desenvolvimento de soluções de gamificação. Design e implementação de estratégias eficazes.",
        en: "Developing gamification solutions. Design and implementation of effective strategies."
      },
      logo: null,
      tags: ["Django REST", "Ruby on Rails", "React Native"]
    }
  ];

  const education: Education[] = [
    {
      school: "Universidade de Brasília (UnB)",
      degree: { pt: "Engenharia de Software", en: "Software Engineering" },
      period: "2016 - 2022"
    }
  ];

  const certifications: string[] = [ 
    "Scrum Master Professional Certificate (SMPC)",
    "Scrum Foundation Professional Certification (SFPC)",
    "UI & UX Design com Adobe XD"
  ];

  const stack = [
    { category: "Frontend & Mobile", icon: <Code2 />, techs: ["ReactJS", "React Native", "Swift", "TypeScript", "Tailwind CSS", "Next.js", "Jest"] },
    { category: "Backend & API", icon: <Terminal />, techs: ["Python (FastAPI)", "Node.js", "Ruby on Rails", "Django REST", "GraphQL"] },
    { category: "Data & Cloud", icon: <Database />, techs: ["AWS", "Azure", "Snowflake", "SQL", "Docker"] } 
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* --- NAVBAR SUPERIOR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          {/* Logo / Nome */}
          <div className="flex items-center gap-3">
            <img 
              src={profile.social.photoUrl} 
              alt={profile.name} 
              className="w-10 h-10 rounded-full border-2 border-cyan-500/50 object-cover shadow-sm shadow-cyan-500/20"
            />
            <span className="font-bold text-white tracking-wide">{profile.name}</span>
          </div>

          {/* MENU DESKTOP (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#stack" className="hover:text-cyan-400 transition-colors">{t.nav.stack}</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">{t.nav.exp}</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">{t.nav.edu}</a></li>
            </ul>

            {/* Seletor de Idioma Desktop */}
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:border-cyan-500/50 transition-all text-xs font-mono text-cyan-400"
            >
              <Globe size={14} />
              {lang === 'pt' ? 'PT' : 'EN'}
            </button>

            <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-cyan-500 hover:text-white transition-all">
              {t.nav.contact}
            </a>
          </div>

          {/* BOTÃO MOBILE (Hamburger) */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-cyan-400"
            >
              {lang === 'pt' ? 'PT' : 'EN'}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0c10] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
            <a href="#about" onClick={closeMenu} className="text-lg font-medium hover:text-cyan-400">{t.nav.about}</a>
            <a href="#stack" onClick={closeMenu} className="text-lg font-medium hover:text-cyan-400">{t.nav.stack}</a>
            <a href="#experience" onClick={closeMenu} className="text-lg font-medium hover:text-cyan-400">{t.nav.exp}</a>
            <a href="#education" onClick={closeMenu} className="text-lg font-medium hover:text-cyan-400">{t.nav.edu}</a>
            <a href="#contact" onClick={closeMenu} className="mt-2 w-full text-center py-3 bg-white text-black rounded-full font-bold">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="pt-20">

        {/* 1. HERO SECTION */}
        <section id="about" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-12 md:py-0">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              {t.available}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
              {t.role} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Dev Full Stack & Scrum Master</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
              {t.about}
            </p>

            <div className="flex gap-4 pt-4">
              <a href={profile.social.linkedin} target="_blank" className="p-3 bg-[#1c2128] rounded-xl hover:bg-[#0077b5] hover:text-white transition-all border border-white/10 group">
                <Linkedin size={24} />
              </a>
              <a href={profile.social.github} target="_blank" className="p-3 bg-[#1c2128] rounded-xl hover:bg-white hover:text-black transition-all border border-white/10">
                <Github size={24} />
              </a>
              <a href={profile.social.email} className="p-3 bg-[#1c2128] rounded-xl hover:bg-green-600 hover:text-white transition-all border border-white/10">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. STACK TECNOLÓGICA */}
        <section id="stack" className="py-12 md:py-20 px-6 md:px-20 bg-[#11141a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3">
              <Layers className="text-cyan-500" /> {t.sections.stack}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stack.map((group, idx) => (
                <div key={idx} className="bg-[#0b0c10] border border-white/5 p-6 md:p-8 rounded-3xl hover:border-cyan-500/30 transition-all group">
                  <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono bg-[#1c2128] text-slate-300 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EXPERIÊNCIA (TIMELINE RESPONSIVA) */}
        <section id="experience" className="py-12 md:py-20 px-4 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-3 px-2">
            <Briefcase className="text-purple-500" /> {t.sections.exp}
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((xp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between group is-active">
                
                {/* Ícone Central (Timeline Dot) */}
                <div className="absolute left-0 ml-5 md:static md:ml-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0b0c10] bg-slate-800 group-hover:bg-cyan-500 transition-colors shrink-0 z-10 -translate-x-1/2 md:translate-x-0 shadow-[0_0_0_8px_#0b0c10]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Espaçador para layout alternado no Desktop */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />

                {/* Card de Conteúdo */}
                {/* No mobile: ml-12 para não ficar em cima da linha. No desktop: sem margem lateral fixa, o flex cuida disso */}
                <div className={`
                  w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] 
                  bg-[#161b22] p-5 md:p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl
                  ${index % 2 === 0 ? 'md:order-first md:mr-auto' : 'md:order-last md:ml-auto'}
                `}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg p-1 overflow-hidden flex items-center justify-center flex-shrink-0">
                      {xp.logo ? (
                        <img 
                          src={getImagePath(xp.logo)} 
                          alt={xp.company} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      ) : (
                        <Briefcase className="text-black" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg leading-tight">{xp.company}</h3>
                      <span className="text-[10px] md:text-xs text-cyan-400 font-mono border border-cyan-500/20 px-2 py-0.5 rounded">
                        {lang === 'pt' ? xp.period.pt : xp.period.en}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-sm md:text-md font-medium text-slate-200 mb-2">
                    {lang === 'pt' ? xp.role.pt : xp.role.en}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                    {lang === 'pt' ? xp.description.pt : xp.description.en}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {xp.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EDUCAÇÃO E CERTIFICAÇÕES */}
        <section id="education" className="py-12 md:py-20 px-6 md:px-20 bg-[#11141a]">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 justify-center">
              <GraduationCap className="text-emerald-500" /> {t.sections.edu}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculdade */}
              {education.map((edu, idx) => (
                <div key={idx} className="bg-[#0b0c10] border border-white/5 p-6 rounded-2xl flex gap-4 h-full items-start">
                  <BookOpen className="text-emerald-500 shrink-0" size={28} />
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{edu.school}</h3>
                    <p className="text-slate-400 font-medium text-sm mt-1">{lang === 'pt' ? edu.degree.pt : edu.degree.en}</p>
                    <span className="text-xs font-mono text-slate-500 block mt-1">{edu.period}</span>
                  </div>
                </div>
              ))}

              {/* Lista de Certificados */}
              <div className="bg-[#0b0c10] border border-white/5 p-6 rounded-2xl h-full">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-emerald-500 mt-0.5 min-w-[15px]">✓</span> 
                      <span className="leading-tight">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 5. CONTATO */}
        <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#0b0c10] to-[#000] py-16 md:py-20">
          <div className="text-center max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{t.sections.contact}</h2>
            <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg">
              {t.sections.contactSub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4">
              <a href={profile.social.email} className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto">
                <Mail size={20} />
                {t.buttons.email}
              </a>
              
              <a href={profile.social.linkedin} target="_blank" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto">
                <Linkedin size={20} />
                {t.buttons.linkedin}
              </a>
              
              <a href={profile.social.github} target="_blank" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#24292e] text-white rounded-2xl font-bold hover:scale-105 transition-transform border border-white/20 w-full sm:w-auto">
                <Github size={20} />
                {t.buttons.github}
              </a>
            </div>

            <footer className="mt-16 md:mt-20 pt-10 border-t border-white/5 text-slate-600 text-xs md:text-sm font-mono">
               <p>{profile.name} &copy; 2024. Built with Next.js + Tailwind.</p>
            </footer>
          </div>
        </section>

      </main>
    </div>
  );
}