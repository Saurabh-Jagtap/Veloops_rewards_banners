import { useState } from "react";
import styles from "./DailyBonusVisual.module.css";
import { FlameIcon } from "./FlameIcon";
import { days } from "../../../data/dailybonus";
import { CheckIcon } from "./CheckIcon";
import { GiftIcon } from "./GiftIcon";

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