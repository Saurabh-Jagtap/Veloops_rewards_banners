export type LeaderboardEntry = {
  rank: number;
  name: string;
  score: number;
  avatar: string;
};

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "CryptoAce",
    score: 12450,
    avatar: "CA",
  },
  {
    rank: 2,
    name: "RewardPro",
    score: 11820,
    avatar: "RP",
  },
  {
    rank: 3,
    name: "VeloMax",
    score: 10970,
    avatar: "VM",
  },
];