import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Ticket } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export function PromotionsAndReturnSection() {
  const { campaigns, returnOffers, linkWithAttribution } = useCatalog();
  const mainOffer = returnOffers[0];

  return (
    <section id="promocoes" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
      {/* Momentos que merecem voltar */}
      {mainOffer && (
        <div className="rounded-2xl bg-safari-gold-soft border border-amber-900/15 p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-semibold text-safari-gold inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              Momentos que merecem voltar · {mainOffer.scheduleLabel}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink text-balance">
              {mainOffer.title}
            </h2>

            <p className="text-base text-safari-muted max-w-2xl leading-relaxed">
              {mainOffer.subtitle}
            </p>

            <div className="pt-2 space-y-1">
              <p className="font-display font-bold text-base sm:text-lg text-safari-emerald">
                {mainOffer.benefitSummary}
              </p>
              <p className="text-xs text-safari-muted">{mainOffer.conditions}</p>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to={linkWithAttribution('/ingressos', { campanha: mainOffer.campaignCode })}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-safari-emerald hover:bg-safari-emerald-dark text-white font-display font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap"
            >
              Quero voltar à Safári
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      )}

      {/* Campanhas e Promoções Ativas */}
      <div className="space-y-6">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-safari-emerald">Campanhas e ações sazonais</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-safari-ink">
            Promoções em destaque
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {campaigns.map((promo) => (
            <article
              key={promo.id}
              className="bg-white rounded-2xl border border-emerald-950/10 p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono text-safari-muted">
                  Código {promo.code} · {promo.highlightLabel}
                </p>
                <h4 className="font-display text-xl font-bold text-safari-ink">{promo.name}</h4>
                <p className="text-sm text-safari-muted leading-relaxed">{promo.description}</p>
              </div>

              <Link
                to={linkWithAttribution('/ingressos', { campanha: promo.code })}
                className="h-11 rounded-xl border border-safari-emerald/25 text-safari-emerald hover:bg-safari-emerald-soft font-display font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <Ticket className="w-4 h-4 shrink-0" />
                Selecionar ingressos
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
