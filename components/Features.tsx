import React from 'react';
import { Users, Gamepad2, Zap, Trophy, Wifi } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-profiber-dark border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Por que escolher a <span className="text-profiber-royal">Profiber?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Infraestrutura de última geração projetada para quem não aceita menos que o máximo.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          
          {/* Item 1: Large Feature (Span 2 cols) */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
               src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
               alt="Gamer Room" 
               className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="w-12 h-12 rounded-2xl bg-profiber-royal flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-600/20">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ping Baixo para Gamers</h3>
              <p className="text-slate-300 max-w-md">
                Rotas otimizadas diretamente para os principais servidores de jogos. Adeus lag, olá vantagem competitiva.
              </p>
            </div>
          </div>

          {/* Item 2: Square */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-slate-800/50 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
               <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Suporte Humano</h3>
              <p className="text-slate-400 text-sm leading-snug">Nada de robôs. Atendimento rápido via WhatsApp com quem entende do assunto.</p>
            </div>
          </div>

          {/* Item 3: Square */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-slate-800/50 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
               <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Instalação Flash</h3>
              <p className="text-slate-400 text-sm leading-snug">Equipe técnica pronta para instalar em até 24h após aprovação do cadastro.</p>
            </div>
          </div>

          {/* Item 4: Wi-Fi 6 Info */}
          <div className="md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-profiber-royal/30 transition-colors group">
             <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
               <Wifi className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Wi-Fi 6 Turbo</h3>
              <p className="text-slate-400 text-sm leading-snug">Equipamentos de última geração inclusos nos planos para máxima cobertura.</p>
            </div>
          </div>

           {/* Item 5: Fiber Quality Banner */}
           <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group">
             <div className="relative z-10 max-w-lg">
                <div className="flex items-center gap-3 mb-3">
                   <Trophy className="w-5 h-5 text-yellow-500" />
                   <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider">Líder em Qualidade</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">100% Fibra Óptica</h3>
                <p className="text-slate-400 text-sm md:text-base">Tecnologia FTTH garantindo estabilidade total até dentro da sua casa, sem perdas ou interferências externas.</p>
             </div>
             <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-profiber-royal/10 to-transparent skew-x-12 group-hover:skew-x-0 transition-transform duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
};