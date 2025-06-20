import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  // code body
  try {
    // TODO overviwes
    /*
      1 check header
      2 Split Token Bearer
      3 Verify JWT
      4 Create req.user
    */
    // check header
    const header = req.headers.authorization;
    //console.log(header)
    if (!header) {
      createError(401, "Token is missing");
    }
    // 2 split token
    const token = header.split(" ")[1];
    // console.log(token);

    // 3 verfiy token
    jwt.verify(token, process.env.SECRET, (error, decode) => {
      // console.log(error);
      // console.log(decode);
      if (error) {
        createError(401, "token is missing!!");
      }
      req.user = decode;
      next()
    });
  } catch (error) {
    next(error);
  }
};
