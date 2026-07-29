"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, ContentSection } from '../types';
import { content } from '../data/content';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: ContentSection;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('pt');

  const value = {
    lang,
    setLang,
    t: content[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
