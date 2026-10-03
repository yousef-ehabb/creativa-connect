import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      
      {/* Ambient Background Gradients */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-gradient-to-br from-[#004e9e]/10 via-[#004e9e]/4 to-transparent rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 right-1/4 translate-x-1/2 w-[480px] h-[480px] bg-gradient-to-bl from-[#f8af43]/12 via-[#f8af43]/4 to-transparent rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[440px] left-1/2 -translate-x-1/2 w-[640px] h-[400px] bg-gradient-to-t from-[#10b981]/8 via-[#004e9e]/4 to-transparent rounded-full blur-3xl -z-10" 
      />

      {/* 1. Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section (Assessments, Attendance, Rakeb) */}
        <ServicesSection />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;
