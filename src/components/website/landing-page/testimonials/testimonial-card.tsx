import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  imgSrc: string;
  name: string;
  role: string;
  text: string;
  className?: string;
}

export default function TestimonialCard({
  imgSrc,
  name,
  role,
  text,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        className,
        "grid gap-5 grid-rows-[auto_1fr] bg-white p-5 rounded-xl"
      )}
    >
      {/* Rates */}
      <div className="flex gap-1 w-max">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src={"/star.svg"}
            width={20}
            height={20}
            alt="Feature Icon"
            className="mx-auto"
          />
        ))}
      </div>

      <div className="grid grid-rows-[1fr_auto] gap-10">
        <p className="text-[#727272] text-lg">{text}</p>
        <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
          <Image
            src={imgSrc}
            width={40}
            height={40}
            alt="Feature Icon"
            className="mx-auto"
          />
          <div className={cn("grid")}>
            <h3 className={cn(poppins.className, "text-xl font-medium")}>
              {name}
            </h3>
            <p className="text-sm text-[#727272]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
