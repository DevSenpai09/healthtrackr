"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import PlanCard from "./plan-card";
import { HMO_PLANS } from "./constant";

export default function Hmo() {
  const [isFamilyPlans, setIsFamilyPlans] = useState(false);

  return (
    <div className="p-5 grid gap-5 content-start">
      <div className="grid gap-1">
        <h1 className="text-[#131313] font-semibold text-lg">
          Choose your HMO plan
        </h1>
        <p className="text-[#767676] text-sm">
          Comprehensive healthcare coverage for you and your family with trusted
          providers
        </p>
      </div>

      <div className="p-1 rounded-lg bg-[#F4F4F4] grid grid-cols-2 w-max">
        <button
          onClick={() => setIsFamilyPlans(false)}
          className={cn(
            "text-sm py-1 px-4 rounded-lg cursor-pointer transition-all",
            !isFamilyPlans ? "bg-white text-[#3F3F3F]" : "text-[#A9A9A9]"
          )}
        >
          Individual Plans
        </button>
        <button
          onClick={() => setIsFamilyPlans(true)}
          className={cn(
            "text-sm py-1 px-4 rounded-lg cursor-pointer transition-all",
            isFamilyPlans ? "bg-white text-[#3F3F3F]" : "text-[#A9A9A9]"
          )}
        >
          Family Plans
        </button>
      </div>

      {/* Individual Plans */}
      {!isFamilyPlans && (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {HMO_PLANS?.individual.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan?.name}
              coverage={plan?.coverage}
              keyBenefits={plan?.keyBenefits}
              price={plan?.price}
              exclusions={plan?.exclusions}
              partnerHospitals={plan?.partnerHospitals}
            />
          ))}
        </div>
      )}

      {/* Family Plans */}
      {isFamilyPlans && (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {HMO_PLANS?.family.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan?.name}
              coverage={plan?.coverage}
              keyBenefits={plan?.keyBenefits}
              price={plan?.price}
              exclusions={plan?.exclusions}
              partnerHospitals={plan?.partnerHospitals}
            />
          ))}
        </div>
      )}
    </div>
  );
}
