import mongoose from "mongoose"

const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["student","admin"]
    },
    marks:{
        type:Number,
        default:0
    }
},
{timestamps:true})

const userModel=mongoose.model("Users",userSchema)

export default userModel