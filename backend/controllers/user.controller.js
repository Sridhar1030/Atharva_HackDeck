import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { User } from "../models/user.model.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error(
            500,
            "Something went wrong while generating referesh and access token"
        );
    }
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const voterDataPath = path.join(__dirname, "../VoterId.json");

const loginUser = asyncHandler(async (req, res) => {
    const { voterId } = req.body;

    if (!voterId) {
        return res.status(400).json({ message: "All fields are required" });
    }

    let voterData;
    try {
        const data = fs.readFileSync(voterDataPath, "utf-8");
        voterData = JSON.parse(data);
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Error reading voter data file" });
    }

    const voter = voterData.find((voter) => voter.VoterId === voterId);

    if (!voter) {
        return res.status(400).json({
            message: "VoterId not verified. Please use a valid participant VoterId.",
        });
    }

    let user = await User.findOne({ voterId: voterId });

    if (!user) {
        user = new User({
            fullName: voter.name,
            gender: voter.gender,
            fathers_name: voter.fathers_name || voter.husbands_name,
            age: voter.age,
            voterId: voter.VoterId,
            phoneNumber: voter.phoneNumber,
            location: [
                {
                    city: voter.location.city,
                    latitude: voter.location.latitude,
                    longitude: voter.location.longitude,
                },
            ],
        });

        await user.save();
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;


    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    };

    return res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json({
            message: "User logged in successfully",
            user: userData,
            accessToken,
        });
});


const getUserLocation = asyncHandler(async (req, res) => {
    const { _id } = req.params; 
    const user = await User.findById(_id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
        message: "User location fetched successfully",
        location: user.location,
    }); 
});


export { loginUser , getUserLocation};
