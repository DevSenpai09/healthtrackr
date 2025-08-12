"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { PiStethoscope, PiWarningCircle } from "react-icons/pi";
import { SYMPTOMS } from "./constant";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DNA } from "react-loader-spinner";

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayText, setDisplayText] = useState("");

  function generateMockResponse(input: string): string {
    const words = input.toLowerCase().split(/\s+/);

    // Try to find the most relevant mock entry
    const match = SYMPTOMS.find((entry) =>
      entry.keywords.some((keyword) => words.includes(keyword))
    );

    if (!match) {
      return `Possible Conditions:
- Unknown (Please consult a healthcare provider)

Recommendations:
- Provide more details about your symptoms
- Consult a doctor for proper evaluation`;
    }

    const conditionsText = match.conditions
      .map((c) => `- ${c.name}`)
      .join("\n");

    const recommendationsText = match.recommendations
      .map((r) => `- ${r}`)
      .join("\n");

    return `Possible Conditions:\n${conditionsText}.\n\nRecommendations:\n${recommendationsText}.`;
  }

  function handleCheck() {
    if (!symptoms.trim()) return;
    setLoading(true);
    setDisplayText("");

    // Simulate AI thinking time
    setTimeout(() => {
      const fullText = generateMockResponse(symptoms);
      simulateTyping(fullText);
    }, 3000);
  }

  function simulateTyping(text: string) {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 20); // typing speed
  }

  return (
    <div className="p-5 grid gap-5 content-start">
      <div className="grid gap-1">
        <h1 className="text-[#131313] font-semibold text-lg">
          AI Powered Symptom Checker
        </h1>
        <p className="text-[#767676] text-sm">
          Describe your symptoms and get instant AI-powered health insights and
          recommendations
        </p>
      </div>
      <div className="text-[#CB7D2A] bg-[#FFF6ED] p-3 rounded-lg grid grid-cols-[auto_1fr] gap-2 max-w-3xl">
        <PiWarningCircle className="text-xl" />
        <p className="text-[#FFA646] text-sm">
          <span className="text-[#CB7D2A] font-semibold">
            Medical Disclaimer:
          </span>{" "}
          This tool provides general health information and should not replace
          professional medical advice. Always consult with a healthcare provider
          for accurate diagnosis and treatment.
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-1">
          <h2 className="text-[#131313] font-semibold text-lg">
            Describe your Symptoms
          </h2>
          <p className="text-[#767676] text-sm">
            Be as detailed as possible. Include when symptoms started, their
            severity, and any relevant context.
          </p>
        </div>
        <Textarea
          placeholder="Example: I’ve been experiencing a persistent cough for three days, mild headache, and feeling tired. the cough is dry and gets worse at night..."
          onChange={(e) => setSymptoms(e.target.value)}
          className="min-h-48"
        />
      </div>

      <Button
        onClick={handleCheck}
        variant={"primary"}
        disabled={!symptoms}
        className="max-w-sm mx-auto w-full"
      >
        <PiStethoscope />
        Analyze symptoms
      </Button>

      {/* Checking Symptom */}
      <Dialog open={loading}>
        <DialogContent showCloseButton={false}>
          <div className="grid gap-1">
            <DialogTitle className="text-center text-lg">
              Analyzing your symptoms
            </DialogTitle>
            <p className="text-sm max-w-xs text-center mx-auto text-[#3F3F3F]">
              Our AI is processing your input against medical databases
            </p>
            <span className="mx-auto">
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Response */}
      <Dialog open={!!displayText}>
        <DialogContent showCloseButton={false}>
          <div className="grid gap-3">
            <DialogTitle className="text-center text-lg">
              Analysis Complete
            </DialogTitle>
            <p className="text-sm max-w-xs text-center mx-auto text-[#3F3F3F]">
              Based on your symptoms, here&apos;s what our AI analysis suggests:
            </p>
            <div className="text-[#CB7D2A] bg-[#FFF6ED] p-3 rounded-lg grid grid-cols-[auto_1fr] gap-2 max-w-3xl">
              <PiWarningCircle className="text-xl" />
              <p className="text-[#FFA646] text-xs">
                <span className="text-[#CB7D2A] font-semibold">
                  Moderate Priority:
                </span>{" "}
                Consider scheduling an appointment with your healthcare provider
                within the next few days.
              </p>
            </div>

            <p className="text-sm text-r text-[#767676] whitespace-pre-wrap leading-[1.7]">
              {displayText}
            </p>

            <Button
              onClick={() => setDisplayText("")}
              variant={"primary"}
              className="mt-5"
            >
              I understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
