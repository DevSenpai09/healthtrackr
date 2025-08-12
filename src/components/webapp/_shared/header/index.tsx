"use client";

import { User } from "@/components/auth/sign-up-form";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("signedInUser")!);
      data ? setUserData(data) : router.push("/sign-in");
    }
  }, []);

  return (
    <header className="grid gap-1 p-5 sticky top-0 z-10 bg-white border-b border-[#ECECEC]">
      <h2 className="text-[#131313] text-xl font-bold">
        Welcome back{userData ? `, ${userData?.fullName}!` : ""}
      </h2>
      <p className="text-[#767676] text-sm">Take Charge Of Your Health</p>
    </header>
  );
}
