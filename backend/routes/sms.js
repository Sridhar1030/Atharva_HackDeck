import { Router } from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import "../config/awsConfig.js"; // Import AWS config

const router = Router();
const sns = new AWS.SNS();

router.post("/send-sms", async (req, res) => {
	const { phoneNumber, message } = req.body;

	const params = {
		Message: message,
		PhoneNumber: phoneNumber,
	};

	try {
		const data = await sns.publish(params).promise();
		res.status(200).json({ success: true, messageId: data.MessageId });
	} catch (error) {
		res.status(500).json({
			error: "Failed to send SMS",
			details: error.message,
		});
	}
});

export default router;
