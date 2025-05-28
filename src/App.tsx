import DummyText from "./components/dummy text/Dummytext";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero-section/Hero";
import RecentProjects from "./components/recentProjects/RecentProjects";
import Services from "./components/services/Services";
import SpiderSection from "./components/spiderman/SpiderSection";
import SubscribeSection from "./components/subscribeSection/SubscribeSection";
import TrendingGames from "./components/TrendingGames/TrendingGames";

function App() {
  return (
    <>
      <div className="z-100">
        <Hero />
      </div>
      <div style={{ background: "var(--bg-app-gradient)" }} className="px-5 md:px-10 lg:px-40">
        <TrendingGames />
        <DummyText />
        <SpiderSection />
      </div>
      <Services />
      <div style={{ background: "var(--bg-app-gradient2)" }} className="px-5 md:px-10 lg:px-40">
        <RecentProjects />
        <SubscribeSection />
      </div>
      <div className="px-5 md:px-10 lg:px-40 bg-black">
      <Footer />
      </div>
    </>
  );
}

export default App;
