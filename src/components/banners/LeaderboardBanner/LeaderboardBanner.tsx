import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import LeaderboardVisual from "./LeaderboardVisual";
import styles from "./LeaderboardBanner.module.css";

const LeaderboardBanner = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="leaderboard-title"
    >
      <div className={styles.content}>
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
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
          >
            <span className={styles.number}>01</span>

            <span className={styles.sectionLabel}>
              Compete & Win
            </span>
          </motion.div>

          <motion.h2
            id="leaderboard-title"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          >
            Climb the ranks.
            <br />
            <span>Earn more.</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            The more you engage, the higher you climb.
            <br />
            Top performers earn bigger rewards every week.
          </motion.p>

          <motion.div
            className={styles.stats}
            variants={{
              hidden: { opacity: 0, y: 15, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            {/* keep your existing stats content here */}
          </motion.div>

          <motion.button
            type="button"
            className={styles.cta}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <span>View Leaderboard</span>

            <ArrowRight
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </motion.button>
        </motion.div>

        <LeaderboardVisual />
      </div>
    </section>
  );
};

export default LeaderboardBanner;