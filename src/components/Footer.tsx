import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
  onOpenVanillaModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onOpenVanillaModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`border-t transition-colors ${
        isDarkMode
          ? 'bg-[#080c14] border-slate-800/80 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xl font-bold font-heading tracking-wider ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                HARSHITH
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <p className="text-xs sm:text-sm max-w-sm mb-4 leading-relaxed">
              {PORTFOLIO_DATA.personal.footerNote}
            </p>

            <p className="text-xs font-mono text-slate-400">
              Kolar, Karnataka, India • CSE Student & Freelance Web Developer
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 text-left">
            <span
              className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-3 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`hover:text-emerald-400 transition-colors ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full">
            <div className="flex items-center gap-3 mb-6">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-xs'
                }`}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-xs'
                }`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenVanillaModal}
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-xs'
                }`}
                title="View vanilla source files"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-xs'
                }`}
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-left md:text-right text-slate-400">
              Designed & Developed with Care
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Harshith. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built for Speed, Responsiveness & Business Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
