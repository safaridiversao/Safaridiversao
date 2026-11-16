export interface SafariUnit {
  id: string;
  code: string;
  slug: string;
  name: string;
  themeName: string;
  shoppingName: string;
  state: string;
  city: string;
  address: string;
  openingHours: string;
  googleMapsUrl: string;
  whatsappContact: string;
  coverImageUrl: string;
  isActive: boolean;
}

export interface SafariAttraction {
  id: string;
  slug: string;
  name: string;
  ageRange: string;
  description: string;
  safetyHighlights: string[];
  imageUrl: string;
  featured: boolean;
}

export interface TicketOption {
  id: string;
  unitId: string;
  title: string;
  durationLabel: string;
  description: string;
  conditions: string;
  priceCents: number;
  validDaysLabel: string;
  isActive: boolean;
}

export interface PromoCampaign {
  id: string;
  code: string;
  name: string;
  description: string;
  highlightLabel: string;
  isActive: boolean;
  isDemo: boolean;
}

export interface ReturnOffer {
  id: string;
  title: string;
  subtitle: string;
  scheduleLabel: string;
  benefitSummary: string;
  conditions: string;
  campaignCode: string;
  isActive: boolean;
  isDemo: boolean;
}

export interface ToyProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  priceCents: number;
  imageUrl: string;
  shopeeUrl: string;
  isActive: boolean;
  isDemo: boolean;
}

export interface AttributionParams {
  afiliado: string | null;
  unidade: string | null;
  campanha: string | null;
}
