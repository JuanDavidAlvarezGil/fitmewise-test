import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text } from "react-native";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(i18n.language === lang ? "en" : lang);
  };

  return (
    <Pressable onPress={() => changeLanguage("es")}>
      <Text className="text-blue-600 font-semibold text-center">
        {t("common.changeLanguage")}
      </Text>
    </Pressable>
  );
}
