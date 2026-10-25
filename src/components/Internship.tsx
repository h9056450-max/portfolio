import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Download,
  Printer,
  X,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface InternshipProps {
  isDarkMode: boolean;
}

export const Internship: React.FC<InternshipProps> = ({ isDarkMode }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [customResumeUrl, setCustomResumeUrl] = useState(PORTFOLIO_DATA.personal.resumeUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  const handleResumeClick = () => {
    if (customResumeUrl.trim()) {
      window.open(customResumeUrl, '_blank');
    } else {
      setShowResumeModal(true);
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section
      id="internship"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-3xl border p-8 sm:p-12 relative overflow-hidden ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#121929] via-[#0f1422] to-[#0b0f17] border-slate-800'
              : 'bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 border-slate-200 shadow-xl'
          }`}
        >
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl text-left relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span
                className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
                }`}
              >
                SEEKING INTERNSHIPS & COLLABORATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">
              Ready to Learn, Build, and Contribute
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              I'm actively seeking frontend development and web development internship opportunities where I can contribute to real projects, collaborate with experienced developers, and grow my technical skills.
            </p>

            {/* Quick Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>
                  Solid HTML5, CSS3 & JS Foundations
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>
                  Active React & Modern Frontend Learner
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>
                  Prompt Communication & Team Player
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-md shadow-emerald-500/20 transition-all font-heading text-sm cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800 shadow-sm'
                }`}
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={handleResumeClick}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  isDarkMode
                    ? 'border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-300'
                    : 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 shadow-sm'
                }`}
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>
                  {customResumeUrl.trim() ? 'Download Resume' : 'View Resume Sheet'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Viewer / Developer Sheet Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div
            className={`w-full max-w-3xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              isDarkMode
                ? 'bg-[#0f1422] border-slate-700 text-slate-100'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
          >
            {/* Top Modal Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold font-heading">
                  Developer Resume — Harshith
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintResume}
                  className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 ${
                    isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className={`p-1.5 rounded-lg ${
                    isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Sheet */}
            <div
              className={`p-6 sm:p-8 rounded-xl border text-left ${
                isDarkMode ? 'bg-[#0b0f17] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              {/* Header */}
              <div className="border-b border-slate-700/50 pb-5 mb-6">
                <h1 className="text-2xl font-bold font-heading tracking-tight mb-1">
                  Harshith
                </h1>
                <p className="text-sm text-emerald-400 font-mono mb-3">
                  Computer Science Engineering Student • Aspiring Frontend Developer
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    Kolar, Karnataka, India
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    {PORTFOLIO_DATA.personal.whatsapp}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-slate-500" />
                    github.com/h9056450-max
                  </span>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  Education
                </h4>
                <div>
                  <div className="flex justify-between items-baseline text-sm font-semibold">
                    <span>Bachelor of Engineering (B.E.) in Computer Science & Engineering</span>
                    <span className="text-xs font-mono text-slate-400">Current</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Karnataka, India • Focus on Algorithms, Web Technologies, and Software Engineering Principles.
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="font-semibold block text-slate-300">Frontend:</span>
                    <span className="text-slate-400">HTML5, CSS3, JavaScript (ES6+), Responsive Design</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-300">Tools:</span>
                    <span className="text-slate-400">Git, GitHub, VS Code, Vercel</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-300">Learning:</span>
                    <span className="text-slate-400">React, Modern APIs, AI-Assisted Development</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                  Projects & Client Work
                </h4>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between items-baseline font-semibold text-sm">
                      <span>MILVETA — Multi Millet Powder Website</span>
                      <span className="font-mono text-emerald-400 text-xs">Live at milveta.com</span>
                    </div>
                    <p className="text-slate-400 mt-1">
                      Modern business website for nutritional millet brand. Implemented responsive layout, product showcase, and direct WhatsApp customer enquiry channel. Deployed on Vercel.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-semibold text-sm">
                      <span>RK Infra Developers and Constructions</span>
                      <span className="font-mono text-blue-400 text-xs">Web Concept</span>
                    </div>
                    <p className="text-slate-400 mt-1">
                      Civil construction platform concept detailing residential and commercial capabilities with quotation request workflow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  Internship Objective
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seeking a frontend web development internship to work with real codebases, contribute to user-facing features, learn team engineering practices, and build scalable web interfaces.
                </p>
              </div>
            </div>

            {/* Resume URL configuration footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-slate-400 font-mono">External Resume URL:</span>
                {isEditingUrl ? (
                  <div className="flex items-center gap-1.5 flex-1 sm:flex-none">
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={customResumeUrl}
                      onChange={(e) => setCustomResumeUrl(e.target.value)}
                      className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-white"
                    />
                    <button
                      onClick={() => setIsEditingUrl(false)}
                      className="px-2 py-1 rounded bg-emerald-500 text-slate-950 font-bold"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditingUrl(true)}
                    className="text-emerald-400 hover:underline font-mono"
                  >
                    {customResumeUrl || 'Configure custom PDF/Drive link'}
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold font-heading text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
