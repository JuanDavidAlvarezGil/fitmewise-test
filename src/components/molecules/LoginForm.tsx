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
import { Formik } from "formik";
import { loginSchema } from "../../utils/validationSchemas";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError }] = useLoginMutation();

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(setToken(result.token));
    } catch (err) {
      console.error("Error al iniciar sesión", err);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Input
              label={t("auth.email")}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />

            <ErrorText
              hasError={!!errors.email && !!touched.email}
              message={errors.email}
            />

            <Input
              label={t("auth.password")}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />

            <ErrorText
              hasError={!!errors.password && !!touched.password}
              message={errors.password}
            />

            <Button
              text={t("auth.login")}
              onPress={handleSubmit}
              disabled={!!!values.email || !!!values.password}
              loading={isLoading}
            />

            <HelperText
              message={t("auth.noAccountYet")}
              textButton={t("auth.createAccount")}
              onPress={() => navigation.navigate("Register")}
            />
            <ChangeLanguage />
          </>
        )}
      </Formik>
    </>
  );
}
