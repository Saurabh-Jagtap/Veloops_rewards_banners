import styles from "../components/banners/FollowBanner/FollowVisual.module.css";
import { Gift, MessageCircle, UserPlus } from "lucide-react";

export const followData = {
  profile: {
    name: "VELOOP Rewards",
    handle: "@velooprewards",
    followers: "24.8K",
  },

  channels: [
    {
      name: "Instagram",
      shortName: "IG",
      active: true,
    },
    {
      name: "YouTube",
      shortName: "YT",
      active: true,
    },
    {
      name: "X",
      shortName: "X",
      active: true,
    },
  ],

  campaign: {
    label: "Eligible Campaign",
    value: "Unlock rewards",
  },
};

export const FEATURES = [
  {
    icon: UserPlus,
    title: "Follow",
    description: "Stay connected",
    tone: styles.featureFollow,
  },
  {
    icon: MessageCircle,
    title: "Engage",
    description: "Interact",
    tone: styles.featureEngage,
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Get rewarded",
    tone: styles.featureEarn,
  },
];

export type FollowVisualProps = {
  isVisible: boolean;
};

export type TaskKey = "follow" | "like" | "comment" | "share";

export type Task = {
  key: TaskKey;
  label: string;
  status: "check" | "2/3" | "0/1";
};

export const initialTasks: Task[] = [
  { key: "follow", label: "Follow our page", status: "check" },
  { key: "like", label: "Like latest post", status: "check" },
  { key: "comment", label: "Comment on post", status: "2/3" },
  { key: "share", label: "Share to story", status: "0/1" },
];