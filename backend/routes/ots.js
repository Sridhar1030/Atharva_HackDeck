import { Router } from "express";
const router = Router();
import { readFileSync } from "fs";
import twilio from "twilio";
require("dotenv").config();

const client = twilio(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

// Load the voter data from JSON file
const voterData = JSON.parse(readFileSync("./voterId.json", "utf-8"));

// Generate a random OTP
function generateOTP() {
	return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP
router.post("/send-otp", async (req, res) => {
	const { voterId } = req.body;

	// Find voter by VoterId
	const voter = voterData.find((voter) => voter.VoterId === voterId);

	if (!voter) {
		return res.status(404).json({ message: "Voter not found" });
	}

	const otp = generateOTP();

	try {
		// Send OTP using Twilio
		await client.messages.create({
			body: `Your OTP is ${otp}`,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: voter.phoneNumber,
		});

		res.status(200).json({ message: "OTP sent successfully!" });
	} catch (error) {
		res.status(500).json({ error: "Failed to send OTP" });
	}
});

export default router;
