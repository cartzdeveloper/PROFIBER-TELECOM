import React from 'react';
import { ArrowRight, Wifi, Zap, ShieldCheck } from 'lucide-react';
import { Plan } from '../types';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  selectedPlan: Plan | null;
}

export const Hero: React.FC<HeroProps> = ({ selectedPlan }) => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-profiber-dark flex items-center min-h-[90vh]"
    >
      
      {/* --- Cyber Grid Background --- */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      
      {/* --- Ambient Spotlights --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            CONEXÃO 100% FIBRA ÓPTICA
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-[1.1] md:leading-[1.05]">
            {selectedPlan ? (
              <>
                Você escolheu o <br/>
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-shimmer bg-[length:200%_100%]">
                  Plano {selectedPlan.speed}
                </span>
              </>
            ) : (
              <>
                Velocidade que <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                  Impulsiona
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-profiber-royal to-profiber-sky">
                  O Seu Futuro
                </span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {selectedPlan 
              ? "Excelente escolha. A melhor latência e estabilidade da região estão a um clique de distância."
              : "Jogue, assista e trabalhe sem interrupções. A única internet da região com garantia de banda e suporte humanizado em tempo real."
            }
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <a 
              href={selectedPlan ? "#subscription-form" : "#plans"} 
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-profiber-royal px-8 font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 w-full sm:w-auto"
            >
              <span className="mr-2">{selectedPlan ? "Finalizar Pedido" : "Ver Planos"}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            </a>

            {!selectedPlan && (
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-8 font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all focus:outline-none w-full sm:w-auto backdrop-blur-sm"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>

          {/* Stats / Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-10">
            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mb-1">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-sm text-slate-500 font-medium">Uptime Garantido</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mb-1">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white">&lt;5ms</span>
              <span className="text-sm text-slate-500 font-medium">Latência Fibra</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-400 mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-sm text-slate-500 font-medium">Suporte Técnico</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};