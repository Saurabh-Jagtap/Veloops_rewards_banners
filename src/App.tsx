import './App.css'
import LeaderboardBanner from "./components/banners/LeaderboardBanner/LeaderboardBanner";
import WatchAdBanner from './components/banners/WatchAdBanner/WatchAdBanner';

function App() {

  return (
    <main>
      <LeaderboardBanner />
      <div style={{ height: "24px" }} />

      <WatchAdBanner />
    </main>
  )
}

export default App
