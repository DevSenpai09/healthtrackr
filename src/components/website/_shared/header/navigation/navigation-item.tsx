import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavigationItemProps {
  title: string;
  url: string;
  isActive?: boolean;
}

export default function NavigationItem({
  title,
  url,
  isActive,
}: NavigationItemProps) {
  return (
    <Link
      href={url}
      className={cn(
        "font-medium",
        isActive
          ? "text-[#00E277]"
          : "text-[#F2F2F2] hover:text-[rgba(242,242,242,0.8)]"
      )}
    >
      {title}
    </Link>
  );
}
