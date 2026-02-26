"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
