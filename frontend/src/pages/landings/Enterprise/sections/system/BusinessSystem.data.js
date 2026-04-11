import {
  CalendarClock,
  Users,
  HeartHandshake,
  Smartphone,
  LayoutGrid,
  MessageCircle,
  Clock,
  CreditCard,
  BellRing,
  BarChart2,
  Star,
  Gift,
  Wallet,
  QrCode,
  Receipt,
  Layers,
  CalendarCheck,
  Repeat,
  Globe,
} from "lucide-react";

export const tabs = [
  {
    value: "tab1",
    triggerIcon: CalendarClock,
    trigger: "Automatize a agenda",
    title: "Sua agenda trabalha enquanto você atende",
    subtitle:
      "Esqueça o trabalho manual para confirmar horários. O Servmap abre sua agenda 24 horas por dia para que os clientes agendem sozinhos o serviço. E detalhe: você só precisa atender.",
    topics: [
      {
        icon: MessageCircle,
        topicTitle: "Confirmação instantânea",
        topicSubtitle:
          "Cada agendamento gera uma confirmação automática para o cliente, sem você precisar responder nada.",
      },
      {
        icon: Clock,
        topicTitle: "Controle de tempo",
        topicSubtitle:
          "Defina quanto tempo cada serviço ocupa e o sistema impede conflitos de horário automaticamente.",
      },
      {
        icon: CreditCard,
        topicTitle: "Cobrança no agendamento",
        topicSubtitle:
          "Solicite pagamento parcial ou total para confirmar o agendamento e não perca mais faturamento.",
      },
      {
        icon: BellRing,
        topicTitle: "Alerta de presença",
        topicSubtitle:
          "O sistema avisa o cliente horas antes do compromisso e registra a confirmação de presença.",
      },
    ],
  },
  {
    value: "tab2",
    triggerIcon: Users,
    trigger: "Gerencie a equipe",
    title: "Cada profissional no lugar certo, na hora certa",
    subtitle:
      "Distribua serviços, controle agendas individuais e acompanhe a performance de cada membro da sua equipe em um único painel.",
    topics: [
      {
        icon: Users,
        topicTitle: "Perfis individuais",
        topicSubtitle:
          "Crie um perfil para cada profissional com seus serviços, horários e disponibilidade próprios.",
      },
      {
        icon: CalendarCheck,
        topicTitle: "Agenda por colaborador",
        topicSubtitle:
          "Visualize e gerencie a agenda de toda a equipe de forma separada ou consolidada.",
      },
      {
        icon: BarChart2,
        topicTitle: "Relatório de desempenho",
        topicSubtitle:
          "Acompanhe atendimentos realizados, faturamento gerado e taxa de cancelamento por profissional.",
      },
      {
        icon: Repeat,
        topicTitle: "Substituição ágil",
        topicSubtitle:
          "Remaneje agendamentos entre profissionais com poucos cliques em caso de ausências.",
      },
    ],
  },
  {
    value: "tab3",
    triggerIcon: HeartHandshake,
    trigger: "Fidelize clientes",
    title: "Clientes que voltam sem você precisar ligar",
    subtitle:
      "Construa relacionamentos duradouros com automações de retenção, histórico completo e programas de fidelidade que funcionam sozinhos.",
    topics: [
      {
        icon: Star,
        topicTitle: "Programa de pontos",
        topicSubtitle:
          "Recompense clientes frequentes automaticamente com pontos que podem ser trocados por descontos ou serviços.",
      },
      {
        icon: Repeat,
        topicTitle: "Reagendamento automático",
        topicSubtitle:
          "O sistema sugere o próximo agendamento ao final de cada atendimento, mantendo o cliente sempre na agenda.",
      },
      {
        icon: MessageCircle,
        topicTitle: "Mensagens de retorno",
        topicSubtitle:
          "Envie lembretes personalizados para clientes que não aparecem há algum tempo e traga-os de volta.",
      },
      {
        icon: Gift,
        topicTitle: "Ofertas exclusivas",
        topicSubtitle:
          "Crie promoções segmentadas para aniversariantes ou clientes inativos e aumente o ticket médio.",
      },
    ],
  },
  {
    value: "tab4",
    triggerIcon: Smartphone,
    trigger: "Receba online",
    title: "Receba antes mesmo de o cliente chegar",
    subtitle:
      "Integre meios de pagamento digitais diretamente no fluxo de agendamento e elimine inadimplência e cancelamentos de última hora.",
    topics: [
      {
        icon: Wallet,
        topicTitle: "Múltiplos meios de pagamento",
        topicSubtitle:
          "Aceite Pix, cartão de crédito e débito no momento do agendamento, sem maquininha.",
      },
      {
        icon: QrCode,
        topicTitle: "Link de pagamento",
        topicSubtitle:
          "Gere e envie links de cobrança personalizados para qualquer cliente com um clique.",
      },
      {
        icon: Receipt,
        topicTitle: "Controle financeiro",
        topicSubtitle:
          "Visualize entradas, repasses e pendências em um painel financeiro claro e atualizado em tempo real.",
      },
      {
        icon: CreditCard,
        topicTitle: "Sinal de confirmação",
        topicSubtitle:
          "Exija um valor de entrada para confirmar o agendamento e reduza faltas em até 80%.",
      },
    ],
  },
  {
    value: "tab5",
    triggerIcon: LayoutGrid,
    trigger: "Outras funcionalidades",
    title: "Tudo que seu negócio precisa em um só lugar",
    subtitle:
      "Além das funções principais, o Servmap oferece recursos extras para você ter mais controle, visibilidade e profissionalismo no dia a dia.",
    topics: [
      {
        icon: Globe,
        topicTitle: "Página pública do negócio",
        topicSubtitle:
          "Tenha um link profissional para compartilhar com clientes, com seus serviços, preços e agenda integrada.",
      },
      {
        icon: BarChart2,
        topicTitle: "Relatórios e métricas",
        topicSubtitle:
          "Tome decisões com base em dados reais de atendimento, faturamento e comportamento dos clientes.",
      },
      {
        icon: Layers,
        topicTitle: "Catálogo de serviços",
        topicSubtitle:
          "Organize e exiba seus serviços com descrição, duração e preço para facilitar a escolha do cliente.",
      },
      {
        icon: BellRing,
        topicTitle: "Notificações em tempo real",
        topicSubtitle:
          "Receba alertas instantâneos de novos agendamentos, cancelamentos e pagamentos diretamente no app.",
      },
    ],
  },
];