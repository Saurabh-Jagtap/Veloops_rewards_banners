"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Gift, MessageCircle, UserPlus } from "lucide-react";

import FollowVisual from "./FollowVisual";
import styles from "./FollowBanner.module.css";
import FollowReactions from "./FollowReactions";

const FEATURES = [
  {
    icon: UserPlus,
    title: "Follow",
    description: "Stay connected",
    tone: styles.featureFollow,
  },
  {
    icon: MessageCircle,
    title: "Engage",
    description: "Interact",
    tone: styles.featureEngage,
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Get rewarded",
    tone: styles.featureEarn,
  },
];

const FollowBanner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = bannerRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`${styles.banner} ${isVisible ? styles.isVisible : ""
        }`}
      aria-labelledby="follow-banner-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowNumber}>04</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span>CONNECT &amp; EARN</span>
          </span>

          <h2 id="follow-banner-title">
            Follow &amp;
            <br />
            <span> Earn</span>
          </h2>

          <p>
            Follow our official channels, engage with our posts, and
            complete eligible actions to unlock exciting rewards.
          </p>

          <ul className={styles.features}>
            {FEATURES.map(({ icon: Icon, tone, title, description }) => (
              <li className={styles.feature} key={title}>
                <span className={`${styles.featureIcon} ${tone}`}>
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <div className={styles.featureText}>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#" className={styles.cta}>
            <span>Explore Campaigns</span>

            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

<div className={styles.rightSide}>
  <FollowVisual isVisible={isVisible} />
  <FollowReactions />
</div>
        
      </div>
    </section>
  );
};

export default FollowBanner;