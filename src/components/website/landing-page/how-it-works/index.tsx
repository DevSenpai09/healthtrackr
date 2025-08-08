import React from "react";
import SectionTitle from "../../_shared/section/section-title";
import HowItWorksCard from "./how-it-works-card";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-20 layout-x-spacing">
      <div className="container mx-auto grid gap-10">
        <SectionTitle
          title="How HealthTrackr Works"
          subText="Get started with your health journey with just three steps"
        />

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-10">
          <HowItWorksCard
            color="#E28727"
            number={1}
            title="Sign up & Setup"
            text="Create your account and create your health profile in minutes"
          />

          <HowItWorksCard
            color="#3D4DFC"
            number={2}
            title="Track & Monitor"
            text="Log your health metrics and sync with wearable devices"
          />
          <HowItWorksCard
            color="#BB049C"
            number={3}
            title="Access care"
            text="Book consultations, find nearby services, and manage your health"
          />
        </div>
      </div>
    </section>
  );
}
