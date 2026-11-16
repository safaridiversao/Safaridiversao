import { Link } from 'react-router-dom';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';
import { formatBRL } from '../../utils/attribution';

export function ToyStoreSection({ limit }: { limit?: number }) {
  const { products, linkWithAttribution } = useCatalog();
  const displayed = limit ? products.slice(0, limit) : products;

  return (
    <section id="loja" className="py-16 bg-white border-y border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold text-safari-emerald">
              Loja Safári · Integração com Shopee Oficial
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
              Brinquedos e lembranças para levar para casa
            </h2>
            <p className="text-sm sm:text-base text-safari-muted">
              Produtos selecionados com compra segura direcionada para a loja oficial da Safári Diversão na Shopee.
            </p>
          </div>

          {limit && (
            <Link
              to={linkWithAttribution('/loja')}
              className="text-sm font-semibold text-safari-emerald hover:underline whitespace-nowrap shrink-0"
            >
              Ver catálogo completo
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl bg-safari-canvas border border-emerald-950/10 overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div>
                <div className="aspect-[4/3] bg-white overflow-hidden border-b border-emerald-950/10">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-safari-muted">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg font-bold text-safari-ink">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-safari-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 space-y-3">
                <p className="font-display text-xl font-bold text-safari-ink tabular-nums">
                  {formatBRL(product.priceCents)}
                  {product.isDemo && (
                    <span className="ml-2 font-sans text-[11px] font-normal text-safari-muted">
                      (Ilustrativo)
                    </span>
                  )}
                </p>

                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  Comprar na Shopee
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
