import {
  Camera,
  Check,
  ArrowRight,
  Gift,
} from "lucide-react";

import styles from "./FollowBanner.module.css";

type FollowVisualProps = {
  storyCompleted: boolean;
  onStoryComplete: () => void;
};

const FollowVisual = ({
  storyCompleted,
  onStoryComplete,
}: FollowVisualProps) => {

  return (
    <div
      className={styles.visual}
      aria-label="Instagram campaign dashboard"
    >
      {/* Ambient background */}
      <div className={styles.visualGlow} />
      <div className={`${styles.orb} ${styles.orbOne}`} />
      <div className={`${styles.orb} ${styles.orbTwo}`} />

      {/* Campaign Header */}
      <div className={styles.campaignHeader}>
        <div className={styles.campaignTitle}>
          <div className={styles.instagramIcon}>
            <Camera
              size={13}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <strong>Instagram Campaign</strong>
        </div>

        <span className={styles.liveBadge}>
          <span />
          Live
        </span>
      </div>

      {/* Dashboard Body */}
      <div className={styles.dashboardBody}>

        {/* Profile */}
        <div className={styles.profilePanel}>
          <div className={styles.profileAvatar}>
            <span>VE</span>
          </div>

          <strong className={styles.profileName}>
            VELOOP Rewards
          </strong>

          <span className={styles.profileHandle}>
            @velooprewards
          </span>

          <p className={styles.profileDescription}>
            Official updates, giveaways
            and exclusive offers!
          </p>

          <button
            type="button"
            className={styles.followButton}
          >
            <Check
              size={13}
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>Following</span>
            <ArrowRight
              size={12}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Campaign Progress */}
        <div className={styles.progressPanel}>
          <div className={styles.progressHeader}>
            <span>Campaign Progress</span>
            <strong>
  {storyCompleted ? "100%" : "80%"}
</strong>
          </div>

          <div className={styles.progressTrack}>
            <div
  className={`${styles.progressFill} ${
    storyCompleted
      ? styles.progressComplete
      : ""
  }`}
/>
          </div>

          <span className={styles.progressHint}>
            Complete all steps to earn
          </span>

          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <span className={styles.checkCircle}>
                <Check size={10} />
              </span>

              <span>Follow our page</span>

              <Check
                className={styles.itemEndCheck}
                size={13}
              />
            </div>

            <div className={styles.checkItem}>
              <span className={styles.checkCircle}>
                <Check size={10} />
              </span>

              <span>Like latest post</span>

              <Check
                className={styles.itemEndCheck}
                size={13}
              />
            </div>

            <div className={styles.checkItem}>
              <span className={styles.checkCircle}>
                <Check size={10} />
              </span>

              <span>Comment on post</span>

              <span className={styles.stepCount}>
                2/2
              </span>
            </div>

            <button
  type="button"
  className={`${styles.checkItem} ${
    styles.checkItemPending
  } ${
    storyCompleted
      ? styles.checkItemCompleted
      : ""
  }`}
  onClick={onStoryComplete}
  aria-pressed={storyCompleted}
>
  <span
    className={
      storyCompleted
        ? styles.checkCircle
        : styles.pendingCircle
    }
  >
    {storyCompleted && (
      <Check
        size={10}
        aria-hidden="true"
      />
    )}
  </span>

  <span>Share to story</span>

  <span className={styles.stepCount}>
    {storyCompleted ? "1/1" : "0/1"}
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
  {storyCompleted
    ? "Reward Unlocked"
    : "Eligible Reward"}
</span>

          <div className={styles.rewardIcon}>
            <Gift
              size={27}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <strong className={styles.rewardValue}>
            +500 VE
          </strong>

          <span className={styles.rewardCaption}>
            Campaign Reward
          </span>

          <button
  type="button"
  className={`${styles.completeButton} ${
    storyCompleted ? styles.completeButtonUnlocked : ""
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
    <span>Complete Steps</span>
  )}
</button>
        </div>

      </div>
    </div>
  );
};

export default FollowVisual;