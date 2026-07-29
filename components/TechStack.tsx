"use client";

import React from 'react';
import { Layers, Code2, Terminal, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { stack, IconType } from '../data/profile';

const IconMap: Record<IconType, React.ReactNode> = {
  Code2: <Code2 />,
  Terminal: <Terminal />,
  Database: <Database />
};

export const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-12 md:py-20 px-6 md:px-20 bg-[#11141a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3">
          <Layers className="text-cyan-500" /> {t.sections.stack}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stack.map((group, idx) => (
            <div key={idx} className="bg-[#0b0c10] border border-white/5 p-6 md:p-8 rounded-3xl hover:border-cyan-500/30 transition-all group">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                {IconMap[group.icon]}
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
  );
};
