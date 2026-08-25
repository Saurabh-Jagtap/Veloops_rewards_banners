import { useState } from "react";
import styles from "./FollowVisual.module.css";

type FollowVisualProps = {
  isVisible: boolean;
};

type TaskKey = "follow" | "like" | "comment" | "share";

type Task = {
  key: TaskKey;
  label: string;
  status: "check" | "2/3" | "0/1";
};

function InstagramIcon() {
  return (
    <svg
      className={styles.instagramIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="2"
          y1="22"
          x2="22"
          y2="2"
        >
          <stop stopColor="#f9ce34" />
          <stop offset="0.45" stopColor="#ee2a7b" />
          <stop offset="1" stopColor="#6228d7" />
        </linearGradient>
      </defs>

      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        fill="url(#instagramGradient)"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="white"
        strokeWidth="1.7"
      />

      <circle cx="17.4" cy="6.7" r="1.15" fill="white" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      className={styles.giftIcon}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 13h22v15H5z" fill="currentColor" opacity=".88" />
      <path d="M3.5 9.5h25v5h-25z" fill="currentColor" />
      <path d="M16 9.5v18" stroke="#5b2b94" strokeWidth="1.7" />

      <path
        d="M16 9.5c-5.5 0-7.3-1.4-7.3-3.6 0-1.3 1-2.2 2.4-2.2 2.5 0 4.9 3.3 4.9 5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M16 9.5c5.5 0 7.3-1.4 7.3-3.6 0-1.3-1-2.2-2.4-2.2-2.5 0-4.9 3.3-4.9 5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const initialTasks: Task[] = [
  { key: "follow", label: "Follow our page", status: "check" },
  { key: "like", label: "Like latest post", status: "check" },
  { key: "comment", label: "Comment on post", status: "2/3" },
  { key: "share", label: "Share to story", status: "0/1" },
];

export default function FollowVisual({
  isVisible = true,
}: FollowVisualProps) {
  const [following, setFollowing] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [isCompleted, setIsCompleted] = useState(false);

  const commentComplete = tasks.find((task) => task.key === "comment")?.status === "check";
  const shareComplete = tasks.find((task) => task.key === "share")?.status === "check";

  // Keep the approved 80% starting state and advance it meaningfully
  // as the two remaining campaign actions are completed.
  const progress = 80 + (commentComplete ? 10 : 0) + (shareComplete ? 10 : 0);
  const allStepsComplete = progress === 100;

  const handleFollow = () => {
    setFollowing((current) => !current);
  };

  const handleTaskClick = (key: TaskKey) => {
    if (key !== "comment" && key !== "share") return;

    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.key !== key) return task;

        if (key === "comment") {
          return { ...task, status: "check" };
        }

        return { ...task, status: "check" };
      }),
    );

    setIsCompleted(false);
  };

  const handleComplete = () => {
    if (!allStepsComplete) return;
    setIsCompleted(true);
  };

  return (
    <div
      className={`${styles.banner} ${isVisible ? styles.isVisible : ""}`}
      aria-label="Instagram campaign"
    >
      <span className={`${styles.orb} ${styles.orbOne}`} />
      <span className={`${styles.orb} ${styles.orbTwo}`} />

      <span className={`${styles.particle} ${styles.particleOne}`} />
      <span className={`${styles.particle} ${styles.particleTwo}`} />
      <span className={`${styles.particle} ${styles.particleThree}`} />

      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <InstagramIcon />
          <span>Instagram Campaign</span>
        </div>

        <div className={styles.livePill}>
          <span className={styles.liveDot} />
          Live
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.profilePanel}>
          <div className={styles.veLogo}>VE</div>

          <h2>VELOOP Rewards</h2>

          <span className={styles.handle}>@velop.rewards</span>

          <p>
            Join now and earn
            <br />
            exclusive rewards!
          </p>

          <button
            type="button"
            className={`${styles.followButton} ${
              following ? styles.followingButton : ""
            }`}
            onClick={handleFollow}
            aria-pressed={following}
          >
            <span className={styles.plus}>{following ? "✓" : "+"}</span>
            {following ? "Following" : "Follow Us"}
          </button>
        </div>

        <div className={styles.progressPanel}>
          <div className={styles.progressHeader}>
            <span>Campaign Progress</span>

            <span className={styles.progressPercent}>{progress}%</span>
          </div>

          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Campaign progress"
          >
            <div
              className={styles.progressValue}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.taskList}>
            {tasks.map((task) => {
              const isActionable =
                task.key === "comment" || task.key === "share";
              const isDone = task.status === "check";

              return (
                <button
                  type="button"
                  className={`${styles.taskRow} ${
                    isActionable ? styles.taskRowInteractive : ""
                  } ${isDone ? styles.taskRowDone : ""}`}
                  key={task.key}
                  onClick={() => handleTaskClick(task.key)}
                  disabled={!isActionable || isDone}
                  aria-label={
                    isDone
                      ? `${task.label} completed`
                      : `Complete ${task.label}`
                  }
                >
                  <span
                    className={`${styles.taskIndicator} ${
                      isDone ? styles.completed : styles.incomplete
                    }`}
                  >
                    {isDone ? "✓" : ""}
                  </span>

                  <span
                    className={`${styles.taskLabel} ${
                      task.status === "0/1" ? styles.muted : ""
                    }`}
                  >
                    {task.label}
                  </span>

                  <span
                    className={`${styles.taskStatus} ${
                      isDone ? styles.checkStatus : ""
                    }`}
                  >
                    {isDone ? "✓" : task.status}
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.taskHint} aria-live="polite">
            {!allStepsComplete && "Click an incomplete step to mark it done."}
            {allStepsComplete && !isCompleted && "All campaign steps are complete."}
            {isCompleted && "Campaign completed successfully."}
          </div>
        </div>

        <div
  className={`${styles.rewardPanel} ${
    allStepsComplete ? styles.rewardUnlocked : ""
  } ${isCompleted ? styles.rewardClaimed : ""}`}
>
  <span className={styles.rewardLabel}>Original Reward</span>

  <div className={styles.rewardGift}>
    <GiftIcon />

    {isCompleted && (
      <span className={styles.partyBurst} aria-hidden="true">
        <span className={`${styles.confetti} ${styles.confettiOne}`} />
        <span className={`${styles.confetti} ${styles.confettiTwo}`} />
        <span className={`${styles.confetti} ${styles.confettiThree}`} />
        <span className={`${styles.confetti} ${styles.confettiFour}`} />
        <span className={`${styles.confetti} ${styles.confettiFive}`} />
        <span className={`${styles.confetti} ${styles.confettiSix}`} />
        <span className={`${styles.confetti} ${styles.confettiSeven}`} />
        <span className={`${styles.confetti} ${styles.confettiEight}`} />
      </span>
    )}
  </div>

  <strong>+500 VE</strong>

  <p>
    {isCompleted ? (
      <>
        Reward unlocked
        <br />
        Campaign complete
      </>
    ) : (
      <>
        Complete all steps
        <br />
        to claim reward
      </>
    )}
  </p>

  <button
    type="button"
    className={`${styles.completeButton} ${
      allStepsComplete ? styles.completeButtonReady : ""
    } ${isCompleted ? styles.completeButtonCompleted : ""}`}
    onClick={handleComplete}
    disabled={!allStepsComplete || isCompleted}
  >
    {isCompleted
      ? "Reward Unlocked"
      : allStepsComplete
        ? "Claim Reward"
        : `${2 - (commentComplete ? 1 : 0) - (shareComplete ? 1 : 0)} steps remaining`}
    {!isCompleted && <ArrowIcon />}
    {isCompleted && <span className={styles.rewardCheck}>✓</span>}
  </button>
</div>
      </div>
    </div>
  );
}