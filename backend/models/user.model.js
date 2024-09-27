import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userShema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            index: true,
        },
        gender: {
            type: String,
            trim: true,
        },
        fathers_name:{
            type: String,
            trim: true,
        },
        phoneNumber:{
            type: String,
            trim: true,
        },
        refreshToken: {
            type: String,
        },
        voterId:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        hasVoted: {
            type: Boolean,
            default: false,
        },
        otp:{
            type: String,
            trim: true,
        }
    },

    {
        timestamps: true,
    }
);



userShema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            username: this.username,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

userShema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const User = mongoose.model("User", userShema);