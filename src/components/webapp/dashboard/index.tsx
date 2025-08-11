import React from "react";
import Metrics from "./metrics";
import RecentActivities from "./recent-activities";
import QuickActions from "./quick-actions";
import HealthTips from "./health-tips";

export default function Dashboard() {
  return (
    <div className="p-5 grid gap-5 content-start">
      <Metrics />

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
        <RecentActivities />

        <div className="grid gap-3">
          <QuickActions />
          <HealthTips />
        </div>
      </div>
    </div>
  );
}
