"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  PiArrowLeft,
  PiCheckCircleFill,
  PiMapPin,
  PiStarFill,
} from "react-icons/pi";
import { SPECIALISTS } from "../constant";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DNA } from "react-loader-spinner";

export default function BookSpecialist() {
  const specialistId = useParams().id;

  const [specialist, setSpecialist] = useState<(typeof SPECIALISTS)[0] | null>(
    null
  );
  const [isVirtual, setIsVirtual] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    specialistId &&
      setSpecialist(SPECIALISTS.filter((item) => item?.id === specialistId)[0]);
  }, [specialistId]);

  return (
    <div className="p-5 grid grid-rows-[auto_1fr] gap-5 content-start">
      <Link href={`/booking`} className="flex items-center gap-1">
        <PiArrowLeft /> Back to Specialists
      </Link>

      {!specialist && (
        <div className="grid place-content-center justify-items-center h-full">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <p>Specialist Details Loading...</p>
        </div>
      )}

      {specialist && (
        <div className="max-w-xl mx-auto w-full grid gap-10">
          {/* Specialist Info */}
          <div className="grid gap-3">
            <span className="grid relative rounded-full overflow-hidden w-max mx-auto">
              <Image
                src={specialist?.image || ""}
                width={112}
                height={112}
                alt="Specialist Image"
              />
            </span>
            <div className="text-center">
              <p className="text-[#3F3F3F] text-lg">{specialist?.name} </p>
              <p className="text-[#767676]">{specialist?.specialty}</p>
            </div>
            <div className="flex items-center gap-3 mx-auto w-max">
              <span className="flex items-center gap-1 text-[#3F3F3F] text-sm">
                <PiStarFill className="text-[#E7FA1A] text-sm" />
                {specialist?.rating}
              </span>
              <span className="text-[#04AD34] bg-[#DEFFDF] text-xs px-2 py-1 rounded-full">
                {specialist?.experience}
              </span>
            </div>
            <span className="text-[#767676] [&_svg]:text-lg flex gap-1 items-center text-sm w-max mx-auto">
              <PiMapPin />
              {specialist?.location}
            </span>

            <div className="p-1 rounded-lg bg-[#F4F4F4] grid grid-cols-2 w-max mx-auto">
              <button
                onClick={() => setIsVirtual(true)}
                className={cn(
                  "text-sm py-1 px-4 rounded-lg cursor-pointer transition-all",
                  isVirtual ? "bg-white text-[#3F3F3F]" : "text-[#A9A9A9]"
                )}
              >
                Virtual
              </button>
              <button
                onClick={() => setIsVirtual(false)}
                className={cn(
                  "text-sm py-1 px-4 rounded-lg cursor-pointer transition-all",
                  !isVirtual ? "bg-white text-[#3F3F3F]" : "text-[#A9A9A9]"
                )}
              >
                In-Person
              </button>
            </div>
          </div>

          {/* Available Time Slot */}
          <div className="grid gap-3">
            <p className="text-center">Available time slots</p>

            <div className="grid grid-cols-2 gap-5">
              {specialist?.timeSlots.map((timeSlot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(timeSlot)}
                  className={cn(
                    "border p-2.5 rounded-lg text-[#3F3F3F] cursor-pointer transition-all",
                    selectedTime === timeSlot
                      ? "border-[#009951]"
                      : "border-[#D1D1D1]"
                  )}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>

          {/* Describe your symptoms */}
          <div className="grid gap-3">
            <p className="text-center">Describe your symptoms (Optional)</p>

            <Textarea
              placeholder="Please describe your symptoms or reasons for consultation"
              className="border-[#DDDDDD]"
            />
          </div>

          <Button
            onClick={() => setIsSuccessful(true)}
            variant={"primary"}
            disabled={!selectedTime}
          >
            Book Consultation - {specialist?.price}
          </Button>

          {/* Success Modal */}
          <Dialog open={isSuccessful}>
            <DialogContent showCloseButton={false} className="w-96">
              <div className="text-[#009951] grid justify-items-center">
                <PiCheckCircleFill className="text-6xl" />
                <DialogTitle className="text-lg font-">Successful!</DialogTitle>
              </div>
              <p className="text-center text-[#4A4A4A] text-lg max-w-[280px] mx-auto">
                Booking confirmed with {specialist?.name}
              </p>
              <Link href={"/booking"} className="grid">
                <Button variant={"primary"}>Ok</Button>
              </Link>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
