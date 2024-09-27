import Admin from "../models/admin.models.js";
import Party from "../models/party.models.js";
import bcrypt from "bcrypt";

// Verify admin password before voting
export const verifyAdminPassword = async (req, res) => {
	const { adminPassword } = req.body;
	try {
		const admin = await Admin.findOne({ name: "sri" }); // Assuming there is one admin
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

// Cast vote and update admin's usersVoted
export const castVote = async (req, res) => {
	const { voterId, partyId, userImage } = req.body;

	try {
		// Increment vote for the selected party
		const party = await Party.findByIdAndUpdate(
			partyId,
			{ $inc: { voteCounter: 1 } },
			{ new: true }
		);

		if (!party) return res.status(404).json({ message: "Party not found" });

		// Update admin's voted list
		const admin = await Admin.findOneAndUpdate(
			{ name: "Admin" }, // Assuming one admin
			{ $push: { usersVoted: { voterId, image: userImage } } },
			{ new: true }
		);

		if (!admin) return res.status(404).json({ message: "Admin not found" });

		res.status(200).json({
			message: "Vote cast successfully",
			updatedAdmin: admin,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
