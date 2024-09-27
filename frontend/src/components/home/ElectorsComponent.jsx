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
                <img src="path_to_first_image.jpg" alt="Voter" className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md mb-4 sm:mb-0" />
                <img src="path_to_second_image.jpg" alt="Polling Station" className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md mb-4 sm:mb-0" />
                <img src="path_to_third_image.jpg" alt="Voting Process" className="w-full sm:w-1/3 h-auto object-cover rounded-lg shadow-md" />
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
        </div>
    );
};

export default ElectorsComponent;
