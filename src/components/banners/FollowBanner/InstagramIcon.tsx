import styles from "./FollowVisual.module.css";

export function InstagramIcon() {
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