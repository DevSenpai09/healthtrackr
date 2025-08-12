import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
  matcher: string[];
  url?: string;
}

export default function Item({ children, matcher, url }: ItemProps) {
  const path = usePathname().split("/")[1];

  return (
    <Link
      href={url || ""}
      className={cn(
        "grid grid-cols-[24px_1fr] items-center text-sm gap-2 [&>svg]:text-2xl transition-all py-2.5 px-4 rounded-md cursor-pointer",
        matcher.includes(`/${path}`)
          ? "text-white bg-[#009951]"
          : "text-[#3F3F3F] bg-transparent hover:bg-gray-100"
      )}
    >
      {children}{" "}
    </Link>
  );
}
