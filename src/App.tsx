import './App.css'
import ContactBanner from './components/banners/ContactBanner/ContactBanner';
import LeaderboardBanner from "./components/banners/LeaderboardBanner/LeaderboardBanner";
import WatchAdBanner from './components/banners/WatchAdBanner/WatchAdBanner';

function App() {

  return (
    <main>
      <LeaderboardBanner />

      <div style={{ height: "24px" }} />
      <WatchAdBanner />

      <div style={{ height: "24px" }} />
      <ContactBanner />
    </main>
  )
}

export default App
