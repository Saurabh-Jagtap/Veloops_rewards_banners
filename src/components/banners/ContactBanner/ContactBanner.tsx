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
      <div className={styles.content}>
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className={styles.copy}>
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
            <motion.div
              className={styles.flowStep}
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
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
            </motion.div>

            {/* Divider */}
            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            {/* Connect */}
            <motion.div
              className={styles.flowStep}
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
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
            </motion.div>

            {/* Divider */}
            <span
              className={styles.flowArrow}
              aria-hidden="true"
            >
              →
            </span>

            {/* Resolve */}
            <motion.div
              className={styles.flowStep}
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
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
            </motion.div>
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
        </div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}

        <ContactVisual />
      </div>
    </section>
  );
};

export default ContactBanner;