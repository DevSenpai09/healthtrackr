import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "HealthTrackr",
  description: "Take control Of Your Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <NextTopLoader color="#009951" showSpinner={false} height={4} />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
