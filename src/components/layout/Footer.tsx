import { Link } from 'react-router-dom';
import { useCatalog } from '../../context/CatalogContext';

export function Footer() {
  const { linkWithAttribution } = useCatalog();

  return (
    <footer className="bg-safari-ink text-white border-t border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-3">
          <p className="font-display text-2xl font-bold text-white">Safári Diversão</p>
          <p className="text-sm text-emerald-100/80 leading-relaxed max-w-xs">
            A diversão segura dos pequenos é a tranquilidade de quem ama e cuida!
          </p>
        </div>

        <div className="space-y-2.5 text-sm">
          <p className="font-display font-semibold text-white">Parques e Lazer</p>
          <ul className="space-y-2 text-emerald-100/75">
            <li>
              <Link to={linkWithAttribution('/unidades')} className="hover:text-white transition-colors">
                Nossas unidades
              </Link>
            </li>
            <li>
              <Link to={linkWithAttribution('/atracoes')} className="hover:text-white transition-colors">
                Nossas atrações
              </Link>
            </li>
            <li>
              <Link to={linkWithAttribution('/ingressos')} className="hover:text-white transition-colors">
                Compre seu ingresso
              </Link>
            </li>
            <li>
              <Link to={linkWithAttribution('/loja')} className="hover:text-white transition-colors">
                Loja de brinquedos
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2.5 text-sm">
          <p className="font-display font-semibold text-white">Parcerias e Legal</p>
          <ul className="space-y-2 text-emerald-100/75">
            <li>
              <Link to={linkWithAttribution('/seja-parceiro')} className="hover:text-white transition-colors">
                Seja nosso parceiro
              </Link>
            </li>
            <li>
              <Link to={linkWithAttribution('/privacidade')} className="hover:text-white transition-colors">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link to={linkWithAttribution('/termos')} className="hover:text-white transition-colors">
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2.5 text-sm">
          <p className="font-display font-semibold text-white">Contato e Canais</p>
          <ul className="space-y-2 text-emerald-100/75">
            <li>
              <a
                href="https://instagram.com/safaridiversao"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram · @safaridiversao
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5519999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp · Atendimento às famílias
              </a>
            </li>
            <li>contato@safaridiversao.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-emerald-100/65">
          <p>© {new Date().getFullYear()} Safári Diversão. Todos os direitos reservados.</p>
          <p>Adequação à LGPD · Não coletamos dados desnecessários de crianças.</p>
        </div>
      </div>
    </footer>
  );
}
