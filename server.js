import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"


dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||5000
const mongo_uri=process.env.mongo_uri

mongoose.connect(mongo_uri)
.then(()=>{console.log("MongoDb Connected Sucessfully")})
.catch((err)=>{console.log(err)})

app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/student",studentRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})