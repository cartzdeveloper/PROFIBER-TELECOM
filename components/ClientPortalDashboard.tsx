import React, { useState } from 'react';
import { 
  Home, 
  DollarSign, 
  FileText, 
  FileCheck, 
  BarChart3, 
  FileSpreadsheet, 
  Headphones, 
  ChevronLeft, 
  ChevronRight, 
  LogOut, 
  ArrowLeft, 
  Copy, 
  Check, 
  Download, 
  QrCode, 
  Printer, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Unlock, 
  MessageSquare, 
  Sparkles, 
  User, 
  Wifi,
  Activity,
  Zap,
  Eye,
  EyeOff,
  Bell,
  Sun,
  Moon,
  Send,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ClientPortalDashboardProps {
  onBackToSite: () => void;
}

type TabType = 'inicio' | 'faturas' | 'contratos' | 'notas' | 'consumo' | 'relatorios' | 'atendimento';

export const ClientPortalDashboard: React.FC<ClientPortalDashboardProps> = ({ onBackToSite }) => {
  // Theme state: dark or light
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cpf, setCpf] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Navigation & UI state
  const [currentTab, setCurrentTab] = useState<TabType>('inicio');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Interactive Action States
  const [showPixModal, setShowPixModal] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBarcode, setCopiedBarcode] = useState(false);
  const [unlockedConfidence, setUnlockedConfidence] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockTimeRemaining, setUnlockTimeRemaining] = useState('47h 58m');

  // Wi-Fi Management State
  const [showWifiModal, setShowWifiModal] = useState(false);
  const [showWifiPassword, setShowWifiPassword] = useState(false);
  const [copiedWifiPassword, setCopiedWifiPassword] = useState(false);

  // Speed Test Simulation State
  const [isTestingSpeed, setIsTestingSpeed] = useState(false);
  const [testStage, setTestStage] = useState<'idle' | 'ping' | 'download' | 'upload' | 'done'>('idle');
  const [livePing, setLivePing] = useState(3);
  const [liveDownload, setLiveDownload] = useState(502.4);
  const [liveUpload, setLiveUpload] = useState(251.8);

  // Support & Tickets State
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [ticketSubject, setTicketSubject] = useState('Suporte Técnico / Lentidão');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState(false);
  const [chatInput, setChatInput] = useState('');

  // Reports
  const [selectedYear, setSelectedYear] = useState('2026');

  // Chart view toggle: 'semanal' | 'mensal'
  const [chartPeriod, setChartPeriod] = useState<'semanal' | 'mensal'>('semanal');
  const [chartHoverDay, setChartHoverDay] = useState<{ label: string; down: number; up: number } | null>(null);

  // Subscriber profile details
  const client = {
    name: 'CARLOS EDUARDO DE ARAÚJO',
    initial: 'C',
    login: 'andreferreira',
    cpf: '084.***.***-20',
    plan: 'PLANO-FIBRA-500MB',
    contractId: '15889',
    address: 'RESIDENCIAL JARDINS DE MONTANA, 52',
    city: 'Palmeira dos Índios - AL',
    wifi: {
      ssid: 'Profiber_Carlos_5G',
      password: 'profiber@carlos2026',
      channel: '36 (5GHz) / 6 (2.4GHz)',
      devicesCount: 7,
      security: 'WPA3 / WPA2-Personal',
      signalDbm: -19.4 // dBm (Optical power)
    },
    currentInvoice: {
      period: 'de 05/08/2026 até 09/09/2026',
      dueDate: '10/09/2026',
      daysLeft: 5,
      amount: '92,79',
      status: 'Aberto no mês atual',
      barcode: '23793.38128 60034.821034 44000.063304 9 98450000009279',
      pixCode: '00020126580014br.gov.bcb.pix0136profiber-ixc-15889-set2026520400005303986540592.795802BR5916PROFIBER TELECOM6009PALMEIRA62070503***6304D1B8'
    },
    invoicesHistory: [
      { id: '15889-09', period: '05/08/2026 até 09/09/2026', dueDate: '10/09/2026', amount: 'R$ 92,79', status: 'aberto' },
      { id: '15889-08', period: '05/07/2026 até 04/08/2026', dueDate: '10/08/2026', amount: 'R$ 92,79', status: 'pago', paidAt: '08/08/2026' },
      { id: '15889-07', period: '05/06/2026 até 04/07/2026', dueDate: '10/07/2026', amount: 'R$ 92,79', status: 'pago', paidAt: '09/07/2026' },
      { id: '15889-06', period: '05/05/2026 até 04/06/2026', dueDate: '10/06/2026', amount: 'R$ 92,79', status: 'pago', paidAt: '06/06/2026' }
    ],
    contracts: [
      {
        id: '15889',
        name: 'PLANO-FIBRA-500MB',
        startDate: '05/08/2026',
        paidUntil: '05/08/2026',
        status: 'Ativo e Regular'
      }
    ],
    tickets: [
      {
        id: 'AT-8419',
        subject: 'Processo Suporte Técnico / Otimização de Rota',
        date: '03/09/2026 14:22:10',
        status: 'Concluído',
        department: 'Suporte Técnico N2',
        messages: [
          { sender: 'client', text: 'Notei oscilação no Wi-Fi do quarto às 13h.', time: '14:22' },
          { sender: 'agent', name: 'Ana Clara - Suporte Profiber', text: 'Olá Carlos! Verificamos aqui remotamente o seu roteador Wi-Fi 6 e alinhamos o canal da rede 5GHz para o canal 36 com banda de 80MHz. O sinal está estabilizado em -19.4 dBm!', time: '14:35' },
          { sender: 'client', text: 'Perfeito, velocidade voltou aos 500 Mega no teste. Muito obrigado!', time: '14:41' }
        ]
      },
      {
        id: 'AT-8102',
        subject: 'Instalação / Roteador Comodato Wi-Fi 6',
        date: '05/08/2026 13:59:00',
        status: 'Concluído',
        department: 'Instalações',
        messages: [
          { sender: 'agent', name: 'Técnico Marcos', text: 'Instalação da fibra drop concluída e roteador Gigabit Wi-Fi 6 entregue e testado.', time: '13:59' }
        ]
      }
    ]
  };

  const notifications = [
    { id: 1, title: 'Fatura de Setembro Disponível', text: 'Sua fatura com vencimento em 10/09 está aberta com desconto de pontualidade.', unread: true },
    { id: 2, title: 'Conexão Otimizada com Sucesso', text: 'Ajuste de canal Wi-Fi 5GHz realizado pelo suporte técnico.', unread: false },
    { id: 3, title: 'Roteador Wi-Fi 6 Online', text: 'Potência óptica do sinal: -19.4 dBm (Excelente).', unread: false }
  ];

  // 7 Days Weekly Consumption (Matching user screenshot)
  const weeklyConsumption = [
    { day: '29/08', down: 6.8, up: 0.7, peak: '21h30' },
    { day: '30/08', down: 3.2, up: 0.6, peak: '20h15' },
    { day: '31/08', down: 0.2, up: 0.1, peak: '18h00' },
    { day: '01/09', down: 0.3, up: 0.2, peak: '19h45' },
    { day: '02/09', down: 5.6, up: 0.8, peak: '22h10' },
    { day: '03/09', down: 4.1, up: 0.5, peak: '21h00' },
    { day: '04/09', down: 8.9, up: 0.9, peak: '23h15' }
  ];

  const monthlyConsumption = [
    { month: 'Jun', down: 0, up: 0 },
    { month: 'Jul', down: 18.4, up: 2.1 },
    { month: 'Ago', down: 142.6, up: 15.8 },
    { month: 'Set', down: 29.1, up: 4.1 }
  ];

  // Navigation Items
  const navItems = [
    { id: 'inicio', label: 'Início', icon: Home, badge: null },
    { id: 'faturas', label: 'Faturas', icon: DollarSign, badge: '1' },
    { id: 'consumo', label: 'Consumo', icon: BarChart3, badge: null },
    { id: 'contratos', label: 'Contratos', icon: FileText, badge: null },
    { id: 'notas', label: 'Notas Fiscais', icon: FileCheck, badge: null },
    { id: 'relatorios', label: 'Relatórios', icon: FileSpreadsheet, badge: null },
    { id: 'atendimento', label: 'Atendimento', icon: Headphones, badge: null }
  ];

  // Mask CPF / CNPJ
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 14) val = val.slice(0, 14);

    if (val.length <= 11) {
      if (val.length > 9) val = val.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
      else if (val.length > 6) val = val.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
      else if (val.length > 3) val = val.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else {
      val = val.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5');
    }
    setCpf(val);
    if (loginError) setLoginError('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = cpf.replace(/\D/g, '');
    if (clean.length < 11) {
      setLoginError('Informe um CPF (11 dígitos) ou CNPJ (14 dígitos) válido.');
      return;
    }
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoggedIn(true);
    }, 600);
  };

  const handleQuickDemo = () => {
    setCpf('084.921.458-20');
    setIsLoggedIn(true);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(client.currentInvoice.pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleCopyBarcode = () => {
    navigator.clipboard.writeText(client.currentInvoice.barcode);
    setCopiedBarcode(true);
    setTimeout(() => setCopiedBarcode(false), 2500);
  };

  const handleCopyWifiPassword = () => {
    navigator.clipboard.writeText(client.wifi.password);
    setCopiedWifiPassword(true);
    setTimeout(() => setCopiedWifiPassword(false), 2500);
  };

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      setIsUnlocking(false);
      setUnlockedConfidence(true);
      setUnlockTimeRemaining('48h 00m');
    }, 1000);
  };

  const handleStartSpeedTest = () => {
    if (isTestingSpeed) return;
    setIsTestingSpeed(true);
    setTestStage('ping');
    setLivePing(2);

    setTimeout(() => {
      setTestStage('download');
      setLiveDownload(485.2);
    }, 1200);

    setTimeout(() => {
      setLiveDownload(512.6);
      setTestStage('upload');
      setLiveUpload(248.5);
    }, 2800);

    setTimeout(() => {
      setLiveUpload(256.3);
      setTestStage('done');
      setIsTestingSpeed(false);
    }, 4500);
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMessage.trim()) return;
    setTicketSuccess(true);
    setTimeout(() => {
      setShowNewTicketModal(false);
      setTicketSuccess(false);
      setTicketMessage('');
    }, 1800);
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const activeTicket = client.tickets.find(t => t.id === selectedTicketId);
    if (activeTicket) {
      activeTicket.messages.push({
        sender: 'client',
        text: chatInput,
        time: 'Agora'
      });
      setChatInput('');
    }
  };

  /* ========================================================================= */
  /* LOGIN VIEW                                                                */
  /* ========================================================================= */
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-between overflow-y-auto font-sans text-slate-100 selection:bg-blue-600 selection:text-white">
        
        {/* Top Header */}
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            type="button"
            onClick={onBackToSite}
            className="group flex items-center gap-2.5 text-slate-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Voltar ao site da Profiber</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Central IXC • Conexão Criptografada SSL
            </span>
          </div>
        </div>

        {/* Center Box */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
            
            {/* Top decorative glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Profiber Brand */}
            <div className="text-center mb-8 relative">
              <div className="inline-flex items-center justify-center mb-3">
                <img 
                  src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                  alt="Profiber Telecom" 
                  className="h-14 w-auto object-contain filter drop-shadow-lg"
                />
              </div>
              <h2 className="text-xl font-black text-white tracking-tight">Central do Assinante</h2>
              <p className="text-xs text-slate-400 mt-1">Acesse suas faturas, pague com PIX e gerencie sua conexão 100% fibra.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5 relative">
              <div>
                <label htmlFor="login-cpf" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  CPF ou CNPJ do Titular
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="login-cpf"
                    value={cpf}
                    onChange={handleCpfChange}
                    placeholder="000.000.000-00 ou CNPJ"
                    autoFocus
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-mono tracking-wider transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none hover:text-slate-300">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-800 bg-slate-950"
                  />
                  <span>Lembrar meu acesso</span>
                </label>
                <span className="text-slate-500 text-[11px]">Acesso sem senha</span>
              </div>

              {loginError && (
                <div className="p-3.5 bg-red-950/80 border border-red-800/80 text-red-300 text-xs rounded-xl flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                    <span>Consultando IXC Provedor...</span>
                  </>
                ) : (
                  <>
                    <span>Entrar na Central</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Access button */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
              <button
                type="button"
                onClick={handleQuickDemo}
                className="w-full py-3 px-4 bg-blue-950/40 hover:bg-blue-950/80 border border-blue-800/60 rounded-xl text-xs font-bold text-blue-400 hover:text-blue-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Entrar como Carlos Eduardo (Demonstração)</span>
              </button>
            </div>

            {/* WhatsApp help */}
            <div className="mt-6 text-center text-xs text-slate-500">
              Precisa de ajuda com seu acesso?{' '}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+acesso+na+Central+do+Assinante.`}
                target="_blank" 
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold hover:underline"
              >
                Fale no WhatsApp
              </a>
            </div>

          </div>
        </div>

        <div className="py-4 text-center text-xs text-slate-600">
          Profiber Telecom • Todos os direitos reservados • Sistema integrado com IXC Soft Provedor
        </div>

      </div>
    );
  }

  /* ========================================================================= */
  /* MAIN DASHBOARD VIEW (1000x Better than standard IXC)                       */
  /* ========================================================================= */
  const themeClasses = isDarkMode 
    ? 'bg-slate-950 text-slate-100' 
    : 'bg-slate-50 text-slate-800';

  const cardClasses = isDarkMode
    ? 'bg-slate-900 border-slate-800 shadow-sm'
    : 'bg-white border-slate-200/80 shadow-xs';

  const subTextClasses = isDarkMode ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`fixed inset-0 z-50 flex overflow-hidden font-sans selection:bg-blue-500 selection:text-white ${themeClasses}`}>
      
      {/* ------------------------------------------------------------------- */}
      {/* DESKTOP SIDEBAR                                                     */}
      {/* ------------------------------------------------------------------- */}
      <aside 
        className={`hidden md:flex flex-col justify-between transition-all duration-300 z-30 border-r ${
          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        } ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}
      >
        <div>
          {/* Logo & Toggle */}
          <div className="p-5 border-b border-slate-200/50 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden cursor-pointer" onClick={() => setCurrentTab('inicio')}>
              <img 
                src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                alt="Profiber" 
                className="h-8 w-auto object-contain flex-shrink-0"
              />
              {!isSidebarCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-wider text-blue-600">CENTRAL</span>
                  <span className={`text-[10px] font-bold ${subTextClasses}`}>DO ASSINANTE</span>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 cursor-pointer"
            >
              {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Nav List */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id as TabType)}
                  title={item.label}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25' 
                      : isDarkMode
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {!isSidebarCollapsed && (
                    <span className="tracking-wide flex-1 text-left">{item.label}</span>
                  )}
                  {!isSidebarCollapsed && item.badge && (
                    <span className="bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar: Wi-Fi Quick Card + Actions */}
        <div className="p-3 space-y-2 border-t border-slate-200/50">
          {!isSidebarCollapsed && (
            <div 
              onClick={() => setShowWifiModal(true)}
              className={`p-3 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
                isDarkMode 
                  ? 'bg-slate-950/70 border-slate-800 hover:border-blue-700' 
                  : 'bg-blue-50/70 border-blue-200/60 hover:border-blue-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <Wifi className="w-3 h-3" />
                  <span>Wi-Fi 6 Roteador</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-xs font-black truncate">{client.wifi.ssid}</p>
              <p className={`text-[10px] ${subTextClasses}`}>Sinal: {client.wifi.signalDbm} dBm • 7 online</p>
            </div>
          )}

          {/* Back to main website */}
          <button
            onClick={onBackToSite}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isDarkMode 
                ? 'text-slate-400 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            {!isSidebarCollapsed && <span>Voltar ao Site</span>}
          </button>

          {/* Logout */}
          <button
            onClick={() => setIsLoggedIn(false)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isDarkMode 
                ? 'text-red-400 hover:text-red-300 hover:bg-red-950/30' 
                : 'text-red-600 hover:text-red-700 hover:bg-red-50'
            }`}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!isSidebarCollapsed && <span>Desconectar</span>}
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------------- */}
      {/* MAIN CONTAINER                                                      */}
      {/* ------------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden pb-16 md:pb-0">
        
        {/* Top Navbar */}
        <header className={`px-4 sm:px-6 py-3.5 border-b flex items-center justify-between z-20 ${
          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          {/* Left: Mobile logo & Tab Title */}
          <div className="flex items-center gap-3">
            <div className="md:hidden flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('inicio')}>
              <img 
                src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                alt="Profiber" 
                className="h-7 w-auto object-contain"
              />
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs">
              <button 
                onClick={() => setCurrentTab('inicio')}
                className="text-blue-600 hover:underline font-bold"
              >
                Início
              </button>
              {currentTab !== 'inicio' && (
                <>
                  <span className="text-slate-400">/</span>
                  <span className="font-extrabold uppercase tracking-wider">
                    {navItems.find(n => n.id === currentTab)?.label}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark/Light toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Optical Signal Live Pill */}
            <div 
              onClick={() => setShowWifiModal(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold cursor-pointer hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Fibra 500 Mega • {client.wifi.signalDbm} dBm</span>
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className={`p-2 rounded-xl border relative cursor-pointer ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-slate-300' 
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>

              {notificationsOpen && (
                <div className={`absolute right-0 mt-2 w-80 rounded-2xl border shadow-2xl py-3 z-50 text-xs animate-fadeIn ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="px-4 pb-2 border-b border-slate-200/50 flex justify-between items-center">
                    <span className="font-extrabold uppercase tracking-wider text-[11px]">Notificações</span>
                    <span className="text-[10px] text-blue-500 font-bold">3 novas</span>
                  </div>
                  <div className="divide-y divide-slate-200/40 max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-3 hover:bg-blue-50/30 transition-colors">
                        <p className="font-bold text-xs">{n.title}</p>
                        <p className={`text-[11px] mt-0.5 ${subTextClasses}`}>{n.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-full hover:bg-slate-100/50 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black flex items-center justify-center text-xs shadow-sm">
                  {client.initial}
                </div>
                <div className="hidden sm:flex flex-col text-left leading-tight">
                  <span className="font-bold text-xs uppercase tracking-wide">CARLOS</span>
                  <span className={`text-[10px] ${subTextClasses}`}>Contrato #{client.contractId}</span>
                </div>
              </button>

              {userDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-2xl border shadow-2xl py-2 z-50 text-xs animate-fadeIn ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="px-4 py-3 border-b border-slate-200/50">
                    <p className="font-bold text-xs">{client.name}</p>
                    <p className={`text-[11px] font-mono ${subTextClasses}`}>CPF: {client.cpf}</p>
                    <p className="text-[10px] text-blue-500 font-bold mt-1">{client.plan}</p>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentTab('contratos');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-100/50 flex items-center gap-2.5"
                  >
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span>Meus Contratos e Termos</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowWifiModal(true);
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-100/50 flex items-center gap-2.5"
                  >
                    <Wifi className="w-4 h-4 text-emerald-500" />
                    <span>Configurações do Wi-Fi</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTab('atendimento');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-100/50 flex items-center gap-2.5"
                  >
                    <Headphones className="w-4 h-4 text-amber-500" />
                    <span>Falar com o Suporte</span>
                  </button>
                  <div className="border-t border-slate-200/50 mt-1 pt-1">
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full text-left px-4 py-2.5 text-red-500 hover:bg-red-500/10 flex items-center gap-2.5 font-bold"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sair da Central</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Scrollable Content Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">

          {/* =============================================================== */}
          {/* TAB 1: INÍCIO - ULTRA POLISHED DASHBOARD                         */}
          {/* =============================================================== */}
          {currentTab === 'inicio' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              
              {/* 1. HERO INVOICE ALERT & ACTION BANNER (The #1 thing customers want) */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white p-6 sm:p-8 shadow-xl shadow-blue-900/20">
                {/* Decorative mesh */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold text-blue-100">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>Vencimento em {client.currentInvoice.dueDate} ({client.currentInvoice.daysLeft} dias restantes)</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                      Fatura de Setembro / 2026
                    </h2>

                    <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                      {client.plan} • Contrato #{client.contractId} • {client.address}
                    </p>
                  </div>

                  {/* Price and Instant Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/20">
                    <div className="text-left lg:text-right">
                      <span className="text-xs uppercase font-bold text-blue-200 tracking-wider block">Valor com Desconto</span>
                      <div className="text-3xl sm:text-4xl font-black tracking-tight">
                        R$ {client.currentInvoice.amount}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setShowPixModal(true)}
                        className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/30 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <i className="fa-brands fa-pix text-base"></i>
                        <span>Pagar com PIX</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyBarcode}
                        className="px-4 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer"
                        title="Copiar código de barras"
                      >
                        {copiedBarcode ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedBarcode ? 'Copiado!' : 'Boleto'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleUnlock}
                        disabled={unlockedConfidence || isUnlocking}
                        className={`px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                          unlockedConfidence 
                            ? 'bg-amber-400/20 text-amber-200 border border-amber-300/40' 
                            : 'bg-white/15 hover:bg-white/25 text-white'
                        }`}
                        title="Desbloqueio em Confiança por 48 horas"
                      >
                        {isUnlocking ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                            <span>Liberando...</span>
                          </>
                        ) : (
                          <>
                            <Unlock className="w-4 h-4 text-amber-300" />
                            <span>{unlockedConfidence ? 'Desbloqueio Ativo' : 'Desbloquear'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Unlock banner status if active */}
                {unlockedConfidence && (
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-amber-200">
                    <span className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-amber-300" />
                      Desbloqueio em Confiança Ativado: Sua internet está liberada em ultra velocidade.
                    </span>
                    <span className="font-mono text-[11px] bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-500/40">
                      Expira em {unlockTimeRemaining}
                    </span>
                  </div>
                )}
              </div>

              {/* 2. THREE QUICK METRIC CARDS (Fiber Health, Wi-Fi 6, Tickets) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Fiber Connection Health */}
                <div className={`p-5 rounded-2xl border ${cardClasses} flex items-center justify-between`}>
                  <div className="space-y-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${subTextClasses}`}>Sinal da Fibra</span>
                    <div className="text-xl font-black flex items-center gap-2">
                      <span>{client.wifi.signalDbm} dBm</span>
                      <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Excelente</span>
                    </div>
                    <p className={`text-[11px] ${subTextClasses}`}>Potência óptica estável</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>

                {/* Metric 2: Wi-Fi 6 Devices */}
                <div 
                  onClick={() => setShowWifiModal(true)}
                  className={`p-5 rounded-2xl border ${cardClasses} flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all`}
                >
                  <div className="space-y-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${subTextClasses}`}>Wi-Fi 6 Roteador</span>
                    <div className="text-xl font-black flex items-center gap-1.5">
                      <span>7 Dispositivos</span>
                    </div>
                    <p className="text-[11px] text-blue-500 font-semibold hover:underline">Ver senha e convidados →</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Wifi className="w-6 h-6" />
                  </div>
                </div>

                {/* Metric 3: Ping & Latency */}
                <div className={`p-5 rounded-2xl border ${cardClasses} flex items-center justify-between`}>
                  <div className="space-y-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${subTextClasses}`}>Latência / Ping</span>
                    <div className="text-xl font-black flex items-center gap-1.5">
                      <span>{livePing} ms</span>
                      <span className="text-[10px] font-extrabold text-cyan-600 bg-cyan-500/10 px-2 py-0.5 rounded-full">0% perda</span>
                    </div>
                    <p className={`text-[11px] ${subTextClasses}`}>Jitter: 0.8ms (Gamer Pro)</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                </div>

                {/* Metric 4: Support & Tickets */}
                <div 
                  onClick={() => setCurrentTab('atendimento')}
                  className={`p-5 rounded-2xl border ${cardClasses} flex items-center justify-between cursor-pointer hover:border-amber-500 transition-all`}
                >
                  <div className="space-y-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${subTextClasses}`}>Atendimento</span>
                    <div className="text-xl font-black flex items-center gap-1.5">
                      <span>0 Pendentes</span>
                    </div>
                    <p className="text-[11px] text-amber-500 font-semibold hover:underline">Histórico de chamados →</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Headphones className="w-6 h-6" />
                  </div>
                </div>

              </div>

              {/* 3. ROW: CONSUMO SEMANAL CHART + LIVE FIBER SPEEDTEST */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Consumo Semanal Card (8 cols) */}
                <div className={`lg:col-span-8 rounded-3xl border ${cardClasses} p-6 space-y-4`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/50">
                    <div>
                      <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <span>Consumo Semanal de Tráfego</span>
                      </h3>
                      <p className={`text-xs ${subTextClasses}`}>Download e Upload nos últimos 7 dias da sua fibra</p>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex items-center gap-4 text-xs font-bold">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-teal-500"></span>
                        <span className={subTextClasses}>Download (GB)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-md bg-blue-600"></span>
                        <span className={subTextClasses}>Upload (GB)</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Smooth SVG Area Chart */}
                  <div className="relative h-60 w-full pt-4">
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 pr-2">
                      <div className="border-b border-slate-200/40 flex justify-between"><span>10 GB</span></div>
                      <div className="border-b border-slate-200/40 flex justify-between"><span>8 GB</span></div>
                      <div className="border-b border-slate-200/40 flex justify-between"><span>6 GB</span></div>
                      <div className="border-b border-slate-200/40 flex justify-between"><span>4 GB</span></div>
                      <div className="border-b border-slate-200/40 flex justify-between"><span>2 GB</span></div>
                      <div className="border-b border-slate-200/80 flex justify-between"><span>0 GB</span></div>
                    </div>

                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="dashDownGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="dashUpGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Download Area & Path */}
                      <path 
                        d="M 50,64 L 150,136 L 250,196 L 350,194 L 450,88 L 550,118 L 650,22 L 650,200 L 50,200 Z" 
                        fill="url(#dashDownGrad)" 
                      />
                      <path 
                        d="M 50,64 L 150,136 L 250,196 L 350,194 L 450,88 L 550,118 L 650,22" 
                        fill="none" 
                        stroke="#14b8a6" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                      />

                      {/* Upload Area & Path */}
                      <path 
                        d="M 50,186 L 150,188 L 250,198 L 350,196 L 450,184 L 550,190 L 650,182 L 650,200 L 50,200 Z" 
                        fill="url(#dashUpGrad)" 
                      />
                      <path 
                        d="M 50,186 L 150,188 L 250,198 L 350,196 L 450,184 L 550,190 L 650,182" 
                        fill="none" 
                        stroke="#2563eb" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />

                      {/* Interactive hover points */}
                      {weeklyConsumption.map((item, idx) => {
                        const x = 50 + idx * 100;
                        const yDown = 200 - (item.down / 10) * 200;
                        return (
                          <g 
                            key={idx} 
                            className="cursor-pointer group"
                            onMouseEnter={() => setChartHoverDay({ label: item.day, down: item.down, up: item.up })}
                            onMouseLeave={() => setChartHoverDay(null)}
                          >
                            <circle cx={x} cy={yDown} r="5" fill="#ffffff" stroke="#14b8a6" strokeWidth="3" className="transition-transform group-hover:scale-150" />
                            <rect x={x - 25} y="0" width="50" height="200" fill="transparent" />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Tooltip */}
                    {chartHoverDay && (
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700 pointer-events-none animate-fadeIn">
                        <span className="font-bold text-teal-400">{chartHoverDay.label}</span>
                        <span>Download: <b>{chartHoverDay.down} GB</b></span>
                        <span>Upload: <b>{chartHoverDay.up} GB</b></span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Labels */}
                  <div className="flex justify-between px-4 text-xs font-bold text-slate-400 font-mono">
                    {weeklyConsumption.map((item, idx) => (
                      <span key={idx}>{item.day}</span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs">
                    <span className={subTextClasses}>Total consumido nesta semana: <b className="text-slate-800 dark:text-white">29.1 GB</b></span>
                    <button
                      onClick={() => setCurrentTab('consumo')}
                      className="text-blue-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver relatório completo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Live Speedtest & Diagnóstico (4 cols) */}
                <div className={`lg:col-span-4 rounded-3xl border ${cardClasses} p-6 flex flex-col justify-between space-y-5`}>
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/50">
                      <h4 className="font-extrabold text-sm flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyan-500" />
                        <span>Velocímetro Fibra 500M</span>
                      </h4>
                      <span className="text-[10px] bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-extrabold px-2 py-0.5 rounded-full">
                        Servidor Local
                      </span>
                    </div>

                    {/* Speed Gauge Simulation */}
                    <div className="py-6 text-center">
                      <div className="relative inline-flex items-center justify-center">
                        <div className={`w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center transition-all ${
                          isTestingSpeed ? 'border-cyan-500 animate-pulse' : 'border-blue-600'
                        }`}>
                          <span className="text-3xl font-black tracking-tight">
                            {testStage === 'download' ? liveDownload : testStage === 'upload' ? liveUpload : liveDownload}
                          </span>
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${subTextClasses}`}>
                            {testStage === 'upload' ? 'Upload Mbps' : 'Download Mbps'}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-around text-xs">
                        <div>
                          <span className={`block text-[10px] ${subTextClasses}`}>PING</span>
                          <span className="font-black text-emerald-500">{livePing} ms</span>
                        </div>
                        <div>
                          <span className={`block text-[10px] ${subTextClasses}`}>DOWNLOAD</span>
                          <span className="font-black">{liveDownload} Mbps</span>
                        </div>
                        <div>
                          <span className={`block text-[10px] ${subTextClasses}`}>UPLOAD</span>
                          <span className="font-black">{liveUpload} Mbps</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleStartSpeedTest}
                    disabled={isTestingSpeed}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isTestingSpeed ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <span>Medindo Conexão ({testStage})...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>Testar Velocidade Agora</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 2: FATURAS & FINANCEIRO                                      */}
          {/* =============================================================== */}
          {currentTab === 'faturas' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Minhas Faturas</h2>
                  <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                    Emita 2ª via, pague com PIX instantâneo, visualize comprovantes e desbloqueie sua linha.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPixModal(true)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <i className="fa-brands fa-pix"></i>
                    <span>Pagar Aberta via PIX</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleUnlock}
                    disabled={unlockedConfidence || isUnlocking}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      unlockedConfidence 
                        ? 'bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-200' 
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                    }`}
                  >
                    {isUnlocking ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                        <span>Liberando...</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4" />
                        <span>{unlockedConfidence ? 'Desbloqueio Ativo' : 'Desbloqueio em Confiança'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Invoices List Card */}
              <div className={`rounded-3xl border ${cardClasses} overflow-hidden`}>
                <div className="p-5 border-b border-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <h4 className="font-extrabold text-sm">Faturas do Contrato #{client.contractId} ({client.plan})</h4>
                  </div>
                  <span className={`text-xs ${subTextClasses}`}>Endereço: {client.address}</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className={`border-b uppercase font-bold text-[11px] ${
                      isDarkMode ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}>
                      <tr>
                        <th className="py-3 px-5">Status</th>
                        <th className="py-3 px-5">Período de Referência</th>
                        <th className="py-3 px-5">Vencimento</th>
                        <th className="py-3 px-5">Valor</th>
                        <th className="py-3 px-5">Desconto Pontualidade</th>
                        <th className="py-3 px-5 text-right">Ações Rápidas</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/40">
                      {client.invoicesHistory.map((inv, idx) => {
                        const isPending = inv.status === 'aberto';
                        return (
                          <tr key={idx} className="hover:bg-blue-50/20 transition-colors">
                            <td className="py-4 px-5">
                              {isPending ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                  <Clock className="w-3 h-3" />
                                  Em Aberto
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                  <Check className="w-3 h-3" />
                                  Pago
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-5 font-semibold">{inv.period}</td>
                            <td className="py-4 px-5 font-bold">{inv.dueDate}</td>
                            <td className="py-4 px-5 font-black text-sm">{inv.amount}</td>
                            <td className="py-4 px-5 font-bold text-emerald-600 dark:text-emerald-400">
                              {isPending ? 'R$ 92,79 (Aplicado)' : '-'}
                            </td>
                            <td className="py-4 px-5 text-right">
                              <div className="inline-flex items-center gap-2">
                                {isPending ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => setShowPixModal(true)}
                                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                                    >
                                      <i className="fa-brands fa-pix"></i>
                                      <span>Pagar PIX</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleCopyBarcode}
                                      title="Copiar código de barras"
                                      className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 cursor-pointer"
                                    >
                                      <Copy className="w-3.5 h-3.5" />
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => alert(`Comprovante de quitação da fatura ${inv.period} emitido.`)}
                                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-blue-600 dark:text-blue-400 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Comprovante</span>
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Barcode line box */}
                <div className={`p-5 border-t border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                  isDarkMode ? 'bg-slate-950/60' : 'bg-slate-50'
                }`}>
                  <div className="flex-1">
                    <span className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${subTextClasses}`}>
                      Linha Digitável do Boleto (Setembro):
                    </span>
                    <div className={`font-mono text-xs p-3 rounded-xl border select-all font-semibold ${
                      isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                    }`}>
                      {client.currentInvoice.barcode}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyBarcode}
                    className="self-start md:self-end px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    {copiedBarcode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedBarcode ? 'Código Copiado!' : 'Copiar Código'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 3: CONSUMO & VOLUMETRIA                                      */}
          {/* =============================================================== */}
          {currentTab === 'consumo' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Consumo de Tráfego</h2>
                  <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                    Detalhamento de volumetria da conexão {client.plan} ({client.login}).
                  </p>
                </div>

                {/* Period Selector Tabs */}
                <div className="inline-flex rounded-xl p-1 bg-slate-200/60 dark:bg-slate-800 border border-slate-300/40 dark:border-slate-700">
                  <button
                    onClick={() => setChartPeriod('semanal')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      chartPeriod === 'semanal' ? 'bg-blue-600 text-white shadow-sm' : subTextClasses
                    }`}
                  >
                    Semanal (7 Dias)
                  </button>
                  <button
                    onClick={() => setChartPeriod('mensal')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      chartPeriod === 'mensal' ? 'bg-blue-600 text-white shadow-sm' : subTextClasses
                    }`}
                  >
                    Mensal (2026)
                  </button>
                </div>
              </div>

              {/* Chart container */}
              <div className={`rounded-3xl border ${cardClasses} p-6 space-y-5`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/50">
                  <div>
                    <h4 className="text-base font-black">
                      {chartPeriod === 'semanal' ? 'Consumo dos Últimos 7 Dias (GB)' : 'Consumo por Mês em 2026 (GB)'}
                    </h4>
                    <p className={`text-xs ${subTextClasses}`}>Fibra Óptica Direta sem franquia ou redução</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-teal-500"></span> Download</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-blue-600"></span> Upload</span>
                  </div>
                </div>

                {/* Bar List Display */}
                {chartPeriod === 'semanal' ? (
                  <div className="space-y-3 pt-2">
                    {weeklyConsumption.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-xs">
                        <span className="w-16 font-mono font-bold">{item.day}</span>
                        <div className="flex-1 h-3.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                          <div 
                            className="bg-teal-500 h-full rounded-full transition-all"
                            style={{ width: `${(item.down / 10) * 100}%` }}
                            title={`Download: ${item.down} GB`}
                          ></div>
                          <div 
                            className="bg-blue-600 h-full rounded-full transition-all"
                            style={{ width: `${(item.up / 10) * 100}%` }}
                            title={`Upload: ${item.up} GB`}
                          ></div>
                        </div>
                        <div className="w-32 text-right">
                          <span className="font-black">{item.down} GB</span>
                          <span className={`text-[10px] ml-1.5 ${subTextClasses}`}>/ {item.up} GB</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-4 text-center pt-4">
                    {monthlyConsumption.map((m, idx) => (
                      <div key={idx} className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-500">{m.month} / 2026</span>
                        <div className="text-xl font-black mt-2">{m.down} GB</div>
                        <span className={`text-[11px] block mt-0.5 ${subTextClasses}`}>Upload: {m.up} GB</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Traffic Breakdown by Category */}
              <div className={`rounded-3xl border ${cardClasses} p-6 space-y-4`}>
                <h4 className="font-extrabold text-sm">Perfil de Utilização do Tráfego</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-xs font-bold text-red-500">Streaming & Filmes</span>
                    <div className="text-2xl font-black mt-1">54%</div>
                    <p className={`text-[11px] ${subTextClasses}`}>Netflix, YouTube, Prime Vídeo 4K</p>
                  </div>
                  <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-xs font-bold text-pink-500">Redes Sociais & Vídeos</span>
                    <div className="text-2xl font-black mt-1">26%</div>
                    <p className={`text-[11px] ${subTextClasses}`}>Instagram, TikTok, WhatsApp</p>
                  </div>
                  <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-xs font-bold text-blue-500">Jogos & Downloads</span>
                    <div className="text-2xl font-black mt-1">12%</div>
                    <p className={`text-[11px] ${subTextClasses}`}>Steam, PlayStation, Xbox Live</p>
                  </div>
                  <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-xs font-bold text-emerald-500">Home Office & Web</span>
                    <div className="text-2xl font-black mt-1">8%</div>
                    <p className={`text-[11px] ${subTextClasses}`}>Google Meet, Navegação e E-mails</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 4: CONTRATOS & TERMOS                                        */}
          {/* =============================================================== */}
          {currentTab === 'contratos' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Contratos e Documentos</h2>
                <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                  Contratos de prestação de serviços e termos de comodato assinados eletronicamente.
                </p>
              </div>

              <div className={`rounded-3xl border ${cardClasses} p-6 space-y-4`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/50">
                  <h4 className="font-extrabold text-sm">Contrato Ativo: {client.plan}</h4>
                  <span className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1 rounded-full">
                    Regular / Adimplente
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className={`block ${subTextClasses}`}>Número do Contrato</span>
                    <span className="font-mono font-bold text-sm">#{client.contractId}</span>
                  </div>
                  <div>
                    <span className={`block ${subTextClasses}`}>Data de Ativação</span>
                    <span className="font-bold text-sm">05/08/2026</span>
                  </div>
                  <div>
                    <span className={`block ${subTextClasses}`}>Tecnologia</span>
                    <span className="font-bold text-sm">100% Fibra Óptica GPON</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => alert('Imprimindo Contrato de Adesão de Telecomunicações...')}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Imprimir Contrato de Adesão</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Visualizando Termo de Comodato do Roteador Wi-Fi 6...')}
                    className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Termo de Comodato Wi-Fi 6</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 5: NOTAS FISCAIS                                             */}
          {/* =============================================================== */}
          {currentTab === 'notas' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Notas Fiscais de Telecomunicação</h2>
                <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                  NFST Modelo 21/22 emitida conforme SEFAZ de Alagoas.
                </p>
              </div>

              <div className={`rounded-3xl border ${cardClasses} p-8 text-center space-y-3`}>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-600 mx-auto flex items-center justify-center">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base">Notas Fiscais Eletrônicas em Dia</h4>
                <p className={`text-xs max-w-md mx-auto ${subTextClasses}`}>
                  A nota fiscal de telecomunicação é disponibilizada no sistema em até 5 dias úteis após a compensação bancária do boleto/PIX.
                </p>
                <button
                  type="button"
                  onClick={() => alert('Download do pacote de notas fiscais do ano 2026.')}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Baixar Todas as Notas de 2026 (.ZIP)
                </button>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 6: RELATÓRIOS & QUITAÇÃO                                     */}
          {/* =============================================================== */}
          {currentTab === 'relatorios' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Relatórios e Declarações Oficiais</h2>
                <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                  Certidões de quitação de débitos e extratos de autenticação.
                </p>
              </div>

              <div className={`rounded-3xl border ${cardClasses} p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black">Declaração Anual de Quitação de Débitos</h3>
                    <p className={`text-xs mt-1 leading-relaxed max-w-xl ${subTextClasses}`}>
                      Comprovante emitido de acordo com a Lei Federal nº 12.007/2009 e normas da Anatel, atestando a pontualidade total do assinante.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold border cursor-pointer ${
                      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <option value="2026">Exercício 2026</option>
                    <option value="2025">Exercício 2025</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => alert(`Imprimindo Certidão Anual de Quitação do ano ${selectedYear}...`)}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Imprimir Certidão</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* TAB 7: ATENDIMENTO & CHAT INTERATIVO                             */}
          {/* =============================================================== */}
          {currentTab === 'atendimento' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Atendimentos & Suporte</h2>
                  <p className={`text-xs mt-0.5 ${subTextClasses}`}>
                    Abra chamados, acompanhe o diagnóstico da equipe técnica e converse em tempo real.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNewTicketModal(true)}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    + Novo Chamado
                  </button>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Ol%C3%A1%2C+sou+o+cliente+${encodeURIComponent(client.name)}+e+gostaria+de+suporte.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>WhatsApp Direto</span>
                  </a>
                </div>
              </div>

              {/* Tickets List */}
              <div className={`rounded-3xl border ${cardClasses} overflow-hidden`}>
                <div className="p-5 border-b border-slate-200/50">
                  <h4 className="font-extrabold text-sm">Histórico de Chamados Técnicos e Financeiros</h4>
                </div>

                <div className="divide-y divide-slate-200/40">
                  {client.tickets.map((t) => (
                    <div key={t.id} className="p-5 hover:bg-blue-50/20 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded">
                              {t.id}
                            </span>
                            <h5 className="font-bold text-sm">{t.subject}</h5>
                          </div>
                          <p className={`text-xs mt-1 ${subTextClasses}`}>
                            Departamento: {t.department} • Aberto em: {t.date}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs rounded-full border border-emerald-500/20">
                            <Check className="w-3.5 h-3.5" />
                            {t.status}
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedTicketId(selectedTicketId === t.id ? null : t.id)}
                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{selectedTicketId === t.id ? 'Fechar Conversa' : 'Ver Conversa'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Interactive In-Ticket Chat Conversation */}
                      {selectedTicketId === t.id && (
                        <div className={`mt-4 p-4 rounded-2xl border space-y-3 ${
                          isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                            {t.messages.map((m, idx) => (
                              <div 
                                key={idx} 
                                className={`flex flex-col ${m.sender === 'client' ? 'items-end' : 'items-start'}`}
                              >
                                <div className={`max-w-md p-3 rounded-2xl text-xs ${
                                  m.sender === 'client' 
                                    ? 'bg-blue-600 text-white rounded-tr-xs' 
                                    : isDarkMode 
                                      ? 'bg-slate-800 text-slate-100 rounded-tl-xs' 
                                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs'
                                }`}>
                                  {m.sender === 'agent' && (
                                    <span className="font-extrabold text-[10px] block text-blue-400 mb-1">
                                      {m.name}
                                    </span>
                                  )}
                                  <p>{m.text}</p>
                                </div>
                                <span className={`text-[10px] mt-1 px-1 ${subTextClasses}`}>{m.time}</span>
                              </div>
                            ))}
                          </div>

                          <form onSubmit={handleSendChatMessage} className="flex items-center gap-2 pt-2 border-t border-slate-200/50">
                            <input
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              placeholder="Responder ao técnico do chamado..."
                              className={`flex-1 px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
                              }`}
                            />
                            <button
                              type="submit"
                              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold cursor-pointer"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </main>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE BOTTOM NAVIGATION BAR (1000x Better Mobile App Experience)     */}
      {/* ------------------------------------------------------------------- */}
      <nav className={`fixed bottom-0 inset-x-0 md:hidden z-40 border-t flex justify-around items-center py-2 px-1 backdrop-blur-xl ${
        isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
      }`}>
        <button
          onClick={() => setCurrentTab('inicio')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-extrabold transition-colors ${
            currentTab === 'inicio' ? 'text-blue-600' : subTextClasses
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Início</span>
        </button>

        <button
          onClick={() => setCurrentTab('faturas')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-extrabold relative transition-colors ${
            currentTab === 'faturas' ? 'text-blue-600' : subTextClasses
          }`}
        >
          <DollarSign className="w-5 h-5" />
          <span>Faturas</span>
          <span className="absolute top-0 right-3 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* Quick center Wi-Fi trigger button */}
        <button
          onClick={() => setShowWifiModal(true)}
          className="flex flex-col items-center justify-center -mt-5 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 cursor-pointer"
          title="Meu Wi-Fi 6"
        >
          <Wifi className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentTab('consumo')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-extrabold transition-colors ${
            currentTab === 'consumo' ? 'text-blue-600' : subTextClasses
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Consumo</span>
        </button>

        <button
          onClick={() => setCurrentTab('atendimento')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-extrabold transition-colors ${
            currentTab === 'atendimento' ? 'text-blue-600' : subTextClasses
          }`}
        >
          <Headphones className="w-5 h-5" />
          <span>Suporte</span>
        </button>
      </nav>

      {/* ------------------------------------------------------------------- */}
      {/* MODAL 1: WI-FI 6 GESTOR & CONEXÃO DE CONVIDADOS                      */}
      {/* ------------------------------------------------------------------- */}
      {showWifiModal && (
        <div className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-md w-full p-6 space-y-5 border shadow-2xl animate-fadeIn ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
              <h5 className="font-black text-sm flex items-center gap-2">
                <Wifi className="w-4 h-4 text-blue-500" />
                <span>Gestão do Roteador Wi-Fi 6</span>
              </h5>
              <button 
                onClick={() => setShowWifiModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Network details */}
            <div className={`p-4 rounded-2xl border space-y-3 ${
              isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <span className={`block text-[10px] uppercase font-bold tracking-wider ${subTextClasses}`}>Nome da Rede (SSID 5GHz)</span>
                <span className="font-mono font-black text-base">{client.wifi.ssid}</span>
              </div>

              <div>
                <span className={`block text-[10px] uppercase font-bold tracking-wider ${subTextClasses}`}>Senha da Rede</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono font-bold text-sm">
                    {showWifiPassword ? client.wifi.password : '••••••••••••••••'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowWifiPassword(!showWifiPassword)}
                      className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showWifiPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyWifiPassword}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedWifiPassword ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedWifiPassword ? 'Copiada!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code for Guest direct connection without typing password */}
            <div className="text-center space-y-2">
              <span className={`text-[11px] font-bold ${subTextClasses}`}>Conectar Convidados sem Digitar Senha:</span>
              <div className="p-3 bg-white rounded-2xl inline-block border border-slate-200 shadow-inner">
                <QrCode className="w-32 h-32 text-slate-900 mx-auto" />
              </div>
              <p className={`text-[10px] ${subTextClasses}`}>Aponte a câmera do celular no QR Code para conectar direto ao Wi-Fi 6.</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowWifiModal(false)}
                className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MODAL 2: PIX INSTANTÂNEO & QR CODE                                  */}
      {/* ------------------------------------------------------------------- */}
      {showPixModal && (
        <div className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-sm w-full p-6 text-center space-y-4 border shadow-2xl animate-fadeIn ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
              <h5 className="font-extrabold text-sm flex items-center gap-2 text-emerald-500">
                <i className="fa-brands fa-pix text-lg"></i>
                <span>PIX Instantâneo Oficial</span>
              </h5>
              <button 
                onClick={() => setShowPixModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* QR Code */}
            <div className="p-4 bg-white rounded-2xl inline-block border border-slate-200 shadow-inner mx-auto">
              <div className="w-40 h-40 flex flex-col items-center justify-center bg-white rounded-xl relative">
                <QrCode className="w-36 h-36 text-slate-900" />
                <span className="absolute -bottom-1 bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                  BAIXA AUTOMÁTICA
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500">
                Valor com Desconto: <span className="font-black text-slate-900 dark:text-white text-base">R$ {client.currentInvoice.amount}</span>
              </p>
              <p className={`text-[11px] mt-1 ${subTextClasses}`}>
                A baixa é automática no sistema em menos de 10 segundos.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleCopyPix}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                {copiedPix ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Código PIX Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Chave Copia e Cola</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowPixModal(false)}
                className={`w-full py-2 text-xs font-semibold ${subTextClasses} hover:underline`}
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MODAL 3: NOVO ATENDIMENTO                                           */}
      {/* ------------------------------------------------------------------- */}
      {showNewTicketModal && (
        <div className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-md w-full p-6 space-y-4 border shadow-2xl animate-fadeIn ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
              <h5 className="font-bold text-sm flex items-center gap-2 text-amber-500">
                <Headphones className="w-4 h-4" />
                <span>Abrir Chamado no IXC Provedor</span>
              </h5>
              <button 
                onClick={() => setShowNewTicketModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {ticketSuccess ? (
              <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h6 className="font-black text-sm">Chamado Criado com Sucesso!</h6>
                <p className="text-xs">Protocolo #AT-{Math.floor(1000 + Math.random() * 9000)} registrado no sistema IXC. A equipe responderá em instantes.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${subTextClasses}`}>
                    Motivo do Atendimento
                  </label>
                  <select
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      isDarkMode ? 'bg-slate-950 border-slate-700' : 'bg-slate-50 border-slate-300'
                    }`}
                  >
                    <option>Suporte Técnico / Lentidão</option>
                    <option>Sem Conexão / Sem Sinal Óptico</option>
                    <option>Dúvidas sobre Fatura / Financeiro</option>
                    <option>Mudança de Endereço / Ponto</option>
                    <option>Troca de Senha do Wi-Fi</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${subTextClasses}`}>
                    Descreva o que está ocorrendo:
                  </label>
                  <textarea
                    rows={4}
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Detalhe o seu problema para adiantar o diagnóstico técnico..."
                    required
                    className={`w-full p-3 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      isDarkMode ? 'bg-slate-950 border-slate-700' : 'bg-slate-50 border-slate-300'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition-all cursor-pointer shadow-md"
                  >
                    Enviar Chamado ao IXC
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewTicketModal(false)}
                    className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
