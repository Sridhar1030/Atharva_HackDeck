import React from "react";

const ElectorsComponent = () => {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="text-center py-8 px-4">
                <h1 className="text-4xl font-bold mb-2">Electors</h1>
                <p className="text-xl text-gray-600">Home / Electors</p>
            </div>

            {/* Images Section */}
            <div className="flex flex-wrap justify-center space-x-4 mb-8">
                <img
                    src="https://images.unsplash.com/photo-1526374106689-3e940e3b6f6e"
                    alt="Disabled Voter"
                    className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md mb-4 sm:mb-0"
                />
                <img
                    src="https://images.unsplash.com/photo-1516109112080-07f26ec38b55"
                    alt="Accessible Voting"
                    className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md mb-4 sm:mb-0"
                />
                <img
                    src="https://images.unsplash.com/photo-1607632569207-8d6d69f84836"
                    alt="Voting Process for Disabled"
                    className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Voter Information Section */}
            <div className="bg-pink-200 p-8 rounded-lg mx-4 md:mx-16">
                <h2 className="text-3xl font-semibold mb-4">Elector Information</h2>
                <ol className="list-decimal pl-6 space-y-2">
                    <li className="bg-blue-100 p-2 rounded">Register in Electoral Roll</li>
                    <li className="bg-blue-100 p-2 rounded">Track Application Status</li>
                    <li className="bg-blue-100 p-2 rounded">Download Voter ID (E-EPIC)</li>
                    <li className="bg-blue-100 p-2 rounded">Update your Details in Electoral Roll</li>
                    <li className="bg-blue-100 p-2 rounded">Saksham App</li>
                </ol>
            </div>

            {/* Accessible Voting Information Section */}
            <div className="bg-blue-200 p-8 rounded-lg mx-4 md:mx-16 mt-8">
                <h2 className="text-3xl font-semibold mb-4">Accessible Voting Information</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Elections are designed to be inclusive for all voters, including those with disabilities. Here are some important provisions available:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li className="bg-blue-100 p-2 rounded">Accessible polling stations with ramps and elevators.</li>
                    <li className="bg-blue-100 p-2 rounded">Voting machines that accommodate visual and physical disabilities.</li>
                    <li className="bg-blue-100 p-2 rounded">Assistance from election staff is available at polling places.</li>
                    <li className="bg-blue-100 p-2 rounded">Option to vote by mail or absentee ballot for those unable to vote in person.</li>
                </ul>
            </div>
        </div>
    );
};

export default ElectorsComponent;
