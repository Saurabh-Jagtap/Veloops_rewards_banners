import {
  ArrowRight,
  Check,
  Coins,
  Play,
} from "lucide-react";

import WatchAdVisual from "./WatchAdVisual";

import styles from "./WatchAdBanner.module.css";

const WatchAdBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="watch-ad-title"
    >
      <div className={styles.content}>
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className={styles.copy}>
          <div className={styles.sectionNumber}>
            <span className={styles.number}>02</span>

            <span className={styles.eyebrow}>
              Watch &amp; Earn
            </span>
          </div>

          <h2 id="watch-ad-title">
            Watch ads.
            <br />
            <span>Earn VE.</span>
          </h2>

          <p className={styles.description}>
            Watch short ads and get rewarded instantly.
            <br />
            Every second counts.
          </p>

          {/* =================================================
              EARNING FLOW
          ================================================= */}

          <div
            className={styles.earningFlow}
            aria-label="Watch, complete, and earn rewards"
          >
            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <Play
                  size={19}
                  fill="currentColor"
                  aria-hidden="true"
                />
              </div>

              <span className={styles.flowLabel}>
                Watch
              </span>

              <span className={styles.flowSubLabel}>
                Ad
              </span>
            </div>

            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <Check
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <span className={styles.flowLabel}>
                Complete
              </span>

              <span className={styles.flowSubLabel}>
                Ad
              </span>
            </div>

            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <Coins
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <span className={styles.flowLabel}>
                Earn
              </span>

              <span className={styles.flowSubLabel}>
                Rewards
              </span>
            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <button
            type="button"
            className={styles.cta}
          >
            <span>Watch &amp; Earn Now</span>

            <ArrowRight
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}

        <WatchAdVisual />
      </div>
    </section>
  );
};

export default WatchAdBanner;