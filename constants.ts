import { Clock, Users, FileSignature, Zap } from 'lucide-react';
import { Plan, Feature, FAQItem } from './types';

export const PLANS: Plan[] = [
  {
    id: 1,
    speed: "250 MEGA",
    price: "59,90",
    period: "/mês",
    features: [
      "Wi-Fi 5G Grátis",
      "Instalação Grátis",
      "IPV6 Incluso",
      "Suporte Humanizado",
      "Apps de Conteúdo"
    ],
    isRecommended: false
  },
  {
    id: 2,
    speed: "500 MEGA",
    price: "79,90",
    period: "/mês",
    features: [
      "Wi-Fi 6 Turbo Grátis",
      "Instalação Grátis",
      "Ideal para Games",
      "Download Ilimitado",
      "Clube de Vantagens"
    ],
    isRecommended: true,
    highlightColor: "blue"
  },
  {
    id: 3,
    speed: "750 MEGA",
    price: "99,90",
    period: "/mês",
    features: [
      "Wi-Fi 6 Mesh Premium",
      "Instalação Prioritária",
      "+ 101 Canais em HD",
      "Paramount+ Incluso",
      "IP Fixo Opcional"
    ],
    isRecommended: true,
    highlightColor: "purple"
  },
  {
    id: 4,
    speed: "1 GIGA",
    price: "119,90",
    period: "/mês",
    features: [
      "Roteador Gamer High-End",
      "Instalação VIP",
      "+ 118 Canais em HD",
      "HBO Max Incluso",
      "Prioridade no Suporte"
    ],
    isRecommended: false
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    icon: Clock,
    title: "Instalação em 24h",
    description: "Nossa equipe técnica agiliza sua conexão para você não perder tempo."
  },
  {
    id: 2,
    icon: Users,
    title: "Suporte Humanizado",
    description: "Fale com pessoas reais. Atendimento rápido via WhatsApp e telefone."
  },
  {
    id: 3,
    icon: FileSignature,
    title: "Sem Fidelidade",
    description: "Confiança na qualidade. Você fica porque gosta, não porque é obrigado."
  },
  {
    id: 4,
    icon: Zap,
    title: "100% Fibra Óptica",
    description: "Tecnologia de ponta a ponta (FTTH) garantindo ultra velocidade."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como proceder em casos de problema com a conexão?",
    answer: "O primeiro passo é reiniciar seus equipamentos (ONU e Roteador), desligando-os da tomada por cerca de 1 minuto. Muitas vezes isso resolve instabilidades temporárias. Se o problema persistir, entre em contato com nosso suporte técnico."
  },
  {
    question: "O que posso fazer se minha internet não está funcionando?",
    answer: "Verifique se os cabos estão conectados corretamente e se há luzes acesas no roteador. Tente reiniciar o equipamento. Caso continue sem sinal, acione nosso suporte via WhatsApp para um diagnóstico remoto."
  },
  {
    question: "Não recebi a fatura desse mês, como faço para pagá-la?",
    answer: "A 2ª via da fatura está disponível na Área do Cliente. Você também pode solicitar por e-mail, pelas redes sociais ou retirá-la na unidade da sua região. Não esqueça de manter seu cadastro sempre atualizado."
  },
  {
    question: "Quais as formas de pagamento de mensalidades?",
    answer: "Trabalhamos com boleto bancário (pagável em lotéricas e app bancário), PIX e cartão de crédito. Entre em contato para verificar a disponibilidade de débito automático."
  },
  {
    question: "Minha internet vai ter velocidade reduzida ao atingir o limite?",
    answer: "Não! Na Profiber, a internet é 100% ilimitada. Não aplicamos franquia de dados, então você pode navegar, assistir streaming e baixar arquivos sem medo de redução de velocidade."
  },
  {
    question: "O tempo pode prejudicar o sinal, como em dias de chuva?",
    answer: "Diferente da internet via rádio, a Fibra Óptica da Profiber é imune a interferências eletromagnéticas e climáticas. Chuvas fortes ou ventos não degradam a qualidade do sinal que chega até sua casa."
  },
  {
    question: "Existe fibra óptica em todas as ruas?",
    answer: "Nossa rede está em constante expansão nos municípios atendidos. Para confirmar a viabilidade técnica na sua rua específica, entre em contato com nosso time comercial e informe seu endereço."
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer: "Após a aprovação do cadastro, nossa equipe técnica realiza a instalação em até 24 horas úteis, mediante disponibilidade de agenda na sua região."
  }
];

export const CONTACT_INFO = {
  whatsapp: "5582982190187",
  instagram: "https://www.instagram.com/profibertelecom/",
  address: "Rua Mariano de Freitas, 83 - São Cristóvão, Palmeira dos Índios - AL, 57601-070",
  email: "contato@profiber.net.br",
  cnpj: "10.238.512/0001-44",
  companyName: "PROFIBER TELECOM LTDA"
};

export const CITIES = [
  "Palmeira dos Índios - AL",
  "Estrela de Alagoas - AL",
  "Minador do Negrão - AL",
  "Cacimbinhas - AL",
  "Rainha Isabel - PE",
  "Lagoa de São José - PE",
  "Lagoa dos Leões - PE"
];

export const TERMS_OF_USE = `
1. Aceitação dos Termos
Ao contratar os serviços da Profiber Telecom, você concorda com os termos aqui descritos, bem como com o Contrato de Prestação de Serviços de Comunicação Multimídia (SCM).

2. Uso do Serviço
O serviço de internet fornecido destina-se ao uso pessoal e intransferível. É proibida a revenda ou compartilhamento do sinal com terceiros fora da unidade consumidora contratada.

3. Velocidade
A velocidade contratada refere-se à taxa de transmissão máxima (download/upload) entregue no cabo de rede conectado diretamente à ONU/Modem. Conexões Wi-Fi podem sofrer interferências externas que não são de responsabilidade da prestadora.

4. Pagamentos
As faturas devem ser pagas até a data de vencimento. O atraso poderá acarretar multas, juros e suspensão parcial ou total do serviço conforme regulamentação da ANATEL.

5. Suporte Técnico
O suporte técnico é fornecido através dos canais oficiais (Telefone, WhatsApp). Visitas técnicas improdutivas ou decorrentes de mau uso dos equipamentos pelo cliente poderão ser cobradas.
`;

export const PRIVACY_POLICY = `
1. Coleta de Dados
A Profiber Telecom coleta dados pessoais (Nome, CPF, Endereço, Telefone) estritamente necessários para a formalização do contrato e prestação do serviço, conforme a Lei Geral de Proteção de Dados (LGPD).

2. Uso das Informações
Seus dados são utilizados para:
- Faturamento e cobrança;
- Contato técnico e comercial;
- Cumprimento de obrigações legais e regulatórias.

3. Compartilhamento
Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. O compartilhamento ocorre apenas quando necessário para a prestação do serviço (ex: sistemas de emissão de nota fiscal) ou por ordem judicial.

4. Segurança
Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda ou alteração.

5. Seus Direitos
Você pode solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados através de nossos canais de atendimento.
`;
