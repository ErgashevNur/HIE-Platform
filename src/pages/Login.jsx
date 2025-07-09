import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="mx-auto flex h-screen w-[750px] items-center justify-center">
      <div className="flex w-full flex-col gap-5 rounded-xl border-2 px-16 py-[100px]">
        <div className="flex w-full gap-8">
          <div className="flex flex-col gap-5 font-sans">
            <h1 className="mb-4 text-xl font-bold text-gray-800 md:text-5xl">
              Welcome back!
            </h1>
            <p className="max-w-md text-base leading-relaxed text-gray-600 md:text-sm">
              Welcome back! Please enter your login and password to access the
              app and enjoy unlimited features — all just for you!
            </p>
          </div>

          <div className="w-[450px] space-y-6">
            <form onClick={handleSubmit}>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-6 py-5 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-5 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-lg px-4 py-5.5 font-bold text-white transition-colors"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
        <p className="mx-auto mt-10 text-sm text-gray-400">
          If you don't have an account, click the{" "}
          <a href="/register" className="font-mono text-blue-300 underline">
            sign up
          </a>{" "}
          button.
        </p>
      </div>
    </div>
  );
}
