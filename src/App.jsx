import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroCarousel from "./components/sections/HeroCarousel";
import StepBanner from "./components/sections/StepBanner";
import HotGames from "./components/sections/HotGames";
import PartnerAndMatches from "./components/sections/PartenerAndMatches";
import ReferralBanner from "./components/sections/ReferralBanner";
import Download from "./components/sections/download";

function App() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <main>
        <HeroCarousel />
        <StepBanner />
        <HotGames />
        <PartnerAndMatches />
        <ReferralBanner />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
