import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import React from "react";
import Navigation from "./navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={cn("py-5 layout-x-spacing absolute top-0 left-0 w-full")}
    >
      <div className="container mx-auto flex gap-10 justify-between items-center">
        <span className="hidden sm:block">
          <Logo size={200} />
        </span>
        <span className="sm:hidden">
          <Logo size={160} />
        </span>
        <Navigation />

        {/* Sign Up and Sign In */}
        <div className="hidden lg:grid grid-cols-2 w-max gap-2">
          <Button variant={"primary"}>
            <Link href={"/sign-up"}>Get started</Link>
          </Button>
          <Button variant={"outlineWhite"}>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
