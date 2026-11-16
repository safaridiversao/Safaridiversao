import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

const NAV_ITEMS = [
  { label: 'Unidades', to: '/unidades' },
  { label: 'Atrações', to: '/atracoes' },
  { label: 'Ingressos', to: '/ingressos' },
  { label: 'Loja', to: '/loja' },
  { label: 'Parceiros', to: '/seja-parceiro' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { linkWithAttribution } = useCatalog();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <Link
          to={linkWithAttribution('/')}
          onClick={() => setMobileOpen(false)}
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-safari-emerald whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safari-emerald rounded"
        >
          Safári Diversão
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-safari-muted"
        >
          {NAV_ITEMS.map((item) => {
            const active =
              item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={linkWithAttribution(item.to)}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                  active
                    ? 'text-safari-emerald border-safari-emerald font-semibold'
                    : 'border-transparent hover:text-safari-ink hover:border-emerald-950/20'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={linkWithAttribution('/ingressos')}
            className="inline-flex items-center justify-center bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safari-coral"
          >
            Compre Agora
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-emerald-950/15 text-safari-ink hover:bg-safari-emerald-soft transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Menu mobile"
          className="lg:hidden bg-white border-t border-emerald-950/10 px-4 py-3 flex flex-col gap-1"
        >
          <Link
            to={linkWithAttribution('/')}
            onClick={() => setMobileOpen(false)}
            className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-semibold text-safari-ink hover:bg-safari-emerald-soft"
          >
            Início
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={linkWithAttribution(item.to)}
              onClick={() => setMobileOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-semibold text-safari-ink hover:bg-safari-emerald-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
