import { ArrowRight } from "lucide-react";

import FollowVisual from "./FollowVisual";

import styles from "./FollowBanner.module.css";

const FollowBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="follow-banner-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            SOCIAL · 04 / 05
          </span>

          <h2 id="follow-banner-title">
            Follow.
            <br />
            Stay Connected.
          </h2>

          <p>
            Follow VELOOP Rewards for updates, campaigns,
            and opportunities to participate in eligible
            social rewards.
          </p>

          <div className={styles.valueRow}>
            <span className={styles.valueDot} />

            <span>
              Follow → Engage → Earn
            </span>
          </div>

          <a
            href="#"
            className={styles.cta}
          >
            <span>Explore Our Channels</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </a>
        </div>

        <FollowVisual />
      </div>
    </section>
  );
};

export default FollowBanner;