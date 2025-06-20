import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  try {
    // check email
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    console.log(user);
    res.json({
      msg: "This is list ALl User",
      result: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    // read params and body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);

    // update to db
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        role: role,
      },
    });
    res.json({ msg: `Update role ${user.name}` });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ msg: "Delete User successful" });
  } catch (error) {
    next(next);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });
    res.json({ result: user });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  res.json({ msg: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ msg: "This is Post User" });
};
