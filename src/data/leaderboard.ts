import type { Variants } from "framer-motion";
import { TrendingUp, Trophy, Users } from "lucide-react";

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

export const podium: PodiumEntry[] = [
  { rank: 2, name: "Priya K.", score: "9,210", tier: "silver" },
  { rank: 1, name: "Arlene M.", score: "12,450", tier: "gold" },
  { rank: 3, name: "Robert C.", score: "7,310", tier: "bronze" },
];

export const supporting: SupportingEntry[] = [
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

export const features = [
  {
    icon: Users,
    title: "Compete",
    subtitle: "Rise through ranks",
    variant: "blue",
  },
  {
    icon: Trophy,
    title: "Earn More",
    subtitle: "Unlock rewards",
    variant: "gold",
  },
  {
    icon: TrendingUp,
    title: "Stay Ahead",
    subtitle: "Keep your edge",
    variant: "purple",
  },
];

export const currentUser = supporting.find((entry) => entry.isCurrentUser)!;

export const rowAboveUser = supporting[supporting.findIndex((e) => e.isCurrentUser) - 1];

export const getScoreValue = (score: string) => Number(score.replace(/,/g, ""));

export const gapAboveUser = rowAboveUser
  ? getScoreValue(rowAboveUser.score) - getScoreValue(currentUser.score)
  : 0;

export const GOAL_VE = 10000;
export const progressPct = Math.min(
  100,
  Math.round((getScoreValue(currentUser.score) / GOAL_VE) * 100),
);

export const containerVariants: Variants = {
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

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const podiumListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const podiumBlockVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const rowListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const rowVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
