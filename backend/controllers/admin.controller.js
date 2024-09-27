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

export const verifyAdminPassword = async (req, res) => {
	const { adminPassword } = req.body;
	try {
		const admin = await Admin.findOne({ name: "Admin" }); // Assuming there is one admin
		if (!admin) return res.status(404).json({ message: "Admin not found" });

		// Compare password
		const isPasswordValid = await bcrypt.compare(
			adminPassword,
			admin.password
		);
		if (!isPasswordValid)
			return res.status(400).json({ message: "Invalid admin password" });

		res.status(200).json({ message: "Admin password verified" });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
