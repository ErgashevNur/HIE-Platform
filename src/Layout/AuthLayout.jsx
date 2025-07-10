import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
}
