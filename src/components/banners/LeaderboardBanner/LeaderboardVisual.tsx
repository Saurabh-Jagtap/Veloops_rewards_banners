import { Trophy, Sparkles } from "lucide-react";
import { leaderboardEntries } from "../../../data/leaderboard";
import styles from "./LeaderboardBanner.module.css";

const LeaderboardVisual = () => {
  const topThree = leaderboardEntries.slice(0, 3);

  return (
    <div className={styles.visual}>
      {/* Atmospheric background */}
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />

      {/* Decorative achievement particles */}
      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleOne}`}
        aria-hidden="true"
      />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleTwo}`}
        aria-hidden="true"
      />

      <Sparkles
        className={`${styles.sparkle} ${styles.sparkleThree}`}
        aria-hidden="true"
      />

      {/* Rising performance graph */}
      <svg
        className={styles.chart}
        viewBox="0 0 560 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="leaderboardChartGradient"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#6f8cff" stopOpacity="0.05" />
            <stop offset="55%" stopColor="#91a6ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f3cc6e" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient
            id="leaderboardAreaGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#f3cc6e"
              stopOpacity="0.12"
            />
            <stop
              offset="100%"
              stopColor="#6f8cff"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* subtle grid */}
        <path
          className={styles.chartGrid}
          d="M20 55 H540 M20 110 H540 M20 165 H540 M20 220 H540"
        />

        {/* filled area underneath the graph */}
        <path
          className={styles.chartArea}
          d="
            M20 220
            L20 195
            L90 178
            L145 184
            L215 142
            L280 153
            L350 103
            L415 112
            L480 65
            L540 34
            L540 220
            Z
          "
        />

        {/* actual rising graph */}
        <path
          className={styles.chartPath}
          pathLength="1"
          d="
            M20 195
            L90 178
            L145 184
            L215 142
            L280 153
            L350 103
            L415 112
            L480 65
            L540 34
          "
        />

        {/* final graph point */}
        <circle
          className={styles.chartPoint}
          cx="540"
          cy="34"
          r="5"
        />

        <circle
          className={styles.chartPointGlow}
          cx="540"
          cy="34"
          r="11"
        />
      </svg>

      {/* Trophy focal point */}
      <div className={styles.trophy}>
        <div className={styles.trophyAura} />

        <div className={styles.trophyBase}>
          <Trophy
            className={styles.trophyIcon}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Podium */}
      <div className={styles.podium}>
        {topThree.map((entry) => (
          <div
            key={entry.rank}
            className={`${styles.podiumColumn} ${
              styles[`rank${entry.rank}`]
            }`}
          >
            <div className={styles.avatar}>
              {entry.avatar}
            </div>

            <div className={styles.rank}>
              #{entry.rank}
            </div>

            <div className={styles.podiumBase}>
              <span>{entry.score.toLocaleString()}</span>
              <small>VE</small>
            </div>
          </div>
        ))}
      </div>

      {/* Current user */}
      <div className={styles.userRank}>
        <span className={styles.userRankLabel}>
          Your Rank
        </span>

        <strong>#14</strong>

        <span className={styles.userScore}>
          6,240 VE
        </span>
      </div>

      {/* Weekly progress */}
      <div className={styles.risingIndicator}>
        <span className={styles.risingArrow}>↗</span>

        <div>
          <span className={styles.risingValue}>
            +180 VE
          </span>

          <small>This week</small>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardVisual;