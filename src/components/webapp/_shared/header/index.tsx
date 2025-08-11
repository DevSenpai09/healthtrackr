import React from "react";

export default function Header() {
  return (
    <header className="grid gap-1 p-5 sticky top-0 z-10 bg-white border-b border-[#ECECEC]">
      <h2 className="text-[#131313] text-xl font-bold">
        Welcome back, John Doe!
      </h2>
      <p className="text-[#767676] text-sm">Take Charge Of Your Health</p>
    </header>
  );
}
