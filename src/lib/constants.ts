// ============================================================
// CONFIGURAÇÕES DO CORRESPONDENTE — EDITE AQUI
// ============================================================

export const CONTACT = {
  name: "CF Crédito e Financiamento", // EDITÁVEL
  whatsapp: "5541998299962", // EDITÁVEL — formato: 55 + DDD + número
  whatsappDisplay: "(41) 9 9829-9962", // EDITÁVEL
  phone: "(41) 9 9829-9962", // EDITÁVEL
  email: "contato@cfconsultoria.com.br", // EDITÁVEL
  address: "Rua Coronel Pedro Scherer Sobrinho, 271", // EDITÁVEL
  city: "Curitiba", // EDITÁVEL
  state: "Paraná",
  workingHours: "Segunda a Sexta, das 9h às 18h", // EDITÁVEL
  instagram: "https://instagram.com/cfcreditoefinanciamento", // EDITÁVEL
  facebook: "https://facebook.com/", // EDITÁVEL
  linkedin: "https://linkedin.com/fabriciocalilfadel", // EDITÁVEL
};

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  `Olá! Vim pelo site e gostaria de saber mais sobre as linhas de crédito da Fomento Paraná.`;

// ============================================================
// LINHAS DE CRÉDITO
// ============================================================

export interface CreditLine {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  target: string;
  minValue: string;
  maxValue: string;
  term: string;
  grace: string;
  purpose: string;
  guarantees: string;
  highlight?: string;
  badge?: string;
  color: string;
}

export const CREDIT_LINES: CreditLine[] = [
  {
    id: "microcredito-facil",
    name: "Microcrédito Fácil",
    shortName: "Microcrédito Fácil",
    icon: "Banknote",
    description:
      "Crédito acessível para empreendedores individuais e microempresas que precisam de capital para crescer.",
    target:
      "Empreendedores informais, MEIs e microempresas com faturamento anual de até R$ 360 mil",
    minValue: "R$ 1.000",
    maxValue: "R$ 20.000",
    term: "Até 24 meses",
    grace: "Até 3 meses",
    purpose: "Capital de giro ou investimento na implantação, manutenção ou ampliação do negócio",
    guarantees: "Aval, alienação fiduciária ou Fundo de Aval (FAMPE/Sebrae)",
    highlight: "Opção de garantia via Fundo de Aval FAMPE/Sebrae — sem necessidade de bens como garantia",
    badge: "Mais Acessível",
    color: "blue",
  },
  {
    id: "banco-da-mulher",
    name: "Banco da Mulher Paranaense",
    shortName: "Banco da Mulher",
    icon: "Heart",
    description:
      "Linha especial com taxas reduzidas para mulheres empreendedoras que querem expandir seus negócios.",
    target:
      "Mulheres empreendedoras com mínimo de 10% de participação societária na empresa",
    minValue: "R$ 1.000",
    maxValue: "R$ 500.000",
    term: "Até 60 meses",
    grace: "Até 24 meses",
    purpose: "Capital de giro e/ou investimento fixo",
    guarantees: "Aval, alienação fiduciária, hipoteca ou Fundo de Aval",
    highlight: "Taxas de juros reduzidas e condições especiais para mulheres empreendedoras",
    badge: "Condições Especiais",
    color: "pink",
  },
  {
    id: "capital-de-giro",
    name: "Capital de Giro",
    shortName: "Capital de Giro",
    icon: "RefreshCw",
    description:
      "Reforce o fluxo de caixa da sua empresa e mantenha as operações rodando com tranquilidade.",
    target: "Micro, pequenas e médias empresas estabelecidas no Paraná",
    minValue: "R$ 10.000",
    maxValue: "R$ 1.500.000",
    term: "Até 60 meses",
    grace: "3 a 24 meses",
    purpose: "Necessidades de capital de giro para manutenção das atividades operacionais",
    guarantees: "Aval, alienação fiduciária, hipoteca ou Fundo de Aval",
    color: "green",
  },
  {
    id: "maquinas-equipamentos",
    name: "Investimento Fixo — Máquinas, Equipamentos e Veículos",
    shortName: "Máquinas e Equipamentos",
    icon: "Settings",
    description:
      "Adquira máquinas, equipamentos e veículos para aumentar a produtividade do seu negócio.",
    target: "Empresas de micro a grande porte no Paraná",
    minValue: "R$ 10.000",
    maxValue: "R$ 1.500.000",
    term: "Até 120 meses",
    grace: "Até 24 meses",
    purpose: "Aquisição de máquinas, equipamentos, veículos e outros bens permanentes",
    guarantees: "Alienação fiduciária do bem financiado, aval ou hipoteca",
    badge: "Prazo Estendido",
    color: "indigo",
  },
  {
    id: "obras-civis",
    name: "Investimento Fixo — Ampliação, Construção e Reforma",
    shortName: "Obras e Construção",
    icon: "Building2",
    description:
      "Construa, amplie ou reforme sua estrutura física com o maior prazo disponível.",
    target: "Empresas de qualquer porte com necessidade de obras civis",
    minValue: "R$ 10.000",
    maxValue: "R$ 1.500.000",
    term: "Até 240 meses",
    grace: "Até 36 meses",
    purpose: "Ampliação, construção, reforma e adequação de instalações físicas",
    guarantees: "Hipoteca do imóvel, alienação fiduciária ou aval",
    highlight: "Maior prazo de pagamento disponível — até 240 meses (20 anos)",
    badge: "Maior Prazo",
    color: "orange",
  },
  {
    id: "turismo",
    name: "Turismo",
    shortName: "Turismo",
    icon: "MapPin",
    description:
      "Linha dedicada ao setor de turismo paranaense, com condições especiais para quem está no ramo.",
    target:
      "Bares, restaurantes, hotéis, pousadas, transportadoras turísticas, artesanatos e demais empresas do setor",
    minValue: "R$ 5.000",
    maxValue: "R$ 500.000",
    term: "Até 60 meses",
    grace: "Até 12 meses",
    purpose: "Capital de giro e investimento fixo para empresas do setor de turismo",
    guarantees: "Aval, alienação fiduciária ou hipoteca",
    color: "teal",
  },
  {
    id: "inovacao",
    name: "Inovação (Inovacred/Finep)",
    shortName: "Inovação",
    icon: "Lightbulb",
    description:
      "Financie projetos de inovação, pesquisa e desenvolvimento para modernizar seu negócio.",
    target: "Empresas que desenvolvem atividades que contribuem para geração de conhecimento e inovação",
    minValue: "R$ 20.000",
    maxValue: "R$ 1.500.000",
    term: "Até 96 meses",
    grace: "Até 24 meses",
    purpose:
      "Obras civis, equipamentos, patenteamento, participação em capital de empresas de base tecnológica",
    guarantees: "Alienação fiduciária, hipoteca, aval ou penhor",
    badge: "Inovação",
    color: "purple",
  },
  {
    id: "energia-renovavel",
    name: "Energia Renovável",
    shortName: "Energia Renovável",
    icon: "Zap",
    description:
      "Invista em energia solar ou eólica, reduza custos e contribua com o meio ambiente.",
    target:
      "Empresas e empreendedores que desejam instalar sistemas de energia renovável",
    minValue: "R$ 5.000",
    maxValue: "R$ 1.500.000",
    term: "Até 120 meses",
    grace: "Até 24 meses",
    purpose:
      "Sistemas fotovoltaicos (até 375kW), aerogeradores (até 100kW) e aquecedores solares",
    guarantees: "Alienação fiduciária do sistema, aval ou hipoteca",
    highlight: "Reduza a conta de energia e valorize seu imóvel com energia solar",
    badge: "Sustentável",
    color: "yellow",
  },
];

// ============================================================
// DEPOIMENTOS
// ============================================================

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Silva", // EDITÁVEL
    role: "Proprietária de salão de beleza", // EDITÁVEL
    city: "Curitiba, PR", // EDITÁVEL
    text: "Com o apoio do correspondente, consegui acessar o Banco da Mulher e ampliar meu salão. O processo foi muito mais simples do que eu imaginava!", // EDITÁVEL
    rating: 5,
  },
  {
    id: 2,
    name: "João Pereira", // EDITÁVEL
    role: "Microempreendedor — Alimentação", // EDITÁVEL
    city: "Londrina, PR", // EDITÁVEL
    text: "Tentei direto no banco e não consegui. Com o correspondente, em poucos dias minha documentação estava pronta e o crédito aprovado. Recomendo muito!", // EDITÁVEL
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa", // EDITÁVEL
    role: "Proprietária de loja de roupas", // EDITÁVEL
    city: "Maringá, PR", // EDITÁVEL
    text: "O atendimento personalizado fez toda a diferença. Me explicaram cada linha de crédito e escolhemos juntos a melhor opção para minha situação.", // EDITÁVEL
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Mendes", // EDITÁVEL
    role: "Dono de oficina mecânica", // EDITÁVEL
    city: "Cascavel, PR", // EDITÁVEL
    text: "Comprei equipamentos novos com o crédito de investimento fixo. As parcelas cabem no meu fluxo de caixa e já estou colhendo os frutos do investimento.", // EDITÁVEL
    rating: 5,
  },
];

// ============================================================
// ESTATÍSTICAS
// ============================================================

export const STATS = [
  { label: "Anos de Experiência", value: 10, suffix: "+" }, // EDITÁVEL
  { label: "Clientes Atendidos", value: 500, suffix: "+" }, // EDITÁVEL
  { label: "Milhões em Crédito", value: 15, suffix: "M+" }, // EDITÁVEL
  { label: "Taxa de Aprovação", value: 92, suffix: "%" }, // EDITÁVEL
];

// ============================================================
// STEPS — COMO FUNCIONA
// ============================================================

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Entre em Contato",
    description:
      "Fale conosco pelo WhatsApp ou formulário. Sem burocracia, sem custo.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Análise do Perfil",
    description:
      "Entendemos sua necessidade, seu negócio e sua situação financeira.",
    icon: "Search",
  },
  {
    step: 3,
    title: "Escolha da Linha",
    description:
      "Indicamos a linha de crédito mais adequada para o seu caso específico.",
    icon: "CheckCircle",
  },
  {
    step: 4,
    title: "Documentação",
    description:
      "Auxiliamos na montagem completa do dossiê e envio para a Fomento Paraná.",
    icon: "FileText",
  },
  {
    step: 5,
    title: "Aprovação e Crédito",
    description:
      "Acompanhamos a análise até a liberação do crédito na sua conta.",
    icon: "DollarSign",
  },
];

// ============================================================
// VANTAGENS
// ============================================================

export const ADVANTAGES = [
  {
    icon: "UserCheck",
    title: "Atendimento Personalizado",
    description:
      "Você tem um especialista dedicado ao seu processo, do início ao fim, sem ser atendido por um robô ou triagem genérica.",
  },
  {
    icon: "Zap",
    title: "Agilidade no Processo",
    description:
      "Conhecemos os requisitos de cada linha e montamos sua documentação de forma correta na primeira vez, evitando retrabalho.",
  },
  {
    icon: "GraduationCap",
    title: "Orientação Especializada",
    description:
      "Explicamos cada linha de crédito, taxas e condições em linguagem clara, para você tomar a melhor decisão.",
  },
  {
    icon: "Shield",
    title: "Serviço Gratuito",
    description:
      "O correspondente bancário não cobra nenhum valor do cliente. Nossa remuneração vem da instituição financeira.",
  },
];
