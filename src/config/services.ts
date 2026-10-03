export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  url: string;
  ctaText: string;
  iconName: 'clipboard' | 'calendar-check' | 'bus';
}

export interface PortalConfig {
  hubName: string;
  hubLocation: string;
  organization: string;
  organizationFull: string;
  services: ServiceItem[];
}

export const PORTAL_CONFIG: PortalConfig = {
  hubName: "Creativa Hub",
  hubLocation: "Aswan",
  organization: "TIEC",
  organizationFull: "Technology Innovation & Entrepreneurship Center",
  services: [
    {
      id: "assessments",
      title: "Assessments",
      tag: "Evaluations & Tests",
      description: "Access your pre-training and post-training assessments.",
      url: "https://creativa-assessment-portal.vercel.app/",
      ctaText: "Open Assessment Portal",
      iconName: "clipboard",
    },
    {
      id: "attendance",
      title: "Attendance",
      tag: "Daily Check-in & Certificates",
      description: "Check your attendance records and certificate status.",
      url: "https://creativa-attendance.vercel.app/",
      ctaText: "Open Attendance Portal",
      iconName: "calendar-check",
    },
    {
      id: "rakeb",
      title: "Rakeb",
      tag: "Bus Lines & Registration",
      description: "Manage your transportation and bus registration.",
      url: "https://rakeb.vercel.app/",
      ctaText: "Open Rakeb",
      iconName: "bus",
    }
  ]
};
