import React from "react";
import SectionTitle from "../../_shared/section/section-title";
import FeaturesCard from "./testimonial-card";
import { TESTIMONIALS } from "./constant";
import TestimonialCard from "./testimonial-card";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section
      id="how-it-works"
      className="mt-10 sm:mt-20 py-10 sm:py-20 bg-[#F5FFF6] layout-x-spacing"
    >
      <div className="container mx-auto grid gap-10 sm:gap-20 rounded-4xl">
        <SectionTitle
          title="What Our Users Say"
          subText="Join thousands of satisfied users who've transformed their health journey"
        />

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgSrc={testimonial.imgSrc}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              className={cn(index === 2 && "sm:hidden lg:grid")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
