import React from "react";
import { QUICK_ACTIONS } from "./constant";
import { cn } from "@/lib/utils";
import { PiPlus } from "react-icons/pi";

export default function QuickActions() {
  return (
    <div className="grid gap-2 grid-rows-[auto_1fr]">
      <h3>Quick Actions</h3>

      <div className="grid gap-2 border border-[#E8E8E8] rounded-md p-3">
        {QUICK_ACTIONS.map((action, index) => (
          <button
            key={index}
            className={cn(
              "grid grid-cols-[1fr_auto] items-center gap-5 py-4 text-left text-[#3F3F3F] text-sm cursor-pointer",
              index + 1 !== QUICK_ACTIONS.length && " border-b border-[#DDDDDD]"
            )}
          >
            {action}
            <PiPlus />
          </button>
        ))}
      </div>
    </div>
  );
}
