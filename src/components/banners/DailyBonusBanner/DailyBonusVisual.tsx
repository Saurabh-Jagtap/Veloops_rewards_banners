import {
    CalendarDays,
    Check,
    Gift,
    Sparkles,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import styles from "./DailyBonusBanner.module.css";
import { days } from "../../../data/dailybonus";

const DailyBonusVisual = () => {
    const visualRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);

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
            aria-label="Daily bonus reward progress"
        >
            {/* Background decoration */}

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

            <Sparkles
                className={`${styles.sparkle} ${styles.sparkleOne}`}
                size={13}
                aria-hidden="true"
            />

            <Sparkles
                className={`${styles.sparkle} ${styles.sparkleTwo}`}
                size={11}
                aria-hidden="true"
            />

            {/* ----------------------------------------
          VISUAL HEADER
      ---------------------------------------- */}

            <div className={styles.visualHeader}>
                <div className={styles.visualLabel}>
                    <CalendarDays
                        size={14}
                        aria-hidden="true"
                    />

                    <span>DAILY REWARD</span>
                </div>

                <div className={styles.dayCounter}>
                    DAY 5 OF 7
                </div>
            </div>

            {/* ----------------------------------------
          HERO REWARD CARD
      ---------------------------------------- */}

            <div className={styles.rewardCard}>
                <div
                    className={styles.rewardGlow}
                    aria-hidden="true"
                />

                <div className={styles.giftBox}>
                    <Gift
                        size={46}
                        strokeWidth={1.65}
                        aria-hidden="true"
                    />
                </div>

                <span className={styles.rewardLabel}>
                    TODAY'S BONUS
                </span>

                <strong className={styles.rewardAmount}>
                    +25
                    <span> GEMS</span>
                </strong>

                <div className={styles.available}>
                    <span className={styles.availableDot} />

                    <span>AVAILABLE NOW</span>
                </div>
            </div>

            {/* ----------------------------------------
          SEVEN DAY TIMELINE
      ---------------------------------------- */}

            <div className={styles.progressSection}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} />
                </div>

                <div className={styles.days}>
                    {days.map((item) => (
                        <div
                            key={item.number}
                            className={`${styles.day} ${styles[item.status]
                                }`}
                        >
                            <div className={styles.dayNode}>
                                {item.status === "completed" && (
                                    <Check
                                        size={11}
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />
                                )}

                                {item.status === "today" && (
                                    <span
                                        className={styles.todayDot}
                                    />
                                )}
                            </div>

                            <span className={styles.dayName}>
                                {item.day}
                            </span>

                            <span className={styles.dayNumber}>
                                {item.number}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ----------------------------------------
          PROGRESS FOOTER
      ---------------------------------------- */}

            <div className={styles.progressMeta}>
                <span>REWARD PROGRESS</span>

                <strong>4 / 7 DAYS</strong>
            </div>
        </div>
    );
};

export default DailyBonusVisual;