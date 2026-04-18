import express from "express"
import {viewMarks} from "../controllers/studentController.js"
import { protect } from "../middlewares/authMiddleware.js"
import { authRole } from "../middlewares/roleMiddleware.js"

const router=express.Router()

router.get("/viewmarks",protect,authRole("student"),viewMarks)

export default router