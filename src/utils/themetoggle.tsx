import { useTheme } from "./useTheme";

const ThemeToggle = () => {
  const { theme, setTheme, isLoading } = useTheme();

  // Don't render anything while loading to prevent hydration issues
  if (isLoading) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
    );
  }

  const toggleTheme = () => {
    // If current theme is system, default to light, then toggle
    const currentTheme = theme === "system" ? "light" : theme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const getCurrentThemeIcon = () => {
    const currentTheme = theme === "system" ? "light" : theme;
    return currentTheme === "light" ? "☀️" : "🌙";
  };

  const getCurrentThemeLabel = () => {
    const currentTheme = theme === "system" ? "light" : theme;
    return currentTheme === "light" ? "Light" : "Dark";
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      title={`Current theme: ${getCurrentThemeLabel()}. Click to toggle theme.`}
    >
      <span className="text-lg" role="img" aria-label="current theme">
        {getCurrentThemeIcon()}
      </span>
      <span className="hidden sm:inline">{getCurrentThemeLabel()}</span>
    </button>
  );
};

export default ThemeToggle;
