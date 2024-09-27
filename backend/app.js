import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import OtpRouter from "./routes/otp.js"; // Import the otp route with ES6
import { userRouter } from "./routes/user.routes.js";

dotenv.config(); // Load environment variables from .env

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const voterIdPath = path.join(process.cwd(), "voterId.json");
let voterId = [];

// Read voter data from JSON file
fs.readFile(voterIdPath, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading voter ID file:", err);
		return;
	}
	voterId = JSON.parse(data).VoterId;
});

app.use((req, res, next) => {
	req.voterId = voterId;
	next();
});

// Use the OTP router for /api/otp routes
app.use("/api/otp", OtpRouter);
app.use("/api/auth", userRouter);

export { app };
