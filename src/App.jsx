import React from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
