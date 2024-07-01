import { useEffect } from "react";
import { useState } from "react";
import { useFavicon } from "@uidotdev/usehooks";

type typeCorrector = { matches: boolean };

const useThemeDetector = () => {
  const [favicon, setFavicon] = useState("/portfolio");
  useFavicon(favicon);
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: typeCorrector) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  console.log(isDarkTheme);

  useEffect(() => {
    if (isDarkTheme) {
      setFavicon("/portfolioWhite.png");
    } else {
      setFavicon("/portfolio.png");
    }
  }, [isDarkTheme]);

  return isDarkTheme;
};

export default useThemeDetector;
