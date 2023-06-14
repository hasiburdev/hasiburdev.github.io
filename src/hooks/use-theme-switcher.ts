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
          let theme = userPreference === "dark" ? "dark" : "light";
          setMode(theme);
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
          }
        }
      } else {
        let theme = mediaQuery.matches ? "dark" : "light";
        setMode(theme);

        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          window.localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          window.localStorage.setItem("theme", "light");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitcher;
