import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { PORTAL_CONFIG } from '../config/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto w-full pt-10 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Subtle Multi-Service Gradient Divider */}
        <div className="relative h-[2px] w-full bg-gradient-to-r from-[#004e9e]/30 via-[#10b981]/30 to-[#f8af43]/30 rounded-full mb-8" />

        {/* Footer Content Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Identity & Institutional Accreditation */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-[#222222] text-sm tracking-tight">
                {PORTAL_CONFIG.hubName} {PORTAL_CONFIG.hubLocation}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#004e9e]" />
              <span className="text-xs text-slate-500 font-medium">
                {PORTAL_CONFIG.organization}
              </span>
            </div>
            
            <p className="text-xs text-slate-500">
              Technology Innovation & Entrepreneurship Center — Ministry of Communications & IT
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://creativa.gov.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-600 bg-white border border-slate-200 hover:text-[#004e9e] hover:border-[#004e9e]/30 hover:bg-[#e6eff8]/30 transition-all shadow-2xs"
            >
              <span>creativa.gov.eg</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-full text-slate-500 bg-white border border-slate-200 hover:text-slate-900 hover:bg-slate-100 transition-all shadow-2xs"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright Sub-row */}
        <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <span>© 2026 {PORTAL_CONFIG.hubName} {PORTAL_CONFIG.hubLocation}. All rights reserved.</span>
          <span>Official Unified Entry Point</span>
        </div>

      </div>
    </footer>
  );
};
