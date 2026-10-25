import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  AlertCircle,
  PhoneCall,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  isDarkMode: boolean;
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({
  isDarkMode,
  prefilledSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(prefilledSubject);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Update subject if prop changes
  React.useEffect(() => {
    if (prefilledSubject) {
      setSubject(`Inquiry: ${prefilledSubject}`);
      // Scroll to contact form
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prefilledSubject]);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!subject.trim()) errs.subject = 'Please specify a subject';
    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const emailBody = `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent via Harshith's Portfolio Contact Form`;

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    setActionNotice('Opening your default email app with your message filled...');
    window.location.href = mailtoUrl;
  };

  const handleSendWhatsAppFromForm = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const waText = `Hello Harshith,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    const waUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappRaw}?text=${encodeURIComponent(
      waText
    )}`;
    setActionNotice('Redirecting to WhatsApp chat with your pre-filled inquiry...');
    window.open(waUrl, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const directPoliteWhatsAppUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappRaw}?text=${encodeURIComponent(
    'Hello Harshith, I came across your portfolio website and would like to connect regarding a website development project / opportunity.'
  )}`;

  return (
    <section
      id="contact"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-white text-slate-900'
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
            START A CONVERSATION
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            Have a Project in Mind?
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Whether you're a business looking for a website or a recruiter with an opportunity, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-xl font-bold font-heading mb-6">
                Direct Contact Details
              </h3>

              <div className="space-y-5 mb-8">
                {/* WhatsApp */}
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    isDarkMode ? 'bg-[#101726] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        WhatsApp (Direct Enquiry)
                      </span>
                      <a
                        href={directPoliteWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:text-emerald-400 transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.whatsapp}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className={`p-2 rounded-lg text-xs transition-colors ${
                      isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
                    }`}
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    isDarkMode ? 'bg-[#101726] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-sm font-semibold hover:text-cyan-400 transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-lg text-xs transition-colors ${
                      isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    isDarkMode ? 'bg-[#101726] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Based In
                    </span>
                    <span className="text-sm font-semibold">
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-colors ${
                      isDarkMode
                        ? 'border-slate-800 bg-[#101726] hover:bg-slate-800 text-slate-200'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-colors ${
                      isDarkMode
                        ? 'border-slate-800 bg-[#101726] hover:bg-slate-800 text-slate-200'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action Banner */}
            <div
              className={`p-5 rounded-2xl border ${
                isDarkMode ? 'bg-[#121c22] border-emerald-950/60' : 'bg-emerald-50 border-emerald-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h4 className="text-sm font-bold font-heading text-emerald-400">
                  Fastest Way to Reach Me
                </h4>
              </div>
              <p
                className={`text-xs mb-4 leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                For website project discussions or immediate questions, WhatsApp provides the quickest response.
              </p>
              <a
                href={directPoliteWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all font-heading shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9019373899)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-[#101726] border-slate-800/90'
                  : 'bg-slate-50/70 border-slate-200 shadow-lg'
              }`}
            >
              <h3 className="text-xl font-bold font-heading mb-1 text-left">
                Send a Message
              </h3>
              <p
                className={`text-xs mb-6 text-left ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Fill out the details below. You can send it directly via your email client or route it straight to WhatsApp.
              </p>

              {actionNotice && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-left">
                  {actionNotice}
                </div>
              )}

              <form onSubmit={handleSendEmail} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono mb-1.5 text-slate-400">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-hidden ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDarkMode
                          ? 'bg-slate-900 border-slate-800 focus:border-emerald-500 text-white'
                          : 'bg-white border-slate-300 focus:border-emerald-500 text-slate-900'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono mb-1.5 text-slate-400">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-hidden ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDarkMode
                          ? 'bg-slate-900 border-slate-800 focus:border-emerald-500 text-white'
                          : 'bg-white border-slate-300 focus:border-emerald-500 text-slate-900'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono mb-1.5 text-slate-400">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Website for Clinic in Kolar / Internship Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-hidden ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDarkMode
                        ? 'bg-slate-900 border-slate-800 focus:border-emerald-500 text-white'
                        : 'bg-white border-slate-300 focus:border-emerald-500 text-slate-900'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono mb-1.5 text-slate-400">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe your website goals, requirements, or role details..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-hidden ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDarkMode
                        ? 'bg-slate-900 border-slate-800 focus:border-emerald-500 text-white'
                        : 'bg-white border-slate-300 focus:border-emerald-500 text-slate-900'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Form Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors font-heading shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Message (Email)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppFromForm}
                    className={`w-full sm:w-auto py-3 px-5 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDarkMode
                        ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-950/40'
                        : 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center sm:text-left mt-2">
                  * No third-party tracking. Messages are routed directly to Harshith's personal contact channels.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
