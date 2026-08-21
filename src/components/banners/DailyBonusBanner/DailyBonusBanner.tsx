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
                        <span>DAILY BONUS</span>
                    </span>

                    <h2 id="daily-bonus-banner-title">
                        Claim your daily
                        <br />
                        <span>bonus.</span>
                    </h2>

                    <p>
                        Log in every day and keep your streak alive.
                        <br />
                        Better streaks, bigger rewards!
                    </p>

                    <a href="#" className={styles.cta}>
                        <span>Claim Bonus</span>

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