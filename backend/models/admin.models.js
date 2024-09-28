import { Schema, model } from "mongoose";

const userVotedSchema = new Schema({
	image: {
		type: String,
		required: true,
	},
	voterId: {
		type: String,
		required: true,
	},
});

const adminSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		usersVoted: {
			type: [userVotedSchema],
			default: [],
		},
		location: {
			type: String,
			required: true,
		},
		about: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	}
);

const Admin = model("Admin", adminSchema);

export default Admin;
