"use client";

import Logo from "@/components/ui/logo";
import Image from "next/image";
import React from "react";
import Item from "./item";
import {
  PiBookOpen,
  PiFirstAid,
  PiGearSix,
  PiLeaf,
  PiPackage,
  PiPulse,
  PiSignOut,
  PiSpeedometer,
  PiStethoscope,
  PiUserLight,
} from "react-icons/pi";

export default function Navigation() {
  return (
    <div className="bg-[#FAFAFA] border-r border-[#ECECEC] grid grid-rows-[auto_1fr_auto] gap-5 p-5 h-full">
      <div className="flex items-center justify-between">
        <Logo size={120} variant="logo-3" />
        <Image src={"/dummy-user.svg"} width={40} height={40} alt="User Icon" />
      </div>

      <div className="grid gap-5 content-start">
        {/* Main */}
        <div className="grid gap-5">
          <p className="text-sm text-[#969696]">MAIN</p>

          <div className="grid gap-3">
            <Item url="/dashboard" matcher={["/dashboard"]}>
              <PiSpeedometer /> Dashboard
            </Item>
            <Item url="/services" matcher={["/services"]}>
              <PiPackage /> Services
            </Item>
            <Item matcher={["/tracking"]}>
              <PiPulse /> Tracking
            </Item>
            <Item url="/booking" matcher={["/booking"]}>
              <PiBookOpen />
              Booking
            </Item>
            <Item matcher={["/hmo"]}>
              <PiLeaf />
              HMO
            </Item>
            <Item matcher={["/emergency"]}>
              <PiFirstAid /> Emergency
            </Item>
            <Item matcher={["/symptom-check"]}>
              <PiStethoscope /> Symptom Check
            </Item>
          </div>
        </div>

        {/* Account */}
        <div className="grid gap-5">
          <p className="text-sm text-[#969696]">ACCOUNT</p>

          <div className="grid gap-3">
            <Item matcher={["/profile"]}>
              <PiUserLight /> Profile
            </Item>
            <Item matcher={["/settings"]}>
              <PiGearSix /> Settings
            </Item>
          </div>
        </div>
      </div>

      <button className="px-5 py-2.5 text-left text-[#F10505] grid grid-cols-[auto_1fr] items-center gap-3 rounded-md hover:bg-[#F105051a] cursor-pointer">
        <PiSignOut className="text-xl" />
        Sign Out
      </button>
    </div>
  );
}
