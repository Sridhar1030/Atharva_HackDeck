import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [countdown, setCountdown] = useState(0); // For managing the countdown
    const navigate = useNavigate();

    // useEffect to handle countdown logic
    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = JSON.parse(localStorage.getItem('user'));

        const backendUrl = process.env.REACT_APP_BACKEND_URL;

    
        try {
            const response = await axios.post(`${backendUrl}/api/otp/verify-otp`, {
                voterId: user.user?.voterId,
                otp
            });
            console.log("Response:", response?.data);
    
            // Show success toast message
            toast.success("OTP verified successfully!");

            // Redirect on successful verification
            setTimeout(() => {
                navigate("/voterdetail");  // Redirect after a short delay
            }, 1000);  // 2 second delay
        } catch (error) {
            console.error("Error verifying OTP:", error.response?.data, error);

            // Show error toast message
            toast.error("OTP verification failed. Please try again.");
        }
    };

    const backendUrl = process.env.REACT_APP_BACKEND_URL;


    const handleSendOtp = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("Phone number:", user.user.phoneNumber);
        try {

            const response = await axios.post(`${backendUrl}/api/otp/send-otp`, { phoneNumber: "8421786901" });
            console.log("Response:", response.data);

            // Start 60-second countdown after sending the OTP
            setCountdown(60);

            // Show success toast message
            toast.success("OTP sent successfully!");
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("OTP sending failed, please try again.");
        }
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
                    Didn’t receive the OTP? 
                <br />
                    <button 
                        onClick={handleSendOtp} 
                        className={`text-blue-500 font-semibold mt-2 ${countdown > 0 
                            ? 'opacity-50 cursor-not-allowed bg-gray-300 px-4 py-2 rounded-lg' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300'}`}
                        disabled={countdown > 0}
                    >
                        {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
                    </button>
                </p>

            </div>

            {/* Toast container to show toast messages */}
            <ToastContainer />
        </div>
    );
};

export default OTPVerification;
