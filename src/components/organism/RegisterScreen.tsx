import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet } from "react-native";
import Background from "../atoms/Background";
import Card from "../atoms/Card";
import ScreenTitle from "../atoms/ScreenTitle";
import RegisterForm from "../molecules/RegisterForm";

export default function RegisterScreen() {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Background>
        <Card>
          <ScreenTitle title={t("auth.createAccount")} />
          <RegisterForm />
        </Card>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});
