import { Check } from "lucide-react";

export const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal para autônomos e pequenos estúdios",
    price: "79",
    highlight: false,
    badge: null,
    trialLabel: "Testar 7 dias grátis",
    features: [
      "1 profissional",
      "Agenda on-line ilimitada",
      "Lembretes por e-mail",
      "Perfil no mapa",
      "Suporte",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Para equipes que buscam crescimento constante",
    price: "179",
    highlight: true,
    badge: "Mais popular",
    trialLabel: "Testar 14 dias grátis",
    features: [
      "Até 5 profissionais",
      "Multi-serviços e combos",
      "Lembretes via SMS + Whatsapp",
      "Relatórios e dashboard avançado",
      "Fidelidade integrada",
      "Suporte prioritário",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprises",
    description: "Para redes e franquias",
    price: "349",
    highlight: false,
    badge: null,
    trialLabel: "Testar 7 dias grátis",
    features: [
      "Profissionais ilimitados",
      "Multi-unidades",
      "Painel corporativo",
      "Onboarding dedicado",
      "SLA garantido",
    ],
  },
];

export const footerPerks = [
  "Pagamento 100% seguro",
  "14 dias grátis sem cadastro de cartão de crédito",
  "Suporte em português",
];