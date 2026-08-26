import styles from "./DailyBonusVisual.module.css";

export function GiftIcon() {
    return (
        <svg
            className={styles.giftIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M4.5 10h15v10h-15z"
                fill="currentColor"
                opacity=".9"
            />
            <path
                d="M3 7.5h18v3H3z"
                fill="currentColor"
            />
            <path
                d="M12 7.5V20"
                stroke="#8b5b13"
                strokeWidth="1.2"
            />
            <path
                d="M12 7.5c-3.7 0-4.8-.9-4.8-2.4 0-.9.6-1.5 1.6-1.5 1.7 0 3.2 2.1 3.2 3.9Z"
                stroke="currentColor"
                strokeWidth="1.2"
            />
            <path
                d="M12 7.5c3.7 0 4.8-.9 4.8-2.4 0-.9-.6-1.5-1.6-1.5-1.7 0-3.2 2.1-3.2 3.9Z"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}