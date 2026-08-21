import { useEffect, useState } from "react";

import {
  Check,
  Coins,
  Play,
  Wallet,
} from "lucide-react";

import { motion, useAnimationControls } from "framer-motion";

import { watchAdData } from "../../../data/watchAd";

import styles from "./WatchAdBanner.module.css";

const WATCH_DURATION = 3000;

const WatchAdVisual = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const BASE_BALANCE = 12450;

  const [balance, setBalance] = useState(BASE_BALANCE);
  const [walletGlow, setWalletGlow] = useState(false);

  const walletControls = useAnimationControls();

  const rewardParts = [13, 13, 12];

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsPlaying(false);
      setIsCompleted(true);
    }, WATCH_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      return;
    }

    setIsCompleted(false);
    setBalance(BASE_BALANCE);

    setIsPlaying(true);
  };

  const handleCoinArrived = async (amount: number) => {
    setBalance((current) => current + amount);

    setWalletGlow(true);

    await walletControls.start({
      scale: [1, 1.08, 1],
      filter: [
        "drop-shadow(0 0 0 rgba(243, 204, 110, 0))",
        "drop-shadow(0 0 24px rgba(243, 204, 110, 1))",
        "drop-shadow(0 0 0 rgba(243, 204, 110, 0))",
      ],
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    });

    setWalletGlow(false);
  };

  return (
    <motion.div
      className={`${styles.visual} ${isPlaying ? styles.isPlaying : ""
        } ${isCompleted ? styles.isCompleted : ""}`}
      aria-label="Watch advertisement, complete the activity, and earn VE rewards"
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
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className={styles.visualGlow} />

      <div className={styles.visualGlowSecondary} />

      {/* =====================================================
          VIDEO / AD PLAYER
      ===================================================== */}

      <div className={styles.adScreen}>
        <div className={styles.adHeader}>
          <span>
            {isPlaying ? "WATCHING" : "AD 1 OF 3"}
          </span>

          <span className={styles.adBadge}>
            ADVERTISEMENT
          </span>
        </div>

        <div className={styles.adArtwork}>
          <div className={styles.artworkGlow} />

          <div className={styles.headphones}>
            <div className={styles.headphoneBand} />

            <div className={styles.headphoneLeft}>
              <span />
            </div>

            <div className={styles.headphoneRight}>
              <span />
            </div>
          </div>
        </div>

        <div className={styles.adControls}>
          <motion.button
            type="button"
            className={styles.playButton}
            onClick={handlePlay}
            disabled={isPlaying}
            aria-label={
              isPlaying
                ? "Advertisement is playing"
                : isCompleted
                  ? "Watch advertisement again"
                  : "Play advertisement"
            }
            whileHover={
              !isPlaying
                ? {
                  scale: 1.07,
                  boxShadow:
                    "0 12px 30px rgba(0, 0, 0, 0.28), 0 0 22px rgba(111, 140, 255, 0.16)",
                }
                : undefined
            }
            whileTap={
              !isPlaying
                ? {
                  scale: 0.94,
                }
                : undefined
            }
            transition={{
              duration: 0.18,
            }}
          >
            {isPlaying ? (
              <span className={styles.playingIndicator}>
                <span />
                <span />
                <span />
              </span>
            ) : isCompleted ? (
              <Check
                size={24}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            ) : (
              <Play
                size={25}
                fill="currentColor"
                aria-hidden="true"
              />
            )}
          </motion.button>

          <span className={styles.adMessage}>
            {isPlaying
              ? "WATCHING AD"
              : isCompleted
                ? "AD COMPLETE"
                : "WATCH TO EARN"}
          </span>
        </div>

        <div
          className={styles.videoMeta}
          aria-hidden="true"
        >
          <span>0:18</span>

          <div className={styles.adProgress}>
            <span />
          </div>

          <span>6:30</span>
        </div>
      </div>

      {/* =====================================================
          REWARD PANEL
      ===================================================== */}

      <div className={styles.rewardPanel}>
        <div className={styles.rewardHeader}>
          <span>Reward</span>
        </div>

        <div className={styles.rewardAmount}>
          <div className={styles.rewardCoin}>
            <Coins
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <strong>
            +{watchAdData.value} VE
          </strong>
        </div>

        <motion.div
          className={styles.completedCard}
          initial={false}
          animate={{
            opacity: isCompleted ? 1 : 0.45,
            y: isCompleted ? 0 : 4,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <motion.div
            className={styles.completedIcon}
            initial={{
              scale: 0,
              rotate: -20,
            }}
            animate={
              isCompleted
                ? {
                  scale: [0, 1.15, 1],
                  rotate: [20, -5, 0],
                }
                : {
                  scale: 0,
                }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Check aria-hidden="true" />
          </motion.div>

          <strong>Ad Completed!</strong>

          <span>✓</span>
        </motion.div>

        <div className={styles.rewardCredit}>
          <span>
            Reward credited to your wallet
          </span>
        </div>

        <div className={styles.balanceCard}>
          <span>Total Balance</span>

          <strong>
            {balance.toLocaleString()} VE
          </strong>

          <div className={styles.balanceArrow}>
            →
          </div>
        </div>
      </div>

      {/* =====================================================
    REWARD COINS
===================================================== */}

      <div
        className={styles.coins}
        aria-hidden="true"
      >
        {rewardParts.map((amount, index) => (
          <motion.div
            key={`${amount}-${index}`}
            className={`${styles.coin} ${index === 0
              ? styles.coinOne
              : index === 1
                ? styles.coinTwo
                : styles.coinThree
              }`}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            animate={
              isCompleted
                ? {
                  x:
                    index === 0
                      ? [0, 18, 42, 64]
                      : index === 1
                        ? [0, 12, 38, 58]
                        : [0, 22, 46, 62],

                  y:
                    index === 0
                      ? [0, 18, 52, 105]
                      : index === 1
                        ? [0, 28, 62, 108]
                        : [0, 14, 48, 102],

                  scale: [1, 1.05, 0.85, 0.35],

                  rotate:
                    index === 0
                      ? [0, 45, 120, 220]
                      : index === 1
                        ? [0, -35, -100, -180]
                        : [0, 30, 90, 180],

                  opacity: [1, 1, 1, 0],
                }
                : {
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }
            }
            transition={
              isCompleted
                ? {
                  duration: 0.85,
                  delay: index * 0.48,
                  ease: [0.32, 0.72, 0, 1],
                }
                : {
                  duration: 0.2,
                }
            }
            onAnimationComplete={() => {
              if (isCompleted) {
                void handleCoinArrived(amount);
              }
            }}
          >
            <Coins aria-hidden="true" />
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          WALLET
      ===================================================== */}

      <motion.div
        className={`${styles.wallet} ${walletGlow ? styles.walletGlowing : ""
          }`}
        animate={walletControls}
        initial={{
          scale: 1,
        }}
      >
        <div className={styles.walletIcon}>
          <Wallet
            size={26}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className={styles.walletOpening} />

        <div className={styles.walletCard}>
          <span>Wallet</span>

          <strong>
            {balance.toLocaleString()} VE
          </strong>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WatchAdVisual;