import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  MapPin,
  MoreHorizontal,
  ShoppingBag,
  ShieldCheck,
  Ticket,
  Users,
  X,
} from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export function FooterMobileNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();
  const { linkWithAttribution } = useCatalog();

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMoreOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [moreOpen]);

  const isHome = pathname === '/';
  const isUnits = pathname.startsWith('/unidades');
  const isTickets = pathname.startsWith('/ingressos');
  const isShop = pathname.startsWith('/loja');
  const isMoreActive =
    moreOpen ||
    pathname.startsWith('/atracoes') ||
    pathname.startsWith('/seja-parceiro') ||
    pathname.startsWith('/privacidade') ||
    pathname.startsWith('/termos');

  return (
    <>
      {moreOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMoreOpen(false)}
          aria-hidden="true"
        />
      )}

      {moreOpen && (
        <div
          role="dialog"
          aria-label="Mais seções"
          className="fixed bottom-16 inset-x-0 z-50 md:hidden bg-white border-t border-emerald-950/15 rounded-t-2xl shadow-xl px-4 pt-4 pb-5 space-y-3"
        >
          <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
            <p className="font-display font-bold text-base text-safari-ink">Mais seções</p>
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              aria-label="Fechar menu mais seções"
              className="w-10 h-10 rounded-xl border border-emerald-950/10 flex items-center justify-center text-safari-ink hover:bg-safari-canvas"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav aria-label="Atalhos adicionais" className="grid grid-cols-1 gap-1.5">
            <Link
              to={linkWithAttribution('/atracoes')}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-3 text-sm font-semibold text-safari-ink hover:bg-safari-emerald-soft"
            >
              <ShieldCheck className="w-4 h-4 text-safari-emerald shrink-0" />
              Nossas atrações e segurança
            </Link>
            <Link
              to={linkWithAttribution('/loja')}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-3 text-sm font-semibold text-safari-ink hover:bg-safari-emerald-soft"
            >
              <ShoppingBag className="w-4 h-4 text-safari-emerald shrink-0" />
              Loja de brinquedos
            </Link>
            <Link
              to={linkWithAttribution('/seja-parceiro')}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-3 text-sm font-semibold text-safari-ink hover:bg-safari-emerald-soft"
            >
              <Users className="w-4 h-4 text-safari-emerald shrink-0" />
              Seja nosso parceiro (Afiliados)
            </Link>
            <div className="pt-2 mt-1 border-t border-emerald-950/10 flex items-center gap-4 px-3 text-xs text-safari-muted">
              <Link to={linkWithAttribution('/privacidade')} className="py-2 hover:text-safari-ink">
                Política de privacidade
              </Link>
              <span aria-hidden="true">·</span>
              <Link to={linkWithAttribution('/termos')} className="py-2 hover:text-safari-ink">
                Termos de uso
              </Link>
            </div>
          </nav>
        </div>
      )}

      <nav
        aria-label="Navegação inferior mobile"
        className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-emerald-950/10 px-2"
      >
        <div className="grid grid-cols-5 items-center h-16 max-w-md mx-auto">
          <Link
            to={linkWithAttribution('/')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
              isHome ? 'text-safari-emerald' : 'text-safari-muted hover:text-safari-ink'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Início</span>
          </Link>

          <Link
            to={linkWithAttribution('/unidades')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
              isUnits ? 'text-safari-emerald' : 'text-safari-muted hover:text-safari-ink'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Unidades</span>
          </Link>

          <div className="flex items-center justify-center">
            <Link
              to={linkWithAttribution('/ingressos')}
              className={`-mt-4 h-13 px-3.5 rounded-2xl flex flex-col items-center justify-center gap-0.5 shadow-md font-display font-bold text-[11px] whitespace-nowrap shrink-0 transition-colors ${
                isTickets
                  ? 'bg-safari-coral-hover text-white ring-2 ring-safari-coral/30'
                  : 'bg-safari-coral hover:bg-safari-coral-hover text-white'
              }`}
            >
              <Ticket className="w-5 h-5" />
              <span>Ingresso</span>
            </Link>
          </div>

          <Link
            to={linkWithAttribution('/loja')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
              isShop ? 'text-safari-emerald' : 'text-safari-muted hover:text-safari-ink'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Loja</span>
          </Link>

          <button
            type="button"
            onClick={() => setMoreOpen((prev) => !prev)}
            aria-expanded={moreOpen}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
              isMoreActive ? 'text-safari-emerald' : 'text-safari-muted hover:text-safari-ink'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span>Mais</span>
          </button>
        </div>
      </nav>
    </>
  );
}
