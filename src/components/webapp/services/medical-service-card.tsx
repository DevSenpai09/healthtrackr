import { Button } from "@/components/ui/button";
import React from "react";
import {
  PiClock,
  PiGps,
  PiNavigationArrow,
  PiNotepad,
  PiPhone,
  PiStarFill,
} from "react-icons/pi";

interface MedicalServiceCardProps {
  name: string;
  type: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  phone: string;
  specialties: string[];
}

export default function MedicalServiceCard({
  name,
  type,
  rating,
  reviews,
  distance,
  address,
  phone,
  specialties,
}: MedicalServiceCardProps) {
  return (
    <div className="border border-[#DDDDDD] rounded-md p-3 grid gap-4 w-[540px]">
      {/* Info */}
      <div className="grid gap-2">
        <div className="grid grid-cols-[1fr_auto] items-center">
          <h3 className="text-[#3F3F3F] text-sm">{name}</h3>
          <span className="text-[#04AD34] bg-[#DEFFDF] text-xs px-2 py-1 rounded-full">
            Insurance Accepted
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#767676] text-xs">
          <span className="text-white bg-[#04AD34] text-xs px-2 py-1 rounded-full">
            {type}
          </span>
          <span className="flex items-center gap-1 text-[#3F3F3F] text-sm">
            <PiStarFill className="text-[#E7FA1A] text-sm" />
            {rating}
          </span>
          <span>({reviews} Reviews)</span>
          <span>{distance}</span>
        </div>

        <div className="grid grid-cols-[auto_auto] gap-x-5 gap-y-2.5 max-w-max text-[#767676] [&_svg]:text-lg [&_span]:flex [&_span]:gap-1 text-sm">
          <span>
            <PiGps />
            {address}
          </span>
          <span>
            <PiPhone />
            {phone}
          </span>
          <span>
            <PiClock />
            24/7 Emergency care
          </span>
        </div>
      </div>

      {/* Specialties */}
      <div className="grid gap-2">
        <p className="text-[#767676] text-sm">Specialties:</p>
        <div className="flex flex-wrap gap-3">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="text-xs text-[#3F3F3F] border border-[#DDDDDD] rounded-full bg-[#F9F9F9] px-3 py-1"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button variant={"primary"}>
          <PiPhone />
          Call Now
        </Button>
        <Button variant={"outlineBlack"}>
          <PiNavigationArrow className="text-xl" /> Get Directions
        </Button>
        <Button variant={"outlineBlack"}>
          <PiNotepad className="text-xl" /> Book Appointment
        </Button>
      </div>
    </div>
  );
}
