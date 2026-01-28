# 🌐 Profiber Telecom - High-Performance ISP Landing Page

![Profiber Banner](https://profiber.net.br/arquivos_publicos/profiber_logo_brancaedit.png)

> Uma Landing Page moderna, responsiva e otimizada para conversão, desenvolvida especialmente para Provedores de Internet (ISP).

![React](https://img.shields.io/badge/React-19-blue?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

## 📖 Sobre o Projeto

Este projeto é uma **Landing Page Institucional e de Vendas** desenvolvida para a **Profiber Telecom**. O objetivo principal é apresentar planos de fibra óptica de forma clara, verificar disponibilidade (área de cobertura) e captar leads diretamente através do WhatsApp, eliminando a necessidade de um backend complexo para formulários iniciais.

A aplicação foca em **UX (Experiência do Usuário)**, **Performance** e **Design Responsivo**.

## ✨ Funcionalidades Principais

*   **⚡ Ultra Performance:** Carregamento rápido e animações suaves (60fps).
*   **📱 Design Responsivo (Mobile-First):** Layout perfeitamente adaptado para celulares, tablets e desktops.
*   **🎨 UI Moderna:** Uso de Glassmorphism, gradientes e tipografia limpa (Inter font).
*   **💬 Integração com WhatsApp:** O formulário de contratação redireciona o cliente diretamente para o WhatsApp da equipe de vendas com uma mensagem pré-formatada contendo os dados do cliente e o plano escolhido.
*   **🗺️ Área de Cobertura:** Visualização clara das cidades atendidas.
*   **🏷️ Cards de Preços:** Destaque para planos recomendados e diferenciais de cada pacote.
*   **❓ FAQ Interativo:** Seção de perguntas frequentes com efeito de acordeão.
*   **⚖️ Modais Legais:** Termos de Uso e Política de Privacidade acessíveis via modal.

## 🛠️ Tecnologias Utilizadas

*   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e escalabilidade do código.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida e responsiva.
*   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e moderna.
*   **Intersection Observer API**: Para animações de entrada dos elementos ao rolar a página.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

*   Node.js (v18 ou superior)
*   npm ou yarn

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/profiber-landing-page.git
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd profiber-landing-page
    ```

3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  Acesse `http://localhost:5173` (ou a porta indicada) no seu navegador.

## ⚙️ Personalização

Todo o conteúdo dinâmico do site está centralizado no arquivo `src/constants.ts` para facilitar a manutenção.

Você pode alterar facilmente:

*   **Planos e Preços:** Edite a constante `PLANS`.
*   **Informações de Contato:** Edite a constante `CONTACT_INFO` (WhatsApp, Instagram, Endereço).
*   **Cidades:** Edite a lista `CITIES`.
*   **FAQ:** Edite a lista `FAQ_ITEMS`.
*   **Termos Legais:** Atualize as strings `TERMS_OF_USE` e `PRIVACY_POLICY`.

Exemplo de edição de plano (`src/constants.ts`):

```typescript
export const PLANS: Plan[] = [
  {
    id: 1,
    speed: "300 MEGA", // Alterar velocidade
    price: "69,90",    // Alterar preço
    period: "/mês",
    features: ["Wi-Fi 6", "Instalação Grátis"],
    isRecommended: false
  },
  // ...
];
```

## 📂 Estrutura de Pastas

```
/
├── public/              # Assets estáticos (imagens, logos)
├── src/
│   ├── components/      # Componentes React (Header, Hero, Pricing, etc.)
│   ├── App.tsx          # Componente principal e orquestrador
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── types.ts         # Definições de Tipos TypeScript
│   └── constants.ts     # Dados estáticos e configurações
├── index.html           # HTML base com Tailwind CDN (modo simples)
└── package.json         # Dependências do projeto
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhoria ou encontrar bugs, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

1.  Faça um Fork do projeto
2.  Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`)
3.  Faça o Commit (`git commit -m 'Adicionando nova feature'`)
4.  Faça o Push (`git push origin feature/NovaFeature`)
5.  Abra um Pull Request

## 📄 Licença

Este projeto é proprietário e desenvolvido para uso da **Profiber Telecom**.

---

<div align="center">
  <p>Desenvolvido com 💙 por Hyper Tech</p>
</div>
