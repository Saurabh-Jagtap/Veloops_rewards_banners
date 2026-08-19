export type AdReward = {
  label: string;
  value: number;
  status: "available" | "completed";
};

export const watchAdData: AdReward = {
  label: "Demo reward",
  value: 38,
  status: "available",
};