import { useMemo, useState } from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { useCatalog } from '../context/CatalogContext';
import { formatBRL } from '../utils/attribution';

export function ShopPage() {
  const { products } = useCatalog();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );

  const filtered = useMemo(
    () =>
      selectedCategory === 'Todos'
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [products, selectedCategory]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="space-y-3 max-w-2xl">
        <p className="text-xs font-semibold text-safari-emerald">
          Loja Safári · Redirecionamento oficial Shopee
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
          Loja de Brinquedos Safári Diversão
        </h1>
        <p className="text-sm sm:text-base text-safari-muted leading-relaxed">
          Selecione a categoria abaixo para conhecer os produtos e concluir sua compra diretamente na loja oficial da Safári na Shopee.
        </p>
      </div>

      {/* Filtros interativos */}
      <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-emerald-950/10 rounded-xl">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-safari-emerald text-white'
                : 'text-safari-muted hover:text-safari-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="rounded-2xl bg-white border border-emerald-950/10 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] bg-safari-canvas overflow-hidden border-b border-emerald-950/10">
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
                <h2 className="font-display text-lg font-bold text-safari-ink">{product.name}</h2>
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
  );
}
