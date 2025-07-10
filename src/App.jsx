// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/Layout/RootLayout";
import AuthLayout from "@/Layout/AuthLayout";
import MainLayout from "@/Layout/MainLayout";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Jobs from "./pages/Jobs";
import Chat from "./pages/Chat";
import Favorites from "./pages/Favorites";
import Notification from "./pages/Notification";
import Register from "@/pages/Register";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />, // Eng tashqi qobiq
      children: [
        {
          element: <AuthLayout />,
          children: [
            { path: "/", element: <LandingPage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
          ],
        },
        {
          element: <MainLayout />,
          children: [
            { path: "/home", element: <Jobs /> },
            { path: "/messages", element: <Chat /> },
            { path: "/favorites", element: <Favorites /> },
            { path: "/notifications", element: <Notification /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
