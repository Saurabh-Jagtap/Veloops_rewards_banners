import { useState } from "react";
import styles from "./FollowVisual.module.css";
import { initialTasks, type FollowVisualProps, type TaskKey } from "../../../data/follow";
import { InstagramIcon } from "./InstagramIcon";
import { GiftIcon } from "./GiftIcon";
import { ArrowIcon } from "./ArrowIcon";

export default function FollowVisual({
  isVisible = true,
}: FollowVisualProps) {
  const [following, setFollowing] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [isCompleted, setIsCompleted] = useState(false);

  const commentComplete = tasks.find((task) => task.key === "comment")?.status === "check";
  const shareComplete = tasks.find((task) => task.key === "share")?.status === "check";

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
            className={`${styles.followButton} ${following ? styles.followingButton : ""
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
                  className={`${styles.taskRow} ${isActionable ? styles.taskRowInteractive : ""
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
                    className={`${styles.taskIndicator} ${isDone ? styles.completed : styles.incomplete
                      }`}
                  >
                    {isDone ? "✓" : ""}
                  </span>

                  <span
                    className={`${styles.taskLabel} ${task.status === "0/1" ? styles.muted : ""
                      }`}
                  >
                    {task.label}
                  </span>

                  <span
                    className={`${styles.taskStatus} ${isDone ? styles.checkStatus : ""
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
          className={`${styles.rewardPanel} ${allStepsComplete ? styles.rewardUnlocked : ""
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
            className={`${styles.completeButton} ${allStepsComplete ? styles.completeButtonReady : ""
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