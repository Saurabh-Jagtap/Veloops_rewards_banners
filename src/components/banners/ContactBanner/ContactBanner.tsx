import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Zap,
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
        {/* ================= LEFT ================= */}
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNumber}>03</span>
            <span>SUPPORT &amp; TRUST</span>
          </div>

          <h2 id="contact-banner-title">
            We're here to
            <br />
            <span>help you.</span>
          </h2>

          <p className={styles.description}>
            Facing an issue or missing a reward?
            <br />
            Our support team is online and ready.
          </p>

          <div className={styles.features}>
            <motion.div
              className={styles.feature}
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
              <div className={styles.featureIcon}>
                <Zap size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Fast</strong>
                <span>Response</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.feature}
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
              <div className={styles.featureIcon}>
                <Headphones size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Expert</strong>
                <span>Support</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.feature}
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            >
              <div className={styles.featureIcon}>
                <ShieldCheck size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Reward</strong>
                <span>Protection</span>
              </div>
            </motion.div>
          </div>

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
            <span className={styles.ctaIcon}>◯</span>

            <span>Contact Support</span>

            <ArrowRight
              size={19}
              strokeWidth={1.8}
            />
          </motion.a>
        </div>

        {/* ================= RIGHT ================= */}
        <ContactVisual />
      </div>
    </section>
  );
};

export default ContactBanner;