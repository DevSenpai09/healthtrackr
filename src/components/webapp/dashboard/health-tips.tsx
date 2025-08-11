import React from "react";
import { cn } from "@/lib/utils";

export default function HealthTips() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-2">
      <div>
        <h2 className="text-lg">Health Tips</h2>
        <p className="text-[#767676] text-sm">
          Personalized recommendations for you
        </p>
      </div>

      <div className="grid gap-3 content-start border border-[#E8E8E8] rounded-md p-3">
        <div className={cn("grid gap-2 bg-[#D0E8FF] rounded-md p-2")}>
          <h3 className="text-[#0C67A0] text-sm">Stay Hydrated</h3>
          <p className="text-xs text-[#676767]">
            You&apos;re 2 cups away from your daily goal
          </p>
        </div>

        <div className={cn("grid gap-2 bg-[#EBFFEC] rounded-md p-2")}>
          <h3 className="text-[#04AD34] text-sm">Exercise Regularly</h3>
          <p className="text-xs text-[#676767]">
            Walk regularly for heart health.
          </p>
        </div>
      </div>
    </div>
  );
}
