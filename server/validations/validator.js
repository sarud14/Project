// Validate with yup
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

export const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    console.log(req.body)
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    console.log(errTxt);
    const margeErr = new Error(errTxt);
    next(margeErr);
  }
};
