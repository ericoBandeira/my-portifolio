export type Language = 'pt' | 'en';

export interface MultiLangString {
  pt: string;
  en: string;
}

export interface Experience {
  company: string;
  role: MultiLangString;
  period: MultiLangString;
  description: MultiLangString;
  logo: string | null;
  tags: string[];
}

export interface Education {
  school: string;
  degree: MultiLangString;
  period: string;
}

export interface ContentSection {
  nav: { about: string; stack: string; exp: string; edu: string; contact: string };
  role: string;
  headline: string;
  available: string;
  about: string;
  sections: { stack: string; exp: string; edu: string; contact: string; contactSub: string };
  buttons: { email: string; linkedin: string; github: string };
}
