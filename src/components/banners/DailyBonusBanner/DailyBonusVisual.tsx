import { useState } from "react";
import styles from "./DailyBonusVisual.module.css";

type DayState = "completed" | "today" | "locked";

type Day = {
    label: string;
    state: DayState;
};

const days: Day[] = [
    { label: "Mon", state: "completed" },
    { label: "Tue", state: "completed" },
    { label: "Wed", state: "completed" },
    { label: "Thu", state: "completed" },
    { label: "Fri", state: "completed" },
    { label: "Sat", state: "completed" },
    { label: "Sun", state: "today" },
];

function FlameIcon() {
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

function CheckIcon() {
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

function GiftIcon() {
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

export default function DailyBonusVisual() {
    const [claimed, setClaimed] = useState(false);

    return (
        <div className={styles.visual}>
            <section
                className={styles.card}
                aria-label="Daily streak rewards"
            >
                <header className={styles.header}>
                    <div className={styles.headerIdentity}>
                        <span className={styles.flameBadge}>
                            <FlameIcon />
                        </span>

                        <div>
                            <h1>Daily Streak</h1>
                            <p>Keep it up! You're on a 7-day streak.</p>
                        </div>
                    </div>

                    <div className={styles.boost}>
                        <span>Bonus Boost</span>
                        <strong>+25%</strong>
                    </div>
                </header>

                <div className={styles.divider} />

                <div className={styles.timeline}>
                    <div
                        className={styles.track}
                        aria-hidden="true"
                    >
                        <div
                            className={`${styles.trackCompleted} ${claimed ? styles.trackClaimed : ""
                                }`}
                        />
                    </div>

                    <div className={styles.dayGrid}>
                        {days.map((day) => {
                            const isClaimedToday =
                                day.state === "today" && claimed;

                            const visualState = isClaimedToday
                                ? "completed"
                                : day.state;

                            return (
                                <div
                                    className={styles.day}
                                    key={day.label}
                                >
                                    <span
                                        className={`${styles.dayLabel} ${day.state === "today"
                                            ? styles.todayLabel
                                            : ""
                                            }`}
                                    >
                                        {day.label}
                                    </span>

                                    {day.state === "today" ? (
                                        <button
                                            type="button"
                                            className={`${styles.node} ${styles.todayNode
                                                } ${isClaimedToday
                                                    ? styles.claimedNode
                                                    : ""
                                                }`}
                                            onClick={() => setClaimed(true)}
                                            aria-label={
                                                isClaimedToday
                                                    ? "Sunday streak claimed"
                                                    : "Claim Sunday streak reward"
                                            }
                                            aria-pressed={claimed}
                                        >
                                            {isClaimedToday ? (
                                                <CheckIcon />
                                            ) : (
                                                <GiftIcon />
                                            )}
                                        </button>
                                    ) : (
                                        <span
                                            className={`${styles.node} ${styles[`${visualState}Node`]
                                                }`}
                                        >
                                            <CheckIcon />
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Gift illustration */}
            <div className={`${styles.giftScene} ${claimed ? styles.giftClaimed : ""}`} aria-hidden="true">
                <img
                    src="/dailybonus-gift-box.png"
                    alt=""
                    className={styles.giftImage}
                />
            </div>
        </div>
    );
}