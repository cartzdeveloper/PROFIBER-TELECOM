import React, { useState, useRef, useEffect } from 'react';
import { FileText, Shield } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Coverage } from './components/Coverage';
import { LegalModal } from './components/LegalModals';
import { ClientPortalDashboard } from './components/ClientPortalDashboard';
import { Plan } from './types';
import { TERMS_OF_USE, PRIVACY_POLICY, CONTACT_INFO } from './constants';

// --- FadeInSection Component ---
// This internal component handles the Intersection Observer logic per section
// ensuring smooth animations only when elements come into view.
const FadeInSection = ({ children }: { children?: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Trigger animation when element is 10% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to save resources
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    }
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      // Permite visualizar o painel em segundo plano a qualquer momento via URL hash (#preview-central ou #central-interna)
      if (
        window.location.hash === '#preview-central' || 
        window.location.hash === '#central-interna' ||
        window.location.hash === '#central-do-assinante'
      ) {
        setIsClientPortalOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);
  
  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    // Smooth scroll to the subscription form
    const formElement = document.getElementById('subscription-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openClientPortal = () => {
    // Redireciona diretamente para a Central do Assinante IXC
    window.open(CONTACT_INFO.ixcPortalUrl, '_blank', 'noopener,noreferrer');
  };

  const closeClientPortal = () => {
    window.history.pushState(null, '', window.location.pathname);
    setIsClientPortalOpen(false);
  };

  // If Client Portal is open, render as a full-screen dedicated Dashboard
  if (isClientPortalOpen) {
    return (
      <ClientPortalDashboard onBackToSite={closeClientPortal} />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Header onOpenClientPortal={openClientPortal} />
      <main>
        {/* We wrap each major section with FadeInSection for individual animations */}
        <FadeInSection>
          <Hero selectedPlan={selectedPlan} />
        </FadeInSection>
        
        <FadeInSection>
          <Pricing onSelectPlan={handleSelectPlan} />
        </FadeInSection>
        
        <FadeInSection>
          <Coverage />
        </FadeInSection>
        
        <FadeInSection>
          <Features />
        </FadeInSection>
        
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        
        <FadeInSection>
          <SubscriptionSection selectedPlan={selectedPlan} />
        </FadeInSection>
      </main>
      
      <Footer 
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenClientPortal={openClientPortal}
      />
      
      <LegalModal 
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Termos de Uso"
        content={TERMS_OF_USE}
        icon={FileText}
      />

      <LegalModal 
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Política de Privacidade"
        content={PRIVACY_POLICY}
        icon={Shield}
      />

      {/* WhatsApp Floating Button with FontAwesome & Pulse Glow */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
          <i className="fa-brands fa-whatsapp text-2xl relative z-10"></i>
        </div>
        <div className="hidden sm:flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-100">Atendimento 24h</span>
          <span className="text-sm font-bold text-white">Fale no WhatsApp</span>
        </div>
      </a>
    </div>
  );
}

export default App;