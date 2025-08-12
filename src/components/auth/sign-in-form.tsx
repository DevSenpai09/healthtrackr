"use client";

import React, { FormEvent } from "react";
import Logo from "../ui/logo";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { User } from "./sign-up-form";

export default function SignInForm() {
  const router = useRouter();

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e?.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const registeredUsers: User[] = JSON.parse(
      localStorage.getItem("registeredUsers")!
    );
    const userData = registeredUsers.filter((item) => item?.email === email)[0];

    if (registeredUsers && userData && userData?.password === password) {
      localStorage.setItem("signedInUser", JSON.stringify(userData));
      router.push("/dashboard");
      return;
    }

    toast.error("Invalid Credentials", {
      position: "top-center",
    });
    return;
  };

  return (
    <div className="px-5 py-5 grid content-center">
      <div className="w-full max-w-md mx-auto grid gap-10">
        <Logo size={200} variant="logo-2" />
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-[#6C6C6C]">
            Please enter your account details to sign in
          </p>
        </div>

        <form onSubmit={handleForm} className="grid gap-10">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[#656565]">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="py-5 border"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-[#656565]">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                className="py-5 border"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <Button type="submit" variant={"primary"} className="w-full">
              Sign In
            </Button>
            <p className="text-[#6C6C6C]">
              Don&apos;t have an account?{" "}
              <Link
                href={"/sign-up"}
                className="text-[#3F3F3F] font-semibold hover:opacity-80 transition-all"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        <button
          onClick={() => router.push("/dashboard")}
          className="text-left flex justify-center items-center gap-2 w-full border px-2 py-3 rounded-md text-sm text-[#757373] cursor-pointer hover:opacity-80 transition-all"
        >
          <Image src={"/google.svg"} width={24} height={24} alt="Google Icon" />
          Sign in with Google instead
        </button>
      </div>
    </div>
  );
}
