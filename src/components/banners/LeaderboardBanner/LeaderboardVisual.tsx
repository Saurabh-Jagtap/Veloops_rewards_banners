import {
  Clock3,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./LeaderboardBanner.module.css";

const topPlayers = [
  {
    rank: 2,
    name: "Priya S.",
    score: "11,820",
    initials: "PS",
    className: "second",
  },
  {
    rank: 1,
    name: "Aarav M.",
    score: "12,450",
    initials: "AM",
    className: "first",
  },
  {
    rank: 3,
    name: "Rohan K.",
    score: "10,970",
    initials: "RK",
    className: "third",
  },
];

const nearbyPlayers = [
  {
    rank: 13,
    name: "Karan P.",
    score: "6,460",
    initials: "KP",
  },
  {
    rank: 14,
    name: "You",
    score: "6,240",
    initials: "YO",
    current: true,
  },
  {
    rank: 15,
    name: "Neha T.",
    score: "6,010",
    initials: "NT",
  },
];

const LeaderboardVisual = () => {
  return (
    <motion.div
      className={styles.visual}
      initial={{
        opacity: 0,
        scale: 0.97,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className={styles.visualAtmosphere} />

      <div className={styles.visualHeader}>
        <span className={styles.visualTitle}>
          Weekly Leaderboard
        </span>

        <div className={styles.timer}>
          <Clock3 size={12} strokeWidth={1.8} />
          <span>Ends in 5d 14h</span>
        </div>
      </div>

      <div className={styles.risingPath}>
        <svg
          viewBox="0 0 600 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="leaderboardCurve"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="#D9A93A"
                stopOpacity="0"
              />

              <stop
                offset="40%"
                stopColor="#D9A93A"
                stopOpacity="0.7"
              />

              <stop
                offset="100%"
                stopColor="#F3CC6E"
                stopOpacity="0.9"
              />
            </linearGradient>
          </defs>

          <path
            d="M0 142 C120 145 170 132 245 91 C330 45 405 73 470 53 C520 38 555 18 600 0"
            fill="none"
            stroke="url(#leaderboardCurve)"
            strokeWidth="2"
          />

          <path
            d="M0 142 C120 145 170 132 245 91 C330 45 405 73 470 53 C520 38 555 18 600 0 L600 180 L0 180 Z"
            fill="url(#leaderboardCurve)"
            opacity="0.045"
          />

          <path
            d="M570 12 L598 0 L590 27"
            fill="none"
            stroke="#F3CC6E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={styles.trophy}>
        <div className={styles.trophyGlow} />

        <Trophy
          size={30}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <motion.div
        className={styles.podium}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.25,
            },
          },
        }}
      >
        {topPlayers.map((player) => (
          <motion.div
            key={player.rank}
            className={`${styles.podiumPlayer} ${styles[player.className]
              }`}
            variants={{
              hidden: {
                opacity: 0,
                y: 22,
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
            whileHover={{
              y: -5,
              scale: 1.015,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
          >
            <motion.div
              className={styles.avatar}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.18,
                },
              }}
            >
              {player.initials}
            </motion.div>

            <div className={styles.podiumCard}>
              <span className={styles.podiumRank}>
                {player.rank}
              </span>

              <strong>{player.name}</strong>

              <span>{player.score}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.nearbyRanks}>
        {nearbyPlayers.map((player) => (
          <motion.div
            key={player.rank}
            className={`${styles.nearbyPlayer} ${player.current ? styles.currentPlayer : ""
              }`}
            whileHover={{
              scale: player.current ? 1.015 : 1,
              transition: {
                duration: 0.18,
              },
            }}
          >
            <span className={styles.nearbyRank}>
              {player.rank}
            </span>

            <span className={styles.nearbyAvatar}>
              {player.initials}
            </span>

            <span className={styles.nearbyName}>
              {player.name}
            </span>

            <span className={styles.nearbyScore}>
              {player.score}
            </span>
          </motion.div>
        ))}
      </div>

      <div className={styles.progressPanel}>
        <div className={styles.progressHeader}>
          <span>
            You are 260 VE away from #13
          </span>

          <strong>
            6,240 / 6,500
          </strong>
        </div>

        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
            whileHover={{
              filter: "brightness(1.15)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderboardVisual;