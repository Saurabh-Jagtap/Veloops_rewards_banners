import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";

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
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Zap size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Fast</strong>
                <span>Response</span>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Headphones size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Expert</strong>
                <span>Support</span>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={19} strokeWidth={1.8} />
              </div>

              <div className={styles.featureText}>
                <strong>Reward</strong>
                <span>Protection</span>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${contactData.email}`}
            className={styles.cta}
          >
            <span className={styles.ctaIcon}>◯</span>

            <span>Contact Support</span>

            <ArrowRight
              size={19}
              strokeWidth={1.8}
            />
          </a>
        </div>

        {/* ================= RIGHT ================= */}
        <ContactVisual />
      </div>
    </section>
  );
};

export default ContactBanner;