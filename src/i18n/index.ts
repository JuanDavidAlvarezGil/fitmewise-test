import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

i18n.use(initReactI18next).init({
  lng: Localization.getLocales()[0].languageTag.startsWith("es") ? "es" : "en",
  fallbackLng: "en",
  resources: { en: { common: en }, es: { common: es } },
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
