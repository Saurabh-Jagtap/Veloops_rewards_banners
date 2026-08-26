import styles from "./DailyBonusVisual.module.css";

export function FlameIcon() {
    return (
        <svg
            className={styles.flameIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M13.8 2.8c.3 3-1.4 4.6-2.8 6.1-.9.9-1.6 1.8-1.5 3.3.1 1.1.8 2.1 1.8 2.6-.2-1.9 1-3.1 2.3-4.1 1.9 1.7 3.3 3.7 3.3 6.1 0 1.1-.3 2.2-.9 3.1 2.6-.9 4.5-3.3 4.5-6.3 0-4.1-2.7-7.6-6.7-10.8Z"
                fill="currentColor"
            />
            <path
                d="M8.7 13.2c-1.8 1.5-3 3.2-3 5.2 0 1.8.8 3.2 2.1 4.2-.2-.8-.1-1.6.3-2.3.6-1.1 1.5-1.7 2.6-2.4-1.2-.9-1.8-2.5-2-4.7Z"
                fill="currentColor"
                opacity=".72"
            />
        </svg>
    );
}