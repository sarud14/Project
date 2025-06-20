import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // Todo overview Register
    /*
        0 Validate with yup
        1 check body
        2 check email in db
        3 Ecrypt Password => bcryptjs
        4 save to db => Prisma
        5 Response 
    */
    // check body
    console.log(req.body);
    const { email, name, password } = req.body;
    // check email
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log(user);
    if (user) {
      createError(400, "Email already been used");
    }
    console.log("first-------");
    // Encrypt password
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);
    // Save to db
    const result = await prisma.user.create({
      data: { email, name, password: hashPassword },
    });

    res.json({ msg: `Register ${result.name} success` });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res) => {
    
  /*
////TODO
1.Validate body
2.Check body
3.Check Email in DB
4.Check password
5.Create token
6.Respones
  */

  // check body
  const { email, password } = req.body;

  //check Email
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  console.log(user);
  if (!user) {
    createError(400, "Email or Password is invalid!!");
  }
  // check password
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    createError(400, "Email or Password is invalid!!");
  }
  // Gen Token
  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

  res.json({
    msg: `Welcome back ${user.name}`,
    payload: payload,
    token: token,
  });
};
