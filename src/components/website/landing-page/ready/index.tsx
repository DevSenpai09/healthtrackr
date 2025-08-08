import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Ready() {
  return (
    <section className="mt-10 sm:mt-20 py-10 sm:py-20 bg-[#F5FFF6] layout-x-spacing">
      <div className="container mx-auto grid gap-10">
        <div className="text-center max-w-xl mx-auto grid gap-2">
          <h2
            className={cn("text-3xl sm:text-5xl font-semibold leading-[1.5]")}
          >
            Ready to transform your health journey?
          </h2>
          <p className="text-[#6D6D6D] sm:text-lg font-medium">
            Join thousands of users who've already taken control of their health
            with HealthTrackr
          </p>
        </div>
        <div className="grid grid-cols-2 w-full max-w-sm mx-auto gap-5">
          <Button variant={"primary"}>
            <Link href={"/sign-up"}>Get started</Link>
          </Button>
          <Button variant={"outlineBlack"}>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
