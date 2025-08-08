import { inter, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface FeaturesCardProps {}

interface FeaturesCardProps {
  iconSrc: string;
  title: string;
  text: string;
}

export default function FeaturesCard({
  iconSrc,
  text,
  title,
}: FeaturesCardProps) {
  return (
    <div className="grid gap-5 bg-white p-5 rounded-xl">
      <Image
        src={iconSrc}
        width={100}
        height={100}
        alt="Feature Icon"
        className="mx-auto"
      />
      <div className={cn("grid gap-2 text-center")}>
        <h3 className={cn(poppins.className, "text-2xl font-medium")}>
          {title}
        </h3>
        <p className="lg:text-lg text-[#6E6E6E]">{text}</p>
      </div>
    </div>
  );
}
