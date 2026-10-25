import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Sparkles,
  PhoneCall,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';

interface ServicesProps {
  isDarkMode: boolean;
  onSelectServiceToDiscuss: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  isDarkMode,
  onSelectServiceToDiscuss,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Retail / Local Business');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Mobile Responsive Layout',
    'WhatsApp Enquiry Button',
    'Google Maps Location',
  ]);

  const industryOptions = [
    'Retail / Local Business',
    'Doctor / Clinic / Healthcare',
    'Restaurant / Cafe / Bakery',
    'Contractor / Real Estate',
    'Service / Consultation',
  ];

  const featureOptions = [
    'Mobile Responsive Layout',
    'WhatsApp Enquiry Button',
    'Google Maps Location',
    'Digital Menu / Product Catalog',
    'Fast Loading on 4G/5G',
    'Contact Form with Validation',
  ];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-emerald-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-cyan-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      default:
        return <Building2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = `Hello Harshith, I am interested in discussing a website for my business.
Industry: ${selectedIndustry}
Desired Features: ${selectedFeatures.join(', ')}
Location: Karnataka, India
Please let me know how we can get started!`;
    return `https://wa.me/${PORTFOLIO_DATA.personal.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="services"
      className={`py-20 md:py-28 transition-colors ${
        isDarkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
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
            SERVICES FOR LOCAL & GROWING BUSINESSES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            How I Can Help Your Business
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Every business needs a digital storefront that looks reputable, loads quickly on smartphones, and guides customers to contact you directly.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className={`p-7 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-[#101726] border-slate-800/90 hover:border-slate-700 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-200/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-slate-800/80' : 'bg-slate-100'
                    }`}
                  >
                    {getServiceIcon(service.icon)}
                  </div>
                  <span
                    className={`text-xs font-mono ${
                      isDarkMode ? 'text-emerald-400' : 'text-emerald-700 font-medium'
                    }`}
                  >
                    Tailored Delivery
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading mb-1">
                  {service.title}
                </h3>
                <p
                  className={`text-xs font-mono mb-4 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {service.tagline}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span
                  className={`text-[11px] font-mono ${
                    isDarkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Ideal for: {service.suitableFor.split(',')[0]}
                </span>

                <button
                  onClick={() => onSelectServiceToDiscuss(service.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors font-heading cursor-pointer"
                >
                  <span>Discuss Your Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Local Business Website Inquiry Helper */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode
              ? 'bg-[#121a29] border-slate-800'
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Website Inquiry Helper for Business Owners</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                Have a local business in Kolar or Karnataka?
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Select your business type and requirements below to generate a ready-to-send WhatsApp enquiry directly to my phone.
              </p>

              {/* Business Type selector */}
              <div className="mb-4">
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  1. Select your industry:
                </label>
                <div className="flex flex-wrap gap-2">
                  {industryOptions.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        selectedIndustry === ind
                          ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-semibold'
                          : isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features selector */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  2. Select features you need:
                </label>
                <div className="flex flex-wrap gap-2">
                  {featureOptions.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`px-2.5 py-1 rounded text-xs border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-medium'
                            : isDarkMode
                            ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {feat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp trigger card */}
            <div
              className={`w-full lg:w-80 p-5 rounded-xl border flex flex-col items-center text-center shrink-0 ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold font-heading mb-1">
                Chat With Harshith
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Send your requirements directly via WhatsApp. Fast response within a few hours.
              </p>
              <a
                href={generateWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors font-heading shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </a>
              <span className="text-[11px] font-mono text-slate-400 mt-2">
                +91 9019373899
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
