import React from 'react';
import { ClipboardCheck, CalendarCheck, Bus, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../config/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getStyle = () => {
    switch (service.id) {
      case 'assessments':
        return {
          icon: <ClipboardCheck className="w-6 h-6 text-[#004e9e]" strokeWidth={2.2} />,
          iconBg: 'bg-gradient-to-br from-[#e6eff8] to-[#d6e6f7]',
          tagBg: 'bg-[#e6eff8] text-[#004e9e] border-[#004e9e]/15',
          topBar: 'bg-gradient-to-r from-[#004e9e] to-[#2563eb]',
          btnClass: 'bg-gradient-to-r from-[#004e9e] to-[#005bb8] hover:from-[#003b78] hover:to-[#004e9e] text-white hover:shadow-[0_6px_20px_rgba(0,78,158,0.28)] focus-visible:ring-[#004e9e]',
          cardHover: 'hover:border-[#004e9e]/40 hover:shadow-[0_12px_32px_rgba(0,78,158,0.08)]',
        };
      case 'attendance':
        return {
          icon: <CalendarCheck className="w-6 h-6 text-[#047857]" strokeWidth={2.2} />,
          iconBg: 'bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5]',
          tagBg: 'bg-[#ecfdf5] text-[#047857] border-[#047857]/15',
          topBar: 'bg-gradient-to-r from-[#047857] to-[#10b981]',
          btnClass: 'bg-gradient-to-r from-[#047857] to-[#059669] hover:from-[#065f46] hover:to-[#047857] text-white hover:shadow-[0_6px_20px_rgba(4,120,87,0.28)] focus-visible:ring-[#047857]',
          cardHover: 'hover:border-[#047857]/40 hover:shadow-[0_12px_32px_rgba(4,120,87,0.08)]',
        };
      case 'rakeb':
        return {
          icon: <Bus className="w-6 h-6 text-[#b45309]" strokeWidth={2.2} />,
          iconBg: 'bg-gradient-to-br from-[#fef3e2] to-[#fee8c7]',
          tagBg: 'bg-[#fef3e2] text-[#b45309] border-[#b45309]/15',
          topBar: 'bg-gradient-to-r from-[#f8af43] to-[#f59e0b]',
          btnClass: 'bg-gradient-to-r from-[#f8af43] to-[#f59e0b] hover:from-[#e59d30] hover:to-[#d97706] text-[#222222] font-semibold hover:shadow-[0_6px_20px_rgba(248,175,67,0.35)] focus-visible:ring-[#f8af43]',
          cardHover: 'hover:border-[#f8af43]/50 hover:shadow-[0_12px_32px_rgba(248,175,67,0.10)]',
        };
      default:
        return {
          icon: <ClipboardCheck className="w-6 h-6 text-[#004e9e]" strokeWidth={2.2} />,
          iconBg: 'bg-[#e6eff8]',
          tagBg: 'bg-slate-100 text-slate-700 border-slate-200',
          topBar: 'bg-[#004e9e]',
          btnClass: 'bg-[#004e9e] text-white',
          cardHover: 'hover:border-slate-300',
        };
    }
  };

  const style = getStyle();

  return (
    <div className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-[#e5e5e5] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${style.cardHover}`}>
      
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${style.topBar}`} />

      <div>
        {/* Header inside Card: Icon + Category Tag */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs ${style.iconBg}`}>
            {style.icon}
          </div>

          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border tracking-normal ${style.tagBg}`}>
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#222222] tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base text-[#616161] leading-relaxed min-h-[48px]">
          {service.description}
        </p>
      </div>

      {/* Action CTA Button with Gradient & Arrow Slide */}
      <div className="mt-6 pt-4 border-t border-[#e5e5e5]">
        <a
          href={service.url}
          target="_self"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full min-h-[48px] py-3 px-5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${style.btnClass}`}
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
