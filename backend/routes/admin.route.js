import { Router } from "express";
import { registerAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.post("/register", registerAdmin);
router.get("/")
export default router;
