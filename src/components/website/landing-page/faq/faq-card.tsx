import { inter, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface FaqCardProps {}

interface FaqCardProps {
  ques: string;
  ans: string;
}

export default function FaqCard({ ques, ans }: FaqCardProps) {
  return (
    <div className="grid gap-3 p-5 rounded-sm bg-[#f5f5f5]">
      <h3 className={cn(poppins.className, "text-lg sm:text-xl font-medium")}>
        {ques}
      </h3>
      <p className="text-sm sm:text-base text-[#727272]">{ans}</p>
    </div>
  );
}
