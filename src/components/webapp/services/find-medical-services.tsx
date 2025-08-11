import { Input } from "@/components/ui/input";
import React from "react";
import { PiGps, PiMagnifyingGlassLight } from "react-icons/pi";
import MedicalServiceCard from "./medical-service-card";
import { MEDICAL_SERVICES } from "./constant";

export default function FindMedicalServices() {
  return (
    <div className="grid gap-5 content-start">
      <div className="grid gap-1">
        <h1 className="text-[#131313] font-semibold text-lg">
          Find Medical Services
        </h1>
        <p className="text-[#767676] text-sm">
          Locate nearby hospitals, clinics, and healthcare providers in your
          area.
        </p>
      </div>

      {/* Search for hospitals, clinics, specialists */}
      <div className="grid grid-cols-[1fr_auto] gap-5">
        <div className="border border-[#DDDDDD] rounded-md px-3 py-1 grid grid-cols-[auto_1fr] items-center">
          <PiMagnifyingGlassLight className="text-[#A3A3A3] text-lg" />
          <Input
            type="text"
            placeholder="Search for hospitals, clinics, specialists"
            className="border-none placeholder:text-[#A3A3A3] placeholder:text-sm"
          />
        </div>

        <button className="text-[#767676] text-sm flex items-center gap-1">
          <PiGps className="text-xl" /> Use current location
        </button>
      </div>

      <div className="grid gap-2">
        <p className="text-[#131313]">10 Services found near you</p>
        <div className="grid grid-cols-[repeat(10,_540px)] gap-2 overflow-x-scroll medical-services-scroll-bar pb-3">
          {MEDICAL_SERVICES.map((service, index) => (
            <MedicalServiceCard
              key={index}
              name={service?.name}
              type={service?.type}
              rating={service?.rating}
              reviews={service?.reviews}
              address={service?.address}
              phone={service?.phone}
              specialties={service?.specialties}
              distance={service?.distance}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
