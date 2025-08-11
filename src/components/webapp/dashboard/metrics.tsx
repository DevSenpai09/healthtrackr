import React from "react";
import { METRICS } from "./constant";

export default function Metrics() {
  return (
    <div className="grid gap-2">
      <h1 className="text-lg">Today&apos;s Metrics</h1>
      <div className="grid  grid-cols-2 xl:grid-cols-4 gap-4">
        {METRICS.map((metric, index) => (
          <div
            key={index}
            className="grid gap-2 border border-[#E8E8E8] rounded-md p-3"
          >
            <div className="text-[#676767] grid grid-cols-[auto_1fr] items-center gap-1 [&_svg]:text-2xl">
              {metric.icon({})}
              <p>{metric?.title}</p>
            </div>
            <p className="font-black text-xl">{metric?.value}</p>
            <span className="grid w-3/4 h-1.5 rounded-full bg-[#D9D9D9] overflow-hidden">
              <span
                style={{ background: metric.color }}
                className="block h-full w-1/2 rounded-full"
              ></span>
            </span>
            <p style={{ color: metric.color }} className="text-xs">
              {metric.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
