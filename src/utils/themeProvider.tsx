import React, { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  enableSystem = true,
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);

  // Get system theme
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Get stored theme
  const getStoredTheme = (): Theme => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey) as Theme;
      return stored && ["light", "dark", "system"].includes(stored)
        ? stored
        : defaultTheme;
    } catch {
      return defaultTheme;
    }
  };

  // Apply theme to DOM
  const applyTheme = (appliedTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);

    // Also set data attribute for better CSS targeting
    root.setAttribute("data-theme", appliedTheme);
  };

  // Initialize theme on client side
  useEffect(() => {
    const storedTheme = getStoredTheme();
    const currentSystemTheme = getSystemTheme();

    setThemeState(storedTheme);
    setSystemTheme(currentSystemTheme);

    const appliedTheme =
      storedTheme === "system" ? currentSystemTheme : storedTheme;
    setResolvedTheme(appliedTheme);
    applyTheme(appliedTheme);

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, defaultTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);

      // Only update resolved theme if current theme is "system"
      if (theme === "system") {
        setResolvedTheme(newSystemTheme);
        applyTheme(newSystemTheme);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
    // Legacy browsers
    else {
      mediaQuery.addListener(handleSystemThemeChange);
      return () => mediaQuery.removeListener(handleSystemThemeChange);
    }
  }, [theme, enableSystem]);

  // Update theme
  useEffect(() => {
    if (isLoading) return;

    const appliedTheme = theme === "system" ? systemTheme : theme;
    setResolvedTheme(appliedTheme);
    applyTheme(appliedTheme);

    // Store theme preference
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      console.warn("Failed to save theme preference:", error);
    }
  }, [theme, systemTheme, storageKey, isLoading]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        systemTheme,
        isLoading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
