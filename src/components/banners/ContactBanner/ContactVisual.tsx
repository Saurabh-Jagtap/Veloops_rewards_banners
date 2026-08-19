import { useEffect, useState } from "react";

import {
  Check,
  Headphones,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { contactData } from "../../../data/contact";

import styles from "./ContactBanner.module.css";

const ContactVisual = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstMessage, setShowFirstMessage] =
    useState(false);
  const [showSecondMessage, setShowSecondMessage] =
    useState(false);
  const [highlightEmail, setHighlightEmail] =
    useState(false);

  useEffect(() => {
    const firstMessageTimer = window.setTimeout(() => {
      setShowFirstMessage(true);
    }, 650);

    const secondMessageTimer = window.setTimeout(() => {
      setShowSecondMessage(true);
    }, 1300);

    const emailTimer = window.setTimeout(() => {
      setHighlightEmail(true);
    }, 1900);

    setIsVisible(true);

    return () => {
      window.clearTimeout(firstMessageTimer);
      window.clearTimeout(secondMessageTimer);
      window.clearTimeout(emailTimer);
    };
  }, []);

  return (
    <div
      className={`${styles.visual} ${
        isVisible ? styles.isVisible : ""
      } ${highlightEmail ? styles.emailHighlighted : ""}`}
      aria-label="VELOOP Rewards customer support"
    >
      <div className={styles.visualGlow} />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleOne}`}
        aria-hidden="true"
      />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleTwo}`}
        aria-hidden="true"
      />

      {/* Support profile */}
      <div className={styles.supportCard}>
        <div className={styles.supportHeader}>
          <span>VELOOP SUPPORT</span>

          <span className={styles.status}>
            <span className={styles.statusDot} />
            {contactData.status}
          </span>
        </div>

        <div className={styles.agent}>
          <div className={styles.agentAvatar}>
            <Headphones aria-hidden="true" />
          </div>

          <div className={styles.agentInfo}>
            <strong>Support Team</strong>

            <span>Here to help</span>
          </div>
        </div>

        <div className={styles.supportLine}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Incoming message */}
      <div
        className={`${styles.message} ${styles.messageOne} ${
          showFirstMessage
            ? styles.messageVisible
            : ""
        }`}
      >
        <div className={styles.messageIcon}>
          <MessageCircle aria-hidden="true" />
        </div>

        <div>
          <span>Need help?</span>
          <strong>We're here.</strong>
        </div>
      </div>

      {/* Response message */}
      <div
        className={`${styles.message} ${styles.messageTwo} ${
          showSecondMessage
            ? styles.messageVisible
            : ""
        }`}
      >
        <div className={styles.messageIcon}>
          <Check aria-hidden="true" />
        </div>

        <div>
          <span>Support</span>
          <strong>Message received</strong>
        </div>
      </div>

      {/* Email destination */}
      <div className={styles.emailCard}>
        <div className={styles.emailIcon}>
          <Mail aria-hidden="true" />
        </div>

        <div>
          <span>CONTACT</span>

          <strong>
            {contactData.email}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ContactVisual;