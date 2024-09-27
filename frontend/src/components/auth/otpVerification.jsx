import React, { useState } from 'react';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your OTP verification logic here
        console.log('OTP Submitted:', otp);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                        Enter the OTP sent to your mobile
                    </label>
                    <input
                        type="text"
                        id="otp"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength="6"
                        pattern="\d{6}"
                        required
                        placeholder="Enter 6-digit OTP"
                        className="mt-2 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Verify OTP
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Didn’t receive the OTP? <a href="#" className="text-blue-500">Resend OTP</a>
                </p>
            </div>
        </div>
    );
};

export default OTPVerification;
