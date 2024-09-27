import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const voterIdPath = path.join(process.cwd(), "VotertId.json"); 
let voterId = [];

fs.readFile(voterIdPath, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading email file:", err);
		return;
	}
	voterId = JSON.parse(data).VoterId;
});

app.use((req, res, next) => {
	req.voterId = voterId;
	next();
});

app.get("/api", (req, res) => {
	res.send("API is running...");
});


export { app };