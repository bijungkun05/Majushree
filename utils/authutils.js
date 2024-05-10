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
    jsonwebtoken.sign(payload,secretKey,{expiresIn:"1h"});
}

export function generateRefreshToken(user)
{
    const payload =
    {
        id:user._id,
        email: user.email,
        role: user.role
    };
    JsonWebToken.sign(payload,secretKey,{expiresIn:"7h"});
}

export function verifyToken(token)
{
    jsonwebtoken.verify(token, secretKey);
}