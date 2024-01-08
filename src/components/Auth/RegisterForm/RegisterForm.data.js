import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
    lastname: "",
  };
}

export function validateForm() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Require"),
    password: Yup.string()
      .required("Require")
      .min(8, "You need 8 charactes minimum"),
    username: Yup.string().required("Require"),
    lastname: Yup.string().required("Require"),
  });
}
