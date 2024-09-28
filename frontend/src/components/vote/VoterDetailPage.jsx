import React from 'react';

const VoterDetailPage = () => {
    // Sample user data
    const userDetails = {
        name: "John Doe",
        age: 28,
        address: "123 Main Street, Cityville",
        voterId: "VOTER123456",
    };

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
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Actions</h2>
                <div className="flex justify-around">
                    <button className="bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-[#00315b] transition duration-200">
                        Update Details
                    </button>
                    <button className="bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-[#00315b] transition duration-200">
                        View Voting History
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VoterDetailPage;
