import { ArrowRight } from "lucide-react";

import WatchAdVisual from "./WatchAdVisual";

import styles from "./WatchAdBanner.module.css";

const WatchAdBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="watch-ad-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            Watch &amp; Earn · 02 / 05
          </span>

          <h2 id="watch-ad-title">
            Watch Ads.
            <br />
            Earn VEs.
          </h2>

          <p>
            Watch eligible advertisements and earn VEs
            for completing available ad activities.
          </p>

          <p className={styles.note}>
            Demo reward values are illustrative and may
            vary by eligible activity.
          </p>

          <button
            type="button"
            className={styles.cta}
          >
            <span>Watch &amp; Earn</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </button>
        </div>

        <WatchAdVisual />
      </div>
    </section>
  );
};

export default WatchAdBanner;