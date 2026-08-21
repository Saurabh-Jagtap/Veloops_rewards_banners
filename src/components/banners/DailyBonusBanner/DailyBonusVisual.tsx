import {
    Check,
    Flame,
    Lock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import styles from "./DailyBonusBanner.module.css";
import { days } from "../../../data/dailybonus";

const DailyBonusVisual = () => {
    const visualRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);

    useEffect(() => {
        const element = visualRef.current;

        if (!element) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.35,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={visualRef}
            className={`${styles.visual} ${isVisible ? styles.isVisible : ""
                }`}
            aria-label="Daily streak and bonus progress"
        >
            {/* Ambient background */}
            <div
                className={styles.visualGlow}
                aria-hidden="true"
            />

            <div
                className={`${styles.orb} ${styles.orbOne}`}
                aria-hidden="true"
            />

            <div
                className={`${styles.orb} ${styles.orbTwo}`}
                aria-hidden="true"
            />

            {/* Header */}
            <div className={styles.visualHeader}>
                <div className={styles.streakHeading}>
                    <div className={styles.flameIcon}>
                        <Flame
                            size={17}
                            strokeWidth={2.2}
                            fill="currentColor"
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <h3>Daily Streak</h3>
                        <p>Keep it up! You're on a 5 day streak.</p>
                    </div>
                </div>

                <div className={styles.streakBonus}>
                    <span>STREAK BONUS</span>
                    <strong>+25%</strong>
                </div>
            </div>

            {/* Seven day streak */}
            <div className={styles.streakTimeline}>
                <div className={styles.timelineTrack}>
                    <div className={styles.timelineFill} />
                </div>

                <div className={styles.days}>
                    {days.map((item, index) => {
                        const isCompleted = item.status === "completed";
                        const isToday = item.status === "today";

                        return (
                            <div
                                key={item.number}
                                className={`
        ${styles.day}
        ${isCompleted ? styles.completed : ""}
        ${isToday ? styles.today : ""}
        ${!isCompleted && !isToday ? styles.locked : ""}
        ${selectedDay === item.number
                                        ? styles.selected
                                        : ""
                                    }
    `}
                                style={
                                    {
                                        "--day-index": index,
                                    } as React.CSSProperties
                                }
                            >
                                <span className={styles.dayLabel}>
                                    {isToday ? "Today" : item.day}
                                </span>

                                <button
                                    type="button"
                                    className={styles.dayCard}
                                    onClick={() =>
                                        setSelectedDay(
                                            selectedDay === item.number
                                                ? null
                                                : item.number,
                                        )
                                    }
                                    aria-expanded={selectedDay === item.number}
                                    aria-label={
                                        isCompleted
                                            ? `${item.day}, completed, reward ${index === 0
                                                ? 10
                                                : index === 1
                                                    ? 15
                                                    : index === 2
                                                        ? 20
                                                        : index === 3
                                                            ? 20
                                                            : index === 4
                                                                ? 25
                                                                : index === 5
                                                                    ? 30
                                                                    : 40} VE`
                                            : isToday
                                                ? "Today, current streak reward 25 VE"
                                                : `${item.day}, locked reward`
                                    }
                                >
                                    <span className={styles.dayNumber}>
                                        {item.number}
                                    </span>

                                    <div className={styles.dayStatus}>
                                        {isCompleted && (
                                            <Check
                                                size={14}
                                                strokeWidth={3}
                                                aria-hidden="true"
                                            />
                                        )}

                                        {isToday && (
                                            <span
                                                className={styles.todayGem}
                                                aria-hidden="true"
                                            />
                                        )}

                                        {!isCompleted && !isToday && (
                                            <Lock
                                                size={12}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>

                                    <strong className={styles.reward}>
                                        +
                                        {
                                            [
                                                "10",
                                                "15",
                                                "20",
                                                "20",
                                                "25",
                                                "30",
                                                "40",
                                            ][index]
                                        }
                                    </strong>

                                    {selectedDay === item.number && (
                                        <span
                                            className={styles.dayDetail}
                                            aria-hidden="true"
                                        >
                                            {isCompleted
                                                ? "Completed"
                                                : isToday
                                                    ? "Available"
                                                    : "Locked"}
                                        </span>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className={styles.progressFooter}>
                <span>Bonus resets if you miss a day</span>

                <span className={styles.progressIndicator}>
                    5 / 7 DAYS
                </span>
            </div>
        </div>
    );
};

export default DailyBonusVisual;