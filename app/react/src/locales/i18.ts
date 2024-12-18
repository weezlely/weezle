import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationEN, translationKO } from "@/locales";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 초기 언어 설정
  fallbackLng: "en", // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false, // React에서는 HTML을 이스케이프하지 않음
  },
});

export default i18n;
