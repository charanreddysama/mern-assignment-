import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){
    //token verification logic 

    //1.Get token from req(using cookie-parser)
    console.log(req.cookies) 
    let signedToken=req.cookies.token;//{token :" "}
    if(!signedToken){
     return res.status(401).json({message:"Please login first"})   
    }
    ///verify token(decode)
    let decodeToken = jwt.verify(signedToken,"abcdef");
    console.log("decode token:",decodeToken);
    //back to userapi
    next()
}