import React from 'react';
import { Code2, Terminal, Database } from 'lucide-react';
import { Experience, Education } from '../types';

export const profile = {
  name: "Érico Bandeira",
  social: {
    photoUrl: "https://github.com/ericoBandeira.png", 
    linkedin: "https://www.linkedin.com/in/ericobandeira/",
    github: "https://github.com/ericobandeira",
    email: "mailto:ericobandeira@hotmail.com"
  }
};

export const experiences: Experience[] = [
  {
    company: "Circle Global",
    role: { pt: "Engenheiro de Software Sênior", en: "Senior Software Engineer" },
    period: { pt: "Abr 2026 - Atual", en: "Apr 2026 - Present" },
    description: {
      pt: "Liderança na reformulação completa do aplicativo móvel da empresa, com foco em performance e escalabilidade. Utilização de IA para otimizar interfaces e automatizar fluxos de trabalho.",
      en: "Leading the end-to-end overhaul of the company's mobile application, focusing on performance, scalability, and enhanced UX. Leveraging AI to streamline UI creation."
    },
    logo: "/img/circle-jobs.png",
    tags: ["Mobile", "AI", "Performance", "Frontend"]
  },
  {
    company: "ExxonMobil (via Pantheon Inc)",
    role: { pt: "Engenheiro de Software Sênior", en: "Senior Software Engineer" },
    period: { pt: "Dez 2024 - Mar 2026", en: "Dec 2024 - Mar 2026" },
    description: {
      pt: "Desenvolvimento full-stack focado em front-end. Criação de telas com React e TypeScript, refatoração de pipelines de dados e integração de IA com Python e Databricks.",
      en: "Frontend-focused full-stack development using React and TypeScript. Refactored data pipelines and integrated AI capabilities with Python and Databricks."
    },
    logo: "/img/exxon.png", 
    tags: ["React", "TypeScript", "Python", "FastAPI", "Databricks"]
  },
  {
    company: "BEES (Ambev)",
    role: { pt: "Engenheiro de Software Sênior", en: "Senior Software Engineer" },
    period: { pt: "Abr 2022 - Abr 2023", en: "Apr 2022 - Apr 2023" },
    description: {
      pt: "Desenvolvimento mobile da versão Lite do BEES (React Native + TypeScript). Foco em otimização do fluxo de vendas e melhoria da confiabilidade com testes (Jest).",
      en: "Mobile development of the BEES Lite app (React Native + TypeScript). Focused on streamlining the sales workflow and improving reliability with unit tests (Jest)."
    },
    logo: "/img/ambev.jpg", 
    tags: ["React Native", "TypeScript", "Jest", "Scrum"]
  },
  {
    company: "USEND (Inter&Co)",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: { pt: "Jun 2021 - Abr 2022", en: "Jun 2021 - Apr 2022" },
    description: {
      pt: "Desenvolvimento web e mobile B2B para transferências internacionais (BRL para USD) com ReactJS e React Native. Implementação de nova funcionalidade de cartão internacional.",
      en: "B2B web and mobile development for international transfers (BRL to USD) using ReactJS and React Native. Implemented new international card feature UI."
    },
    logo: "/img/inter-us.png",
    tags: ["ReactJS", "React Native", "TypeScript", "Jest"]
  },
  {
    company: "AutoForce",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: { pt: "Mar 2021 - Jun 2021", en: "Mar 2021 - Jun 2021" },
    description: {
      pt: "Desenvolvimento de e-commerce automotivo. Implementação de interfaces responsivas de alta performance e integração de gateways de pagamento seguro.",
      en: "Developed an automotive e-commerce platform. Implemented high-performance responsive interfaces and integrated secure payment gateways."
    },
    logo: "/img/autoforce.png",
    tags: ["Next.js", "Ruby on Rails", "ReactJS"]
  },
  {
    company: "Ancat",
    role: { pt: "Gerente de Desenvolvimento de Projetos", en: "Project Development Manager" },
    period: { pt: "Mar 2021 - Jun 2021", en: "Mar 2021 - Jun 2021" },
    description: {
      pt: "Atuação em ambiente multifuncional utilizando metodologias Scrum e Kanban. Definição de requisitos, criação de planos de entrega e mitigação de riscos.",
      en: "Worked in a cross-functional Agile environment (Scrum/Kanban). Defined requirements, created delivery plans, and mitigated project risks."
    },
    logo: null,
    tags: ["Scrum", "Kanban", "Management"]
  },
  {
    company: "MediPreço",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: { pt: "Jun 2019 - Dez 2019", en: "Jun 2019 - Dec 2019" },
    description: {
      pt: "Desenvolvimento de app híbrido (React Native) para entrega de suprimentos médicos e plataforma B2B (ReactJS) para gestão de insumos corporativos.",
      en: "Developed hybrid medical supplies delivery app (React Native) and B2B web platform (ReactJS) for tracking and accessing corporate supply data."
    },
    logo: "/img/medipreco.png",
    tags: ["React Native", "ReactJS", "Agile"]
  },
  {
    company: "ANEEL",
    role: { pt: "Gerente de Data Science", en: "Data Science Manager" },
    period: { pt: "Mai 2019 - Jun 2019", en: "May 2019 - Jun 2019" },
    description: {
      pt: "Análise de dados do mercado de energia e desenvolvimento de modelos preditivos de Machine Learning para prever demanda e preços.",
      en: "Analyzed energy market data and developed machine learning predictive models to forecast energy demand and pricing."
    },
    logo: "/img/aneel.jpg",
    tags: ["Python", "Machine Learning", "Data Science"]
  },
  {
    company: "Orc'estra Gamificação",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: { pt: "Mai 2017 - Nov 2018", en: "May 2017 - Nov 2018" },
    description: {
      pt: "Desenvolvimento de soluções de gamificação engajadoras (React Native, ReactJS, Django REST). Design de regras, recompensas e loops de jogo.",
      en: "Developed gamification solutions (React Native, ReactJS, Django REST). Designed game mechanics, user journeys, and reward structures."
    },
    logo: "/img/orcestra.png",
    tags: ["Django REST", "Ruby on Rails", "React Native"]
  }
];

export const education: Education[] = [
  {
    school: "Universidade de Brasília (UnB)",
    degree: { pt: "Engenharia de Software", en: "Software Engineering" },
    period: "2016 - 2022"
  }
];

export const certifications: string[] = [ 
  "Scrum Master Professional Certificate (SMPC) - Certiprof",
  "UI & UX Design - Udemy"
];

// Note: I cannot easily pass JSX elements directly from a data file, 
// so I will import the icons in the TechStack component or pass the name.
// For simplicity, passing the name of the icon or using a mapping in the component.
export type IconType = 'Code2' | 'Terminal' | 'Database';

export interface TechStackGroup {
  category: string;
  icon: IconType;
  techs: string[];
}

export const stack: TechStackGroup[] = [
  { category: "Frontend & Mobile", icon: 'Code2', techs: ["ReactJS", "React Native", "Swift", "TypeScript", "Tailwind CSS", "Next.js", "Jest"] },
  { category: "Backend & API", icon: 'Terminal', techs: ["Python (FastAPI)", "Node.js", "Ruby on Rails", "Django REST", "GraphQL"] },
  { category: "Data & Cloud", icon: 'Database', techs: ["AWS", "Azure", "Snowflake", "SQL", "Docker"] } 
];
