import { useEffect } from "react";
import themeConfig from "../config/theme.json";

export const useTheme = () => {
  useEffect(() => {
    // Apply CSS variables from theme config
    const root = document.documentElement;

    // Apply colors
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply shadows
    Object.entries(themeConfig.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Apply gradients
    Object.entries(themeConfig.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, value);
    });
  }, []);

  return themeConfig;
};
