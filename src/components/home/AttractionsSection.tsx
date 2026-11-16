import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export function AttractionsSection() {
  const { attractions, linkWithAttribution } = useCatalog();

  return (
    <section id="atracoes" className="py-16 bg-white border-y border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold text-safari-coral">Diversão para todos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
              Brinquedos planejados para encantar e proteger
            </h2>
            <p className="text-sm sm:text-base text-safari-muted">
              Cada espaço une movimento, descoberta e protocolos visíveis de organização para toda a família aproveitar sem preocupações.
            </p>
          </div>

          <Link
            to={linkWithAttribution('/atracoes')}
            className="text-sm font-semibold text-safari-emerald hover:underline whitespace-nowrap shrink-0"
          >
            Ver detalhes de segurança
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {attractions.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-safari-canvas border border-emerald-950/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-safari-emerald-soft overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-safari-muted">
                    Faixa etária: {item.ageRange} · Acompanhamento de monitores
                  </p>
                  <h3 className="font-display text-xl font-bold text-safari-ink">{item.name}</h3>
                  <p className="text-sm text-safari-muted leading-relaxed">{item.description}</p>
                </div>
              </div>

              <ul className="px-6 pb-6 pt-3 border-t border-emerald-950/10 space-y-2">
                {item.safetyHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-xs sm:text-sm text-safari-ink flex items-start gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
