import express from "express";
// controller
import { register, login } from "../controllers/auth.js";
import { loginSchema, registerSchema, validate } from "../validations/validator.js";



const router = express.Router();

// ENDPOINT http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);

router.post("/login", validate(loginSchema) ,login);

// export
export default router;
