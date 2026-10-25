import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, FileCode, CheckCircle2 } from 'lucide-react';

interface VanillaExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const VanillaExportModal: React.FC<VanillaExportModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'readme' | 'html' | 'css' | 'js'>('readme');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (key: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const readmeContent = `# Harshith - Personal Portfolio Website

This folder contains the complete, pure vanilla HTML, CSS, and JavaScript version of Harshith's portfolio website.

## Files:
- index.html (Semantic structure, SEO meta tags, Google Fonts, Lucide icons via CDN)
- style.css (Dark charcoal theme, light mode toggle, fluid responsive grids)
- script.js (Smooth scroll, active nav links, theme toggle, contact validation)

## How to Deploy on Vercel:
1. Push these files to a GitHub repository or drag the folder directly to vercel.com
2. Set Build Command: (Leave empty - none needed)
3. Set Output Directory: (Leave as . / root)
4. Click Deploy!

## How to Deploy on GitHub Pages:
1. Create a GitHub repo named 'portfolio' or 'harshith.github.io'
2. Push index.html, style.css, and script.js to the 'main' branch
3. Go to Repo Settings -> Pages -> Source: 'Deploy from a branch (main)'
4. Your website is live in 60 seconds!

## Configuration Notes:
- To update your resume URL, edit the RESUME_URL variable in script.js
- To change contact details, edit the phone/email in index.html and script.js`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`w-full max-w-4xl rounded-2xl border flex flex-col max-h-[90vh] overflow-hidden ${
          isDarkMode
            ? 'bg-[#0f1422] border-slate-700 text-slate-100 shadow-2xl'
            : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Vanilla HTML, CSS & JavaScript Export
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Standalone 3-file setup ready for Vercel or GitHub Pages (Section 14)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/vanilla-portfolio/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <span>Preview Live HTML</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div
          className={`flex items-center border-b px-4 text-xs font-mono overflow-x-auto ${
            isDarkMode ? 'bg-[#0b0f17] border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <button
            onClick={() => setActiveTab('readme')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'readme'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            README.md (Deploy Guide)
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'html'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            index.html
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'css'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            style.css
          </button>
          <button
            onClick={() => setActiveTab('js')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'js'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            script.js
          </button>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs bg-[#090d14] text-slate-300">
          {activeTab === 'readme' && (
            <div className="space-y-4 text-left font-sans text-sm">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold font-heading text-sm text-emerald-300 mb-1">
                    Standalone Files Saved in Your Project
                  </h4>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    The exact 3 vanilla files (<code>index.html</code>, <code>style.css</code>, and <code>script.js</code>) are located in <code>/public/vanilla-portfolio/</code>. You can copy their contents below or download them directly!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#0d121c]">
                <h4 className="font-bold text-white mb-2">Option A: Deploy to Vercel (Fastest)</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
                  <li>Create a new folder on your computer named <code>harshith-portfolio</code>.</li>
                  <li>Save the 3 files (<code>index.html</code>, <code>style.css</code>, <code>script.js</code>) into that folder.</li>
                  <li>Log in to <span className="text-emerald-400 font-mono">vercel.com</span> and drag-and-drop the folder or connect via GitHub.</li>
                  <li>No build configuration needed — your site will be live on a custom vercel.app domain instantly!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#0d121c]">
                <h4 className="font-bold text-white mb-2">Option B: Deploy to GitHub Pages (100% Free)</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
                  <li>Create a new repository on GitHub: <code>https://github.com/h9056450-max/portfolio</code>.</li>
                  <li>Upload <code>index.html</code>, <code>style.css</code>, and <code>script.js</code>.</li>
                  <li>Go to <strong>Settings → Pages</strong>, choose the <code>main</code> branch, and click Save.</li>
                  <li>Your portfolio will be available at <code>https://h9056450-max.github.io/portfolio</code>.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab !== 'readme' && (
            <div className="relative">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
                <span className="text-slate-400">
                  Viewing: <code>{activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}</code>
                </span>
                <span className="text-emerald-400 text-[11px]">Ready to copy</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                You can copy this file using the button below or download directly. The file is also stored in <code>/public/vanilla-portfolio/</code>.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg text-emerald-300 font-mono text-xs">
                File located at: /public/vanilla-portfolio/{activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Zero dependencies • Clean vanilla JavaScript
          </span>

          <div className="flex items-center gap-2">
            <a
              href="/vanilla-portfolio/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-700 hover:bg-slate-800 text-slate-200 transition-colors"
            >
              Open Vanilla Page
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
