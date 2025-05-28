import Dummytext from "./components/dummy text/Dummytext";
import Navbar from "./components/navbar/Navbar";
import SpiderSection from "./components/spiderman/SpiderSection";
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
    </>
  );
}

export default App;
