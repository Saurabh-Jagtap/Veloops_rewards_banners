"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import FollowVisual from "./FollowVisual";
import styles from "./FollowBanner.module.css";

const FollowBanner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [storyCompleted, setStoryCompleted] = useState(false);

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
            <span>FOLLOW &amp; EARN</span>
          </span>

          <h2 id="follow-banner-title">
            Follow. Engage.
            <br />
            <span>Get rewarded.</span>
          </h2>

          <p>
            Follow our official channels and engage
            to unlock exclusive rewards and campaigns.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>3</strong>
              <span>Channels</span>
            </div>

            <div className={styles.stat}>
              <strong>
                {storyCompleted ? "3/3" : "2/3"}
              </strong>
              <span>Completed</span>
            </div>

            <div className={styles.stat}>
              <strong>+500 VE</strong>
              <span>Potential</span>
            </div>
          </div>

          <a
            href="#"
            className={styles.cta}
          >
            <span>Explore Campaigns</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </a>
        </div>

        <FollowVisual
          storyCompleted={storyCompleted}
          onStoryComplete={() => setStoryCompleted(true)}
        />
      </div>
    </section>
  );
};

export default FollowBanner;