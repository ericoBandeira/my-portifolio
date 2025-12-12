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
  Briefcase
} from 'lucide-react';

// --- DEFINIÇÃO DE TIPOS (Para corrigir os erros do TypeScript) ---
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
  // Estado para controle de idioma
  const [lang, setLang] = useState<Language>('pt');

  // --- DICIONÁRIO DE TRADUÇÃO ---
  const content = {
    pt: {
      nav: { about: "Sobre", stack: "Stack", exp: "Carreira", edu: "Educação", contact: "Contato" },
      role: "Engenheiro de Software Sênior",
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
      role: "Senior Software Engineer",
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

  // --- DADOS DO PERFIL ---
  const profile = {
    name: "Erico Bandeira",
    social: {
      photoUrl: "https://github.com/ericoBandeira.png", 
      linkedin: "https://www.linkedin.com/in/ericobandeira/", // [cite: 3]
      github: "https://github.com/ericobandeira",
      email: "mailto:ericobandeira@hotmail.com" // [cite: 2]
    }
  };

  // --- EXPERIÊNCIAS ---
  const experiences: Experience[] = [
    {
      company: "ExxonMobil (via Pantheon Inc)", // [cite: 24, 29]
      role: { pt: "Desenvolvedor Full Stack Sênior", en: "Senior Full Stack Developer" }, // [cite: 30]
      period: { pt: "Dez 2024 - Atual", en: "Dec 2024 - Present" }, // [cite: 31]
      description: {
        pt: "Desenvolvimento de soluções para plataformas de Trading & Supply e Petrochemical Analytics. Criação de APIs com Python (FastAPI), pipelines no Snowflake e dashboards com ReactJS.", // [cite: 33, 34, 35, 36]
        en: "Developing solutions for Trading & Supply and Petrochemical Analytics platforms. Creating APIs with Python (FastAPI), Snowflake pipelines, and ReactJS dashboards."
      },
      logo: "/img/exxon.png", 
      tags: ["Python", "Snowflake", "AWS", "ReactJS", "FastAPI"] // [cite: 44, 45, 47, 48]
    },
    {
      company: "BEES (Ambev)", // [cite: 49]
      role: { pt: "Desenvolvedor Mobile e Front-end", en: "Mobile & Front-end Developer" }, // [cite: 50]
      period: { pt: "Abr 2022 - Abr 2023", en: "Apr 2022 - Apr 2023" }, // [cite: 51]
      description: {
        pt: "Desenvolvimento e manutenção da versão Lite do app para distribuidores de bebidas. Foco em otimização de processos de vendas e gerenciamento de inventário.", // [cite: 52, 53, 55]
        en: "Developing and maintaining the Lite version of the app for beverage distributors. Focus on streamlining sales processes and inventory management."
      },
      logo: "/img/ambev.jpg", 
      tags: ["React Native", "TypeScript", "Jest", "Scrum"] // [cite: 63, 64, 66]
    },
    {
      company: "USEND (Inter&Co)", // [cite: 67]
      role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" }, // [cite: 68]
      period: { pt: "Jun 2021 - Abr 2022", en: "Jun 2021 - Apr 2022" }, // [cite: 69]
      description: {
        pt: "Desenvolvimento do front-end web e mobile de app B2B para transferências internacionais (BRL para USD). Integração de gateways de pagamento.", // [cite: 71, 72]
        en: "Developed web and mobile front-end for a B2B app for international transfers (BRL to USD). Integrated payment gateways."
      },
      logo: "/img/inter-us.png",
      tags: ["ReactJS", "React Native", "TypeScript", "Jest"] // [cite: 76, 77, 78]
    },
    {
      company: "AutoForce", // [cite: 79]
      role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" }, // [cite: 80]
      period: { pt: "Mar 2021 - Jun 2021", en: "Mar 2021 - Jun 2021" }, // [cite: 81]
      description: {
        pt: "Desenvolvimento de e-commerce automotivo. Implementação de interfaces responsivas e otimização de performance e segurança.", // [cite: 83, 85]
        en: "Developed an automotive e-commerce website. Implemented responsive interfaces and optimized performance and security."
      },
      logo: "/img/autoforce.png",
      tags: ["Next.js", "Ruby on Rails", "ReactJS"] // [cite: 87, 88, 89]
    },
    {
      company: "MediPreço", // [cite: 98]
      role: { pt: "Desenvolvedor Mobile e Front-end", en: "Mobile & Front-end Developer" }, // [cite: 99]
      period: { pt: "Jun 2019 - Dez 2019", en: "Jun 2019 - Dec 2019" }, // [cite: 100]
      description: {
        pt: "Desenvolvimento de app híbrido para entrega de suprimentos médicos e plataforma B2B para gestão de insumos.", // [cite: 102, 103, 104]
        en: "Developed hybrid app for medical supplies delivery and B2B platform for supply management."
      },
      logo: "/img/medipreco.png",
      tags: ["React Native", "ReactJS"] // [cite: 107, 108]
    },
    {
      company: "ANEEL", // [cite: 109]
      role: { pt: "Gerente de Data Science", en: "Data Science Manager" }, // [cite: 110]
      period: { pt: "Mai 2019 - Jun 2019", en: "May 2019 - Jun 2019" }, // [cite: 111]
      description: {
        pt: "Análise de dados do mercado de energia e desenvolvimento de modelos preditivos com Machine Learning.", // [cite: 113]
        en: "Energy market data analysis and development of predictive models using Machine Learning."
      },
      logo: "/img/aneel.jpg",
      tags: ["Python", "Machine Learning", "Data Science"] // [cite: 115]
    },
    {
      company: "Orc'estra Gamificação", // [cite: 116]
      role: { pt: "Desenvolvedor Full-stack", en: "Full-stack Developer" }, // [cite: 117]
      period: { pt: "Mai 2017 - Nov 2018", en: "May 2017 - Nov 2018" }, // [cite: 118]
      description: {
        pt: "Desenvolvimento de soluções de gamificação. Design e implementação de estratégias eficazes.", // [cite: 120, 121]
        en: "Developing gamification solutions. Design and implementation of effective strategies."
      },
      logo: "/img/orcestra.png",
      tags: ["Django REST", "Ruby on Rails", "React Native"] // [cite: 124, 125, 126, 127]
    }
  ];

  // --- DADOS EXTRAS ---
  const education: Education[] = [
    {
      school: "Universidade de Brasília (UnB)", // [cite: 129]
      degree: { pt: "Engenharia de Software", en: "Software Engineering" }, // [cite: 130]
      period: "2016 - 2022" // [cite: 130]
    }
  ];

  const certifications: string[] = [ 
    "Scrum Master Professional Certificate (SMPC)", // [cite: 144]
    "Scrum Foundation Professional Certification (SFPC)", // [cite: 145]
    "UI & UX Design com Adobe XD" // [cite: 143]
  ];

  const stack = [
    { category: "Frontend & Mobile", icon: <Code2 />, techs: ["ReactJS", "React Native", "Swift", "TypeScript", "Tailwind CSS", "Next.js", "Jest"] },
    { category: "Backend & API", icon: <Terminal />, techs: ["Python (FastAPI)", "Node.js", "Ruby on Rails", "Django REST", "GraphQL"] },
    { category: "Data & Cloud", icon: <Database />, techs: ["AWS", "Azure", "Snowflake", "SQL", "Docker"] } 
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* --- NAVBAR SUPERIOR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={profile.social.photoUrl} 
            alt={profile.name} 
            className="w-10 h-10 rounded-full border-2 border-cyan-500/50 object-cover shadow-sm shadow-cyan-500/20"
          />
          <span className="font-bold text-white tracking-wide hidden sm:block">{profile.name}</span>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a></li>
            <li><a href="#stack" className="hover:text-cyan-400 transition-colors">{t.nav.stack}</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition-colors">{t.nav.exp}</a></li>
            <li><a href="#education" className="hover:text-cyan-400 transition-colors">{t.nav.edu}</a></li>
          </ul>

          {/* Seletor de Idioma */}
          <button 
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:border-cyan-500/50 transition-all text-xs font-mono text-cyan-400"
          >
            <Globe size={14} />
            {lang === 'pt' ? 'PT' : 'EN'}
          </button>

          <a href="#contact" className="hidden md:block px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-cyan-500 hover:text-white transition-all">
            {t.nav.contact}
          </a>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="pt-20">

        {/* 1. HERO SECTION */}
        <section id="about" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              {t.available}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Engenheiro de Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Dev Full Stack & Scrum Master</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
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
        <section id="stack" className="py-20 px-6 md:px-20 bg-[#11141a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Layers className="text-cyan-500" /> {t.sections.stack}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stack.map((group, idx) => (
                <div key={idx} className="bg-[#0b0c10] border border-white/5 p-8 rounded-3xl hover:border-cyan-500/30 transition-all group">
                  <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{group.category}</h3>
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

        {/* 3. EXPERIÊNCIA (TIMELINE) */}
        <section id="experience" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="text-purple-500" /> {t.sections.exp}
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((xp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Ícone Central */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0b0c10] bg-slate-800 group-hover:bg-cyan-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0b0c10] z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#161b22] p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Lógica de Logo */}
                    <div className="w-12 h-12 bg-white rounded-lg p-1 overflow-hidden flex items-center justify-center flex-shrink-0">
                      {xp.logo ? (
                        <img src={xp.logo} alt={xp.company} className="max-w-full max-h-full object-contain" />
                      ) : (
                        <Briefcase className="text-black" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">{xp.company}</h3>
                      <span className="text-xs text-cyan-400 font-mono border border-cyan-500/20 px-2 py-0.5 rounded">
                        {lang === 'pt' ? xp.period.pt : xp.period.en}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-md font-medium text-slate-200 mb-2">
                    {lang === 'pt' ? xp.role.pt : xp.role.en}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
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
        <section id="education" className="py-20 px-6 md:px-20 bg-[#11141a]">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
              <GraduationCap className="text-emerald-500" /> {t.sections.edu}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculdade */}
              {education.map((edu, idx) => (
                <div key={idx} className="bg-[#0b0c10] border border-white/5 p-6 rounded-2xl flex gap-4 h-full">
                  <BookOpen className="text-emerald-500 shrink-0" size={28} />
                  <div>
                    <h3 className="text-white font-bold text-lg">{edu.school}</h3>
                    <p className="text-slate-400 font-medium">{lang === 'pt' ? edu.degree.pt : edu.degree.en}</p>
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
                      <span className="text-emerald-500 mt-0.5">✓</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 5. CONTATO */}
        <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#0b0c10] to-[#000] py-20">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">{t.sections.contact}</h2>
            <p className="text-slate-400 mb-10 text-lg">
              {t.sections.contactSub}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href={profile.social.email} className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform">
                <Mail size={20} />
                {t.buttons.email}
              </a>
              
              <a href={profile.social.linkedin} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                <Linkedin size={20} />
                {t.buttons.linkedin}
              </a>
              
              <a href={profile.social.github} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-[#24292e] text-white rounded-2xl font-bold hover:scale-105 transition-transform border border-white/20">
                <Github size={20} />
                {t.buttons.github}
              </a>
            </div>

            <footer className="mt-20 pt-10 border-t border-white/5 text-slate-600 text-sm font-mono">
               <p>{profile.name} &copy; 2024. Built with Next.js + Tailwind.</p>
            </footer>
          </div>
        </section>

      </main>
    </div>
  );
}