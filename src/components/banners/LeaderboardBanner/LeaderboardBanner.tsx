import { ArrowRight } from "lucide-react";

import LeaderboardVisual from "./LeaderboardVisual";
import styles from "./LeaderboardBanner.module.css";

const LeaderboardBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="leaderboard-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            Leaderboard · This Week · Demo
          </span>

          <h2 id="leaderboard-title">
            Compete.
            <br />
            Climb. Earn More.
          </h2>

          <p>
            Complete activities, earn rewards, and climb
            the leaderboard to improve your ranking.
          </p>

          <button
            type="button"
            className={styles.cta}
          >
            <span>View Leaderboard</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </button>
        </div>

        <LeaderboardVisual />
      </div>
    </section>
  );
};

export default LeaderboardBanner;