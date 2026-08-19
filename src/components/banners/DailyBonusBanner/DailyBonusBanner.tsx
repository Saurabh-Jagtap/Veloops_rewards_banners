import { ArrowRight } from "lucide-react";

import DailyBonusVisual from "./DailyBonusVisual";

import styles from "./DailyBonusBanner.module.css";

const DailyBonusBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="daily-bonus-banner-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            DAILY BONUS · 05 / 05
          </span>

          <h2 id="daily-bonus-banner-title">
            Your Daily
            <br />
            Bonus Is Waiting.
          </h2>

          <p>
            Check in regularly and claim your available
            daily bonus before the opportunity resets.
          </p>

          <div className={styles.streak}>
            <span className={styles.streakDot} />
            <span>7 DAY REWARD STREAK</span>
          </div>

          <a
            href="#"
            className={styles.cta}
          >
            <span>Claim Bonus</span>

            <ArrowRight
              size={19}
              aria-hidden="true"
            />
          </a>
        </div>

        <DailyBonusVisual />
      </div>
    </section>
  );
};

export default DailyBonusBanner;