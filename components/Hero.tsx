import React from 'react';
import { ArrowRight, Wifi, CheckCircle2 } from 'lucide-react';
import { Plan } from '../types';

interface HeroProps {
  selectedPlan: Plan | null;
}

export const Hero: React.FC<HeroProps> = ({ selectedPlan }) => {
  return (
    <section id="home" className="relative pt-36 lg:pt-48 pb-20 overflow-hidden bg-profiber-dark min-h-[90vh] flex items-center">
      {/* Background Gradients/Shapes */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Large Logo above title */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <img 
                src="https://profiber.net.br/arquivos_publicos/profiber_logo_brancaedit.png" 
                alt="Profiber Telecom Logo" 
                className="h-20 md:h-28 lg:h-32 w-auto drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
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
                <span className="bg-gradient-to-r from-profiber-sky to-blue-600 gradient-text text-transparent filter drop-shadow-sm">
                  Plano {selectedPlan.speed}
                </span>
              </>
            ) : (
              <>
                Velocidade que <br/>
                <span className="bg-gradient-to-r from-profiber-sky to-blue-600 gradient-text text-transparent filter drop-shadow-sm">
                  Impulsiona seu Mundo
                </span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {selectedPlan 
              ? "Ótima escolha! Role para baixo para finalizar sua contratação e aproveitar a melhor estabilidade para games e streaming."
              : "Chega de travamentos. Conecte-se com estabilidade garantida para games, streaming 4K e home office com a Profiber."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={selectedPlan ? "#subscription-form" : "#plans"} 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-200"
            >
              {selectedPlan ? "Finalizar Agora" : "Ver Planos"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            {!selectedPlan && (
              <a 
                href="https://wa.me/5582996314684" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Visual Content */}
        <div className="w-full lg:w-1/2 relative perspective-1000 mt-8 lg:mt-0">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-white/10 group transform transition-transform duration-500 hover:rotate-y-2">
             {/* Overlay for aesthetic */}
             <div className="absolute inset-0 bg-gradient-to-t from-profiber-dark/80 via-transparent to-transparent z-10"></div>
             
             <img 
               src="https://i.imgur.com/uSKGgmP.jpeg" 
               alt="Futuristic Cyberpunk City representing High Speed" 
               className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
             />

             {/* Floating Badge */}
             <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 shadow-lg">
                <div className="p-3 bg-profiber-royal rounded-lg shadow-inner">
                  {selectedPlan ? <CheckCircle2 className="w-6 h-6 text-white" /> : <Wifi className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-gray-300 text-xs font-medium uppercase tracking-wider">{selectedPlan ? "Plano Selecionado" : "Status da Rede"}</p>
                  <p className="text-white font-bold text-sm">{selectedPlan ? selectedPlan.speed : "100% Estável"}</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};