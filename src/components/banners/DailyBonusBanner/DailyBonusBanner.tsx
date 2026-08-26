import { ArrowRight, Check, Flame } from "lucide-react";
import DailyBonusVisual from "./DailyBonusVisual";
import styles from "./DailyBonusBanner.module.css";
import { useEffect, useRef, useState } from "react";

const DailyBonusBanner = () => {
    const [claimed, setClaimed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const bannerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const banner = bannerRef.current;

        if (!banner) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(banner);

        return () => observer.disconnect();
    }, []);

    const handleClaim = () => {
        if (claimed) return;

        setClaimed(true);
    };
    return (
        <section
            ref={bannerRef}
            className={`${styles.banner} ${isVisible ? styles.isVisible : ""}`}
            aria-labelledby="daily-bonus-banner-title"
        >
            {/* ambient decorative curves / particles */}
            <svg
                className={styles.bannerCurve}
                viewBox="0 0 620 300"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M -10 40 C 90 10, 160 90, 260 55 C 340 27, 400 95, 500 60"
                    stroke="url(#dailyBonusCurveGradient)"
                    strokeWidth="1.5"
                />
                <path
                    d="M -10 170 C 70 205, 150 150, 240 190 C 320 224, 380 165, 470 195"
                    stroke="url(#dailyBonusCurveGradient)"
                    strokeWidth="1.5"
                />
                <defs>
                    <linearGradient
                        id="dailyBonusCurveGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                    >
                        <stop offset="0%" stopColor="#f0c84f" stopOpacity="0" />
                        <stop offset="55%" stopColor="#f0c84f" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#f0c84f" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <span className={`${styles.bannerParticle} ${styles.bannerParticleOne}`} aria-hidden="true" />
            <span className={`${styles.bannerParticle} ${styles.bannerParticleTwo}`} aria-hidden="true" />
            <span className={`${styles.bannerParticle} ${styles.bannerParticleThree}`} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.copy}>
                    <span className={styles.eyebrow}>
                        <strong>05</strong>
                        <span className={styles.eyebrowDot} aria-hidden="true">·</span>
                        <span>DAILY BONUS</span>
                    </span>

                    <h2 id="daily-bonus-banner-title">
                        Claim your
                        <br />
                        <span>daily bonus.</span>
                    </h2>

                    <p>
                        Log in daily, maintain your streak,
                        <br />
                        and earn exciting bonuses.
                    </p>

                    <div className={styles.actionsRow}>
                        <button
                            type="button"
                            className={`${styles.cta} ${claimed ? styles.ctaClaimed : ""}`}
                            onClick={handleClaim}
                            disabled={claimed}
                        >
                            <span>{claimed ? "Bonus Claimed" : "Claim Bonus Now"}</span>

                            {claimed ? (
                                <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                            ) : (
                                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                            )}
                        </button>

                        <div className={styles.statsBlock}>
                            <div className={styles.statsItem}>
                                <span className={styles.statsTopRow}>
                                    <Flame
                                        size={15}
                                        strokeWidth={0}
                                        fill="currentColor"
                                        className={styles.statsFlameIcon}
                                        aria-hidden="true"
                                    />
                                    <span className={styles.statsValue}>
                                        {claimed ? 8 : 7}
                                    </span>
                                </span>

                                <span className={styles.statsLabel}>Day Streak</span>
                            </div>

                            <span className={styles.statsDivider} aria-hidden="true" />

                            <div className={styles.statsItem}>
                                <span className={styles.statsTopRow}>
                                    <span className={styles.statsValueGold}>+25%</span>
                                </span>

                                <span className={styles.statsLabel}>Bonus Boost</span>
                            </div>
                        </div>
                    </div>
                </div>

                <DailyBonusVisual
                    claimed={claimed}
                    onClaim={handleClaim}
                    isVisible={isVisible}
                />
            </div>
        </section>
    );
};

export default DailyBonusBanner;