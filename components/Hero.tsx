import React from 'react';
import { ArrowRight, Wifi, CheckCircle2 } from 'lucide-react';
import { Plan } from '../types';

interface HeroProps {
  selectedPlan: Plan | null;
}

export const Hero: React.FC<HeroProps> = ({ selectedPlan }) => {
  return (
    <section id="home" className="relative pt-36 lg:pt-48 pb-24 overflow-hidden bg-profiber-dark min-h-[90vh] flex items-center border-b border-white/5">
      
      {/* Background - Tech Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, #3b82f6 1px, transparent 1px),
                 linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
             }}>
        </div>
        {/* Glowing orb in background */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Large Logo above title */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <img 
                src="https://profiber.net.br/arquivos_publicos/profiber_logo_brancaedit.png" 
                alt="Profiber Telecom Logo" 
                className="h-20 md:h-28 lg:h-32 w-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/50 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            A melhor fibra óptica da região
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {selectedPlan ? (
              <>
                Você escolheu o <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white filter drop-shadow-sm">
                  Plano {selectedPlan.speed}
                </span>
              </>
            ) : (
              <>
                Conecte-se ao <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white filter drop-shadow-sm">
                  Futuro Agora
                </span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {selectedPlan 
              ? "Ótima escolha! Role para baixo para finalizar sua contratação e aproveitar a melhor estabilidade para games e streaming."
              : "Esqueça a internet lenta. Tenha ultravelocidade, baixa latência e suporte que resolve. Sua casa merece Profiber."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={selectedPlan ? "#subscription-form" : "#plans"} 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 transition-all duration-300"
            >
              {selectedPlan ? "Finalizar Agora" : "Ver Planos"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            {!selectedPlan && (
              <a 
                href="https://wa.me/5582996314684" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:border-white/40"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Visual Content */}
        <div className="w-full lg:w-1/2 relative perspective-1000 mt-12 lg:mt-0">
           <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.5)] border border-white/10 group transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
             {/* Overlay for aesthetic */}
             <div className="absolute inset-0 bg-gradient-to-t from-profiber-dark/90 via-transparent to-transparent z-10"></div>
             
             <img 
               src="https://i.imgur.com/uSKGgmP.jpeg" 
               alt="Futuristic Cyberpunk City representing High Speed" 
               className="w-full h-auto object-cover opacity-90"
             />

             {/* Floating Badge */}
             <div className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-lg hover:bg-black/60 transition-colors">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-inner">
                  {selectedPlan ? <CheckCircle2 className="w-6 h-6 text-white" /> : <Wifi className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">{selectedPlan ? "Plano Selecionado" : "Status da Rede"}</p>
                  <p className="text-white font-black text-base">{selectedPlan ? selectedPlan.speed : "100% Estável"}</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};