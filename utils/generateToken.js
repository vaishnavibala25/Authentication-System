import jwt from "jsonwebtoken"

export const generateToken=(user)=>{
    return jwt.sign({id:user.id,email:user.email},process.env.jwt_secret,{expiresIn:"1d"})
}