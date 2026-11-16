import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import {
  INITIAL_ATTRACTIONS,
  INITIAL_CAMPAIGNS,
  INITIAL_PRODUCTS,
  INITIAL_RETURN_OFFERS,
  INITIAL_TICKETS,
  INITIAL_UNITS,
} from '../data/catalog';
import type {
  AttributionParams,
  PromoCampaign,
  ReturnOffer,
  SafariAttraction,
  SafariUnit,
  TicketOption,
  ToyProduct,
} from '../types/safari';
import {
  buildAttributedPath,
  loadStoredAttribution,
  readAttributionFromSearch,
  saveStoredAttribution,
} from '../utils/attribution';

interface CatalogContextValue {
  units: SafariUnit[];
  attractions: SafariAttraction[];
  tickets: TicketOption[];
  campaigns: PromoCampaign[];
  returnOffers: ReturnOffer[];
  products: ToyProduct[];
  attribution: AttributionParams;
  updateAttributionUnit: (unitCode: string | null) => void;
  linkWithAttribution: (pathname: string, overrides?: Partial<AttributionParams>) => string;
}

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [attribution, setAttribution] = useState<AttributionParams>(() => loadStoredAttribution());

  useEffect(() => {
    const incoming = readAttributionFromSearch(location.search);
    if (incoming.afiliado || incoming.unidade || incoming.campanha) {
      setAttribution((prev) => {
        const next: AttributionParams = {
          afiliado: incoming.afiliado ?? prev.afiliado,
          unidade: incoming.unidade ?? prev.unidade,
          campanha: incoming.campanha ?? prev.campanha,
        };
        saveStoredAttribution(next);
        return next;
      });
    }
  }, [location.search]);

  function updateAttributionUnit(unitCode: string | null) {
    setAttribution((prev) => {
      const next: AttributionParams = {
        ...prev,
        unidade: unitCode ? unitCode.toUpperCase() : null,
      };
      saveStoredAttribution(next);
      return next;
    });
  }

  function linkWithAttribution(pathname: string, overrides?: Partial<AttributionParams>) {
    return buildAttributedPath(pathname, attribution, overrides);
  }

  const value: CatalogContextValue = {
    units: INITIAL_UNITS.filter((u) => u.isActive),
    attractions: INITIAL_ATTRACTIONS,
    tickets: INITIAL_TICKETS.filter((t) => t.isActive),
    campaigns: INITIAL_CAMPAIGNS.filter((c) => c.isActive),
    returnOffers: INITIAL_RETURN_OFFERS.filter((r) => r.isActive),
    products: INITIAL_PRODUCTS.filter((p) => p.isActive),
    attribution,
    updateAttributionUnit,
    linkWithAttribution,
  };

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error('useCatalog deve ser usado dentro de CatalogProvider');
  return ctx;
}
