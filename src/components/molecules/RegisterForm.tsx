import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRegisterMutation } from "../../features/api/reqresApi";
import { setToken } from "../../features/auth/authSlice";
import { useAppNavigation } from "../../navigation/RootNavigator";
import { useAppDispatch } from "../../redux/store";
import Button from "../atoms/Button";
import ErrorText from "../atoms/ErrorText";
import HelperText from "../atoms/HelperText";
import Input from "../atoms/Input";

export default function RegisterForm() {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();

  const [register, { isError, isLoading, isSuccess, data }] =
    useRegisterMutation();

  const handleRegister = async () => {
    try {
      const response = await register({
        email,
        password,
      }).unwrap();
      dispatch(setToken(response.token));
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <Input
        label={t("auth.email")}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        label={t("auth.password")}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Input
        label={t("auth.confirmPassword")}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button
        text={t("auth.register")}
        onPress={handleRegister}
        disabled={!!!email || !!!password || password !== confirmPassword}
        loading={isLoading}
      />

      <ErrorText hasError={isError} />

      <HelperText
        message={t("auth.alreadyHaveAnAccount")}
        textButton={t("auth.login")}
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
}
