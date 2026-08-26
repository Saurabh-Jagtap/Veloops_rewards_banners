import styles from "./FollowVisual.module.css";

export function GiftIcon() {
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