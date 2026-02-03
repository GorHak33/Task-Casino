import type { GeoCode, GeoThemeConfig } from "../types";

export const geoThemes: Record<GeoCode, GeoThemeConfig> = {
  default: {
    primary: "#050b2e",
    accent: "#ff9548",
    footer: "#050b2e",
    gradient:
      "radial-gradient(circle at 50% 20%, #173b87 0, #020418 55%, #000010 100%)",
  },
  tr: {
    primary: "#020a26",
    accent: "#ff7b3c",
    footer: "#02061a",
    gradient:
      "radial-gradient(circle at 50% 15%, #1b3c7a 0, #010214 60%, #000008 100%)",
  },
  en: {
    primary: "#040b30",
    accent: "#ffa94d",
    footer: "#02051a",
    gradient:
      "radial-gradient(circle at 50% 18%, #21418f 0, #02051a 55%, #01000f 100%)",
  },
};
