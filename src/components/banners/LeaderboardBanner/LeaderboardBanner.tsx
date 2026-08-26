import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import LeaderboardVisual from "./LeaderboardVisual";
import styles from "./LeaderboardBanner.module.css";
import { features } from "../../../data/leaderboard";

const LeaderboardBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="leaderboard-title"
    >
      <div className={styles.content}>
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <motion.div
          className={styles.copy}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className={styles.sectionNumber}
            variants={{
              hidden: {
                opacity: 0,
                y: 12,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  ease: "easeOut",
                },
              },
            }}
          >
            <span className={styles.number}>01</span>

            <span
              className={styles.sectionDot}
              aria-hidden="true"
            >
              &middot;
            </span>

            <span className={styles.eyebrow}>
              Compete &amp; Win
            </span>
          </motion.div>

          <motion.h2
            id="leaderboard-title"
            variants={{
              hidden: {
                opacity: 0,
                y: 18,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: "easeOut",
                },
              },
            }}
          >
            Climb the
            <br />
            <span>Leaderboard.</span>
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            Complete activities, earn rewards,
            <br />
            and compete with other users.
          </motion.p>

          {/* =================================================
              LEADERBOARD FLOW
          ================================================= */}

          <motion.div
            className={styles.featureFlow}
            aria-label="Compete, earn more, and stay ahead"
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              const variantClassName =
                feature.variant.charAt(0).toUpperCase() +
                feature.variant.slice(1);

              return (
                <Fragment key={feature.title}>
                  <div className={styles.featureStep}>
                    <div
                      className={`${styles.featureIcon} ${styles[`featureIcon${variantClassName}`]
                        }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <div className={styles.featureText}>
                      <span className={styles.featureLabel}>
                        {feature.title}
                      </span>

                      <span className={styles.featureSubLabel}>
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>

                  {index < features.length - 1 && (
                    <span
                      className={styles.featureDivider}
                      aria-hidden="true"
                    />
                  )}
                </Fragment>
              );
            })}
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
  className={styles.ctaEntrance}
  variants={{
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }}
>
  <button
    type="button"
    className={styles.cta}
  >
    <span>View Leaderboard</span>

    <ArrowRight
      size={17}
      strokeWidth={2}
      aria-hidden="true"
    />
  </button>
</motion.div>

        </motion.div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}

        <LeaderboardVisual />
      </div>
    </section>
  );
};

export default LeaderboardBanner;