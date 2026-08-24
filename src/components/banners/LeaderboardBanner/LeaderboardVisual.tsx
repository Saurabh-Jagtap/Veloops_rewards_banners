import {
  Calendar,
  Clock3,
  Crown,
  Star,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useState } from "react";

import styles from "./LeaderboardBanner.module.css";

type ChangeDirection = "up" | "down";

interface RankEntry {
  rank: number;
  name: string;
  initials: string;
  score: string;
  change: number;
  direction: ChangeDirection;
  isCurrentUser?: boolean;
  isFirst?: boolean;
}

const topPlayers: RankEntry[] = [
  {
    rank: 1,
    name: "Arlene M.",
    initials: "AM",
    score: "12,450",
    change: 2,
    direction: "up",
    isFirst: true,
  },
  {
    rank: 2,
    name: "Priya K.",
    initials: "PK",
    score: "9,210",
    change: 1,
    direction: "up",
  },
];

const currentUser: RankEntry = {
  rank: 3,
  name: "You",
  initials: "YO",
  score: "4,650",
  change: 2,
  direction: "up",
  isCurrentUser: true,
};

const getScoreValue = (score: string) =>
  Number(score.replace(/,/g, ""));

const secondPlace = topPlayers[1];

const secondPlaceGap =
  getScoreValue(secondPlace.score) -
  getScoreValue(currentUser.score);

const rankBadgeClassName = (entry: RankEntry) => {
  if (entry.isCurrentUser) {
    return styles.rankBadgeMe;
  }

  if (entry.rank === 1) {
    return styles.rankBadgeGold;
  }

  if (entry.rank === 2) {
    return styles.rankBadgeSilver;
  }

  return styles.rankBadgeBronze;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 18,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const rowListVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.32,
      ease: "easeOut",
    },
  },
};

const RankRow = ({
  entry,
  reduceMotion,
  isInteractive = false,
  isSelected = false,
  onClick,
  detail,
}: {
  entry: RankEntry;
  reduceMotion: boolean;
  isInteractive?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  detail?: string;
}) => (
  <motion.div
    className={[
      styles.rankRow,
      entry.isFirst ? styles.rankRowFirst : "",
      entry.isCurrentUser ? styles.rankRowMe : "",
      isInteractive ? styles.rankRowInteractive : "",
      isSelected ? styles.rankRowSelected : "",
    ]
      .filter(Boolean)
      .join(" ")}
    variants={rowVariants}
    whileHover={
      isInteractive
        ? {
          x: 3,
          transition: {
            duration: 0.18,
            ease: "easeOut",
          },
        }
        : undefined
    }
    whileTap={
      isInteractive
        ? {
          scale: 0.985,
        }
        : undefined
    }
    onClick={isInteractive ? onClick : undefined}
    role={isInteractive ? "button" : undefined}
    tabIndex={isInteractive ? 0 : undefined}
    onKeyDown={
      isInteractive
        ? (event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            onClick?.();
          }
        }
        : undefined
    }
    aria-expanded={
      isInteractive ? isSelected : undefined
    }
  >
    <div
      className={`${styles.rankBadge} ${rankBadgeClassName(entry)}`}
    >
      {entry.rank}
    </div>

    <div className={styles.rankUser}>
      <div className={styles.rankAvatar}>
        {entry.initials}
      </div>

      <div className={styles.rankUserInfo}>
        <span className={styles.rankName}>
          {entry.name}

          {entry.isFirst && (
            <motion.span
              className={styles.crownIcon}
              animate={
                reduceMotion
                  ? undefined
                  : {
                    rotate: [0, -8, 8, 0],
                    scale: [1, 1.08, 1],
                  }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Crown
                size={13}
                fill="currentColor"
                aria-hidden="true"
              />
            </motion.span>
          )}
        </span>

        {isSelected && detail && (
          <motion.span
            className={styles.rankDetail}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : {
                  opacity: 0,
                  y: 3,
                }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
          >
            {detail}
          </motion.span>
        )}
      </div>
    </div>

    <div className={styles.rankEarned}>
      <span className={styles.veIcon}>
        VE
      </span>

      {entry.score} VE
    </div>

    <div
      className={`${styles.rankChange} ${entry.direction === "up"
        ? styles.rankChangeUp
        : styles.rankChangeDown
        }`}
    >
      <span aria-hidden="true">
        {entry.direction === "up" ? "▲" : "▼"}
      </span>

      {entry.change}
    </div>
  </motion.div>
);

const LeaderboardVisual = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const [isSecondPlaceSelected, setIsSecondPlaceSelected] =
    useState(false);

  const handleSecondPlaceClick = () => {
    setIsSecondPlaceSelected((current) => !current);
  };

  return (
    <motion.div
      className={styles.visual}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      {/* ---------- Header ---------- */}

      <motion.div
        className={styles.visualHeader}
        variants={fadeUpVariants}
      >
        <div className={styles.visualTitleGroup}>
          <div className={styles.calendarIcon}>
            <Calendar
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <span className={styles.visualTitle}>
            Weekly Leaderboard
          </span>
        </div>

        <motion.div
          className={styles.timer}
          animate={
            reduceMotion
              ? undefined
              : {
                boxShadow: [
                  "0 0 0px rgba(243, 204, 110, 0)",
                  "0 0 14px rgba(243, 204, 110, 0.16)",
                  "0 0 0px rgba(243, 204, 110, 0)",
                ],
              }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Clock3
            size={13}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>Resets in 5d 14h</span>
        </motion.div>
      </motion.div>

      {/* ---------- Column labels ---------- */}

      <motion.div
        className={styles.columnHeader}
        variants={fadeUpVariants}
      >
        <span>Rank</span>
        <span>User</span>
        <span>VE Earned</span>
        <span className={styles.colChange}>
          Change
        </span>
      </motion.div>

      {/* ---------- Rank list ---------- */}

      <motion.div
        className={styles.rankList}
        variants={rowListVariants}
      >
        {/* #1 and #2 */}

        {topPlayers.map((player) => (
          <RankRow
            entry={player}
            reduceMotion={reduceMotion}
            isInteractive={player.rank === 2}
            isSelected={
              player.rank === 2 &&
              isSecondPlaceSelected
            }
            onClick={
              player.rank === 2
                ? handleSecondPlaceClick
                : undefined
            }
            detail={
              player.rank === 2
                ? `${secondPlaceGap.toLocaleString()} VE ahead`
                : undefined
            }
            key={player.rank}
          />
        ))}

        {/* Current user — #3 */}

        <RankRow
          entry={currentUser}
          reduceMotion={reduceMotion}
          key={currentUser.rank}
        />
      </motion.div>

      {/* ---------- Bottom panels ---------- */}

      <motion.div
        className={styles.bottomPanels}
        variants={fadeUpVariants}
      >
        <motion.div
          className={styles.nextRankPanel}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.18,
              ease: "easeOut",
            },
          }}
        >
          <div className={styles.nextRankTop}>
            <div className={styles.nextRankIcon}>
              <Star
                size={15}
                fill="currentColor"
                aria-hidden="true"
              />
            </div>

            <div className={styles.nextRankText}>
              <strong>
                Next Rank: <em>Bronze I</em>
              </strong>

              <span>
                Keep going! You&apos;re close.
              </span>
            </div>
          </div>

          <div className={styles.nextRankTrack}>
            <motion.div
              className={styles.nextRankFill}
              initial={{ width: 0 }}
              whileInView={{ width: "78%" }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: "easeOut",
              }}
            />
          </div>

          <div className={styles.nextRankNumbers}>
            <strong>4,650</strong> / 6,000 VE
          </div>
        </motion.div>

        <motion.div
          className={styles.rewardPanel}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.18,
              ease: "easeOut",
            },
          }}
        >
          <span className={styles.rewardAmount}>
            +350 VE
          </span>

          <span className={styles.rewardLabel}>
            Reward for next rank
          </span>

          <div
            className={styles.rewardCoins}
            aria-hidden="true"
          >
            <motion.div
              className={`${styles.rewardCoin} ${styles.rewardCoinBack}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                    y: [0, -3, 0],
                  }
              }
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              VE
            </motion.div>

            <motion.div
              className={`${styles.rewardCoin} ${styles.rewardCoinFront}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                    y: [0, -4, 0],
                  }
              }
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.45,
              }}
            >
              VE
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LeaderboardVisual;