import { Router } from "express";
import { readFileSync } from "fs";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const router = Router();

// Twilio client setup
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// Load the voter data from JSON file
const voterData = JSON.parse(readFileSync("../VoterId.json", "utf-8"));

// Send OTP route
router.post("/send-otp", async (req, res) => {
    const { phoneNumber } = req.body;

    // Find voter by VoterId
    // const voter = voterData.find((voter) => voter.VoterId === voterId);
	// console.log(object)

    // if (!voter) {
    //     return res.status(404).json({ message: "Voter not found" });
    // }


    try {
        // Send verification request using Twilio Verify API
        await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
            .verifications
            .create({ to: `+91${phoneNumber}`, channel: 'sms' });

        res.status(200).json({ message: "OTP sent successfully!" });
    } catch (error) {
        console.error("Twilio error:", error); // Log the error for debugging
        res.status(500).json({ error: "Failed to send OTP" });
    }
});

// Verify OTP route
router.post("/verify-otp", async (req, res) => {
    const { voterId, otp } = req.body;

    // Find voter by VoterId
    const voter = voterData.find((voter) => voter.VoterId === voterId);

    if (!voter) {
        return res.status(404).json({ message: "Voter not found" });
    }

    const phoneNumber = voter.phoneNumber; // Use the voter's phone number

    try {
        // Verify the OTP using Twilio Verify API
        const verificationCheck = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
            .verificationChecks
            .create({ to: `+91${phoneNumber}`, code: otp });

        if (verificationCheck.status === 'approved') {
            res.status(200).json({ message: "OTP verified successfully!" });
        } else {
            res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (error) {
        console.error("Twilio error:", error); // Log the error for debugging
        res.status(500).json({ error: "Invalid OTP" });
    }
});

// Test route
router.get("/test", (req, res) => {
    res.send("Hello World");
});

export default router;
