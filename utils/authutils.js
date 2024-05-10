import  jsonwebtoken from "jsonwebtoken";
import secretKey from "../configuration/jwtConfig.js";


export function generateToken(user)
{
    const payload =
    {
        id:user._id,
        email: user.email,
        role: user.role
    };
   return jsonwebtoken.sign(payload,secretKey,{expiresIn:"1h"});
}

export function generateRefreshToken(user)
{
    const payload =
    {
        id:user._id,
        email: user.email,
        role: user.role
    };
   return jsonwebtoken.sign(payload,secretKey,{expiresIn:"7h"});
}

export function verifyToken(token)
{
   return jsonwebtoken.verify(token, secretKey);
}