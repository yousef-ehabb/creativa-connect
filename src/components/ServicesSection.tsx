import React from 'react';
import { PORTAL_CONFIG } from '../config/services';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 max-w-5xl mx-auto px-4 sm:px-6 w-full">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          Digital Services
        </h2>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {PORTAL_CONFIG.services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};
