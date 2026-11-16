import { Link } from 'react-router-dom';
import { ShieldCheck, Ticket } from 'lucide-react';
import { AttractionsSection } from '../components/home/AttractionsSection';
import { useCatalog } from '../context/CatalogContext';

export function AttractionsPage() {
  const { linkWithAttribution } = useCatalog();

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 space-y-4">
        <p className="text-xs font-semibold text-safari-emerald">
          Padrão de segurança e acolhimento Safári Diversão
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-safari-ink max-w-3xl text-balance">
          Brinquedos seguros para as crianças e tranquilidade real para quem cuida
        </h1>
        <p className="text-base text-safari-muted max-w-2xl leading-relaxed">
          Nossas atrações em shoppings contam com higienização programada, materiais acolchoados, telas protetoras e monitores treinados para garantir diversão organizada.
        </p>
      </section>

      <AttractionsSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-emerald-950/10 p-6 space-y-2">
          <ShieldCheck className="w-6 h-6 text-safari-emerald" />
          <h2 className="font-display text-lg font-bold text-safari-ink">
            Controle de entrada e saída
          </h2>
          <p className="text-sm text-safari-muted leading-relaxed">
            Identificação vinculada ao adulto responsável na recepção da unidade, evitando saídas desacompanhadas.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-emerald-950/10 p-6 space-y-2">
          <ShieldCheck className="w-6 h-6 text-safari-emerald" />
          <h2 className="font-display text-lg font-bold text-safari-ink">
            Áreas separadas por faixa etária
          </h2>
          <p className="text-sm text-safari-muted leading-relaxed">
            Os pequenos de até 5 anos contam com espaço acolhedor e acompanhamento permitido dos responsáveis.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-emerald-950/10 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h2 className="font-display text-lg font-bold text-safari-ink">
              Pronto para escolher sua unidade?
            </h2>
            <p className="text-sm text-safari-muted">
              Confira os parques ativos perto da sua família e selecione seu passaporte.
            </p>
          </div>
          <Link
            to={linkWithAttribution('/ingressos')}
            className="h-11 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Ticket className="w-4 h-4" />
            Comprar ingresso
          </Link>
        </div>
      </section>
    </div>
  );
}
