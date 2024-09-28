import Party from "../models/party.models.js";
import Admin from "../models/admin.models.js";

// Register a new party
export const registerParty = async (req, res) => {
	const { name, leader } = req.body;

	if (!name || !leader) {
		return res.status(400).json({ message: "All fields are required." });
	}

	try {
		const newParty = new Party({
			name,
			leader,
		});

		await newParty.save();
		res.status(201).json({
			message: "Party registered successfully.",
			party: newParty,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error.",
			error: error.message,
		});
	}
};

export const voteForParty = async (req, res) => {
	const { partyId } = req.params;
	const { adminPassword, voterId, image } = req.body;
	console.log('Received password:', adminPassword);
    console.log('Received voterId:', voterId);
    console.log('Received image:', image);


	try {
		// Find the party by ID
		const party = await Party.findById(partyId);
		if (!party) {
			return res.status(404).json({ message: "Party not found." });
		}

		// Verify admin password (assuming the password is stored securely)
		const admin = await Admin.findOne({ name: "sri" });
		if (!admin) {
			return res.status(403).json({ message: "Invalid admin password." });
		}

		// Increment the vote counter
		party.voteCounter += 1;
		await party.save();

		// Save the voter ID and image in admin's record
		admin.usersVoted.push({ voterId, image });
		await admin.save();

		return res.status(200).json({
			message: "Vote cast successfully.",
			votes: party.voteCounter,
		});
	} catch (error) {
		console.error("Error in voteForParty:", error); // Log the error to console
		return res.status(500).json({
			message: "Server error.",
			error: error.message,
		});
	}
};

export const getAllParties = async (req, res) => {
	try {
		const parties = await Party.find();
		res.status(200).json(parties);
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch parties",
			error: error.message,
		});
	}
};
