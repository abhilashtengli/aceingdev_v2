import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeContextProps {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  systemTheme: "light" | "dark";
  isLoading: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

// Theme script to prevent FOUC (Flash of Unstyled Content)
// Add this script tag to your HTML head before any stylesheets
export const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme') || 'system';
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var appliedTheme = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
    document.documentElement.classList.add(appliedTheme);
    document.documentElement.setAttribute('data-theme', appliedTheme);
  } catch (e) {}
})();
`;
