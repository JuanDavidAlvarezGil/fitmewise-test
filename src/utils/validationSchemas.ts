import * as Yup from "yup";
import i18n from "../i18n";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, i18n.t("errors.invalidEmail"))
    .required(i18n.t("errors.requiredEmail")),
  password: Yup.string().required(i18n.t("errors.requiredPassword")),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, i18n.t("errors.invalidEmail"))
    .required(i18n.t("errors.requiredEmail")),
  password: Yup.string().required(i18n.t("errors.requiredPassword")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], i18n.t("errors.passwordsDontMatch"))
    .required(i18n.t("errors.requiredConfirmPassword")),
});
