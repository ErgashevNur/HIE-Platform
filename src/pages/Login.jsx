import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  return (
    <div className="bg-background text-foreground mx-auto flex h-screen w-[750px] items-center justify-center">
      <div className="border-border bg-card flex w-full flex-col gap-5 rounded-xl border px-16 py-[100px]">
        <div className="flex w-full gap-8">
          <div className="flex flex-col gap-5 font-sans">
            <h1 className="text-foreground mb-4 text-xl font-bold md:text-5xl">
              Welcome back!
            </h1>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed md:text-sm">
              Welcome back! Please enter your login and password to access the
              app and enjoy unlimited features — all just for you!
            </p>
          </div>

          <div className="w-[450px] space-y-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-base font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="block text-base font-medium"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <Button type="submit" className="w-full font-bold">
                Sign In
              </Button>
            </form>
          </div>
        </div>
        <p className="text-muted-foreground mx-auto mt-10 text-sm">
          If you don't have an account, click the{" "}
          <a href="/register" className="text-primary font-mono underline">
            sign up
          </a>{" "}
          button.
        </p>
      </div>
    </div>
  );
}
