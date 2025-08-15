import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";

type ErrorTextProps = {
  hasError: boolean;
  message?: string;
};

export default function ErrorText({ hasError, message }: ErrorTextProps) {
  const { t } = useTranslation();
  if (!hasError) return null;
  return (
    <>
      <Text className="text-red-600">{message ?? t("errors.generic")}</Text>
    </>
  );
}
