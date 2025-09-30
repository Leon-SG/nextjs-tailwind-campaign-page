"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
