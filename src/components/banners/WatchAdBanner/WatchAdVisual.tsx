import { useEffect, useState } from "react";

import {
  Check,
  Coins,
  Play,
  Sparkles,
  Wallet,
} from "lucide-react";

import { watchAdData } from "../../../data/watchAd";

import styles from "./WatchAdBanner.module.css";

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
      className={`${styles.visual} ${
        isPlaying ? styles.isPlaying : ""
      } ${isCompleted ? styles.isCompleted : ""}`}
      aria-label="Watch advertisement, complete the activity, and earn VE rewards"
    >
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />

      {/* Decorative sparkles */}
      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleOne}`}
        aria-hidden="true"
      />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleTwo}`}
        aria-hidden="true"
      />

      {/* Advertisement player */}
      <div className={styles.adScreen}>
        <div className={styles.adHeader}>
          <span>
            {isPlaying ? "WATCHING" : "ADVERTISEMENT"}
          </span>

          <span className={styles.adDot} />
        </div>

        <div className={styles.adContent}>
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
            ) : (
              <Play
                fill="currentColor"
                aria-hidden="true"
              />
            )}
          </button>

          <span className={styles.adMessage}>
            {isPlaying
              ? "WATCHING AD"
              : isCompleted
                ? "AD COMPLETE"
                : "WATCH TO EARN"}
          </span>
        </div>

        <div
          className={styles.adProgress}
          aria-hidden="true"
        >
          <span />
        </div>
      </div>

      {/* Completion state */}
      <div
        className={styles.completedCard}
        aria-live="polite"
      >
        <div className={styles.completedIcon}>
          <Check aria-hidden="true" />
        </div>

        <div>
          <span className={styles.completedLabel}>
            Activity
          </span>

          <strong>Ad Completed</strong>
        </div>
      </div>

      {/* Reward coins */}
      <div
        className={styles.coins}
        aria-hidden="true"
      >
        <div className={`${styles.coin} ${styles.coinOne}`}>
          <Coins />
        </div>

        <div className={`${styles.coin} ${styles.coinTwo}`}>
          <Coins />
        </div>

        <div className={`${styles.coin} ${styles.coinThree}`}>
          <Coins />
        </div>
      </div>

      {/* Reward destination */}
      <div className={styles.wallet}>
        <div className={styles.walletIcon}>
          <Wallet aria-hidden="true" />
        </div>

        <div>
          <span className={styles.walletLabel}>
            Demo Reward
          </span>

          <strong>
            +{watchAdData.value} VE
          </strong>
        </div>
      </div>

      {/* Three-step process */}
      <div className={styles.flow}>
        <div
          className={`${styles.flowStep} ${styles.flowWatch} ${
            isPlaying || isCompleted
              ? styles.flowActive
              : ""
          }`}
        >
          <span className={styles.flowDot} />
          <span>WATCH</span>
        </div>

        <span className={styles.flowArrow}>→</span>

        <div
          className={`${styles.flowStep} ${styles.flowComplete} ${
            isCompleted ? styles.flowActive : ""
          }`}
        >
          <span className={styles.flowDot} />
          <span>COMPLETE</span>
        </div>

        <span className={styles.flowArrow}>→</span>

        <div
          className={`${styles.flowStep} ${styles.flowEarn} ${
            isCompleted ? styles.flowActive : ""
          }`}
        >
          <span className={styles.flowDot} />
          <span>EARN</span>
        </div>
      </div>
    </div>
  );
};

export default WatchAdVisual;