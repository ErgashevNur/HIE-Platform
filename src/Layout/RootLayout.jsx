import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { toast } from "sonner";

export default function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user && window.location.pathname !== "/login") {
      navigate("/login");
      toast.error("User is not defined");
    }
  }, [navigate]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-background text-foreground min-h-screen">
        <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
