import styles from "./DailyBonusVisual.module.css";

export function CheckIcon() {
    return (
        <svg
            className={styles.checkIcon}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="m5 10.4 3.2 3.2L15.5 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}