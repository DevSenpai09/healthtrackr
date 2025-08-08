import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  size: number;
  variant?: "logo-1" | "logo-2" | "logo-3";
}

export default function Logo({ size, variant }: LogoProps) {
  return (
    <Link href={"/"}>
      <Image
        src={
          variant === "logo-3"
            ? "/logo-3.png"
            : variant === "logo-2"
            ? "/logo-2.png"
            : "/logo.png"
        }
        width={size}
        height={size / 8.5}
        alt="HealthTrackr Logo"
      />
    </Link>
  );
}
