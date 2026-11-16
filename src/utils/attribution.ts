import type { AttributionParams } from '../types/safari';

const STORAGE_KEY = 'safari_attribution_v1';

export function readAttributionFromSearch(search: string): AttributionParams {
  const params = new URLSearchParams(search);
  const afiliado = params.get('afiliado')?.trim().toUpperCase() || null;
  const unidade = params.get('unidade')?.trim().toUpperCase() || null;
  const campanha = params.get('campanha')?.trim().toUpperCase() || null;
  return { afiliado, unidade, campanha };
}

export function loadStoredAttribution(): AttributionParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { afiliado: null, unidade: null, campanha: null };
    return JSON.parse(raw) as AttributionParams;
  } catch {
    return { afiliado: null, unidade: null, campanha: null };
  }
}

export function saveStoredAttribution(next: AttributionParams): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

export function buildAttributedPath(
  pathname: string,
  attribution: AttributionParams,
  overrides?: Partial<AttributionParams>
): string {
  const merged: AttributionParams = {
    afiliado: overrides?.afiliado !== undefined ? overrides.afiliado : attribution.afiliado,
    unidade: overrides?.unidade !== undefined ? overrides.unidade : attribution.unidade,
    campanha: overrides?.campanha !== undefined ? overrides.campanha : attribution.campanha,
  };

  const params = new URLSearchParams();
  if (merged.afiliado) params.set('afiliado', merged.afiliado);
  if (merged.unidade) params.set('unidade', merged.unidade);
  if (merged.campanha) params.set('campanha', merged.campanha);

  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
