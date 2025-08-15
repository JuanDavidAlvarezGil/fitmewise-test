import React from "react";
import { useTranslation } from "react-i18next";
import Background from "../atoms/Background";
import Card from "../atoms/Card";
import ScreenTitle from "../atoms/ScreenTitle";
import LoginForm from "../molecules/LoginForm";

export default function LoginScreen() {
  const { t } = useTranslation();
  return (
    <Background>
      <Card>
        <ScreenTitle title={t("auth.welcome")} />
        <LoginForm />
      </Card>
    </Background>
  );
}
