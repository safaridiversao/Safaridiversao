import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'safari_lgpd_consent_v1';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        if (!localStorage.getItem(CONSENT_KEY)) {
          setVisible(true);
        }
      } catch {
        setVisible(false);
      }
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  function handleConsent(choice: 'essential' | 'all') {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Ignore storage failures
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      aria-label="Consentimento de cookies"
      className="fixed bottom-20 md:bottom-4 left-4 right-4 z-50 max-w-3xl mx-auto bg-white rounded-2xl border border-emerald-950/15 shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <p className="text-xs sm:text-sm text-safari-muted leading-relaxed">
        Utilizamos cookies essenciais para preservar sua unidade escolhida e sua navegação com segurança, conforme nossa{' '}
        <Link to="/privacidade" className="text-safari-emerald font-semibold underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          className="px-4 py-2.5 rounded-xl border border-emerald-950/15 text-xs font-semibold text-safari-ink hover:bg-safari-canvas transition-colors whitespace-nowrap"
        >
          Somente essenciais
        </button>
        <button
          type="button"
          onClick={() => handleConsent('all')}
          className="px-4 py-2.5 rounded-xl bg-safari-emerald hover:bg-safari-emerald-dark text-white text-xs font-semibold transition-colors whitespace-nowrap"
        >
          Aceitar todos
        </button>
      </div>
    </aside>
  );
}
