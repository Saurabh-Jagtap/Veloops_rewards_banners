import { useState } from "react";
import {
  Clock3,
  Trophy,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import styles from "./LeaderboardBanner.module.css";

/* =========================================================
   DATA
   ========================================================= */

interface PodiumEntry {
  rank: 1 | 2 | 3;
  name: string;
  score: string;
  tier: "gold" | "silver" | "bronze";
}

interface SupportingEntry {
  rank: number;
  name: string;
  initials: string;
  score: string;
  isCurrentUser?: boolean;
}

// Rendered left → right: silver, gold, bronze — gold stays
// centered and dominant regardless of array order.
const podium: PodiumEntry[] = [
  { rank: 2, name: "Priya K.", score: "9,210", tier: "silver" },
  { rank: 1, name: "Arlene M.", score: "12,450", tier: "gold" },
  { rank: 3, name: "Robert C.", score: "7,310", tier: "bronze" },
];

const supporting: SupportingEntry[] = [
  { rank: 4, name: "Jayden R.", initials: "JR", score: "6,240" },
  {
    rank: 5,
    name: "You",
    initials: "YO",
    score: "4,650",
    isCurrentUser: true,
  },
  { rank: 6, name: "Neha T.", initials: "NT", score: "3,120" },
];

const currentUser = supporting.find((entry) => entry.isCurrentUser)!;

// The row immediately above the current user — the subject of
// the "preview the person above you" interaction.
const rowAboveUser =
  supporting[supporting.findIndex((e) => e.isCurrentUser) - 1];

const getScoreValue = (score: string) => Number(score.replace(/,/g, ""));

const gapAboveUser = rowAboveUser
  ? getScoreValue(rowAboveUser.score) - getScoreValue(currentUser.score)
  : 0;

const GOAL_VE = 10000;
const progressPct = Math.min(
  100,
  Math.round((getScoreValue(currentUser.score) / GOAL_VE) * 100),
);

/* =========================================================
   MOTION VARIANTS — small, cheap (opacity / x / y / scale)
   ========================================================= */

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const podiumListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const podiumBlockVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const rowListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const LeaderboardVisual = () => {
  const reduceMotion = useReducedMotion() ?? false;
  const [isAboveRowActive, setIsAboveRowActive] = useState(false);

  const toggleAboveRow = () => setIsAboveRowActive((v) => !v);

  return (
    <motion.div
      className={styles.visual}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Ambient background */}
      <div className={styles.visualGoldGlow} aria-hidden="true" />
      <svg
        className={styles.risingPath}
        viewBox="0 0 420 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="risingPathGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#d9a93a" stopOpacity="0" />
            <stop offset="45%" stopColor="#d9a93a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd873" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M20 140 C90 130 140 100 190 78 C240 56 290 60 330 34 C355 18 370 10 395 4"
          fill="none"
          stroke="url(#risingPathGradient)"
          strokeWidth="2"
        />
        <path
          d="M370 3 L398 3 L392 28"
          fill="none"
          stroke="#ffd873"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ---------- Header ---------- */}
      <motion.div className={styles.visualHeader} variants={fadeUpVariants}>
        <span className={styles.visualTitle}>Weekly Leaderboard</span>

        <motion.div
          className={styles.timer}
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 0 0px rgba(243, 204, 110, 0)",
                    "0 0 14px rgba(243, 204, 110, 0.18)",
                    "0 0 0px rgba(243, 204, 110, 0)",
                  ],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clock3 size={12} strokeWidth={2} aria-hidden="true" />
          <span>Ends in 5d 14h</span>
        </motion.div>
      </motion.div>

      {/* ---------- Top 3 podium ---------- */}
      <motion.div className={styles.podium} variants={podiumListVariants}>
        {podium.map((entry) => (
          <motion.div
            key={entry.rank}
            className={`${styles.podiumBlock} ${
              styles[
                `podiumBlock${entry.tier[0].toUpperCase()}${entry.tier.slice(1)}`
              ]
            }`}
            variants={podiumBlockVariants}
          >
            {entry.tier === "gold" && (
              <motion.div
                className={styles.podiumTrophy}
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -3, 0] }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Trophy
                  size={22}
                  strokeWidth={1.6}
                  fill="currentColor"
                  aria-hidden="true"
                />
              </motion.div>
            )}

            <span className={styles.podiumBadge}>{entry.rank}</span>

            <div className={styles.podiumSlab}>
              <strong>{entry.name}</strong>
              <span>{entry.score} VE</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- Supporting rows (#4 / #5 You / #6) ---------- */}
      <motion.div className={styles.supportingRows} variants={rowListVariants}>
        {supporting.map((entry) => {
          const isAboveUser = entry.rank === rowAboveUser?.rank;

          return (
            <motion.div
              key={entry.rank}
              className={[
                styles.supportingRow,
                entry.isCurrentUser ? styles.supportingRowMe : "",
                isAboveUser ? styles.supportingRowInteractive : "",
                isAboveUser && isAboveRowActive
                  ? styles.supportingRowActive
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              variants={rowVariants}
              whileHover={
                isAboveUser
                  ? { y: -2, transition: { duration: 0.16, ease: "easeOut" } }
                  : undefined
              }
              onClick={isAboveUser ? toggleAboveRow : undefined}
              onMouseEnter={
                isAboveUser ? () => setIsAboveRowActive(true) : undefined
              }
              onMouseLeave={
                isAboveUser ? () => setIsAboveRowActive(false) : undefined
              }
              role={isAboveUser ? "button" : undefined}
              tabIndex={isAboveUser ? 0 : undefined}
              onKeyDown={
                isAboveUser
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleAboveRow();
                      }
                    }
                  : undefined
              }
              aria-expanded={isAboveUser ? isAboveRowActive : undefined}
            >
              <span className={styles.supportingRank}>#{entry.rank}</span>

              <span className={styles.supportingAvatar}>
                {entry.initials}
              </span>

              <span className={styles.supportingName}>{entry.name}</span>

              {isAboveUser && isAboveRowActive && (
                <motion.span
                  className={styles.supportingGap}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: 3 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                >
                  {gapAboveUser.toLocaleString()} VE ahead
                </motion.span>
              )}

              <span className={styles.supportingScore}>
                {entry.score} VE
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ---------- Progress toward goal ---------- */}
      <motion.div className={styles.progressSection} variants={fadeUpVariants}>
        <div className={styles.progressHeaderRow}>
          <span>You are in the top 15% this week!</span>
          <strong>
            {currentUser.score} / {GOAL_VE.toLocaleString()}
          </strong>
        </div>

        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            whileInView={{ width: `${progressPct}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeaderboardVisual;