import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface ForModernProfessionalsCardProps {
  imgSrc: string;
  title: string;
  text: string;
  className?: string;
}

export default function ForModernProfessionalsCard({
  imgSrc,
  text,
  title,
  className,
}: ForModernProfessionalsCardProps) {
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className={cn(
        className,
        "grid content-end gap-5 p-5 h-[500px] bg-cover bg-center overflow-hidden rounded-2xl max-w-sm mx-auto"
      )}
    >
      <div className={cn("grid gap-2 text-white")}>
        <h3 className={cn(poppins.className, "text-3xl font-semibold")}>
          {title}
        </h3>
        <p className="text-lg text-[#DDDBDB]">{text}</p>
      </div>
    </div>
  );
}
