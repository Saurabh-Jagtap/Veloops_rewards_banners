import {
    Check,
    Clock,
    Flame,
    Gift,
    Lock,
} from "lucide-react";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import type { CSSProperties } from "react";

import styles from "./DailyBonusBanner.module.css";
import { days } from "../../../data/dailybonus";

const DailyBonusVisual = () => {
    const visualRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [claimed, setClaimed] = useState(false);

    /*
     * --------------------------------------------------
     * ENTRANCE OBSERVER
     * --------------------------------------------------
     */

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
                threshold: 0.3,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    /*
     * --------------------------------------------------
     * DAILY BONUS DATA
     * --------------------------------------------------
     */

    const totalDays = days.length;

    const completedCount = days.filter(
        (day) => day.status === "completed",
    ).length;

    const todayIndex = days.findIndex(
        (day) => day.status === "today",
    );

    const currentDayNumber =
        todayIndex >= 0
            ? todayIndex + 1
            : completedCount;

    const safeCurrentDayNumber = Math.min(
        Math.max(currentDayNumber, 1),
        totalDays,
    );

    const progressCount = claimed
        ? Math.min(completedCount + 1, totalDays)
        : completedCount;

    /*
     * --------------------------------------------------
     * RENDER
     * --------------------------------------------------
     */

    return (
        <div
            ref={visualRef}
            className={`${styles.visual} ${isVisible ? styles.isVisible : ""
                }`}
        >
            {/* ==================================================
                UNIFIED BONUS PANEL
            ================================================== */}

            <section
                className={styles.bonusPanel}
                aria-label="Daily bonus reward"
            >
                {/* ==================================================
                    AMBIENT BACKGROUND
                ================================================== */}

                <div
                    className={styles.panelGlow}
                    aria-hidden="true"
                />

                <div
                    className={`${styles.panelRing} ${styles.panelRingOne}`}
                    aria-hidden="true"
                />

                <div
                    className={`${styles.panelRing} ${styles.panelRingTwo}`}
                    aria-hidden="true"
                />

                <span
                    className={`${styles.panelSpark} ${styles.panelSparkOne}`}
                    aria-hidden="true"
                />

                <span
                    className={`${styles.panelSpark} ${styles.panelSparkTwo}`}
                    aria-hidden="true"
                />

                {/* ==================================================
                    HEADER
                ================================================== */}

                <header className={styles.bonusHeader}>
                    <div className={styles.bonusHeaderLeft}>
                        <span
                            className={styles.bonusIcon}
                            aria-hidden="true"
                        >
                            <Gift
                                size={15}
                                strokeWidth={2}
                            />
                        </span>

                        <div>
                            <span
                                className={
                                    styles.bonusEyebrow
                                }
                            >
                                Today&apos;s Bonus
                            </span>

                            <span
                                className={
                                    styles.bonusSubtitle
                                }
                            >
                                Daily reward available
                            </span>
                        </div>
                    </div>

                    <div className={styles.bonusHeaderRight}>
                        <strong>
                            Day {safeCurrentDayNumber} of{" "}
                            {totalDays}
                        </strong>

                        <span>
                            <Clock
                                size={10}
                                strokeWidth={2}
                                aria-hidden="true"
                            />

                            Resets in 14h 32m
                        </span>
                    </div>
                </header>

                {/* ==================================================
                    REWARD HERO
                ================================================== */}

                <div className={styles.rewardHero}>
                    <div className={styles.rewardHeroCopy}>
                        <span
                            className={
                                styles.rewardHeroLabel
                            }
                        >
                            Today&apos;s Reward
                        </span>

                        <strong
                            className={
                                styles.rewardAmount
                            }
                        >
                            +25 <span>VE</span>
                        </strong>

                        <button
                            type="button"
                            className={`${styles.availabilityPill} ${claimed
                                ? styles.availabilityPillClaimed
                                : ""
                                }`}
                            onClick={() => setClaimed(true)}
                            disabled={claimed}
                            aria-label={
                                claimed
                                    ? "Daily bonus claimed today"
                                    : "Claim daily bonus"
                            }
                        >
                            {claimed ? (
                                <>
                                    <Check
                                        size={11}
                                        strokeWidth={2.8}
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Claimed Today
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span
                                        className={styles.availabilityDot}
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Claim Now
                                    </span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* ------------------------------------------
                        SIMPLE CSS GIFT
                    ------------------------------------------ */}

                    <div
                        className={`${styles.giftScene} ${claimed
                            ? styles.giftSceneClaimed
                            : ""
                            }`}
                        aria-hidden="true"
                    >
                        {claimed && (
                            <span
                                className={styles.claimCelebration}
                                aria-hidden="true"
                            >
                                <span
                                    className={`${styles.confetti} ${styles.confettiOne}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiTwo}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiThree}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiFour}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiFive}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiSix}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiSeven}`}
                                />
                                <span
                                    className={`${styles.confetti} ${styles.confettiEight}`}
                                />
                            </span>
                        )}
                        <span
                            className={styles.giftAura}
                        />

                        <span
                            className={`${styles.giftCoin} ${styles.giftCoinLeft}`}
                        >
                            VE
                        </span>

                        <span
                            className={`${styles.giftCoin} ${styles.giftCoinRight}`}
                        >
                            VE
                        </span>

                        <span
                            className={styles.giftSparkleOne}
                        />

                        <span
                            className={styles.giftSparkleTwo}
                        />

                        <span
                            className={styles.giftBowLeft}
                        />

                        <span
                            className={styles.giftBowRight}
                        />

                        <span
                            className={styles.giftBowKnot}
                        />

                        <span
                            className={styles.giftLid}
                        />

                        <span
                            className={styles.giftBox}
                        >
                            <span
                                className={
                                    styles.giftRibbonVertical
                                }
                            />

                            <span
                                className={
                                    styles.giftRibbonHorizontal
                                }
                            />
                        </span>
                    </div>
                </div>

                {/* ==================================================
                    SEVEN DAY JOURNEY
                ================================================== */}

                <div
                    className={styles.journey}
                    aria-label="Seven day bonus progress"
                >
                    <div
                        className={
                            styles.journeyHeader
                        }
                    >
                        <span>
                            Your 7-day journey
                        </span>

                        <strong>
                            {progressCount} /{" "}
                            {totalDays} completed
                        </strong>
                    </div>

                    <div className={styles.timeline}>
                        <div
                            className={
                                styles.timelineTrack
                            }
                            aria-hidden="true"
                        />

                        <div
                            className={
                                styles.timelineProgress
                            }
                            style={{
                                width:
                                    totalDays > 1
                                        ? `${Math.min(
                                            progressCount,
                                            totalDays - 1,
                                        ) /
                                        (totalDays -
                                            1) *
                                        100
                                        }%`
                                        : "0%",
                            }}
                            aria-hidden="true"
                        />

                        {days.map(
                            (item, index) => {
                                const isCompleted =
                                    item.status ===
                                    "completed";

                                const isToday =
                                    item.status ===
                                    "today";

                                const isLocked =
                                    !isCompleted &&
                                    !isToday;

                                const stateClass =
                                    isToday
                                        ? styles.today
                                        : isCompleted
                                            ? styles.completed
                                            : styles.locked;

                                const nodeStyle = {
                                    "--node-index":
                                        index,
                                } as CSSProperties;

                                return (
                                    <div
                                        key={item.number}
                                        className={`${styles.timelineNode} ${stateClass}`}
                                        style={
                                            nodeStyle
                                        }
                                        aria-label={
                                            isToday
                                                ? `${item.day}, today`
                                                : isCompleted
                                                    ? `${item.day}, completed`
                                                    : `${item.day}, upcoming`
                                        }
                                    >
                                        <span
                                            className={
                                                styles.timelineDot
                                            }
                                        >
                                            {isCompleted && (
                                                <Check
                                                    size={
                                                        11
                                                    }
                                                    strokeWidth={
                                                        3
                                                    }
                                                    aria-hidden="true"
                                                />
                                            )}

                                            {isToday && (
                                                <span
                                                    className={
                                                        styles.todayDot
                                                    }
                                                />
                                            )}

                                            {isLocked && (
                                                <Lock
                                                    size={
                                                        8
                                                    }
                                                    strokeWidth={
                                                        2.2
                                                    }
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>

                                        <span
                                            className={
                                                styles.timelineDay
                                            }
                                        >
                                            {isToday
                                                ? "Today"
                                                : item.day}
                                        </span>
                                    </div>
                                );
                            },
                        )}
                    </div>
                </div>

                {/* ==================================================
                    FOOTER MOTIVATION
                ================================================== */}

                <footer
                    className={
                        styles.bonusFooter
                    }
                >
                    <div
                        className={
                            styles.streakSummary
                        }
                    >
                        <span
                            className={
                                styles.flameBadge
                            }
                            aria-hidden="true"
                        >
                            <Flame
                                size={13}
                                strokeWidth={2.3}
                                fill="currentColor"
                            />
                        </span>

                        <div>
                            <strong>
                                {completedCount} Day
                                {" "}
                                Streak
                            </strong>

                            <span>
                                Keep it going
                            </span>
                        </div>
                    </div>

                    <div
                        className={
                            styles.returnMessage
                        }
                    >
                        <span
                            className={
                                styles.returnIcon
                            }
                            aria-hidden="true"
                        >
                            ↻
                        </span>

                        <div>
                            <strong>
                                Come back tomorrow
                            </strong>

                            <span>
                                More rewards await
                            </span>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
};

export default DailyBonusVisual;