import type { Variants } from "framer-motion";
import { Gift, PlayCircle, Wallet } from "lucide-react";

export const contactData = {
  email: "velooprewardsofficial@gmail.com",
  status: "Online",
};

export const topics = [
  {
    title: "Reward not received",
    icon: Gift,
    messages: [
      {
        type: "user",
        text: "My reward is missing.",
        time: "10:25 AM",
      },
      {
        type: "agent",
        text: "Hi! Let us check this for you right away.",
        time: "10:26 AM",
      },
    ],
  },

  {
    title: "Ad loading issue",
    icon: PlayCircle,
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
    icon: Wallet,
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

export const supportWindowVariants: Variants = {
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

export const headerVariants: Variants = {
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

export const topicVariants: Variants = {
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

export const messageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.42,
      delay: 0.25 + index * 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};