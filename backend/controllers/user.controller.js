import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from 'fs';
import path from 'path';

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        // Generate access token and refresh token
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Save the refresh token in the database
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


// Path to your voterId.json file
const voterDataPath = path.join(__dirname, 'voterId.json');

const loginUser = asyncHandler(async (req, res) => {
    const { voterId } = req.body;

    if (!voterId) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Read and parse the JSON data from voterId.json
    let voterData;
    try {
        const data = fs.readFileSync(voterDataPath, 'utf-8');
        voterData = JSON.parse(data);
    } catch (err) {
        return res.status(500).json({ message: "Error reading voter data file" });
    }

    // Find the voter in the JSON data
    const voter = voterData.find(voter => voter.VoterId === voterId);

    if (!voter) {
        return res.status(400).json({
            message: "VoterId not verified. Please use a valid participant VoterId.",
        });
    }

    // Check if the voter already exists in the database
    let user = await User.findOne({ voterId: voterId });

    if (!user) {
        // If the user doesn't exist, create a new user with the voter data
        user = new User({
            name: voter.name,
            gender: voter.gender,
            fathers_name: voter.fathers_name || voter.husbands_name,
            age: voter.age,
            voterId: voter.VoterId,
            // Add other fields if necessary
        });

        await user.save();
    }

    // Generate access token and refresh token
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    // Remove sensitive fields
    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    const options = {
        httpOnly: true,
        secure: true,
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


const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req?.user?._id,
        {
            $unset: {
                refreshToken: 1,
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("refreshToken", options)
        .clearCookie("accessToken", options)
        .json({
            message: "User logged out successfully",
        });
});

export { registerUser, loginUser, logoutUser };
