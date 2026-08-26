import { Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ContactBanner.module.css";
import { useState } from "react";
import { headerVariants, messageVariants, supportWindowVariants, topics, topicVariants } from "../../../data/contact";

const ContactVisual = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  const topic = topics[activeTopic];

  return (
    <div className={styles.visual}>
      {/* Ambient background */}
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />
      <div className={styles.lightSweep} />

      <div className={styles.ambientWave} aria-hidden="true">
        <svg
          viewBox="0 0 700 360"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-30 250 C100 130 180 310 315 195 C430 98 505 210 730 55"
            fill="none"
            stroke="rgba(87, 137, 245, 0.14)"
            strokeWidth="1.2"
          />

          <path
            d="M-40 285 C105 170 205 330 330 225 C455 120 550 230 740 85"
            fill="none"
            stroke="rgba(120, 165, 255, 0.08)"
            strokeWidth="1"
          />

          <path
            d="M30 120 C130 65 190 170 295 105 C420 30 505 130 680 15"
            fill="none"
            stroke="rgba(78, 126, 238, 0.08)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ================= SUPPORT WINDOW ================= */}
      <motion.div
        className={styles.supportCenter}
        variants={supportWindowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.35,
        }}
      >
        {/* ---------- Header ---------- */}
        <motion.header
          className={styles.supportHeader}
          variants={headerVariants}
        >
          <div className={styles.supportIdentity}>
            <div className={styles.supportAvatar}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.5 19c.8-3 3-4.5 6.5-4.5s5.7 1.5 6.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <strong>Support Center</strong>
          </div>

          <motion.div
            className={styles.onlineBadge}
            animate={{
              boxShadow: [
                "0 0 16px rgba(70, 119, 228, 0.045)",
                "0 0 22px rgba(82, 151, 237, 0.12)",
                "0 0 16px rgba(70, 119, 228, 0.045)",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.i
              animate={{
                opacity: [0.65, 1, 0.65],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span>Online</span>
          </motion.div>
        </motion.header>

        {/* ---------- Main ---------- */}
        <div className={styles.supportMain}>
          {/* ===== Quick Help ===== */}
          <aside className={styles.quickHelp}>
            <div className={styles.quickHelpHeader}>
              <span>Quick Help</span>
            </div>

            <div className={styles.topicList}>
              {topics.map((topicItem, index) => {
                const Icon = topicItem.icon;

                return (
                  <motion.button
                    type="button"
                    key={topicItem.title}
                    custom={index}
                    variants={topicVariants}
                    className={`${styles.topic} ${activeTopic === index
                      ? styles.topicActive
                      : ""
                      }`}
                    onClick={() => setActiveTopic(index)}
                    whileHover={{
                      x: 2,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    transition={{
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                  >
                    <span className={styles.topicIcon}>
                      <Icon size={14} strokeWidth={1.8} />
                    </span>

                    <span className={styles.topicLabel}>
                      {topicItem.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              type="button"
              className={styles.viewTopics}
              whileHover={{
                y: -1,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              View All Topics
            </motion.button>
          </aside>

          {/* ===== Chat ===== */}
          <section className={styles.chat}>
            <AnimatePresence mode="wait">
              <motion.div
                key={topic.title}
                className={styles.messages}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeIn",
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {topic.messages.map((message, index) => (
                  <motion.div
                    key={`${topic.title}-${index}`}
                    className={styles.msgRow}
                    custom={index}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className={styles.msgAvatar}>
                      <span>VE</span>
                    </div>

                    <div className={styles.msgContent}>
                      <span className={styles.msgSender}>
                        {message.type === "user" ? "You" : "VELOOP Support"}
                      </span>

                      <p className={styles.msgBubble}>
                        {message.text}
                        <time>{message.time}</time>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Input */}
            <div className={styles.chatComposer}>
              <span>Type your message...</span>

              <motion.button
                type="button"
                className={styles.sendButton}
                aria-label="Send message"
                whileHover={{
                  scale: 1.08,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.92,
                }}
              >
                <Send size={14} />
              </motion.button>
            </div>
          </section>
        </div>
      </motion.div>

      {/* ================= SUPPORT AGENT ================= */}
      <div
        className={styles.supportAgentIllustration}
        aria-hidden="true"
      >
        <motion.div
          className={styles.supportAgentFloat}
          animate={{
            y: [0, -4, 0],
            rotateZ: [0, 0.35, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/headset.png"
            alt=""
            className={styles.headsetImage}
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactVisual;