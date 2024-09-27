import React, { useState } from 'react';

const CurrentIssuesPage = () => {
    const [activeTab, setActiveTab] = useState('current');

    const currentIssues = [
        {
            title: "General election to Legislative Assembly of Maharashtra, 2024 - Letter to Chief Secretary and DGP, Government of Maharashtra to explain the circumstances and to immediately furnish compliance report regarding transfer and posting of officers.",
            date: "Friday 27 Sep 2024, 4:32 PM",
        },
        {
            title: "Voter turnout of 57.31 % recorded in Phase-2 of J&K Assembly Elections",
            date: "Friday 27 Sep 2024, 12:58 PM",
        },
        {
            title: "Voter Turnout – 57.03% as of 11:45 PM for Phase-2 of J&K Assembly elections",
            date: "Wednesday 25 Sep 2024, 11:48 PM",
        },
        {
            title: "Jammu and Kashmir votes amidst a tranquil and festive atmosphere in Phase 2",
            date: "Wednesday 25 Sep 2024, 7:21 PM",
        },
        {
            title: "EC reviews poll preparedness for forthcoming assembly elections in Jharkhand",
            date: "Tuesday 24 Sep 2024, 2:31 PM",
        },
    ];

    const pressReleases = [
        {
            title: "Press Release on Election Preparations",
            date: "Thursday 26 Sep 2024, 10:00 AM",
        },
        {
            title: "New Guidelines for Voter Registration",
            date: "Wednesday 25 Sep 2024, 9:00 AM",
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-4xl mx-auto bg-purple-100 p-6 rounded-lg shadow-lg mb-4">
            <div className="flex flex-wrap justify-between mb-4">
                <h1 className="text-2xl font-bold w-full text-center md:text-left">Current Issues</h1>
                <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                    <button
                        className={`text-blue-600 hover:underline ${activeTab === 'current' ? 'font-bold' : 'text-gray-600'}`}
                        onClick={() => handleTabClick('current')}
                    >
                        Current Issues
                    </button>
                    <button
                        className={`text-blue-600 hover:underline ${activeTab === 'press' ? 'font-bold' : 'text-gray-600'}`}
                        onClick={() => handleTabClick('press')}
                    >
                        Press Releases
                    </button>
                    <button
                        className={`text-blue-600 hover:underline ${activeTab === 'instructions' ? 'font-bold' : 'text-gray-600'}`}
                        onClick={() => handleTabClick('instructions')}
                    >
                        Instructions
                    </button>
                    <button
                        className={`text-blue-600 hover:underline ${activeTab === 'tender' ? 'font-bold' : 'text-gray-600'}`}
                        onClick={() => handleTabClick('tender')}
                    >
                        Tender & Vacancies
                    </button>
                    <button
                        className={`text-blue-600 hover:underline ${activeTab === 'stories' ? 'font-bold' : 'text-gray-600'}`}
                        onClick={() => handleTabClick('stories')}
                    >
                        Election Stories
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {(activeTab === 'current' ? currentIssues : pressReleases).map((issue, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center">
                        <span className="text-yellow-600 text-lg mr-3">✔️</span>
                        <div>
                            <p className="font-semibold">{issue.title}</p>
                            <p className="text-gray-500 text-sm">{issue.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
                    View More ➔
                </button>
            </div>
        </div>
    );
};

export default CurrentIssuesPage;
