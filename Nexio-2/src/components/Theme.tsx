"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { THEME_KEY } from "@/lib/theme";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — choice applies to this page view only */
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button type="button" className={`theme-toggle ${className}`} onClick={toggle} aria-label={label} title={label}>
      <Sun className="theme-icon theme-icon-sun" size={18} strokeWidth={1.8} aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" size={18} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
