import heroFamilyImg from '../assets/images/hero_safari_family_1794761848182.jpg';
import ballPitImg from '../assets/images/attraction_ball_pit_1794761848876.jpg';
import trampolineImg from '../assets/images/attraction_trampoline_1794761849457.jpg';
import inflatableImg from '../assets/images/attraction_inflatable_1794761849671.jpg';
import toyPlushImg from '../assets/images/toy_safari_plush_1794761849153.jpg';
import type {
  PromoCampaign,
  ReturnOffer,
  SafariAttraction,
  SafariUnit,
  TicketOption,
  ToyProduct,
} from '../types/safari';

export const HERO_IMAGE = heroFamilyImg;

export const INITIAL_UNITS: SafariUnit[] = [
  {
    id: 'unit-sjc-colinas',
    code: 'SJCCOLINAS01',
    slug: 'sao-jose-dos-campos-colinas',
    name: 'Safári Diversão · Colinas Shopping',
    themeName: 'Parque do Capitão Pop It',
    shoppingName: 'Colinas Shopping',
    state: 'SP',
    city: 'São José dos Campos',
    address: 'Av. São João, 2200 — Jardim das Colinas, São José dos Campos - SP',
    openingHours: 'Seg a Sáb: 10h às 22h · Dom e Feriados: 12h às 20h',
    googleMapsUrl: 'https://maps.google.com/?q=Colinas+Shopping+Sao+Jose+dos+Campos',
    whatsappContact: 'https://wa.me/5519999990000',
    coverImageUrl: inflatableImg,
    isActive: true,
  },
  {
    id: 'unit-cps-iguatemi',
    code: 'CPSIGUATEMI01',
    slug: 'campinas-iguatemi',
    name: 'Safári Diversão · Iguatemi Campinas',
    themeName: 'Circuito Aventura Safári',
    shoppingName: 'Shopping Iguatemi Campinas',
    state: 'SP',
    city: 'Campinas',
    address: 'Av. Iguatemi, 777 — Vila Brandina, Campinas - SP',
    openingHours: 'Seg a Sáb: 10h às 22h · Dom e Feriados: 12h às 20h',
    googleMapsUrl: 'https://maps.google.com/?q=Shopping+Iguatemi+Campinas',
    whatsappContact: 'https://wa.me/5519999990000',
    coverImageUrl: ballPitImg,
    isActive: true,
  },
  {
    id: 'unit-rec-riomar',
    code: 'RECRIOMAR01',
    slug: 'recife-riomar',
    name: 'Safári Diversão · RioMar Recife',
    themeName: 'Parque Polvo Pintor',
    shoppingName: 'RioMar Recife',
    state: 'PE',
    city: 'Recife',
    address: 'Av. República do Líbano, 251 — Pina, Recife - PE',
    openingHours: 'Seg a Sáb: 09h às 22h · Dom e Feriados: 12h às 21h',
    googleMapsUrl: 'https://maps.google.com/?q=RioMar+Recife',
    whatsappContact: 'https://wa.me/5581999990000',
    coverImageUrl: trampolineImg,
    isActive: true,
  },
  {
    id: 'unit-mcz-parque',
    code: 'MACEIO01',
    slug: 'maceio-parque-shopping',
    name: 'Safári Diversão · Parque Shopping Maceió',
    themeName: 'Trampolim & Safári Kids',
    shoppingName: 'Parque Shopping Maceió',
    state: 'AL',
    city: 'Maceió',
    address: 'Av. Comendador Gustavo Paiva, 5945 — Cruz das Almas, Maceió - AL',
    openingHours: 'Seg a Sáb: 10h às 22h · Dom e Feriados: 12h às 21h',
    googleMapsUrl: 'https://maps.google.com/?q=Parque+Shopping+Maceio',
    whatsappContact: 'https://wa.me/5582999990000',
    coverImageUrl: inflatableImg,
    isActive: true,
  },
  {
    id: 'unit-ce-maracanau',
    code: 'MARACANAU01',
    slug: 'maracanau-north-shopping',
    name: 'Safári Diversão · North Shopping Maracanaú',
    themeName: 'Expedição Selva Kids',
    shoppingName: 'North Shopping Maracanaú',
    state: 'CE',
    city: 'Maracanaú',
    address: 'Av. Carlos Jereissati, 100 — Centro, Maracanaú - CE',
    openingHours: 'Seg a Sáb: 10h às 22h · Dom e Feriados: 13h às 21h',
    googleMapsUrl: 'https://maps.google.com/?q=North+Shopping+Maracanau',
    whatsappContact: 'https://wa.me/5585999990000',
    coverImageUrl: ballPitImg,
    isActive: true,
  },
  {
    id: 'unit-sp-santana',
    code: 'SPSANTANA01',
    slug: 'sao-paulo-santana-parque',
    name: 'Safári Diversão · Santana Parque Shopping',
    themeName: 'Mundo José Totoy',
    shoppingName: 'Santana Parque Shopping',
    state: 'SP',
    city: 'São Paulo',
    address: 'Rua Conselheiro Moreira de Barros, 2780 — Lauzane Paulista, São Paulo - SP',
    openingHours: 'Seg a Sáb: 10h às 22h · Dom e Feriados: 12h às 20h',
    googleMapsUrl: 'https://maps.google.com/?q=Santana+Parque+Shopping',
    whatsappContact: 'https://wa.me/5511999990000',
    coverImageUrl: trampolineImg,
    isActive: true,
  },
];

export const INITIAL_ATTRACTIONS: SafariAttraction[] = [
  {
    id: 'attr-ball-pit',
    slug: 'mega-piscina-de-bolinhas',
    name: 'Mega Piscina de Bolinhas',
    ageRange: '1 a 12 anos',
    description:
      'Ambiente acolhedor com milhares de bolinhas higienizadas periodicamente, escorregadores macios e área separada para os bebês explorarem com calma.',
    safetyHighlights: [
      'Higienização periódica e piso emborrachado',
      'Monitores treinados em tempo integral',
      'Espaço baby exclusivo com acompanhamento dos pais',
    ],
    imageUrl: ballPitImg,
    featured: true,
  },
  {
    id: 'attr-trampoline',
    slug: 'trampolim-parque',
    name: 'Trampolim Parque',
    ageRange: '3 a 12 anos',
    description:
      'Camas elásticas de padrão profissional cercadas por redes de proteção e piscina de cubos de espuma para gastar energia com total segurança.',
    safetyHighlights: [
      'Redes de proteção de alta resistência',
      'Regras claras de salto e controle de capacidade',
      'Meias antiderrapantes recomendadas para maior firmeza',
    ],
    imageUrl: trampolineImg,
    featured: true,
  },
  {
    id: 'attr-inflatable',
    slug: 'circuito-aventura-safari',
    name: 'Circuito Aventura Safári',
    ageRange: '2 a 12 anos',
    description:
      'Escaladas temáticas, pontes suspensas acolchoadas e escorregadores vibrantes que estimulam coordenação motora, coragem e imaginação.',
    safetyHighlights: [
      'Estruturas revestidas em espuma de alta densidade',
      'Visibilidade aberta para os pais acompanharem de fora',
      'Controle rigoroso de entrada e saída na recepção',
    ],
    imageUrl: inflatableImg,
    featured: true,
  },
];

export const INITIAL_TICKETS: TicketOption[] = INITIAL_UNITS.flatMap((unit) => [
  {
    id: `tkt-${unit.code}-30`,
    unitId: unit.id,
    title: 'Passaporte Aventura · 30 minutos',
    durationLabel: '30 min',
    description: 'Ideal para uma pausa divertida durante o passeio da família no shopping.',
    conditions: 'Menores de 5 anos entram acompanhados por um adulto responsável sem custo adicional.',
    priceCents: 4500,
    validDaysLabel: 'Todos os dias',
    isActive: true,
  },
  {
    id: `tkt-${unit.code}-60`,
    unitId: unit.id,
    title: 'Passaporte Explorador · 60 minutos',
    durationLabel: '60 min',
    description: 'Tempo estendido para aproveitar piscina de bolinhas, circuito e brinquedos sem pressa.',
    conditions: 'Válido para uso individual na unidade selecionada · PCD tem direito à meia-entrada.',
    priceCents: 6500,
    validDaysLabel: 'Todos os dias',
    isActive: true,
  },
  {
    id: `tkt-${unit.code}-livre`,
    unitId: unit.id,
    title: 'Passaporte Dia Inteiro · Tempo Livre',
    durationLabel: 'Dia inteiro',
    description: 'Diversão completa sem contar os minutos no relógio durante o funcionamento da unidade.',
    conditions: 'Entrada única contínua na data escolhida · Consulte disponibilidade em feriados.',
    priceCents: 9500,
    validDaysLabel: 'Seg a Dom',
    isActive: true,
  },
]);

export const INITIAL_CAMPAIGNS: PromoCampaign[] = [
  {
    id: 'camp-ferias',
    code: 'FERIAS2027',
    name: 'Temporada de Férias Safári',
    description:
      'Condições especiais para famílias que planejam as férias escolares nos shoppings participantes.',
    highlightLabel: 'Férias Escolares · Dados demonstrativos',
    isActive: true,
    isDemo: true,
  },
  {
    id: 'camp-seg-qui',
    code: 'SEGUNDAQUINTA',
    name: 'Semana Leve · Segunda a Quinta',
    description:
      'Mais tranquilidade, menos filas e minutos bônus configuráveis pelo administrador para visitas durante a semana.',
    highlightLabel: 'Segunda a Quinta · Dados demonstrativos',
    isActive: true,
    isDemo: true,
  },
  {
    id: 'camp-aniversario',
    code: 'ANIVERSARIO',
    name: 'Mês do Aniversariante',
    description:
      'Benefícios especiais para celebrar a infância em um ambiente organizado, seguro e inesquecível.',
    highlightLabel: 'Celebrações · Dados demonstrativos',
    isActive: true,
    isDemo: true,
  },
];

export const INITIAL_RETURN_OFFERS: ReturnOffer[] = [
  {
    id: 'ret-seg-qui',
    title: 'A diversão não precisa acontecer só uma vez!',
    subtitle:
      'De segunda a quinta-feira os parques ficam mais tranquilos e sua família aproveita benefícios exclusivos para voltar sempre.',
    scheduleLabel: 'Segunda a Quinta-feira',
    benefitSummary: 'Bônus de tempo extra ou condição especial na segunda visita (configurável no painel)',
    conditions:
      'Conteúdo demonstrativo inicial: as regras reais, percentuais e unidades participantes serão gerenciados no Painel Administrativo.',
    campaignCode: 'SEGUNDAQUINTA',
    isActive: true,
    isDemo: true,
  },
];

export const INITIAL_PRODUCTS: ToyProduct[] = [
  {
    id: 'prod-leao-safari',
    name: 'Pelúcia Leãozinho Explorador',
    category: 'Pelúcias Oficiais',
    description: 'Pelúcia antialérgica super macia inspirada no mascote da expedição Safári Diversão.',
    priceCents: 6990,
    imageUrl: toyPlushImg,
    shopeeUrl: 'https://shopee.com.br',
    isActive: true,
    isDemo: true,
  },
  {
    id: 'prod-elefante-safari',
    name: 'Pelúcia Elefantinho da Savana',
    category: 'Pelúcias Oficiais',
    description: 'Companheiro fofo e seguro com costura reforçada para crianças a partir de 12 meses.',
    priceCents: 6490,
    imageUrl: toyPlushImg,
    shopeeUrl: 'https://shopee.com.br',
    isActive: true,
    isDemo: true,
  },
  {
    id: 'prod-mochila-safari',
    name: 'Mochila Aventura Safári Kids',
    category: 'Acessórios',
    description: 'Mochila leve e resistente em lona suave para levar garrafinha, meias e lanchinhos ao parque.',
    priceCents: 11990,
    imageUrl: toyPlushImg,
    shopeeUrl: 'https://shopee.com.br',
    isActive: true,
    isDemo: true,
  },
  {
    id: 'prod-kit-explorador',
    name: 'Kit Mini Explorador (Pelúcia + Mochila)',
    category: 'Kits Presente',
    description: 'Combo especial para presentear aniversariantes com a lembrança oficial da Safári.',
    priceCents: 16990,
    imageUrl: toyPlushImg,
    shopeeUrl: 'https://shopee.com.br',
    isActive: true,
    isDemo: true,
  },
];
