import React from 'react';
import map from '../../images/map.png';

const ElectionInfo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-6 bg-gray-50 min-h-screen">
            {/* Left Side - India Map */}
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    {/* Visit Our State CEO’s Website to Get State Specific Information & Updates */}
                </h2>
                <img
                    src={map}
                    alt="India Map"
                    className="w-full h-auto object-contain "
                />

            </div>

            {/* Right Side - Election Information */}
            <div className="md:w-1/2 bg-blue-900 text-white p-2 rounded-lg">
                {/* Current Elections */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2 mb-4">
                        Current Elections
                    </h3>
                    <div className="flex flex-col space-y-4">
                        <button className="bg-blue-200 text-blue-900 py-2 px-4 rounded-lg">
                            Jammu & Kashmir
                        </button>
                        <button className="bg-yellow-200 text-yellow-700 py-2 px-4 rounded-lg">
                            Haryana
                        </button>
                    </div>
                </div>

                {/* Previous Elections */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2 mb-4">
                        Previous Elections
                    </h3>
                    <div className="flex flex-col space-y-4">
                        <button className="bg-purple-200 text-purple-700 py-2 px-4 rounded-lg">
                            General Elections to Lok Sabha 2024
                        </button>
                        <button className="bg-green-200 text-green-700 py-2 px-4 rounded-lg">
                            Andhra Pradesh
                        </button>
                        <button className="bg-teal-200 text-teal-700 py-2 px-4 rounded-lg">
                            Arunachal Pradesh
                        </button>
                        <button className="bg-pink-200 text-pink-700 py-2 px-4 rounded-lg">
                            Sikkim
                        </button>
                        <button className="bg-blue-200 text-blue-900 py-2 px-4 rounded-lg">
                            Bye Elections
                        </button>
                    </div>
                </div>

                {/* Past Elections */}
                <div>
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2 mb-4">
                        Past Elections
                    </h3>
                    <div className="flex flex-col space-y-4">
                        <button className="bg-yellow-200 text-yellow-700 py-2 px-4 rounded-lg">
                            Presidential Elections
                        </button>
                        <button className="bg-teal-200 text-teal-700 py-2 px-4 rounded-lg">
                            Vice-Presidential Elections
                        </button>
                        <button className="bg-purple-200 text-purple-700 py-2 px-4 rounded-lg">
                            Lok-Sabha Elections
                        </button>
                        <button className="bg-blue-200 text-blue-900 py-2 px-4 rounded-lg">
                            Bye Elections
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionInfo;
