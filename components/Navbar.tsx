"use client";

import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
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
  );
};
