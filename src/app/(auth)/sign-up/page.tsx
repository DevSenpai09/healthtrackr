import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";
import React from "react";

export default function Page() {
  return (
    <div className="w-full grid lg:grid-cols-[500px_1fr] h-screen">
      <div className="bg-[url(/sign-up.png)] bg-cover bg-bottom hidden lg:grid items-end p-5">
        <div className="max-w-[400px] grid gap-4">
          <h2 className="text-white text-4xl font-light leading-[1.5]">
            Welcome To{" "}
            <span className="font-semibold">
              Health<span className="text-[#00E277]">Trackr</span>
            </span>
          </h2>
          <p className="text-[#E8E8E8] text-lg">
            Join thousand of users already taking control of their health.
          </p>
        </div>
      </div>

      <SignUpForm />
    </div>
  );
}
