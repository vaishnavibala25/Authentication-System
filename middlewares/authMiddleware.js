import jwt from "jsonwebtoken"

export const protect=(req,res,next)=>{
    const token=req.headers.authorization

    if(!token){
        return res.json({message:"Token not provided"})
    }

    try{
        const decoded=jwt.verify(token.split(" ")[1],process.env.jwt_secret)

        req.user=decoded
        next()
    }
    catch(err){
   return res.status(401).json({ message: "Invalid Token" });
    }
}