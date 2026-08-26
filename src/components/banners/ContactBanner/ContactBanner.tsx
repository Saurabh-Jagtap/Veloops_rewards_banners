import {
  ArrowRight,
  Check,
  MessageCircle,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

import { contactData } from "../../../data/contact";
import ContactVisual from "./ContactVisual";
import styles from "./ContactBanner.module.css";

const ContactBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="contact-banner-title"
    >
      {/* =====================================================
      BANNER BACKGROUND
  ===================================================== */}
      <div className={styles.bannerAtmosphere} aria-hidden="true">
        <svg
          className={styles.bannerWaves}
          viewBox="0 0 1600 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-80 360
           C120 210 250 470 470 320
           C690 170 820 390 1040 245
           C1250 105 1390 255 1680 80"
            fill="none"
            stroke="rgba(93, 151, 226, 0.20)"
            strokeWidth="1.4"
          />

          <path
            d="M-100 410
           C130 255 280 500 500 355
           C715 215 860 435 1080 285
           C1290 145 1440 290 1700 115"
            fill="none"
            stroke="rgba(76, 137, 215, 0.13)"
            strokeWidth="1"
          />

          <path
            d="M-60 245
           C130 110 280 315 475 190
           C670 65 820 265 1025 145
           C1230 25 1390 165 1660 -10"
            fill="none"
            stroke="rgba(126, 177, 235, 0.10)"
            strokeWidth="1"
          />

          <path
            d="M250 520
           C430 350 590 510 760 390
           C940 265 1080 450 1250 330
           C1400 225 1510 300 1680 215"
            fill="none"
            stroke="rgba(68, 125, 204, 0.08)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className={styles.content}>
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <motion.div
          className={styles.copy}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Section number */}
          <div className={styles.sectionNumber}>
            <span className={styles.number}>03</span>

            <span className={styles.eyebrow}>
              Support &amp; Trust
            </span>
          </div>

          {/* Heading */}
          <h2 id="contact-banner-title">
            We&apos;re here to
            <br />
            <span>help you.</span>
          </h2>

          {/* Description */}
          <p className={styles.description}>
            Facing an issue or missing a reward?
            <br />
            Our support team is online and ready.
          </p>

          {/* =================================================
              SUPPORT FLOW
          ================================================= */}

          <div
            className={styles.supportFlow}
            aria-label="Contact support process"
          >
            {/* Ask */}
            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <MessageCircle
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.flowText}>
                <span className={styles.flowLabel}>
                  Ask
                </span>

                <span className={styles.flowSubLabel}>
                  Issue
                </span>
              </div>
            </div>

            {/* Divider */}
            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            {/* Connect */}
            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <Send
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.flowText}>
                <span className={styles.flowLabel}>
                  Connect
                </span>

                <span className={styles.flowSubLabel}>
                  Support
                </span>
              </div>
            </div>

            {/* Divider */}
            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            {/* Resolve */}
            <div className={styles.flowStep}>
              <div className={styles.flowIcon}>
                <Check
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.flowText}>
                <span className={styles.flowLabel}>
                  Resolve
                </span>

                <span className={styles.flowSubLabel}>
                  Reward
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.a
            href={`mailto:${contactData.email}`}
            className={styles.cta}
            whileHover={{
              y: -3,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
          >
            <span>Contact Support</span>

            <ArrowRight
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}

        <motion.div
  className={styles.visualEntrance}
  initial={{
    opacity: 0,
    y: 16,
    scale: 0.985,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.8,
    delay: 0.12,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <ContactVisual />
</motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;