import React from 'react';
import { PORTAL_CONFIG } from '../config/services';

export const Hero: React.FC = () => {
  return (
    <section className="pt-6 pb-6 sm:pt-10 sm:pb-8 text-center max-w-3xl mx-auto px-4 sm:px-6">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] tracking-tight">
        {PORTAL_CONFIG.hubName}{' '}
        <span className="text-[#004e9e]">{PORTAL_CONFIG.hubLocation}</span>
      </h1>

      {/* Supporting Text */}
      <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium text-[#222222]">
        Your gateway to Creativa Hub digital services.
      </p>

      {/* Short Description */}
      <p className="mt-2 text-sm sm:text-base text-[#616161] max-w-xl mx-auto leading-relaxed">
        Access assessments, attendance, transportation, and other training services from one place.
      </p>
    </section>
  );
};
