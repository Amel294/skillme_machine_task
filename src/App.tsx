import Dummytext from "./components/dummy text/Dummytext";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero-section/Hero";
import Navbar from "./components/navbar/Navbar";
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
      <div style={{ background: "var(--bg-app-gradient)" }} className="px-5 md:px-40">
        <TrendingGames />
        <Dummytext />
        <SpiderSection />
      </div>
      <Services />
      <div style={{ background: "var(--bg-app-gradient)" }} className="px-20">
        <RecentProjects />
        <SubscribeSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
