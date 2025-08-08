import { Button } from "@/components/ui/button";
import { instrumentSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="w-full layout-x-spacing grid items-center py-28 sm:py-56 bg-[url(/hero-section-bg-mobile.png)] lg:bg-[url(/hero-section-bg-desktop.png)] bg-right-top bg-no-repeat bg-cover"
    >
      <div className="container mx-auto grid gap-4 sm:gap-8">
        <span className="text-[#04BB64] text-sm sm:text-base block font-bold py-1 px-3 bg-[#E4FFEA] w-max rounded-full">
          Trusted by 5,000+ Users
        </span>
        <h1 className="text-white text-4xl min-[480px]:text-5xl min-[500px]:text-6xl sm:text-7xl font-medium max-w-xl leading-[1.5]">
          Take control Of <br />
          Your
          <span
            className={cn(
              instrumentSerif.className,
              "text-[#04CF70]  italic text-5xl min-[480px]:text-6xl min-[500px]:text-7xl sm:text-8xl"
            )}
          >
            Health
          </span>
        </h1>
        <p className="text-[#E9E9E9] text-xl sm:text-2xl max-w-lg">
          Live healthier with simple tracking, fast consultations, and smarter
          HMO choices{" "}
        </p>
        <div className="grid grid-cols-2 max-w-sm gap-4">
          <Button variant={"primary"} size={"lg"} asChild>
            <Link href={"/sign-up"}>Get started</Link>
          </Button>
          <Button variant={"outlineWhite"} size={"lg"} asChild>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
