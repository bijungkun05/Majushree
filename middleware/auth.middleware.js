import  jsonwebtoken from "jsonwebtoken";
import User from "../model/user.model.js";
import secretKey from "../configuration/jwtConfig.js";



export default async function  (req, res, next)  {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");

  }    console.log({token});
  try {
    const decoded = jsonwebtoken.verify(
      token,
      secretKey
    );

    const user = await User.findOne({
      $or: [{ email: decoded.email }],
    });
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

