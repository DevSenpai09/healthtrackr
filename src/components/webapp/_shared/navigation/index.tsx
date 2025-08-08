import Logo from "@/components/ui/logo";
import Image from "next/image";
import React from "react";
import Item from "./item";

export default function Navigation() {
  return (
    <div className="bg-[#FAFAFA] grid grid-rows-[auto_1fr_auto] gap-5 p-5 h-full">
      <div className="flex items-center justify-between">
        <Logo size={160} variant="logo-3" />
        <Image src={"/dummy-user.svg"} width={40} height={40} alt="User Icon" />
      </div>

      <div>
        {/* Main */}
        <div>
          <p className="text-sm text-[#969696]">MAIN</p>

          <div>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}
