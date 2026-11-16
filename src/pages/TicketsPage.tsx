import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Minus, Plus, ShieldCheck } from 'lucide-react';
import { useCatalog } from '../context/CatalogContext';
import { formatBRL } from '../utils/attribution';

export function TicketsPage() {
  const { units, tickets, attribution, updateAttributionUnit, linkWithAttribution } = useCatalog();

  const initialUnit = units.find((u) => u.code === attribution.unidade) ?? null;

  const [selectedCity, setSelectedCity] = useState(initialUnit?.city ?? '');
  const [selectedUnitId, setSelectedUnitId] = useState(initialUnit?.id ?? '');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  useEffect(() => {
    if (attribution.unidade) {
      const matched = units.find((u) => u.code === attribution.unidade);
      if (matched) {
        setSelectedUnitId(matched.id);
        setSelectedCity(matched.city);
      }
    }
  }, [attribution.unidade, units]);

  const cities = useMemo(
    () => Array.from(new Set(units.map((u) => u.city))).sort(),
    [units]
  );

  const availableUnits = useMemo(
    () => (selectedCity ? units.filter((u) => u.city === selectedCity) : units),
    [units, selectedCity]
  );

  const selectedUnit = units.find((u) => u.id === selectedUnitId) ?? null;
  const unitTickets = useMemo(
    () => tickets.filter((t) => t.unitId === selectedUnitId),
    [tickets, selectedUnitId]
  );

  const selectedItems = useMemo(
    () =>
      unitTickets
        .filter((t) => (quantities[t.id] ?? 0) > 0)
        .map((t) => ({ ticket: t, qty: quantities[t.id] })),
    [unitTickets, quantities]
  );

  const totalCents = selectedItems.reduce(
    (acc, item) => acc + item.ticket.priceCents * item.qty,
    0
  );

  function handleUnitSelect(unitId: string) {
    setSelectedUnitId(unitId);
    setQuantities({});
    setCheckoutNotice(false);
    const unit = units.find((u) => u.id === unitId);
    if (unit) {
      setSelectedCity(unit.city);
      updateAttributionUnit(unit.code);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-safari-emerald">
          Compra de ingressos · Otimizada para celular
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
          Escolha sua unidade e garanta seus ingressos
        </h1>
        <p className="text-sm sm:text-base text-safari-muted">
          Selecione a cidade, o shopping e os passaportes desejados.
        </p>
      </div>

      {/* Passo 1 e 2: Cidade e Unidade */}
      <section className="bg-white rounded-2xl border border-emerald-950/10 p-6 space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ticket-city" className="block text-xs font-semibold text-safari-ink mb-1.5">
              01. Cidade
            </label>
            <select
              id="ticket-city"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedUnitId('');
                setQuantities({});
                setCheckoutNotice(false);
              }}
              className="w-full h-12 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm font-medium text-safari-ink"
            >
              <option value="">Todas as cidades</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ticket-unit" className="block text-xs font-semibold text-safari-ink mb-1.5">
              02. Unidade Safári
            </label>
            <select
              id="ticket-unit"
              value={selectedUnitId}
              onChange={(e) => handleUnitSelect(e.target.value)}
              className="w-full h-12 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm font-medium text-safari-ink"
            >
              <option value="">Selecione o shopping...</option>
              {availableUnits.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.shoppingName} ({u.city} - {u.state})
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedUnit && (
          <div className="rounded-xl bg-safari-emerald-soft px-4 py-3 text-xs sm:text-sm text-safari-emerald flex items-start gap-2.5">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{selectedUnit.shoppingName}</p>
              <p className="text-safari-ink/80">{selectedUnit.address}</p>
            </div>
          </div>
        )}
      </section>

      {/* Passo 3: Opções de Ingressos */}
      {selectedUnit && (
        <section className="bg-white rounded-2xl border border-emerald-950/10 p-6 space-y-4">
          <div className="space-y-1">
            <h2 className="font-display text-xl font-bold text-safari-ink">
              03. Opções de ingresso
            </h2>
            <p className="text-xs text-safari-muted">
              Valores iniciais demonstrativos para estruturação do catálogo da unidade.
            </p>
          </div>

          <div className="space-y-3">
            {unitTickets.map((ticket) => {
              const qty = quantities[ticket.id] ?? 0;
              return (
                <div
                  key={ticket.id}
                  className="rounded-xl border border-emerald-950/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-safari-muted">
                      {ticket.durationLabel} · {ticket.validDaysLabel}
                    </p>
                    <h3 className="font-display text-lg font-bold text-safari-ink">
                      {ticket.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-safari-muted">{ticket.description}</p>
                    <p className="text-xs text-safari-emerald">{ticket.conditions}</p>
                    <p className="font-display text-lg font-bold text-safari-ink pt-1 tabular-nums">
                      {formatBRL(ticket.priceCents)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [ticket.id]: Math.max(0, (prev[ticket.id] ?? 0) - 1),
                        }))
                      }
                      aria-label={`Remover ${ticket.title}`}
                      className="w-11 h-11 rounded-xl border border-emerald-950/15 flex items-center justify-center hover:bg-safari-canvas transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-7 text-center font-display font-bold text-lg tabular-nums">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [ticket.id]: (prev[ticket.id] ?? 0) + 1,
                        }))
                      }
                      aria-label={`Adicionar ${ticket.title}`}
                      className="w-11 h-11 rounded-xl bg-safari-emerald hover:bg-safari-emerald-dark text-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Resumo do Pedido */}
      {selectedItems.length > 0 && (
        <section className="bg-white rounded-2xl border border-emerald-950/10 p-6 space-y-5">
          <h2 className="font-display text-xl font-bold text-safari-ink">
            04. Resumo do pedido
          </h2>

          <div className="space-y-2 border-b border-emerald-950/10 pb-4">
            {selectedItems.map(({ ticket, qty }) => (
              <div key={ticket.id} className="flex justify-between text-sm">
                <span className="text-safari-ink">
                  {qty}x {ticket.title}
                </span>
                <span className="font-semibold tabular-nums">
                  {formatBRL(ticket.priceCents * qty)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-safari-muted">Total estimado</span>
            <span className="font-display text-2xl font-bold text-safari-coral tabular-nums">
              {formatBRL(totalCents)}
            </span>
          </div>

          <p className="text-xs text-safari-muted flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-safari-emerald shrink-0" />
            Atribuição preservada na sessão ·{' '}
            <span className="font-mono">
              afiliado={attribution.afiliado ?? 'direto'} / unidade={attribution.unidade ?? '—'} / campanha={attribution.campanha ?? 'padrao'}
            </span>
          </p>

          <button
            type="button"
            onClick={() => setCheckoutNotice(true)}
            className="w-full h-13 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-bold text-base transition-colors"
          >
            Continuar para finalização do pedido
          </button>

          {checkoutNotice && (
            <div className="rounded-xl bg-safari-emerald-soft border border-safari-emerald/25 p-4 text-sm text-safari-ink space-y-1.5">
              <p className="font-semibold text-safari-emerald flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Pré-reserva pronta para integração de pagamento (Etapa 4)
              </p>
              <p className="text-xs sm:text-sm text-safari-muted leading-relaxed">
                Nesta Etapa 1, o catálogo e a seleção de ingressos estão ativos com preservação dos identificadores de origem. A gravação do pedido no banco de dados e o checkout com gateway de pagamento serão ativados nas Etapas 2 e 4, conforme o cronograma definido.
              </p>
              <Link
                to={linkWithAttribution('/unidades')}
                className="inline-block text-xs font-semibold text-safari-emerald underline pt-1"
              >
                Conferir detalhes das unidades
              </Link>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
