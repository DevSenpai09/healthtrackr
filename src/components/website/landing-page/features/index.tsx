import React from "react";
import SectionTitle from "../../_shared/section/section-title";
import FeaturesCard from "./features-card";
import { FEATURES } from "./constant";

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="mt-10 sm:mt-20 py-10 sm:py-20 layout-x-spacing bg-[#F5FFF6]"
    >
      <div className="container mx-auto grid gap-10 sm:gap-20 rounded-4xl">
        <SectionTitle
          title="Everything you need for a better health"
          subText="Comprehensive health management tools designed for your busy lifestyle"
        />

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map((feature, index) => (
            <FeaturesCard
              key={index}
              iconSrc={feature.iconSrc}
              text={feature.text}
              title={feature.title}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
