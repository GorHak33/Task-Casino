export type GeoCode = "default" | "tr" | "en";

export type TranslationKey =
  | "openGame"
  | "downloadTitle"
  | "downloadSubtitle"
  | "downloadCta"
  | "ageRestriction"
  | "certified"
  | "socialTitle"
  | "languageLabel"
  | "only18";

export type Translations = Record<GeoCode, Record<TranslationKey, string>>;

export type GeoThemeConfig = {
  primary: string;
  accent: string;
  footer: string;
  gradient: string;
};
