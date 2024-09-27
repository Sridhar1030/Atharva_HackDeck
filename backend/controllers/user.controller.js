import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

const voterDataPath = path.join(__dirname, '../VoterId.json');

const loginUser = asyncHandler(async (req, res) => {
    const { voterId } = req.body;

    if (!voterId) {
        return res.status(400).json({ message: "All fields are required" });
    }

    let voterData;
    try {
        const data = fs.readFileSync(voterDataPath, 'utf-8');
        voterData = JSON.parse(data);
    } catch (err) {
        return res.status(500).json({ message: "Error reading voter data file" });
    }

    const voter = voterData.find(voter => voter.VoterId === voterId);

    console.log(voter.name)

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
        });

        await user.save();
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    console.log("userdata"  , userData)

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
            user,
            accessToken,
        });
});


export {  loginUser };
