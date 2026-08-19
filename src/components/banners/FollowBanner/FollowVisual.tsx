"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Camera,
  Check,
  Play,
  Sparkles,
  Users,
} from "lucide-react";

import { followData } from "../../../data/follow";

import styles from "./FollowBanner.module.css";

const FollowVisual = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = visualRef.current;

    if (!element) {
      return;
    }

    // Respect reduced-motion preferences.
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
    ) {
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
      className={`${styles.visual} ${
        isVisible ? styles.isVisible : ""
      }`}
      aria-label="VELOOP Rewards social community"
    >
      <div className={styles.visualGlow} />

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
        aria-hidden="true"
      />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleTwo}`}
        aria-hidden="true"
      />

      {/* Hero social profile */}
      <div className={styles.profileCard}>
        <div className={styles.profileTop}>
          <span>SOCIAL COMMUNITY</span>

          <span className={styles.liveIndicator}>
            <span className={styles.liveDot} />
            ACTIVE
          </span>
        </div>

        <div className={styles.profileIdentity}>
          <div className={styles.profileAvatar}>
            <span>VE</span>
          </div>

          <div className={styles.profileDetails}>
            <strong>
              {followData.profile.name}
            </strong>

            <span>
              {followData.profile.handle}
            </span>
          </div>
        </div>

        <div className={styles.followState}>
          <div className={styles.followCheck}>
            <Check
              size={13}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>

          <span>Following</span>

          <ArrowUpRight
            size={14}
            aria-hidden="true"
          />
        </div>

        <div className={styles.profileDivider} />

        <div className={styles.profileMessage}>
          <span>Stay connected for</span>

          <strong>
            Campaigns · Updates · Rewards
          </strong>
        </div>
      </div>

      {/* Social channels */}
      <div className={styles.channels}>
        <div
          className={`${styles.channel} ${styles.instagram}`}
        >
          <div className={styles.channelIcon}>
            <Camera
              size={15}
              aria-hidden="true"
            />
          </div>

          <div className={styles.channelContent}>
            <span>Instagram</span>
            <strong>Follow</strong>
          </div>

          <ArrowUpRight
            className={styles.channelArrow}
            size={13}
            aria-hidden="true"
          />
        </div>

        <div
          className={`${styles.channel} ${styles.youtube}`}
        >
          <div className={styles.channelIcon}>
            <Play
              size={14}
              fill="currentColor"
              aria-hidden="true"
            />
          </div>

          <div className={styles.channelContent}>
            <span>YouTube</span>
            <strong>Subscribe</strong>
          </div>

          <ArrowUpRight
            className={styles.channelArrow}
            size={13}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Eligible campaign */}
      <div className={styles.campaignCard}>
        <div className={styles.campaignIcon}>
          <Users
            size={16}
            aria-hidden="true"
          />
        </div>

        <div className={styles.campaignContent}>
          <span>ELIGIBLE CAMPAIGN</span>

          <strong>
            Unlock rewards through participation
          </strong>
        </div>

        <div className={styles.campaignStatus}>
          <span />
        </div>
      </div>
    </div>
  );
};

export default FollowVisual;