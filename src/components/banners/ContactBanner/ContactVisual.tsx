import {
  ArrowUpRight,
  ChevronDown,
  MoreVertical,
  Paperclip,
  Send,
} from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import styles from "./ContactBanner.module.css";
import { useEffect, useState } from "react";

const conversations = [
  {
    title: "Reward not received",
    ticket: "#VE-45821",
    time: "Now",
    messages: [
      {
        type: "user",
        text: "I completed an offer but didn't get the reward.",
        time: "10:30 AM",
      },
      {
        type: "agent",
        text: "Hi! Let me check this for you right away.",
        time: "10:31 AM",
      },
    ],
  },

  {
    title: "Ad tracking issue",
    ticket: "#VE-45810",
    time: "2h ago",
    messages: [
      {
        type: "user",
        text: "I completed an ad but my progress isn't showing.",
        time: "8:42 AM",
      },
      {
        type: "agent",
        text: "I've checked your activity. Let me verify the tracking status.",
        time: "8:44 AM",
      },
    ],
  },

  {
    title: "Withdrawal pending",
    ticket: "#VE-45802",
    time: "1d ago",
    messages: [
      {
        type: "user",
        text: "My withdrawal is still pending. Can you check it?",
        time: "Yesterday",
      },
      {
        type: "agent",
        text: "Absolutely. I'll check the withdrawal status for you.",
        time: "Yesterday",
      },
    ],
  },
];

const supportWindowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const conversationVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.35,
      delay: 0.32 + index * 0.08,
      ease: "easeOut",
    },
  }),
};

const ContactVisual = () => {
  const [activeConversation, setActiveConversation] = useState(0);
  const [visibleMessage, setVisibleMessage] = useState(0);

  const conversation = conversations[activeConversation];

  useEffect(() => {
    setVisibleMessage(0);

    const interval = window.setInterval(() => {
      setVisibleMessage((current) =>
        current === conversation.messages.length - 1
          ? 0
          : current + 1
      );
    }, 4200);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeConversation, conversation.messages.length]);
  return (
    <div className={styles.visual}>
      {/* Ambient background */}
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />
      <div className={styles.lightSweep} />

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
                width="22"
                height="22"
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

            <div className={styles.supportIdentityText}>
              <strong>Support Center</strong>

              <span>
                <i />
                Online
              </span>
            </div>
          </div>

          <div className={styles.supportHeaderActions}>
            <button
              type="button"
              className={styles.moreButton}
              aria-label="More options"
            >
              <MoreVertical size={16} />
            </button>

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
          </div>
        </motion.header>

        {/* ---------- Main ---------- */}
        <div className={styles.supportMain}>
          {/* ===== Conversation Sidebar ===== */}
          <aside className={styles.conversations}>
            <div className={styles.conversationsHeader}>
              <span>Recent Conversations</span>
              <ChevronDown size={15} />
            </div>

            <div className={styles.conversationList}>
              {conversations.map((conversation, index) => (
                <motion.button
                  type="button"
                  key={conversation.ticket}
                  custom={index}
                  variants={conversationVariants}
                  className={`${styles.conversation} ${activeConversation === index
                      ? styles.conversationActive
                      : ""
                    }`}
                  onClick={() => setActiveConversation(index)}
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
                  <div className={styles.conversationAvatar}>
                    <span>
                      {conversation.title
                        .charAt(0)
                        .toUpperCase()}
                    </span>
                  </div>

                  <div className={styles.conversationContent}>
                    <strong>{conversation.title}</strong>

                    <span>{conversation.ticket}</span>
                  </div>

                  <time>{conversation.time}</time>
                </motion.button>
              ))}
            </div>

            <motion.button
              type="button"
              className={styles.viewTickets}
              whileHover={{
                y: -1,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              View All Tickets
            </motion.button>
          </aside>

          {/* ===== Chat ===== */}
          <section className={styles.chat}>
            <div className={styles.chatHeader}>
              <motion.div
                key={conversation.ticket}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <span>Ticket {conversation.ticket}</span>

                <strong>{conversation.title}</strong>
              </motion.div>

              <motion.span
                className={styles.openBadge}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.45,
                }}
              >
                Open
              </motion.span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${conversation.ticket}-${visibleMessage}`}
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
                {conversation.messages[visibleMessage].type === "user" ? (
                  <motion.div
                    className={`${styles.messageRow} ${styles.userRow}`}
                    initial={{
                      opacity: 0,
                      x: 14,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className={styles.userMessage}>
                      <p>
                        {conversation.messages[visibleMessage].text}
                      </p>

                      <time>
                        {conversation.messages[visibleMessage].time}
                      </time>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className={styles.agentRow}
                    initial={{
                      opacity: 0,
                      x: -14,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.div
                      className={styles.agentAvatar}
                      animate={{
                        boxShadow: [
                          "0 0 13px rgba(71, 126, 235, 0.07)",
                          "0 0 20px rgba(71, 126, 235, 0.16)",
                          "0 0 13px rgba(71, 126, 235, 0.07)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span>V</span>
                    </motion.div>

                    <div className={styles.agentMessage}>
                      <p>
                        {conversation.messages[visibleMessage].text}
                      </p>

                      <time>
                        {conversation.messages[visibleMessage].time}
                      </time>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Input */}
            <div className={styles.chatComposer}>
              <motion.button
                type="button"
                className={styles.attachButton}
                aria-label="Attach file"
                whileHover={{
                  scale: 1.08,
                  color: "#8aaeff",
                }}
                whileTap={{
                  scale: 0.92,
                }}
              >
                <Paperclip size={15} />
              </motion.button>

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
                <Send size={15} />
              </motion.button>
            </div>
          </section>
        </div>

        {/* ---------- Footer ---------- */}
        <footer className={styles.supportFooter}>
          <div className={styles.responseTime}>
            <span>Support response time</span>

            <i />

            <strong>
              Usually under 5 minutes
            </strong>
          </div>

          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
          />
        </footer>
      </motion.div>
    </div>
  );
};

export default ContactVisual;