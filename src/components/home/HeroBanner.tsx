import { Link } from 'react-router-dom';
import { MapPin, Ticket } from 'lucide-react';
import { HERO_IMAGE } from '../../data/catalog';
import { useCatalog } from '../../context/CatalogContext';

export function HeroBanner() {
  const { linkWithAttribution, units } = useCatalog();

  const statesCount = new Set(units.map((u) => u.state)).size;

  return (
    <section className="bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-safari-emerald tracking-wide">
              Parques infantis em shoppings pelo Brasil · Segurança e acolhimento para famílias
            </p>

            <h1 className="font-display text-[clamp(2.15rem,4vw,3.45rem)] font-bold leading-[1.1] text-safari-ink text-balance">
              Grandes aventuras começam com pequenos momentos!
            </h1>

            <p className="text-base sm:text-lg text-safari-muted leading-relaxed max-w-xl">
              Um mundo de diversão para as crianças e tranquilidade para toda a família.
            </p>

            <p className="text-sm font-medium text-safari-ink/80 italic">
              &ldquo;A diversão segura dos pequenos é a tranquilidade de quem ama e cuida!&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link
                to={linkWithAttribution('/ingressos')}
                className="inline-flex items-center justify-center gap-2 bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold px-7 py-3.5 rounded-xl transition-colors duration-150 whitespace-nowrap"
              >
                <Ticket className="w-4 h-4 shrink-0" />
                Compre seu ingresso
              </Link>

              <a
                href="#unidades"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-safari-emerald-soft text-safari-emerald border border-safari-emerald/25 font-display font-semibold px-6 py-3.5 rounded-xl transition-colors duration-150 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                Encontre uma Safári perto de você
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] sm:min-h-[380px] rounded-2xl overflow-hidden bg-safari-emerald-soft border border-emerald-950/10">
              <img
                src={HERO_IMAGE}
                alt="Pais sorrindo enquanto acompanham os filhos brincando em uma unidade Safári Diversão"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6 text-white">
                <p className="font-display font-semibold text-lg">
                  Brincadeira organizada com monitoramento contínuo
                </p>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  Espaços planejados por faixa etária dentro dos principais shoppings do país.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de pilares abaixo da dobra do hero */}
        <div className="mt-10 pt-8 border-t border-emerald-950/10 grid sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="font-display font-bold text-lg text-safari-ink">Alegria que encanta</p>
            <p className="text-sm text-safari-muted">
              Atrações temáticas coloridas que despertam curiosidade, movimento e imaginação.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-display font-bold text-lg text-safari-ink">Segurança em cada detalhe</p>
            <p className="text-sm text-safari-muted">
              Pisos acolchoados, telas de proteção, controle de acesso e monitores treinados.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-display font-bold text-lg text-safari-ink">
              Tranquilidade para os pais
            </p>
            <p className="text-sm text-safari-muted">
              {units.length} unidades em {statesCount} estados nesta base inicial, com visibilidade aberta do parque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
