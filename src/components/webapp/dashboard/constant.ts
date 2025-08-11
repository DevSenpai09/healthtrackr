import { PiBed, PiDrop, PiFootprints, PiHeartbeat } from "react-icons/pi";

export const METRICS = [
  {
    icon: PiHeartbeat,
    title: "Heart Rate",
    value: "72 BPM",
    change: "+2 from yesterday",
    percentage: 20,
    text: "+2 from yesterday",
    color: "#F10505",
  },
  {
    icon: PiFootprints,
    title: "Steps",
    value: "8,432",
    percentage: 84,
    text: "84% of daily goal",
    color: "#5A43E0",
  },
  {
    icon: PiDrop,
    title: "Hydration",
    value: "6/8",
    percentage: 75,
    text: "75% of daily goal",
    color: "#43A4E0",
  },
  {
    icon: PiBed,
    title: "Sleep",
    value: "7.5 Hrs",
    percentage: 80,
    text: "84% of daily goal",
    color: "#7607D7",
  },
];

export const RECENT_ACTIVITIES = [
  {
    type: "Appointment",
    details: "Physical therapy session",
    time: "Tomorrow",
    status: "Scheduled",
  },
  {
    type: "Medication",
    details: "Blood pressure medication",
    time: "8 hours ago",
    status: "Taken",
  },
  {
    type: "Consultation",
    details: "Dr Smith - Cardiology",
    time: "2 hours ago",
    status: "Completed",
  },
  {
    type: "Consultation",
    details: "Dr Smith - Cardiology",
    time: "2 hours ago",
    status: "Completed",
  },
  {
    type: "Exercise",
    details: "30 minutes walk",
    time: "Yesterday",
    status: "Completed",
  },
];

export const QUICK_ACTIONS = [
  "Log Health Data",
  "Book Appointment",
  "View Trends",
];

export const HEALTH_TIPS = [
  {
    title: "Stay Hydrated",
    description: "You're 2 cups away from your daily goal",
  },
  {
    title: "Exercise Regularly",
    description: "Walk regularly for heart health.",
  },
];
