import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		leader: {
			type: String,
			required: true,
		},
		voteCounter: {
			type: Number,
			default: 0, // Initialize vote counter to 0
		},
	},
	{
		timestamps: true,
	}
);

const Party = mongoose.model("Party", partySchema);

export default Party;
