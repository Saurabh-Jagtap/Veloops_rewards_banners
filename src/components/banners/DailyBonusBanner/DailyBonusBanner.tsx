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
                        <strong>05</strong>
                        <span className={styles.eyebrowDot} aria-hidden="true">·</span>
                        <span>DAILY BONUS</span>
                    </span>

                    <h2 id="daily-bonus-banner-title">
                        Your Daily Bonus
                        <br />
                        <span>Is Waiting.</span>
                    </h2>

                    <p>
                        Claim your available reward each day before it resets.
                        Come back consistently to build your streak and earn more.
                    </p>

                    <span className={styles.signal}>
                        <span className={styles.signalDot} aria-hidden="true" />
                        7 Day Reward Streak
                    </span>

                    <a href="#" className={styles.cta}>
                        <span>Claim Your Bonus</span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2}
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