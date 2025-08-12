import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { PiMagnifyingGlassLight, PiMapPin, PiStarFill } from "react-icons/pi";
import { SPECIALISTS } from "./constant";
import Link from "next/link";

export default function Booking() {
  return (
    <div className="p-5 grid gap-5 content-start">
      <div className="grid gap-1">
        <h1 className="text-[#131313] font-semibold text-lg">
          Book Consultation
        </h1>
        <p className="text-[#767676] text-sm">
          Schedule appointments with healthcare providers
        </p>
      </div>

      <div className="border border-[#DDDDDD] rounded-md px-3 py-1 grid grid-cols-[auto_1fr] items-center max-w-2xl">
        <PiMagnifyingGlassLight className="text-[#A3A3A3] text-lg" />
        <Input
          type="text"
          placeholder="Search for specialists"
          className="border-none placeholder:text-[#A3A3A3] placeholder:text-sm"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {SPECIALISTS.map((specialist, index) => (
          <div
            key={index}
            className="border border-[#DDDDDD] rounded-md p-3 grid gap-3"
          >
            <div className="grid grid-cols-[auto_1fr] items-center gap-3">
              <span className="grid relative rounded-full overflow-hidden">
                <Image
                  src={specialist?.image}
                  width={60}
                  height={60}
                  alt="Specialist Image"
                />
              </span>
              <div>
                <p className="text-[#3F3F3F]">{specialist?.name} </p>
                <p className="text-sm text-[#767676]">
                  {specialist?.specialty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#3F3F3F] text-sm">
                <PiStarFill className="text-[#E7FA1A] text-sm" />
                {specialist?.rating}
              </span>
              <span className="text-[#04AD34] bg-[#DEFFDF] text-xs px-2 py-1 rounded-full">
                {specialist?.experience}
              </span>
            </div>
            <span className="text-[#767676] [&_svg]:text-lg flex gap-1 items-center text-sm">
              <PiMapPin />
              {specialist?.location}
            </span>
            <div className="flex items-center gap-3">
              <Link href={`/booking/${specialist?.id}`}>
                <Button variant={"primary"}>Book Now</Button>
              </Link>
              <span className="text-[#767676] text-xl">
                {specialist?.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
