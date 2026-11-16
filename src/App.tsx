import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CatalogProvider } from './context/CatalogContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FooterMobileNav } from './components/layout/FooterMobileNav';
import { CookieConsentBanner } from './components/layout/CookieConsentBanner';
import { HomePage } from './pages/HomePage';
import { UnitsPage } from './pages/UnitsPage';
import { UnitDetailPage } from './pages/UnitDetailPage';
import { AttractionsPage } from './pages/AttractionsPage';
import { TicketsPage } from './pages/TicketsPage';
import { ShopPage } from './pages/ShopPage';
import { PartnerPage } from './pages/PartnerPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CatalogProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-safari-canvas text-safari-ink pb-16 md:pb-0">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unidades" element={<UnitsPage />} />
              <Route path="/unidades/:slug" element={<UnitDetailPage />} />
              <Route path="/atracoes" element={<AttractionsPage />} />
              <Route path="/ingressos" element={<TicketsPage />} />
              <Route path="/loja" element={<ShopPage />} />
              <Route path="/seja-parceiro" element={<PartnerPage />} />
              <Route path="/privacidade" element={<PrivacyPage />} />
              <Route path="/termos" element={<TermsPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <FooterMobileNav />
          <CookieConsentBanner />
        </div>
      </CatalogProvider>
    </BrowserRouter>
  );
}
