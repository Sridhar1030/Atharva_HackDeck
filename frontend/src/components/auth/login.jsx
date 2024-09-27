import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing

const Login = () => {
    const [voterId, setVoterId] = useState("");
    const [maskedPhoneNumber, setMaskedPhoneNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
    const navigate = useNavigate(); // For route navigation

    const handleChange = (e) => {
        setVoterId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (voterId === "") {
            alert('Voter ID is required');
            return;
        }

        try {
            // Make the API call to submit the voter ID and get the masked phone number
            const response = await axios.post('http://localhost:8000/api/auth/login', { voterId });
            console.log("Response:", response.data);

            // Assuming response contains a phone number
            const phoneNumber = response.data.user.phoneNumber;
            const masked = `*******${phoneNumber.slice(-2)}`; // Mask all but the last 2 digits

            setMaskedPhoneNumber(masked);

            // Set OTP sent to true to show the confirmation message and the send OTP button
            setOtpSent(true);

            localStorage.setItem('user', JSON.stringify(response.data)); // Store user data

        } catch (error) {
            console.error("Error logging in:", error);
            alert('Login failed, please try again.');
        }
    };

    const handleSendOtp = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("Phone number:", user.user.phoneNumber);
        try {

            const response = await axios.post('http://localhost:8000/api/otp/send-otp', { phoneNumber: user.user.phoneNumber });
            console.log("Response:", response.data);
            
            navigate('/otpverification'); // Assuming /verify-otp is your OTP verification route
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert('OTP sending failed, please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
            >
                <h2 className="text-center text-2xl mb-6 font-semibold">Login</h2>

                {!otpSent ? (
                    <>
                        {/* Voter ID input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="voterId">
                                Voter ID
                            </label>
                            <input
                                type="text"
                                id="voterId"
                                name="voterId"
                                value={voterId}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        {/* Verify button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Verify
                        </button>
                    </>
                ) : (
                    <>
                        {/* Confirmation message with masked phone number */}
                        <p className="text-center text-lg mb-4">
                            Sending OTP to phone number: <strong>{maskedPhoneNumber}</strong>
                        </p>

                        {/* Send OTP button */}
                        <button
                            onClick={handleSendOtp}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send OTP
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default Login;
