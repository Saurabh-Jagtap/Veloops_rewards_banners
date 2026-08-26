export type DayState = "completed" | "today" | "locked";

export type Day = {
    label: string;
    state: DayState;
};

export const days: Day[] = [
    { label: "Mon", state: "completed" },
    { label: "Tue", state: "completed" },
    { label: "Wed", state: "completed" },
    { label: "Thu", state: "completed" },
    { label: "Fri", state: "completed" },
    { label: "Sat", state: "completed" },
    { label: "Sun", state: "today" },
];
