import * as Yup from "yup";

export const initialValues = {
  emailId: "",
  password: "",
};

export const loginSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});