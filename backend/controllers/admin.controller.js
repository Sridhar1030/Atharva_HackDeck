import Admin from "../models/admin.models.js"; // Adjust the path as needed
import { hash } from "bcrypt";

export const registerAdmin = async (req, res) => {
	const { name, password, location } = req.body;

	if (!name || !password || !location) {
		return res.status(400).json({ message: "All fields are required." });
	}

	try {
		const hashedPassword = await hash(password, 10);
		const newAdmin = new Admin({
			name,
			password: hashedPassword,
			location,
		});

		await newAdmin.save();
		res.status(201).json({ message: "Admin registered successfully." });
	} catch (error) {
		res.status(500).json({
			message: "Server error.",
			error: error.message,
		});
	}
};

