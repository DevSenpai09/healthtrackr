import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { PiCheck, PiHospital, PiX } from "react-icons/pi";

interface PlanCardProps {
  name: string;
  price: number;
  coverage: string[];
  keyBenefits: string[];
  exclusions: string[];
  partnerHospitals: number;
  className?: string;
}

export default function PlanCard({
  coverage,
  exclusions,
  keyBenefits,
  name,
  partnerHospitals,
  price,
  className,
}: PlanCardProps) {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div
      className={cn(
        "border-2 rounded-lg p-5 grid grid-rows-[auto_auto_auto_1fr_auto] content-start gap-3 relative shadow-lg",
        name === "Standard Care" ? "border-[#009951]" : "border-[#DDDDDD]",
        className
      )}
    >
      {name === "Standard Care" && (
        <span className="grid py-1 px-4 rounded-full bg-[#009951] text-white w-max absolute text-xs -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </span>
      )}

      <h2 className="text-[#131313] text-lg font-semibold">{name}</h2>

      <p className="text-[#3F3F3F]">
        <span className="text-lg font-semibold text-[#131313]">
          ₦{price?.toLocaleString("en-US")}
        </span>
        /year
      </p>

      {/* Partner Hospitals */}
      <div className="text-[#767676] text-sm flex items-center gap-1">
        <PiHospital className="text-xl" />
        <span>{partnerHospitals}+ Partner Hospitals</span>
      </div>

      <div className="grid content-start gap-3">
        {/* Coverage */}
        <div className="grid gap-1">
          <p className="text-[#3F3F3F]">Coverage</p>

          <ul>
            {coverage.map((data, index) => (
              <li
                key={index}
                className="grid grid-cols-[auto_1fr] gap-1 items-center"
              >
                <PiCheck className="text-[#009951]" />
                <span className="text-[#767676] text-sm">{data}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Benefits */}
        <div className="grid gap-1">
          <p className="text-[#3F3F3F]">Key Benefits</p>

          <ul>
            {keyBenefits.map((data, index) => (
              <li
                key={index}
                className="grid grid-cols-[auto_1fr] gap-1 items-center"
              >
                <PiCheck className="text-[#009951]" />
                <span className="text-[#767676] text-sm">{data}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <Button onClick={() => setViewDetails(true)} variant={"outlineBlack"}>
          View Details
        </Button>
        <Button variant={"primary"}>Subscribe</Button>
      </div>

      {/* Success Modal */}
      <Dialog open={viewDetails} onOpenChange={setViewDetails}>
        <DialogContent showCloseButton={false}>
          <div className="flex items-center justify-between">
            <DialogTitle>{name} - Complete Details</DialogTitle>
            <button
              onClick={() => setViewDetails(false)}
              className="text-[#3F3F3F] w-7 h-7 rounded-full bg-[#DADADA] grid place-content-center cursor-pointer"
            >
              <PiX />
            </button>
          </div>
          <p className="text-[#3F3F3F]">
            <span className="text-lg font-semibold text-[#131313]">
              ₦{price?.toLocaleString("en-US")}
            </span>
            /year
          </p>

          {/* Partner Hospitals */}
          <div className="text-[#767676] text-sm flex items-center gap-1">
            <PiHospital className="text-xl" />
            <span>{partnerHospitals}+ Partner Hospitals</span>
          </div>

          <div className="grid content-start gap-3">
            {/* Coverage */}
            <div className="grid gap-1">
              <p className="text-[#3F3F3F]">Coverage</p>

              <ul>
                {coverage.map((data, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[auto_1fr] gap-1 items-center"
                  >
                    <PiCheck className="text-[#009951]" />
                    <span className="text-[#767676] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="grid gap-1">
              <p className="text-[#3F3F3F]">Key Benefits</p>

              <ul>
                {keyBenefits.map((data, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[auto_1fr] gap-1 items-center"
                  >
                    <PiCheck className="text-[#009951]" />
                    <span className="text-[#767676] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            {!!exclusions.length && (
              <div className="grid gap-1">
                <p className="text-[#3F3F3F]">Exclusions</p>

                <ul>
                  {exclusions.map((data, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[auto_1fr] gap-1 items-center"
                    >
                      <PiX className="text-[#F10505]" />
                      <span className="text-[#767676] text-sm">{data}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Button variant={"primary"} className="mt-5">
            Subscribe
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
