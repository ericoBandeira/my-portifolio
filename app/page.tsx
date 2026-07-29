"use client";

import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0b0c10] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        <Navbar />
        
        <main className="pt-20">
          <Hero />
          <TechStack />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}