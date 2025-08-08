import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: string;
  subText?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subText,
  className,
}: SectionTitleProps) {
  return (
    <div className="grid gap-3 text-center max-w-2xl mx-auto">
      <h2
        className={cn(
          poppins.className,
          className,
          "text-3xl sm:text-4xl font-semibold"
        )}
      >
        {title}
      </h2>
      {subText && <p className="sm:text-lg text-[#868686]">{subText}</p>}
    </div>
  );
}
