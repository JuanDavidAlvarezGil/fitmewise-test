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
import { Formik } from "formik";
import { registerSchema } from "../../utils/validationSchemas";

export default function RegisterForm() {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [register, { isError, isLoading, isSuccess, data }] =
    useRegisterMutation();

  const handleRegister = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
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
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
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
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
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

            <Input
              label={t("auth.confirmPassword")}
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
            />

            <ErrorText
              hasError={!!errors.confirmPassword && !!touched.confirmPassword}
              message={errors.confirmPassword}
            />

            <Button
              text={t("auth.register")}
              onPress={handleSubmit}
              disabled={
                !!!values.email ||
                !!!values.password ||
                values.password !== values.confirmPassword
              }
              loading={isLoading}
            />

            <ErrorText hasError={isError} />

            <HelperText
              message={t("auth.alreadyHaveAnAccount")}
              textButton={t("auth.login")}
              onPress={() => navigation.navigate("Login")}
            />
          </>
        )}
      </Formik>
    </>
  );
}
