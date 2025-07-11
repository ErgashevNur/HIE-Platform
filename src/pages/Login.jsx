import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { validation } from "../validations";
import { toast } from "sonner";
import { login } from "../requests";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = {};
    for (const [key, value] of formData.entries()) {
      res[key] = value;
    }

    const result = validation(res);
    if (result) {
      const { target, message } = result;
      e.target[target].focus();
      toast.error(message);
    } else {
      login(res).then(
        (res) => {
          console.log(res);
        },
        ({ message }) => {
          toast.error(message);
        },
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-black">
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
          <h1 className="mb-2 text-3xl font-light tracking-tight text-black">
            Welcome back
          </h1>
          <p className="text-sm font-normal text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-black">
              Email address
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="h-12 border-gray-200 bg-white text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-black"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="h-12 border-gray-200 bg-white pr-10 text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-black"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full bg-black font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
          >
            Sign in
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-black hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-center text-xs text-gray-400">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
