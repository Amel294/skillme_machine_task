import Dummytext from "./components/dummy text/Dummytext";
import Navbar from "./components/navbar/Navbar";
import RecentProjects from "./components/recentProjects/RecentProjects";
import Services from "./components/services/Services";
import SpiderSection from "./components/spiderman/SpiderSection";
import SubscribeSection from "./components/subscribeSection/SubscribeSection";
import TrendingGames from "./components/TrendingGames/TrendingGames";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--bg-app-gradient)' }}>
        <TrendingGames />
        <Dummytext />
        <SpiderSection />
      </div>
      <Services/>
      <RecentProjects/>
      <SubscribeSection/>
    </>
  );
}

export default App;
