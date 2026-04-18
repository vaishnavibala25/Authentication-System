import express from "express"
import { protect } from "../middlewares/authMiddleware.js";
import { authRole } from "../middlewares/roleMiddleware.js";
import { getMarks, addMarks } from "../controllers/adminController.js";
const router=express.Router()

router.post("/students/addmarks",protect,authRole("admin"),addMarks);
router.get("/students/getmarks",protect,authRole("admin"),getMarks);

export default router
