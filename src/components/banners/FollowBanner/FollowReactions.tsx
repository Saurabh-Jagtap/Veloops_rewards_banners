import styles from "./FollowReactions.module.css";

function HeartIcon({
  variant = "white",
}: {
  variant?: "white" | "lavender";
}) {
  return (
    <svg
      className={styles.heart}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path
        d="M16 27.2C14.8 26 5 20.1 5 12.4C5 8.5 7.7 6 11 6c2.1 0 4 1.1 5 2.8C17 7.1 18.9 6 21 6c3.3 0 6 2.5 6 6.4 0 7.7-9.8 13.6-11 14.8Z"
        fill={variant === "lavender" ? "#d9c7ff" : "#ffffff"}
      />
    </svg>
  );
}

function ReactionCard({
  className,
  heart,
}: {
  className: string;
  heart: "white" | "lavender";
}) {
  return (
    <div className={`${styles.reaction} ${className}`}>
      <HeartIcon variant={heart} />
    </div>
  );
}

export default function FollowReactions() {
  return (
    <div
      className={styles.reactions}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <span className={styles.ambientGlow} />

      {/* Decorative orbital curves */}
      <span className={`${styles.orbit} ${styles.orbitOne}`} />
      <span className={`${styles.orbit} ${styles.orbitTwo}`} />
      <span className={`${styles.orbit} ${styles.orbitThree}`} />

      {/* Tiny particles */}
      <span className={`${styles.particle} ${styles.particleOne}`} />
      <span className={`${styles.particle} ${styles.particleTwo}`} />
      <span className={`${styles.particle} ${styles.particleThree}`} />
      <span className={`${styles.particle} ${styles.particleFour}`} />

      {/* Floating reactions */}
      <ReactionCard
        className={styles.reactionTop}
        heart="lavender"
      />

      <ReactionCard
        className={styles.reactionUpper}
        heart="white"
      />

      <ReactionCard
        className={styles.reactionCenter}
        heart="white"
      />

      <ReactionCard
        className={styles.reactionBottom}
        heart="lavender"
      />
    </div>
  );
}