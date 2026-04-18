import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import { hashPassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";

export const register=async(req,res)=>{
    const {username,email,password,role,marks}=req.body

    try{
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({messgase:"User Already Exists"})
        }
        const hashedPassword=await hashPassword(password)

        const user= await userModel.create({username,email,password:hashedPassword,role,marks})
        
        return res.status(201).json({message:"Register SuccessFull"})
    }
    catch(err){
        console.log(err);
        res.json({message:"Error Creating User"})
    }
}

export const login=async(req,res)=>{
    const {email,password} =req.body

    try{
        const user=await userModel.findOne({email})
        
        if(!user){
            return res.status(401).json({message:"User Not Exist"})
        }

        const match=bcrypt.compare(password,user.password)

        if(!match){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const token=generateToken(user)
        res.json({token,user : {
            username:user.username,
            email:user.email,
            id:user.id,role:user.role
        },})
    }
    catch(err){
        console.log("Error")
        res.json({message:"Login Failed"})
    }
}