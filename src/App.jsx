import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroCarousel from './components/sections/HeroCarousel';
import HotGames from './components/sections/HotGames';
import ReferralBanner from './components/sections/ReferralBanner';
import Ambassadors from './components/sections/Ambassadors';
import Sponsorships from './components/sections/Sponsorships';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <main>
        <HeroCarousel />
        <HotGames />
        <ReferralBanner />
        <Ambassadors />
        <Sponsorships />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;
