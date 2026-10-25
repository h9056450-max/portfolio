import React from 'react';
import { Lightbulb, Compass, Code, Rocket, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ProcessProps {
  isDarkMode: boolean;
}

export const Process: React.FC<ProcessProps> = ({ isDarkMode }) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Lightbulb className="w-5 h-5 text-emerald-400" />;
      case '02':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case '03':
        return <Code className="w-5 h-5 text-blue-400" />;
      case '04':
        return <Rocket className="w-5 h-5 text-teal-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="process"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0f141f] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p
            className={`text-xs font-semibold tracking-wider uppercase font-mono mb-2 ${
              isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
            }`}
          >
            STRUCTURED WORKFLOW
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            My Development Process
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A four-step approach focused on transparency, rapid turnaround, and delivering clean, maintainable websites.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className={`hidden md:block absolute top-12 left-12 right-12 h-0.5 ${
              isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {PORTFOLIO_DATA.processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col items-start text-left relative group"
              >
                {/* Step badge / icon */}
                <div className="flex items-center gap-4 md:flex-col md:items-start mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md transition-transform duration-200 group-hover:scale-105 ${
                      isDarkMode
                        ? 'bg-[#121a29] border-slate-700/80 shadow-black/30'
                        : 'bg-white border-slate-200 shadow-slate-100'
                    }`}
                  >
                    {getStepIcon(step.number)}
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isDarkMode
                        ? 'bg-slate-800 text-emerald-400'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading mb-1">
                  {step.title}
                </h3>

                <p
                  className={`text-xs font-mono mb-2 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {step.phase}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {step.description}
                </p>

                <div
                  className={`mt-auto pt-3 border-t w-full text-xs font-mono ${
                    isDarkMode
                      ? 'border-slate-800/80 text-emerald-400/90'
                      : 'border-slate-100 text-emerald-700'
                  }`}
                >
                  <span className="block text-[10px] uppercase text-slate-500 mb-0.5">
                    Outcome
                  </span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Banner */}
        <div
          className={`mt-16 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDarkMode
              ? 'bg-[#0b0f17] border-slate-800 text-slate-400'
              : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Zero build bloat · Clean semantic HTML5 & CSS3 · Fast Vercel / GitHub deployment</span>
          </div>
          <span className="text-emerald-400 font-semibold">100% Tested on Mobile Devices</span>
        </div>
      </div>
    </section>
  );
};
