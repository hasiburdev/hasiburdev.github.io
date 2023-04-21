import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkMode = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkMode);
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        {
          let theme = userPreference === "dark" ? "dark" : "";
          setMode(theme);
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      } else {
        let theme = mediaQuery.matches ? "dark" : "";
        setMode(theme);

        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitcher;
