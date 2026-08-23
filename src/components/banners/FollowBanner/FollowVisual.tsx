import { useEffect, useState } from "react";
import {
  Check,
  Clock,
  Gift,
  Send,
  PlayIcon,
} from "lucide-react";

import styles from "./FollowBanner.module.css";

type FollowVisualProps = {
  isVisible: boolean;
  storyCompleted: boolean;
  onStoryComplete: () => void;
};

const XMark = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M4 4l16 16M20 4L4 20"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

const InstagramMark = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="17.2"
      cy="6.8"
      r="1.1"
      fill="currentColor"
    />
  </svg>
);

const FollowVisual = ({
  isVisible,
  storyCompleted,
  onStoryComplete,
}: FollowVisualProps) => {
  const progress = storyCompleted ? 100 : 75;
  const completedCount = storyCompleted ? 4 : 3;

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setProgressValue(progress);
      return;
    }

    const timer = window.setTimeout(() => {
      setProgressValue(progress);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [isVisible, progress]);

  return (
    <div
      className={styles.visual}
      aria-label="Social Connect campaign dashboard"
    >
      {/* Campaign Header */}
      <div className={styles.campaignHeader}>
        <div className={styles.campaignHeaderLeft}>
          <span className={styles.campaignIcon} aria-hidden="true">
            <Gift size={16} strokeWidth={1.8} />
          </span>

          <div className={styles.campaignHeaderText}>
            <span className={styles.campaignLabel}>
              Active Campaign
            </span>

            <strong className={styles.campaignTitle}>
              Social Connect Campaign
            </strong>

            <span className={styles.campaignSub}>
              Complete all steps to unlock your reward
            </span>
          </div>
        </div>

        <div className={styles.campaignHeaderRight}>
          <span className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Live
          </span>

          <span className={styles.countdown}>
            <Clock size={11} strokeWidth={2} aria-hidden="true" />
            Ends in <strong>5d 14h 32m</strong>
          </span>
        </div>
      </div>

      {/* Main Campaign Workspace */}
      <div className={styles.campaignBody}>

        {/* Progress */}
        <div className={styles.progressPanel}>
          <div className={styles.progressHeading}>
            <span>Your Progress</span>

            <strong>
              {completedCount}/4
            </strong>
          </div>

          <div className={styles.progressSummary}>
            <div className={styles.progressPercent}>
              {progress}%
            </div>

            <div className={styles.progressMessage}>
              <strong>
                {storyCompleted ? "All done!" : "Keep going!"}
              </strong>

              <span>
                {storyCompleted
                  ? "Every campaign step is complete."
                  : "Complete the final step to unlock your reward."}
              </span>
            </div>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${progressValue}%`,
              }}
            />
          </div>

          <div className={styles.channelList}>
            <div className={styles.channelRow}>
              <span
                className={`${styles.channelIcon} ${styles.channelInstagram}`}
              >
                <InstagramMark />
              </span>

              <span className={styles.channelText}>
                <strong>Follow on Instagram</strong>
                <span>@velop.rewards</span>
              </span>

              <span
                className={styles.channelCheck}
                aria-hidden="true"
              >
                <Check size={12} strokeWidth={2.5} />
              </span>
            </div>

            <div className={styles.channelRow}>
              <span
                className={`${styles.channelIcon} ${styles.channelX}`}
              >
                <XMark />
              </span>

              <span className={styles.channelText}>
                <strong>Follow on X</strong>
                <span>@velop_rewards</span>
              </span>

              <span
                className={styles.channelCheck}
                aria-hidden="true"
              >
                <Check size={12} strokeWidth={2.5} />
              </span>
            </div>

            <div className={styles.channelRow}>
              <span
                className={`${styles.channelIcon} ${styles.channelYoutube}`}
              >
                <PlayIcon
                  size={13}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.channelText}>
                <strong>Subscribe on YouTube</strong>
                <span>VELOOP Rewards</span>
              </span>

              <span
                className={styles.channelCheck}
                aria-hidden="true"
              >
                <Check size={12} strokeWidth={2.5} />
              </span>
            </div>

            <button
              type="button"
              className={`${styles.channelRow} ${
                styles.channelPending
              } ${
                storyCompleted ? styles.channelDone : ""
              }`}
              onClick={onStoryComplete}
              aria-pressed={storyCompleted}
            >
              <span
                className={`${styles.channelIcon} ${styles.channelTelegram}`}
              >
                <Send
                  size={12}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.channelText}>
                <strong>Join Telegram</strong>
                <span>VELOOP Announcements</span>
              </span>

              <span
                className={
                  storyCompleted
                    ? styles.channelCheck
                    : styles.channelOutline
                }
                aria-hidden="true"
              >
                {storyCompleted && (
                  <Check size={12} strokeWidth={2.5} />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Reward */}
        <div
          className={`${styles.rewardPanel} ${
            storyCompleted ? styles.rewardUnlocked : ""
          }`}
        >
          <span className={styles.rewardLabel}>
            Your Reward
          </span>

          <div
            className={styles.coinStack}
            aria-hidden="true"
          >
            <span className={`${styles.coin} ${styles.coinBack1}`}>
              VE
            </span>

            <span className={`${styles.coin} ${styles.coinBack2}`}>
              VE
            </span>

            <span className={`${styles.coin} ${styles.coinFront}`}>
              VE
            </span>
          </div>

          <strong className={styles.rewardValue}>
            +500 VE
          </strong>

          <span className={styles.rewardCaption}>
            {storyCompleted
              ? "Reward unlocked"
              : "Complete all steps to earn"}
          </span>

          <div
            className={`${styles.completeButton} ${
              storyCompleted
                ? styles.completeButtonUnlocked
                : ""
            }`}
          >
            {storyCompleted ? (
              <>
                <Check
                  size={12}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>Reward Unlocked</span>
              </>
            ) : (
              <span>Complete steps to claim</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowVisual;