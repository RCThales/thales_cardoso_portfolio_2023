"use client";

import React, { useEffect, useState } from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";
import { useTheme } from "next-themes";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="fixed bottom-6 text-xl text-gray-200 flex justify-center items-center right-6 h-10 w-10 rounded-lg bg-blue-500
       z-[999999999999] shadow-md shadow-zinc-600 dark:shadow-black hover:scale-105 transition-all active:scale-95"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuMoon /> : <LuSunMedium />}
    </button>
  );
};

export default Theme;
