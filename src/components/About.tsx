import React from 'react';
import {
  GraduationCap,
  MapPin,
  Code2,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="about"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0f141f] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <p
            className={`text-xs font-semibold tracking-wider uppercase font-mono mb-2 ${
              isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
            }`}
          >
            DISCOVER MY BACKGROUND
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-6">
            A Little About Me
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {PORTFOLIO_DATA.personal.aboutShort}
          </p>
        </div>

        {/* 4 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PORTFOLIO_DATA.aboutCards.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-[#131b29] border-slate-800/90 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  isDarkMode ? 'bg-slate-800/80' : 'bg-white shadow-sm'
                }`}
              >
                {getIcon(card.icon)}
              </div>

              <span
                className={`text-xs font-mono uppercase tracking-wider block mb-1.5 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {card.title}
              </span>

              <h3 className="text-base font-semibold font-heading mb-2 leading-snug">
                {card.value}
              </h3>

              <p
                className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Core Principles / Realistic Developer Commitments */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode
              ? 'bg-[#0b0f17] border-slate-800 text-slate-300'
              : 'bg-emerald-50/50 border-emerald-100 text-slate-800'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold font-heading mb-1 text-emerald-400">
                Honest & Reliable Development Promise
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                As a Computer Science Engineering student, I focus on clean syntax, mobile responsiveness, fast load speeds, and straightforward communication. No inflated claims or unneeded complexity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors font-heading"
              >
                See Live Projects
              </a>
              <a
                href="#contact"
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
