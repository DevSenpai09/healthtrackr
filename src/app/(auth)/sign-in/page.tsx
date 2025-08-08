import SignInForm from "@/components/auth/sign-in-form";
import React from "react";

export default function Page() {
  return (
    <div className="w-full grid lg:grid-cols-[500px_1fr] h-screen">
      <div className="bg-[url(/sign-in.png)] bg-cover bg-bottom hidden lg:grid items-end p-5">
        <div className="max-w-[400px] grid gap-4">
          <h2 className="text-white text-3xl font-light leading-[1.5]">
            No stress, no guesswork, just simple tools to help you stay healthy
          </h2>
          <p className="text-[#E8E8E8] text-lg">Continue where you left off</p>
        </div>
      </div>

      <SignInForm />
    </div>
  );
}
