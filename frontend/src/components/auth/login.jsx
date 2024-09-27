import axios from 'axios'; // Import axios
import React, { useState } from 'react';

const Login = () => {
    const [voterId, setVoterId] = useState("");

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
            // Make the API call
            const response = await axios.post('http://localhost:8000/api/auth/login', { voterId });
            console.log("Response:", response.data);

            console.log(response.data)

            localStorage.setItem('user', JSON.stringify(response.data));

            // Proceed to the OTP verification route (if successful)
            // Here you can redirect or store data based on the response
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
            >
                <h2 className="text-center text-2xl mb-6 font-semibold">Login</h2>

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

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Verify
                </button>
            </form>
        </div>
    );
};

export default Login;
