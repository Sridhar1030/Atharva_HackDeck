import Party from "../models/party.models.js";

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

// Vote for a party
export const voteForParty = async (req, res) => {
	const { partyId } = req.params;

	try {
		const party = await Party.findById(partyId);

		if (!party) {
			return res.status(404).json({ message: "Party not found." });
		}

		// Increment the voteCounter by 1
		party.voteCounter += 1;
		await party.save();

		res.status(200).json({
			message: "Vote cast successfully.",
			votes: party.voteCounter,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error.",
			error: error.message,
		});
	}
};
