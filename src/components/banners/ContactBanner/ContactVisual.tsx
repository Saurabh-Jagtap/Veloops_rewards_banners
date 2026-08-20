import {
  ArrowUpRight,
  ChevronDown,
  MoreVertical,
  Paperclip,
  Send,
} from "lucide-react";

import styles from "./ContactBanner.module.css";

const conversations = [
  {
    title: "Reward not received",
    ticket: "#VE-45821",
    time: "Now",
    active: true,
  },
  {
    title: "Ad tracking issue",
    ticket: "#VE-45810",
    time: "2h ago",
    active: false,
  },
  {
    title: "Withdrawal pending",
    ticket: "#VE-45802",
    time: "1d ago",
    active: false,
  },
];

const ContactVisual = () => {
  return (
    <div className={styles.visual}>
      {/* Ambient background */}
      <div className={styles.visualGlow} />
      <div className={styles.visualGlowSecondary} />
      <div className={styles.lightSweep} />

      {/* ================= SUPPORT WINDOW ================= */}
      <div className={styles.supportCenter}>
        {/* ---------- Header ---------- */}
        <header className={styles.supportHeader}>
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

            <div className={styles.onlineBadge}>
              <i />
              <span>Online</span>
            </div>
          </div>
        </header>

        {/* ---------- Main ---------- */}
        <div className={styles.supportMain}>
          {/* ===== Conversation Sidebar ===== */}
          <aside className={styles.conversations}>
            <div className={styles.conversationsHeader}>
              <span>Recent Conversations</span>
              <ChevronDown size={15} />
            </div>

            <div className={styles.conversationList}>
              {conversations.map((conversation) => (
                <div
                  key={conversation.ticket}
                  className={`${styles.conversation} ${conversation.active
                      ? styles.conversationActive
                      : ""
                    }`}
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
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.viewTickets}
            >
              View All Tickets
            </button>
          </aside>

          {/* ===== Chat ===== */}
          <section className={styles.chat}>
            <div className={styles.chatHeader}>
              <div>
                <span>Ticket #VE-45821</span>

                <strong>Reward not received</strong>
              </div>

              <span className={styles.openBadge}>
                Open
              </span>
            </div>

            <div className={styles.messages}>
              {/* User */}
              <div
                className={`${styles.messageRow} ${styles.userRow}`}
              >
                <div className={styles.userMessage}>
                  <p>
                    I completed an offer but didn't get
                    the reward.
                  </p>

                  <time>10:30 AM</time>
                </div>
              </div>

              {/* Agent */}
              <div className={styles.agentRow}>
                <div className={styles.agentAvatar}>
                  <span>V</span>
                </div>

                <div className={styles.agentMessage}>
                  <p>
                    Hi! Let me check this for you right
                    away.
                  </p>

                  <time>10:31 AM</time>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className={styles.chatComposer}>
              <button
                type="button"
                className={styles.attachButton}
                aria-label="Attach file"
              >
                <Paperclip size={15} />
              </button>

              <span>Type your message...</span>

              <button
                type="button"
                className={styles.sendButton}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
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
      </div>
    </div>
  );
};

export default ContactVisual;