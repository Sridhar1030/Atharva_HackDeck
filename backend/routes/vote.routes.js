import express from "express";
import {
	verifyAdminPassword,
	castVote,
} from "../controllers/vote.controller.js";

const router = express.Router();

// Route to verify admin password
router.post("/admin/verify", verifyAdminPassword);

// Route to cast vote
router.post("/vote", castVote);

export default router;
