import React from "react";
import SectionTitle from "../../_shared/section/section-title";
import FaqCard from "./faq-card";
import { FAQS } from "./constant";

export default function Faq() {
  return (
    <section id="how-it-works" className="pt-10 sm:pt-20 layout-x-spacing">
      <div className="container mx-auto grid gap-5 sm:gap-10">
        <SectionTitle
          title="Frequently Asked Questions"
          subText="Get helpful answers to common questions and learn more about using HealthTracker."
        />

        {/* Faqs */}
        <div className="grid gap-5">
          {FAQS.map((faq, index) => (
            <FaqCard key={index} ques={faq.ques} ans={faq.ans} />
          ))}
        </div>
      </div>
    </section>
  );
}
