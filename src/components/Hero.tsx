import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'milveta' | 'css'>('profile');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// Harshith — Developer Profile
const developer = {
  name: "Harshith",
  degree: "B.E. Computer Science Engineering",
  location: "Kolar, Karnataka, India",
  coreSkills: ["HTML5", "CSS3", "JavaScript"],
  currentlyLearning: ["React", "API Integration"],
  focus: "Fast, responsive websites for local businesses",
  openTo: "Internships & Freelance Projects"
};

export default function renderPortfolio() {
  return "Ready to build impactful web experiences.";
}`,
    milveta: `<!-- Featured Client Project: MILVETA -->
<section id="milveta-showcase" class="brand-hero">
  <div class="container mx-auto">
    <h1 class="heading">Nutritious Millet Solutions</h1>
    <p class="description">
      Clean nutrition for active lifestyles.
    </p>
    <a href="https://www.milveta.com" target="_blank" class="cta-button">
      Explore Products & Order Online →
    </a>
  </div>
</section>`,
    css: `/* Modern Responsive Architecture */
.responsive-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .responsive-container {
    padding: 3rem 2rem;
  }
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden ${
        isDarkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Indicator & Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span
                className={`text-xs font-semibold tracking-wider uppercase font-mono ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
                }`}
              >
                CSE STUDENT • FREELANCE WEB DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-6">
              Building{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Modern Websites
              </span>{' '}
              That Help Businesses Grow.
            </h1>

            {/* Supporting Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PORTFOLIO_DATA.personal.heroDescription}
            </p>

            {/* Availability Note */}
            <div
              className={`mb-8 p-3 rounded-xl border flex items-center gap-3 text-xs sm:text-sm ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              }`}
            >
              <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-heading text-sm sm:text-base cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all text-sm sm:text-base cursor-pointer ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:border-slate-600'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800 shadow-sm'
                }`}
              >
                <span>Hire Me</span>
              </button>
            </div>

            {/* Social Links & Direct Quick Connect */}
            <div className="flex items-center gap-4 text-xs">
              <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-sm'
                  }`}
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-sm'
                  }`}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Harshith, I came across your portfolio and would like to discuss a project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-emerald-400' : 'bg-white hover:bg-slate-200 text-emerald-600 shadow-sm'
                  }`}
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-white hover:bg-slate-200 text-slate-700 shadow-sm'
                  }`}
                  aria-label="Send Email"
                  title="Email Harshith"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className={`hidden sm:inline ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>•</span>
              <span className={`hidden sm:inline ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Kolar, Karnataka, India
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code IDE Terminal Graphic */}
          <div className="lg:col-span-5 w-full">
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#0f141f] border-slate-800 shadow-emerald-950/20'
                  : 'bg-white border-slate-200 shadow-slate-300/50'
              }`}
            >
              {/* Window Titlebar */}
              <div
                className={`px-4 py-3 flex items-center justify-between border-b ${
                  isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span
                    className={`ml-2 text-xs font-mono font-medium flex items-center gap-1.5 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    harshith-workspace
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyCode}
                    className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                      isDarkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                    title="Copy code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* IDE Tabs */}
              <div
                className={`flex items-center border-b px-2 overflow-x-auto text-xs font-mono ${
                  isDarkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'profile'
                      ? 'border-emerald-400 text-emerald-400 font-medium'
                      : isDarkMode
                      ? 'border-transparent text-slate-400 hover:text-slate-200'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="text-amber-400">⚡</span> Harshith.ts
                </button>
                <button
                  onClick={() => setActiveTab('milveta')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'milveta'
                      ? 'border-emerald-400 text-emerald-400 font-medium'
                      : isDarkMode
                      ? 'border-transparent text-slate-400 hover:text-slate-200'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="text-cyan-400">&lt;/&gt;</span> Milveta.html
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'css'
                      ? 'border-emerald-400 text-emerald-400 font-medium'
                      : isDarkMode
                      ? 'border-transparent text-slate-400 hover:text-slate-200'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="text-blue-400">#</span> style.css
                </button>
              </div>

              {/* Code Body */}
              <div
                className={`p-4 font-mono text-xs overflow-x-auto min-h-[260px] ${
                  isDarkMode ? 'bg-[#0d121c] text-slate-200' : 'bg-slate-900 text-slate-100'
                }`}
              >
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Bottom Statusbar */}
              <div
                className={`px-4 py-2 border-t text-[11px] font-mono flex items-center justify-between ${
                  isDarkMode ? 'bg-slate-900/90 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>UTF-8</span>
                  <span>·</span>
                  <span>{activeTab === 'profile' ? 'TypeScript' : activeTab === 'milveta' ? 'HTML5' : 'CSS3'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Clean Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
