import { ArrowRight, Mail } from "lucide-react";

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
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            Support · 03 / 05
          </span>

          <h2 id="contact-banner-title">
            Need Help?
            <br />
            We're Here.
          </h2>

          <p>
            Have a question, concern, or need assistance?
            Get in touch with the VELOOP Rewards team.
          </p>

          <a
            href={`mailto:${contactData.email}`}
            className={styles.email}
          >
            <Mail
              size={15}
              aria-hidden="true"
            />

            <span>{contactData.email}</span>
          </a>

          <a
            href={`mailto:${contactData.email}`}
            className={styles.cta}
          >
            <span>Contact Support</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </a>
        </div>

        <ContactVisual />
      </div>
    </section>
  );
};

export default ContactBanner;