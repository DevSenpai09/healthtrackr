import React from "react";
import { RECENT_ACTIVITIES } from "./constant";
import { cn } from "@/lib/utils";

export default function RecentActivities() {
  return (
    <div className="grid gap-2">
      <div>
        <h2 className="text-lg">Recent Activities</h2>
        <p className="text-[#767676] text-sm">
          Your latest health activities and appointments
        </p>
      </div>

      <div className="grid gap-2 border border-[#E8E8E8] rounded-md p-3">
        {RECENT_ACTIVITIES.map((activity, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-[1fr_auto] items-center gap-5 py-4",
              index + 1 !== RECENT_ACTIVITIES.length &&
                " border-b border-[#DDDDDD]"
            )}
          >
            <div className="grid gap-1">
              <h3>{activity.type}</h3>
              <p className="text-sm text-[#797979]">{activity.details}</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm text-[#797979]">{activity.time}</p>
              <span
                className={cn(
                  "text-xs rounded-full px-2 py-1 w-max ml-auto",
                  activity.status === "Scheduled"
                    ? "text-[#F4830B] bg-[#FFEEDC]"
                    : activity.status === "Taken"
                    ? "text-[#4367E0] bg-[#E6EAFF]"
                    : activity?.status === "Completed"
                    ? "text-[#04AD34] bg-[#EBFFEC]"
                    : "text-[#797979] bg-[#AAAAAA]"
                )}
              >
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
