import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../../features/api/reqresApi";
import { setToken } from "../../features/auth/authSlice";
import { useAppNavigation } from "../../navigation/RootNavigator";
import { useAppDispatch } from "../../redux/store";
import Button from "../atoms/Button";
import ChangeLanguage from "../atoms/ChangeLanguage";
import ErrorText from "../atoms/ErrorText";
import HelperText from "../atoms/HelperText";
import Input from "../atoms/Input";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");
  const [login, { isLoading, isError }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(setToken(result.token));
    } catch (err) {
      console.error("Error al iniciar sesión", err);
    }
  };

  return (
    <>
      <Input
        label={t("auth.email")}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        label={t("auth.password")}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        text={t("auth.login")}
        onPress={handleLogin}
        disabled={!!!email || !!!password}
        loading={isLoading}
      />

      <ErrorText hasError={!!isError} />

      <HelperText
        message={t("auth.noAccountYet")}
        textButton={t("auth.createAccount")}
        onPress={() => navigation.navigate("Register")}
      />
      <ChangeLanguage />
    </>
  );
}
