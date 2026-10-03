import React from 'react';
import { PORTAL_CONFIG } from '../config/services';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-3 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Floating Glass Capsule Navigation Bar */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,78,158,0.06)] hover:border-slate-300/80">
        
        {/* Top subtle brand gradient highlight */}
        <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#004e9e]/40 to-transparent rounded-full" />

        {/* Brand & Location Identity */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center h-9 sm:h-10 w-9 sm:w-10 rounded-xl bg-white/90 border border-slate-100 shadow-2xs p-1">
            <img 
              src="/logo.png" 
              alt="Creativa Hub Logo" 
              className="h-full w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-[#222222] text-base sm:text-lg tracking-tight">
              {PORTAL_CONFIG.hubName}
            </span>
            <span className="text-slate-300 font-light">/</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs sm:text-sm font-semibold text-[#004e9e] bg-[#e6eff8] border border-[#004e9e]/15">
              {PORTAL_CONFIG.hubLocation}
            </span>
          </div>
        </div>

        {/* Live Operational Status & Institutional Affiliation */}
        <div className="flex items-center gap-3">
          {/* Live indicator badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#fafafa] border border-slate-200/90 text-[#475569]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-800">Services Online</span>
          </div>

          {/* TIEC Tag */}
          <div className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 border-l border-slate-200 pl-3">
            TIEC • MCIT
          </div>
        </div>

      </div>
    </header>
  );
};
