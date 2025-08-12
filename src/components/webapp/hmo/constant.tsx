export const HMO_PLANS = {
  individual: [
    {
      name: "Basic Care",
      price: 50000, // annual price in ₦
      coverage: [
        "General practitioner consultations",
        "Basic laboratory tests (blood test, urinalysis)",
        "Common prescription medications",
        "Emergency care (up to ₦50,000 per incident)",
      ],
      keyBenefits: [
        "Affordable entry-level coverage",
        "Access to network of primary care providers",
      ],
      partnerHospitals: 50,
      exclusions: [
        "No specialist consultations",
        "No maternity care",
        "No advanced imaging (MRI, CT scan)",
        "No surgery coverage",
      ],
    },
    {
      name: "Standard Care",
      price: 120000,
      coverage: [
        "Everything in Basic Care",
        "Specialist consultations (cardiologist, orthopedist, etc.)",
        "Maternity care (up to ₦200,000)",
        "Advanced imaging (MRI, CT scan)",
      ],
      keyBenefits: [
        "Comprehensive diagnostics and specialist access",
        "Better emergency coverage (₦150,000 per incident)",
      ],
      partnerHospitals: 80,
      exclusions: [
        "No international medical coverage",
        "No dental care beyond cleaning and fillings",
        "No elective surgeries",
      ],
    },
    {
      name: "Premium Care",
      price: 250000,
      coverage: [
        "Everything in Standard Care",
        "International emergency medical coverage (up to $5,000)",
        "Comprehensive dental care (crowns, bridges, orthodontics)",
        "Elective surgeries (cosmetic, LASIK)",
        "Annual health check-up package",
      ],
      keyBenefits: [
        "All-inclusive healthcare experience",
        "Premium hospital rooms (private ward)",
        "VIP priority in partner hospitals",
      ],
      partnerHospitals: 120,
      exclusions: [],
    },
  ],
  family: [
    {
      name: "Basic Care",
      price: 150000,
      coverage: [
        "General practitioner consultations for all registered family members (up to 5)",
        "Basic laboratory tests",
        "Emergency care (₦100,000 per incident)",
        "Common prescription medications",
      ],
      keyBenefits: [
        "Affordable family-wide healthcare",
        "Broad hospital access for all family members",
      ],
      partnerHospitals: 60,
      exclusions: [
        "No specialist consultations",
        "No maternity care",
        "No advanced imaging",
        "No surgery coverage",
      ],
    },
    {
      name: "Standard Care",
      price: 280000,
      coverage: [
        "Everything in Basic Care",
        "Specialist consultations for adults and children",
        "Maternity care (up to ₦300,000)",
        "Advanced imaging (MRI, CT scan)",
      ],
      keyBenefits: [
        "Balanced family healthcare with diagnostics and maternity",
        "Higher emergency coverage (₦200,000 per incident)",
      ],
      partnerHospitals: 100,
      exclusions: [
        "No international coverage",
        "No full dental care beyond cleaning and fillings",
        "No elective surgeries",
      ],
    },
    {
      name: "Premium Care",
      price: 500000,
      coverage: [
        "Everything in Standard Care",

        "International emergency medical coverage (up to $10,000)",
        "Comprehensive dental care for the whole family",
        "Elective surgeries",
        "Annual health check-up package for all members",
      ],
      keyBenefits: [
        "Complete family health protection",
        "VIP treatment at partner hospitals",
        "Access to premium hospital wards",
      ],
      partnerHospitals: 150,
      exclusions: [],
    },
  ],
};
