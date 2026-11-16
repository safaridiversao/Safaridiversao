import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Navigation, Phone, Ticket } from 'lucide-react';
import { useCatalog } from '../context/CatalogContext';
import { formatBRL } from '../utils/attribution';

export function UnitDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { units, tickets, linkWithAttribution, updateAttributionUnit } = useCatalog();
  const unit = units.find((u) => u.slug === slug);

  useEffect(() => {
    if (unit) {
      updateAttributionUnit(unit.code);
      document.title = `${unit.shoppingName} (${unit.city}-${unit.state}) | Safári Diversão`;
    }
    return () => {
      document.title = 'Safári Diversão – Parques Infantis em Shoppings pelo Brasil';
    };
  }, [unit, updateAttributionUnit]);

  if (!unit) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-safari-ink">
          Unidade não encontrada
        </h1>
        <p className="text-sm text-safari-muted">
          Não localizamos esta unidade no catálogo ativo. Escolha outro parque abaixo.
        </p>
        <Link
          to={linkWithAttribution('/unidades')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-safari-emerald text-white font-semibold text-sm"
        >
          Ver todas as unidades
        </Link>
      </div>
    );
  }

  const unitTickets = tickets.filter((t) => t.unitId === unit.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AmusementPark',
    name: unit.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: unit.address,
      addressLocality: unit.city,
      addressRegion: unit.state,
      addressCountry: 'BR',
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        to={linkWithAttribution('/unidades')}
        className="inline-flex items-center gap-2 text-sm font-semibold text-safari-emerald hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para todas as unidades
      </Link>

      <div className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden grid md:grid-cols-12">
        <div className="md:col-span-5 bg-safari-emerald-soft">
          <img
            src={unit.coverImageUrl}
            alt={`${unit.name} - ${unit.shoppingName}`}
            referrerPolicy="no-referrer"
            className="w-full h-full min-h-[260px] object-cover"
          />
        </div>

        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium text-safari-muted">
              {unit.city} · {unit.state} · {unit.themeName}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-safari-ink">
              {unit.name}
            </h1>
            <div className="space-y-2.5 pt-2 text-sm text-safari-muted">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
                <span>{unit.address}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
                <span>{unit.openingHours}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={linkWithAttribution('/ingressos', { unidade: unit.code })}
              className="h-12 px-6 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <Ticket className="w-4 h-4" />
              Comprar ingresso desta unidade
            </Link>
            <a
              href={unit.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded-xl border border-emerald-950/15 text-safari-ink font-semibold text-sm inline-flex items-center gap-2 hover:bg-safari-canvas transition-colors whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 text-safari-emerald" />
              Abrir no Google Maps
            </a>
            <a
              href={unit.whatsappContact}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded-xl border border-emerald-950/15 text-safari-ink font-semibold text-sm inline-flex items-center gap-2 hover:bg-safari-canvas transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-safari-emerald" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl border border-emerald-950/10 p-6 sm:p-8 space-y-5">
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold text-safari-ink">
            Opções de ingresso da unidade
          </h2>
          <p className="text-sm text-safari-muted">
            Valores demonstrativos iniciais administráveis pelo painel na Etapa 2.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {unitTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="rounded-xl border border-emerald-950/10 p-5 flex flex-col justify-between space-y-4 bg-safari-canvas"
            >
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-safari-muted">
                  {ticket.durationLabel} · {ticket.validDaysLabel}
                </p>
                <h3 className="font-display font-bold text-lg text-safari-ink">{ticket.title}</h3>
                <p className="text-xs sm:text-sm text-safari-muted">{ticket.description}</p>
                <p className="text-xs text-safari-emerald pt-1">{ticket.conditions}</p>
              </div>
              <div className="pt-2 flex items-center justify-between gap-2">
                <span className="font-display text-xl font-bold text-safari-ink tabular-nums">
                  {formatBRL(ticket.priceCents)}
                </span>
                <Link
                  to={linkWithAttribution('/ingressos', { unidade: unit.code })}
                  className="px-4 py-2 rounded-lg bg-safari-coral hover:bg-safari-coral-hover text-white text-xs font-display font-semibold whitespace-nowrap"
                >
                  Selecionar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
