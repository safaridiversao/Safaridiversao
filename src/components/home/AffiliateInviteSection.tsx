import { Link } from 'react-router-dom';
import { ArrowRight, Link2, Megaphone } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export function AffiliateInviteSection() {
  const { linkWithAttribution } = useCatalog();

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl bg-safari-emerald text-white p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <p className="text-xs font-semibold text-emerald-100 inline-flex items-center gap-2">
            <Megaphone className="w-4 h-4" />
            Programa de Afiliados e Influenciadores
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-balance">
            Divulgue a Safári Diversão e receba links exclusivos por unidade e campanha
          </h2>

          <p className="text-sm sm:text-base text-emerald-50/90 max-w-2xl leading-relaxed">
            Criadores de conteúdo familiar podem se cadastrar para gerar links inteligentes com rastreamento de cliques, vendas confirmadas e comissões transparentes.
          </p>

          <div className="pt-2 flex flex-wrap gap-6 text-xs sm:text-sm text-emerald-100">
            <span className="inline-flex items-center gap-2">
              <Link2 className="w-4 h-4 shrink-0" />
              Link exclusivo com código permanente
            </span>
            <span>Rastreamento por unidade e campanha</span>
            <span>Aprovação e acompanhamento pela equipe Safári</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
          <Link
            to={linkWithAttribution('/seja-parceiro')}
            className="w-full lg:w-72 h-13 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-base inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Quero ser parceiro
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
