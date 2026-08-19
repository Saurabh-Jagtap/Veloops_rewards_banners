import './App.css'
import ContactBanner from './components/banners/ContactBanner/ContactBanner';
import DailyBonusBanner from './components/banners/DailyBonusBanner/DailyBonusBanner';
import FollowBanner from './components/banners/FollowBanner/FollowBanner';
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

      <div style={{ height: "24px" }} />
      <FollowBanner />

      <div style={{ height: "24px" }} />
      <DailyBonusBanner />
    </main>
  )
}

export default App
