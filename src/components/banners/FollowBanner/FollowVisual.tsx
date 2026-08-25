import styles from "./FollowVisual.module.css";

type FollowVisualProps = {
  isVisible: boolean;
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

      <circle
        cx="17.4"
        cy="6.7"
        r="1.15"
        fill="white"
      />
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
      <path
        d="M5 13h22v15H5z"
        fill="currentColor"
        opacity=".88"
      />

      <path
        d="M3.5 9.5h25v5h-25z"
        fill="currentColor"
      />

      <path
        d="M16 9.5v18"
        stroke="#5b2b94"
        strokeWidth="1.7"
      />

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

const tasks = [
  { label: "Follow our page", status: "check" },
  { label: "Like latest post", status: "check" },
  { label: "Comment on post", status: "2/3" },
  { label: "Share to story", status: "0/1" },
];

export default function FollowVisual({
  isVisible,
}: FollowVisualProps) {
  return (
    <div
      className={`${styles.banner} ${
        isVisible ? styles.isVisible : ""
      }`}
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

          <span className={styles.handle}>
            @velop.rewards
          </span>

          <p>
            Join now and earn
            <br />
            exclusive rewards!
          </p>

          <button
            type="button"
            className={styles.followButton}
          >
            <span className={styles.plus}>+</span>
            Follow Us
          </button>
        </div>

        <div className={styles.progressPanel}>
          <div className={styles.progressHeader}>
            <span>Campaign Progress</span>

            <span className={styles.progressPercent}>
              80%
            </span>
          </div>

          <div className={styles.progressTrack}>
            <div className={styles.progressValue} />
          </div>

          <div className={styles.taskList}>
            {tasks.map((task) => (
              <div
                className={styles.taskRow}
                key={task.label}
              >
                <span
                  className={`${styles.taskIndicator} ${
                    task.status === "check" ||
                    task.label === "Comment on post"
                      ? styles.completed
                      : styles.incomplete
                  }`}
                >
                  {task.status === "check" ? "✓" : ""}
                </span>

                <span
                  className={`${styles.taskLabel} ${
                    task.status === "0/1"
                      ? styles.muted
                      : ""
                  }`}
                >
                  {task.label}
                </span>

                <span
                  className={`${styles.taskStatus} ${
                    task.status === "check"
                      ? styles.checkStatus
                      : ""
                  }`}
                >
                  {task.status === "check"
                    ? "✓"
                    : task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rewardPanel}>
          <span className={styles.rewardLabel}>
            Original Reward
          </span>

          <GiftIcon />

          <strong>+500 VE</strong>

          <p>
            Complete all steps
            <br />
            to claim reward
          </p>

          <button
            type="button"
            className={styles.completeButton}
          >
            Complete Steps
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}