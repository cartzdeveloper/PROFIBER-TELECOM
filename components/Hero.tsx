import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Wifi, CheckCircle2, ChevronDown } from 'lucide-react';
import { Plan } from '../types';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  selectedPlan: Plan | null;
}

export const Hero: React.FC<HeroProps> = ({ selectedPlan }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative pt-36 lg:pt-48 pb-32 overflow-hidden bg-profiber-dark min-h-[95vh] flex items-center border-b border-white/5"
    >
      
      {/* --- Parallax Background Layers --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      >
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, #3b82f6 1px, transparent 1px),
                 linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
             }}>
        </div>
      </div>

      <div 
        className="absolute top-1/4 right-0 z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`
        }}
      >
        <div className="w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
      </div>

      <div 
        className="absolute bottom-0 left-[-10%] z-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -30}px)`
        }}
      >
        <div className="w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] mix-blend-screen"></div>
      </div>


      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <img 
                src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                alt="Profiber Telecom Logo" 
                className="h-20 md:h-28 lg:h-32 w-auto drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Conexão Fibra 100% Estável
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            {selectedPlan ? (
              <>
                Você escolheu o <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white filter drop-shadow-sm">
                  Plano {selectedPlan.speed}
                </span>
              </>
            ) : (
              <>
                Navegue na <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white filter drop-shadow-sm">
                  Velocidade da Luz
                </span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {selectedPlan 
              ? "Ótima escolha! Role para baixo para finalizar sua contratação e aproveitar a melhor estabilidade para games e streaming."
              : "Esqueça o lag e o buffer. Tenha ultravelocidade, baixa latência e suporte que resolve. O futuro da sua conexão começa aqui."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
            <a 
              href={selectedPlan ? "#subscription-form" : "#plans"} 
              className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] group transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] focus:outline-none w-full sm:w-auto"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#ffffff_50%,#2563eb_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-lg font-bold text-white backdrop-blur-3xl transition-all hover:brightness-110">
                {selectedPlan ? "Finalizar Agora" : "Ver Planos"}
                <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {!selectedPlan && (
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:border-white/30 w-full sm:w-auto hover:text-blue-200"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Visual Content - 3D Tilt Card */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 perspective-1000">
           <div 
             className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] border border-white/10 group transition-all duration-200 ease-out"
             style={{
               transform: `rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
               transformStyle: 'preserve-3d'
             }}
           >
             <div className="absolute inset-0 bg-gradient-to-t from-profiber-dark/90 via-transparent to-transparent z-10 pointer-events-none"></div>
             
             <div 
                className="absolute inset-0 z-20 pointer-events-none opacity-40"
                style={{
                  background: `linear-gradient(${115 + (mousePos.x * 20)}deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.0) 50%)`
                }}
             ></div>

             <img 
               src="https://i.imgur.com/uSKGgmP.jpeg" 
               alt="Futuristic Cyberpunk City representing High Speed" 
               className="w-full h-auto object-cover opacity-90 scale-105"
             />

             <div 
               className="absolute bottom-8 left-8 z-30 bg-black/50 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl"
               style={{
                 transform: 'translateZ(30px)'
               }}
             >
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  {selectedPlan ? <CheckCircle2 className="w-6 h-6 text-white relative z-10" /> : <Wifi className="w-6 h-6 text-white relative z-10" />}
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">{selectedPlan ? "Plano Selecionado" : "Status da Rede"}</p>
                  <p className="text-white font-black text-lg tracking-wide">{selectedPlan ? selectedPlan.speed : "100% Estável"}</p>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2">
        <span className="text-blue-400/60 text-[10px] uppercase font-bold tracking-[0.2em] mb-1 animate-pulse">Role para explorar</span>
        <a 
          href="#plans" 
          aria-label="Rolar para baixo"
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-profiber-sky hover:border-profiber-sky/30 hover:bg-profiber-sky/5 transition-all duration-300 animate-scroll-hint shadow-lg backdrop-blur-sm"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};