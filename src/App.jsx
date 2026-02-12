import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroCarousel from './components/sections/HeroCarousel';
import StepBanner from './components/sections/StepBanner';
import HotGames from './components/sections/HotGames';
import ReferralBanner from './components/sections/ReferralBanner';
import Ambassadors from './components/sections/Ambassadors';
import Sponsorships from './components/sections/Sponsorships';

function App() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <main>
        <HeroCarousel />
        <StepBanner />
        <HotGames />
        <ReferralBanner />
        <Ambassadors />
        <Sponsorships />
      </main>
      <Footer />
    </div>
  );
}

export default App;
