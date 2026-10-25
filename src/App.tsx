import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Internship } from './components/Internship';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VanillaExportModal } from './components/VanillaExportModal';
import { MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [vanillaModalOpen, setVanillaModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme
    const saved = localStorage.getItem('harshith-portfolio-theme');
    if (saved === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('harshith-portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('harshith-portfolio-theme', 'light');
      }
      return next;
    });
  };

  const handleSelectServiceToDiscuss = (serviceName: string) => {
    setPrefilledSubject(`Website Inquiry: ${serviceName}`);
  };

  const directWhatsAppUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappRaw}?text=${encodeURIComponent(
    'Hello Harshith, I came across your portfolio website and would like to discuss a project.'
  )}`;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDarkMode
          ? 'bg-[#0b0f17] text-slate-100 bg-grid-pattern'
          : 'bg-[#f8fafc] text-slate-900 bg-grid-pattern-light'
      }`}
    >
      {/* Sticky Top Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenVanillaModal={() => setVanillaModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero isDarkMode={isDarkMode} />

        {/* 2. About Me Section */}
        <About isDarkMode={isDarkMode} />

        {/* 3. Technical Skills Section */}
        <Skills isDarkMode={isDarkMode} />

        {/* 4. Featured Projects Section */}
        <Projects isDarkMode={isDarkMode} />

        {/* 5. Freelance Services Section */}
        <Services
          isDarkMode={isDarkMode}
          onSelectServiceToDiscuss={handleSelectServiceToDiscuss}
        />

        {/* 6. Development Process Timeline */}
        <Process isDarkMode={isDarkMode} />

        {/* 7. Internship & Collaboration Section */}
        <Internship isDarkMode={isDarkMode} />

        {/* 8. Contact Section */}
        <Contact
          isDarkMode={isDarkMode}
          prefilledSubject={prefilledSubject}
        />
      </main>

      {/* Footer */}
      <Footer
        isDarkMode={isDarkMode}
        onOpenVanillaModal={() => setVanillaModalOpen(true)}
      />

      {/* Floating Quick WhatsApp Action for Local Clients */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 hover:scale-105 transition-all duration-200"
          title="Direct WhatsApp with Harshith"
        >
          <MessageCircle className="w-5 h-5 text-slate-950" />
          <span className="hidden sm:inline font-heading font-semibold">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Standalone Vanilla Code Export Modal */}
      <VanillaExportModal
        isOpen={vanillaModalOpen}
        onClose={() => setVanillaModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
