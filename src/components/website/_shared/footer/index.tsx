import Logo from "@/components/ui/logo";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid bg-[#303030] layout-x-spacing">
      <div className="container mx-auto py-10 grid md:grid-cols-[1fr_3fr] gap-10 xl:gap-20">
        {/* Logo and Text */}
        <div className="grid gap-5 max-w-sm">
          <Logo size={200} />
          <p className="text-[#AFAFAF]">
            Your comprehensive health management platform for a better,
            healthier life.
          </p>
        </div>

        {/* Navigations */}
        <div className="grid grid-cols-2 min-[480px]:grid-cols-3 max-w-2xl gap-5 [&_h3]:text-white [&_h3]:text- [&>div]:grid [&>div]:gap-3 [&_nav]:grid [&_nav]:gap-3 [&_nav]:text-[#AFAFAF] [&_nav]:text-sm">
          {/* Product */}
          <div>
            <h3>Product</h3>

            <nav>
              <Link href={"/"}>Features</Link>
              <Link href={"/"}>Pricing</Link>
              <Link href={"/"}>API</Link>
            </nav>
          </div>
          {/* Company */}
          <div>
            <h3>Company</h3>

            <nav>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Contact</Link>
            </nav>
          </div>
          {/* Support */}
          <div>
            <h3>Support</h3>

            <nav>
              <Link href={"/"}>Help center</Link>
              <Link href={"/"}>Privacy policy</Link>
              <Link href={"/"}>Terms </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-[#5E5E5E] py-5">
        <p className="text-[#8F8D8D] text-lg text-center text-sm">
          © 2025 HealthTrackr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
