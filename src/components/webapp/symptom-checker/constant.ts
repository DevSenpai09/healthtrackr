export const SYMPTOMS = [
  {
    keywords: ["fever", "cold", "cough", "fatigue"],
    conditions: [
      { name: "Flu", confidence: 70 },
      { name: "Common Cold", confidence: 20 },
      { name: "COVID-19", confidence: 10 },
    ],
    recommendations: [
      "Rest and stay hydrated",
      "Monitor temperature regularly",
      "Seek medical attention if symptoms worsen",
    ],
  },
  {
    keywords: ["headache", "nausea", "light"],
    conditions: [
      { name: "Migraine", confidence: 75 },
      { name: "Tension Headache", confidence: 20 },
      { name: "Dehydration", confidence: 5 },
    ],
    recommendations: [
      "Rest in a dark, quiet room",
      "Drink plenty of water",
      "Avoid screens and bright light",
    ],
  },
  {
    keywords: ["stomach", "vomiting", "diarrhea"],
    conditions: [
      { name: "Food Poisoning", confidence: 65 },
      { name: "Stomach Flu", confidence: 25 },
      { name: "Irritable Bowel Syndrome", confidence: 10 },
    ],
    recommendations: [
      "Drink electrolyte-rich fluids",
      "Avoid solid foods for a few hours",
      "Seek medical attention if symptoms are severe",
    ],
  },
];
