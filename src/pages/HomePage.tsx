import { HeroBanner } from '../components/home/HeroBanner';
import { UnitFinderSection } from '../components/home/UnitFinderSection';
import { AttractionsSection } from '../components/home/AttractionsSection';
import { PromotionsAndReturnSection } from '../components/home/PromotionsAndReturnSection';
import { ToyStoreSection } from '../components/home/ToyStoreSection';
import { AffiliateInviteSection } from '../components/home/AffiliateInviteSection';

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <UnitFinderSection limit={6} />
      <AttractionsSection />
      <PromotionsAndReturnSection />
      <ToyStoreSection limit={4} />
      <AffiliateInviteSection />
    </>
  );
}
