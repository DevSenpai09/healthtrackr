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

export interface User {
  fullName: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const router = useRouter();

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e?.currentTarget);
    const fullName = formData.get("full-name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const registeredUsers: User[] = JSON.parse(
      localStorage.getItem("registeredUsers")!
    );

    if (
      registeredUsers &&
      registeredUsers.map((item) => item?.email).includes(email)
    ) {
      toast.error("User with this email already exists", {
        position: "top-center",
      });
      return;
    }

    registeredUsers
      ? localStorage.setItem(
          "registeredUsers",
          JSON.stringify([...registeredUsers, { fullName, email, password }])
        )
      : localStorage.setItem(
          "registeredUsers",
          JSON.stringify([{ fullName, email, password }])
        );
    router.push("/dashboard");
  };

  return (
    <div className="px-5 py-5 grid content-center">
      <div className="w-full max-w-md mx-auto grid gap-10">
        <Logo size={200} variant="logo-2" />
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-[#6C6C6C]">
            Let&apos;s get started setting up your account
          </p>
        </div>

        <form onSubmit={handleForm} className="grid gap-10">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="full-name" className="text-[#656565]">
                Full name*
              </Label>
              <Input
                type="text"
                id="full-name"
                name="full-name"
                required
                className="py-5 border"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[#656565]">
                Email*
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
                Password*
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
              Sign Up
            </Button>
            <p className="text-[#6C6C6C]">
              Already have an account?{" "}
              <Link
                href={"/sign-in"}
                className="text-[#3F3F3F] font-semibold hover:opacity-80 transition-all"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>

        <button
          onClick={() => router.push("/dashboard")}
          className="text-left flex justify-center items-center gap-2 w-full border px-2 py-3 rounded-md text-sm text-[#757373] cursor-pointer hover:opacity-80 transition-all"
        >
          <Image src={"/google.svg"} width={24} height={24} alt="Google Icon" />
          Sign Up with Google instead
        </button>
      </div>
    </div>
  );
}
