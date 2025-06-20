// validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email incorrect").required("Please put Email"),
  name: string().min(2, "Name need more than 2"),
  password: string().min(6, "Password need more than 6"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password not match"
  ),
});

export const loginSchema = object({
  email: string().email("Email incorrect").required("Please put Email"),
  password: string().min(6, "Password need more than 6"),
});