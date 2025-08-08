import { Inter, Poppins, Instrument_Serif } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-poppins",
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});
