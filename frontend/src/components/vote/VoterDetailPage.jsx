import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const VoterDetailPage = () => {
    // State to hold user details from localStorage
    const [userDetails, setUserDetails] = useState(null);

    // Fetch user details from localStorage when the component mounts
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserDetails({
                name: storedUser.user.fullName,
                age: storedUser.user.age || 'N/A', // Assuming there's no age field in stored data
                address: storedUser.user.location[0]?.city || 'Unknown Address',
                voterId: storedUser.user.voterId,
            });
        }
    }, []);

    if (!userDetails) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#ace8fe] to-[#004274] p-8">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Voter Detail Page</h1>

            {/* User Details Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">User Details</h2>
                <p className="text-lg mb-2"><strong>Name:</strong> {userDetails.name}</p>
                <p className="text-lg mb-2"><strong>Age:</strong> {userDetails.age}</p>
                <p className="text-lg mb-2"><strong>Address:</strong> {userDetails.address}</p>
                <p className="text-lg mb-2"><strong>Voter ID:</strong> {userDetails.voterId}</p>
            </div>

            {/* Actions Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Features</h2>
                <div className="flex justify-around">
                    <NavLink to={"/location"} className="bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-[#00315b] transition duration-200">
                        Find your Polling Station
                    </NavLink>
                    <NavLink to={"/Vote"} className="bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-[#00315b] transition duration-200">
                        Vote
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default VoterDetailPage;
