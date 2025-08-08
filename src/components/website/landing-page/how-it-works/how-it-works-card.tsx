import { inter, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface HowItWorksCardProps {
  number: number;
  color: string;
  title: string;
  text: string;
}

export default function HowItWorksCard({
  number,
  color,
  text,
  title,
}: HowItWorksCardProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-5">
      <span
        style={{ background: `${color}1a`, color }}
        className={cn(
          inter.className,
          "w-16 h-16 rounded-full grid place-content-center text-4xl mx-auto font-medium"
        )}
      >
        {number}
      </span>
      <div className={cn("grid grid-rows-[auto_1fr] gap-2 text-center")}>
        <h3 className={cn(poppins.className, "text-2xl font-medium")}>
          {title}
        </h3>
        <p className="lg:text-lg text-[#6E6E6E]">{text}</p>
      </div>
    </div>
  );
}
