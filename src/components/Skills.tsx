import React, { useState } from 'react';
import {
  Code,
  Layout,
  Terminal,
  Cpu,
  GitBranch,
  Github,
  Globe,
  Layers,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | 'all'>('all');

  const filteredCategories =
    activeCategoryIndex === 'all'
      ? PORTFOLIO_DATA.skillCategories
      : [PORTFOLIO_DATA.skillCategories[activeCategoryIndex]];

  return (
    <section
      id="skills"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <p
              className={`text-xs font-semibold tracking-wider uppercase font-mono mb-2 ${
                isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              TECHNICAL CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
              Skills & Active Learning
            </h2>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              My hands-on toolkit is built on foundational web standards, modern tooling, and ongoing exploration into React and API-driven interfaces.
            </p>
          </div>

          {/* Interactive Category Filter (Functional Buttons, not static pills) */}
          <div
            className={`flex items-center p-1 rounded-xl border text-xs font-medium self-start md:self-auto overflow-x-auto max-w-full ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => setActiveCategoryIndex('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategoryIndex === 'all'
                  ? isDarkMode
                    ? 'bg-slate-800 text-emerald-400 font-semibold'
                    : 'bg-emerald-50 text-emerald-700 font-semibold shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Skills
            </button>
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategoryIndex === idx
                    ? isDarkMode
                      ? 'bg-slate-800 text-emerald-400 font-semibold'
                      : 'bg-emerald-50 text-emerald-700 font-semibold shadow-xs'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                isDarkMode
                  ? 'bg-[#101726] border-slate-800/90 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold font-heading">
                    {category.title}
                  </h3>
                  <span
                    className={`text-xs font-mono ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {category.skills.length} skills
                  </span>
                </div>

                <p
                  className={`text-xs mb-6 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {category.description}
                </p>

                {/* Skills List with clean unboxed styling and typographic separators */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        isDarkMode
                          ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                          : 'bg-slate-50/80 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold font-heading">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              category.title.includes('Learning')
                                ? 'bg-cyan-400 animate-pulse'
                                : 'bg-emerald-400'
                            }`}
                          />
                          <span
                            className={`text-[11px] font-mono ${
                              category.title.includes('Learning')
                                ? isDarkMode
                                  ? 'text-cyan-400'
                                  : 'text-cyan-700'
                                : isDarkMode
                                ? 'text-emerald-400'
                                : 'text-emerald-700'
                            }`}
                          >
                            {category.title.includes('Learning') ? 'In Progress' : 'Core'}
                          </span>
                        </div>
                      </div>

                      {/* Clean unboxed description without pill container */}
                      {skill.note && (
                        <p
                          className={`text-xs ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtext info */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDarkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}
              >
                <span>Practical implementation</span>
                <span>·</span>
                <span>Real-world tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
