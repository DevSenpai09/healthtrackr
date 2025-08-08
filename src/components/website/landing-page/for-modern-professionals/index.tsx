import React from "react";
import SectionTitle from "../../_shared/section/section-title";
import ForModernProfessionalsCard from "./for-modern-proessionals-card";

export default function ForModernProfessionals() {
  return (
    <section id="how-it-works" className="pt-10 sm:pt-20 layout-x-spacing">
      <div className="container mx-auto grid gap-10">
        <SectionTitle
          title="Built for Modern Professionals"
          subText="Designed specifically for adults aged 18-50 who value their health and time"
        />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ForModernProfessionalsCard
            imgSrc="/professional-image-1.png"
            title="Young Professionals"
            text="Busy individuals who need efficient health management on-the-go"
          />
          <ForModernProfessionalsCard
            imgSrc="/professional-image-2.png"
            title="Health Enthusiasts"
            text="People who actively track and optimize their health metrics"
          />
          <ForModernProfessionalsCard
            imgSrc="/professional-image-3.png"
            title="Families"
            text="Parents managing health for themselves and their loved ones"
            className="sm:col-[1/3] sm:w-1/2 sm:mx-auto lg:col-auto lg:w-full lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
