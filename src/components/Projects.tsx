import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileCode,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'client' | 'concept' | 'experiment'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  const renderProjectMockup = (project: Project) => {
    switch (project.id) {
      case 'milveta':
        return (
          <div className="w-full h-full bg-[#0d1612] p-5 flex flex-col justify-between text-left select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Subtle organic pattern */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold tracking-widest text-emerald-400 font-heading">MILVETA</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300/80">Pure Nutrition</span>
            </div>

            <div className="my-auto py-4">
              <span className="text-[11px] font-mono text-emerald-400 block mb-1">Traditional Superfoods</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight mb-2">
                Multi Millet Energy & Health Mix
              </h4>
              <p className="text-xs text-emerald-100/70 max-w-sm line-clamp-2 mb-4">
                100% natural ragi, bajra, jowar & foxtail blend engineered for daily stamina, digestion, and balanced nutrition.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Verified Client Site
                </span>
                <span className="text-xs text-emerald-300/60 font-mono">milveta.com</span>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-[11px] font-mono text-emerald-400/90">
              <span>E-commerce Ready</span>
              <span>·</span>
              <span>WhatsApp Inquiries</span>
              <span>·</span>
              <span>Responsive</span>
            </div>
          </div>
        );

      case 'rk-infra':
        return (
          <div className="w-full h-full bg-[#0c1424] p-5 flex flex-col justify-between text-left select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-blue-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-xs font-bold tracking-wider text-blue-400 font-heading">RK INFRA</span>
              </div>
              <span className="text-[10px] font-mono text-blue-300/80">Engineering & Construction</span>
            </div>

            <div className="my-auto py-4">
              <span className="text-[11px] font-mono text-blue-400 block mb-1">Turnkey Infrastructure</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight mb-2">
                Developers & Constructions
              </h4>
              <p className="text-xs text-blue-100/70 max-w-sm line-clamp-2 mb-4">
                Civil contracting, commercial spaces, and residential structural developments with verified milestone tracking.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-mono">
                  Concept Prototype
                </span>
                <span className="text-xs text-blue-300/60 font-mono">ai.studio demo</span>
              </div>
            </div>

            <div className="pt-3 border-t border-blue-900/40 flex items-center justify-between text-[11px] font-mono text-blue-400/90">
              <span>Commercial & Civil</span>
              <span>·</span>
              <span>Interactive Specs</span>
              <span>·</span>
              <span>Contact Form</span>
            </div>
          </div>
        );

      case 'dance-academy':
        return (
          <div className="w-full h-full bg-[#170e24] p-5 flex flex-col justify-between text-left select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span className="text-xs font-bold tracking-wider text-purple-400 font-heading">RHYTHM ACADEMY</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300/80">Dance & Performance</span>
            </div>

            <div className="my-auto py-4">
              <span className="text-[11px] font-mono text-purple-400 block mb-1">Expressive Movement</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight mb-2">
                Contemporary & Classical Studio
              </h4>
              <p className="text-xs text-purple-100/70 max-w-sm line-clamp-2 mb-4">
                Structured class schedules, masterclass registrations, faculty showcase, and trial session enrollment for all age groups.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono">
                  Creative Concept
                </span>
                <span className="text-xs text-purple-300/60 font-mono">demo preview</span>
              </div>
            </div>

            <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-mono text-purple-400/90">
              <span>Class Timetables</span>
              <span>·</span>
              <span>Trial Booking</span>
              <span>·</span>
              <span>Faculty Profiles</span>
            </div>
          </div>
        );

      case 'personal-experiments':
      default:
        return (
          <div className="w-full h-full bg-[#0a151b] p-5 flex flex-col justify-between text-left select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-bold tracking-wider text-cyan-400 font-heading">DEV LAB</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300/80">UI & Logic Experiments</span>
            </div>

            <div className="my-auto py-4">
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">Practical Playground</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight mb-2">
                Interactive Components & Labs
              </h4>
              <p className="text-xs text-cyan-100/70 max-w-sm line-clamp-2 mb-4">
                Collection of mini applications, responsive UI widgets, stateful controls, and DOM manipulation scripts.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                  Code Exercises
                </span>
                <span className="text-xs text-cyan-300/60 font-mono">github repo</span>
              </div>
            </div>

            <div className="pt-3 border-t border-cyan-900/40 flex items-center justify-between text-[11px] font-mono text-cyan-400/90">
              <span>Vanilla JS</span>
              <span>·</span>
              <span>CSS Animations</span>
              <span>·</span>
              <span>Open Source</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0f141f] text-slate-100' : 'bg-white text-slate-900'
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
              PORTFOLIO SHOWCASE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
              Featured Projects
            </h2>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              A selection of delivered client solutions, responsive concepts, and technical experiments. Real code with zero fabricated metrics.
            </p>
          </div>

          {/* Interactive Filter (Buttons, not static pills) */}
          <div
            className={`flex items-center p-1 rounded-xl border text-xs font-medium self-start md:self-auto overflow-x-auto max-w-full ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? isDarkMode
                    ? 'bg-slate-800 text-emerald-400 font-semibold'
                    : 'bg-white text-emerald-700 font-semibold shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('client')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'client'
                  ? isDarkMode
                    ? 'bg-slate-800 text-emerald-400 font-semibold'
                    : 'bg-white text-emerald-700 font-semibold shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Client Projects
            </button>
            <button
              onClick={() => setActiveFilter('concept')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'concept'
                  ? isDarkMode
                    ? 'bg-slate-800 text-emerald-400 font-semibold'
                    : 'bg-white text-emerald-700 font-semibold shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Concepts & Demos
            </button>
            <button
              onClick={() => setActiveFilter('experiment')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'experiment'
                  ? isDarkMode
                    ? 'bg-slate-800 text-emerald-400 font-semibold'
                    : 'bg-white text-emerald-700 font-semibold shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Code Labs
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isMilveta = project.id === 'milveta';
            const isRkInfra = project.id === 'rk-infra';

            return (
              <div
                key={project.id}
                className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
                  isDarkMode
                    ? 'bg-[#121927] border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Browser Chrome Header Mockup */}
                <div
                  className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${
                    isDarkMode ? 'bg-[#0b1019] border-slate-800' : 'bg-slate-200/70 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
                  </div>

                  {/* Browser URL Display */}
                  <div
                    className={`px-3 py-1 rounded text-[11px] font-mono truncate max-w-[220px] sm:max-w-[280px] ${
                      isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-white text-slate-600 shadow-xs'
                    }`}
                  >
                    {project.liveUrl && project.liveUrl !== '#'
                      ? project.liveUrl
                      : `https://harshith.dev/${project.id}`}
                  </div>

                  {/* Category Status Indicator */}
                  <span
                    className={`text-[10px] font-mono ${
                      project.badgeType === 'live'
                        ? 'text-emerald-400 font-semibold'
                        : project.badgeType === 'concept'
                        ? 'text-blue-400'
                        : 'text-cyan-400'
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Visual Preview Container */}
                <div className="h-60 sm:h-64 w-full overflow-hidden relative">
                  {renderProjectMockup(project)}
                </div>

                {/* Project Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clean unboxed technology metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono mb-2 text-slate-400">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                            {tech}
                          </span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-slate-500" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold font-heading mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                        isDarkMode
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>Project Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && project.liveUrl !== '#' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors font-heading"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                            isDarkMode
                              ? 'border-slate-700 bg-slate-800 text-slate-300'
                              : 'border-slate-300 bg-white text-slate-700'
                          }`}
                        >
                          <span>Preview Details</span>
                        </button>
                      )}

                      <a
                        href={project.githubUrl || PORTFOLIO_DATA.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg text-xs transition-colors ${
                          isDarkMode
                            ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-xs'
                        }`}
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className={`w-full max-w-2xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              isDarkMode
                ? 'bg-[#101726] border-slate-700 text-slate-100'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className={`p-1.5 rounded-lg ${
                  isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Features & Architectural Highlights
              </h4>
              <ul className="space-y-2 text-sm">
                {selectedProject.detailedPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack Used
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-md border ${
                      isDarkMode
                        ? 'border-slate-700 bg-slate-900 text-slate-300'
                        : 'border-slate-200 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-700/60">
              <button
                onClick={() => setSelectedProject(null)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                Close
              </button>

              {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5"
                >
                  <span>View Repository</span>
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
