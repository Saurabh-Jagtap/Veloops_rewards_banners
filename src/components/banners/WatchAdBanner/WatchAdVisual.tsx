import { useEffect, useState } from "react";

import {
  Check,
  ChevronRight,
  Flame,
  Play,
  Settings,
} from "lucide-react";

import { watchAdData } from "../../../data/watchAd";
import styles from "./WatchAdBanner.module.css";
import WatchAdIllustration from "./WatchAdIllustration";

const WATCH_DURATION = 3000;

const WatchAdVisual = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsPlaying(false);
      setIsCompleted(true);
    }, WATCH_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      return;
    }

    setIsCompleted(false);
    setIsPlaying(true);
  };

  return (
    <div
      className={`${styles.visual} ${isPlaying ? styles.isPlaying : ""
        } ${isCompleted ? styles.isCompleted : ""}`}
      aria-label="Watch advertisement, complete the activity, and earn VE rewards"
    >
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />

      {/* =====================================================
          AD PLAYER
      ===================================================== */}

      <div className={styles.adScreen}>
        <div className={styles.adHeader}>
          <span>
            {isPlaying ? "Watching" : "Ad 1 of 3"}
          </span>

          <span className={styles.rewardBadge}>
            <span>Reward Boost</span>
            <span className={styles.rewardBadgeValue}>
              +10%
            </span>
          </span>
        </div>

        {/* ===================================================
            3D VIDEO ARTWORK
        =================================================== */}

        <div className={styles.adContent}>
          <div className={styles.adArt}>
            <WatchAdIllustration />

            <div className={styles.adControls}>
              <button
                type="button"
                className={styles.playButton}
                onClick={handlePlay}
                disabled={isPlaying}
                aria-label={
                  isPlaying
                    ? "Advertisement is playing"
                    : isCompleted
                      ? "Watch advertisement again"
                      : "Play advertisement"
                }
              >
                {isPlaying ? (
                  <span className={styles.playingIndicator}>
                    <span />
                    <span />
                    <span />
                  </span>
                ) : isCompleted ? (
                  <Check
                    size={24}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                ) : (
                  <Play
                    size={24}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Video timeline */}
        <div className={styles.videoMeta}>
          <Play
            size={9}
            fill="currentColor"
            className={styles.videoMetaIcon}
            aria-hidden="true"
          />

          <span>0:15</span>

          <div className={styles.adProgress}>
            <span />
          </div>

          <span>0:30</span>

          <Settings
            size={11}
            className={styles.videoMetaIcon}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* =====================================================
          EARNINGS PANEL
      ===================================================== */}

      <div className={styles.earningsPanel}>
        <div
          className={styles.earningsCoins}
          aria-hidden="true"
        >
          <div className={`${styles.coin} ${styles.coinOne}`}>
            VE
          </div>

          <div className={`${styles.coin} ${styles.coinTwo}`}>
            VE
          </div>

          <div className={`${styles.coin} ${styles.coinThree}`}>
            VE
          </div>
        </div>

        <span className={styles.earningsLabel}>
          Earnings
        </span>

        <div className={styles.earningsToday}>
          <div className={styles.earningsIcon}>
            <Flame
              size={16}
              fill="currentColor"
              aria-hidden="true"
            />
          </div>

          <div className={styles.earningsTodayText}>
            <strong>
              +{watchAdData.value} VE
            </strong>

            <span>Today&apos;s Earnings</span>
          </div>
        </div>

        <div
          className={`${styles.completedPill} ${isCompleted ? styles.completedPillActive : ""
            }`}
          aria-live="polite"
        >
          <span className={styles.completedPillIcon}>
            <Check aria-hidden="true" />
          </span>

          <span className={styles.completedPillText}>
            {isCompleted ? "Ad Completed!" : "Watch to unlock"}
          </span>

          <ChevronRight aria-hidden="true" />
        </div>

        <div className={styles.earningsDivider} />

        <div className={styles.earningsTotal}>
          <span>Total Earned This Week</span>

          <strong>
            12,450<em>VE</em>
          </strong>
        </div>

        <div className={styles.balanceRow}>
          <span>Available Balance</span>

          <button
            type="button"
            className={styles.balancePill}
          >
            <span>12,450 VE</span>

            <ChevronRight
              size={14}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>

  );
};

export default WatchAdVisual;