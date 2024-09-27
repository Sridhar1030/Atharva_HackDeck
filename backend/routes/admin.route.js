import { Router } from "express";
import { registerAdmin } from "../controllers/admin.controller.js";
import Admin from '../models/admin.models.js'; // Import your Admin model


const router = Router();

router.post("/register", registerAdmin);
router.get("/dashboard/:adminId", async (req, res) => {
	try {
		const adminId = req.params.adminId;
        console.log(adminId)
		const admin = await Admin.findById(adminId).select("-password"); // Exclude password for security
		if (!admin) {
			return res.status(404).json({ message: "Admin not found" });
		}
		res.status(200).json(admin);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});
export default router;
