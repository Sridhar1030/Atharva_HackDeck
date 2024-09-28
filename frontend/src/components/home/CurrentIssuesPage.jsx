// import React, { useState } from 'react';

// const CurrentIssuesPage = () => {
//     const [activeTab, setActiveTab] = useState('current'); // Initialize with only one value, like 'current'

//     const currentIssues = [
//         {
//             title: "General election to Legislative Assembly of Maharashtra, 2024 - Letter to Chief Secretary and DGP, Government of Maharashtra to explain the circumstances and to immediately furnish compliance report regarding transfer and posting of officers.",
//             date: "Friday 27 Sep 2024, 4:32 PM",
//         },
//         {
//             title: "Voter turnout of 57.31 % recorded in Phase-2 of J&K Assembly Elections",
//             date: "Friday 27 Sep 2024, 12:58 PM",
//         },
//         {
//             title: "Voter Turnout – 57.03% as of 11:45 PM for Phase-2 of J&K Assembly elections",
//             date: "Wednesday 25 Sep 2024, 11:48 PM",
//         },
//         {
//             title: "Jammu and Kashmir votes amidst a tranquil and festive atmosphere in Phase 2",
//             date: "Wednesday 25 Sep 2024, 7:21 PM",
//         },
//         {
//             title: "EC reviews poll preparedness for forthcoming assembly elections in Jharkhand",
//             date: "Tuesday 24 Sep 2024, 2:31 PM",
//         },
//     ];

//     const pressReleases = [
//         {
//             title: "Election Commission of India issues guidelines for postal ballots for senior citizens and persons with disabilities.",
//             date: "Monday 23 Sep 2024, 11:00 AM",
//         },
//         {
//             title: "Final phase of Maharashtra Assembly elections to be held on 30th September, 2024.",
//             date: "Saturday 21 Sep 2024, 3:45 PM",
//         },
//         {
//             title: "ECI directs strict monitoring of social media during election periods to curb misinformation.",
//             date: "Friday 20 Sep 2024, 5:15 PM",
//         },
//         {
//             title: "ECI launches Voter Awareness App ahead of Maharashtra Legislative Assembly Elections.",
//             date: "Wednesday 18 Sep 2024, 10:30 AM",
//         },
//         {
//             title: "Model Code of Conduct comes into effect in Jharkhand ahead of upcoming Assembly Elections.",
//             date: "Tuesday 17 Sep 2024, 4:10 PM",
//         },
//     ];
//     const instructions = [
//         {
//             title: "Instruction on maintaining COVID-19 protocols during the election process for Maharashtra Assembly Elections 2024.",
//             date: "Monday 23 Sep 2024, 9:00 AM",
//         },
//         {
//             title: "Guidelines for ensuring free and fair elections in sensitive polling areas.",
//             date: "Saturday 21 Sep 2024, 2:30 PM",
//         },
//         {
//             title: "Mandatory deployment of accessible voting machines for voters with disabilities.",
//             date: "Thursday 19 Sep 2024, 11:15 AM",
//         },
//         {
//             title: "Instructions regarding the use of electronic voting machines (EVMs) and Voter Verifiable Paper Audit Trail (VVPAT).",
//             date: "Wednesday 18 Sep 2024, 5:00 PM",
//         },
//         {
//             title: "Special guidelines for the security of polling stations during Phase 3 of Jammu & Kashmir Assembly Elections.",
//             date: "Tuesday 17 Sep 2024, 6:30 PM",
//         },
//     ];
//     const tenderVacancies = [
//         {
//             title: "Tender for supply and installation of EVMs for the Maharashtra Assembly Elections 2024.",
//             date: "Friday 20 Sep 2024, 4:00 PM",
//         },
//         {
//             title: "Invitation for bids for the design and printing of voter education materials for Jharkhand Assembly Elections 2024.",
//             date: "Wednesday 18 Sep 2024, 10:00 AM",
//         },
//         {
//             title: "Notice for procurement of security services for polling stations in Jammu & Kashmir.",
//             date: "Monday 16 Sep 2024, 2:45 PM",
//         },
//         {
//             title: "Tender for hiring vehicles for election duty in Jharkhand and Maharashtra.",
//             date: "Saturday 14 Sep 2024, 3:15 PM",
//         },
//         {
//             title: "Vacancy for data entry operators to assist in voter registration and management.",
//             date: "Thursday 12 Sep 2024, 11:30 AM",
//         },
//     ];
//     const stories = [
//         {
//             title: "A record voter turnout in Phase 2 of J&K Assembly elections shows growing trust in the democratic process.",
//             date: "Thursday 26 Sep 2024, 1:00 PM",
//         },
//         {
//             title: "How technology is revolutionizing elections: The role of EVMs and VVPAT in ensuring transparency.",
//             date: "Wednesday 25 Sep 2024, 10:15 AM",
//         },
//         {
//             title: "Maharashtra gears up for elections as voter awareness campaigns reach millions.",
//             date: "Tuesday 24 Sep 2024, 6:00 PM",
//         },
//         {
//             title: "Voices from rural Jharkhand: Women voters express their hopes for change.",
//             date: "Monday 23 Sep 2024, 2:45 PM",
//         },
//         {
//             title: "A day in the life of a polling officer: Challenges and responsibilities in ensuring a fair election.",
//             date: "Saturday 21 Sep 2024, 11:30 AM",
//         },
//     ];


//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     // Display data based on active tab
//     const renderTabContent = () => {
//         switch (activeTab) {
//             case 'press':
//                 return pressReleases;
//             case 'instructions':
//                 return instructions;
//             case 'tender':
//                 return tenderVacancies;
//             case 'stories':
//                 return stories;
//             case 'current':
//             default:
//                 return currentIssues;
//         }
//     };

//     return (
//         <div className=''>
//             <div className="max-w-4xl mx-auto bg-purple-100 p-6 rounded-lg shadow-lg mb-4">
//                 <div className="flex flex-wrap justify-between mb-4">
//                     <h1 className="text-2xl font-bold w-full text-center md:text-left">Current Issues</h1>
//                     <div className="flex flex-wrap justify-center md:justify-start space-x-4">
//                         <button
//                             className={`text-blue-600 hover:underline ${activeTab === 'current' ? 'font-bold' : 'text-gray-600'}`}
//                             onClick={() => handleTabClick('current')}
//                         >
//                             Current Issues
//                         </button>
//                         <button
//                             className={`text-blue-600 hover:underline ${activeTab === 'press' ? 'font-bold' : 'text-gray-600'}`}
//                             onClick={() => handleTabClick('press')}
//                         >
//                             Press Releases
//                         </button>
//                         <button
//                             className={`text-blue-600 hover:underline ${activeTab === 'instructions' ? 'font-bold' : 'text-gray-600'}`}
//                             onClick={() => handleTabClick('instructions')}
//                         >
//                             Instructions
//                         </button>
//                         <button
//                             className={`text-blue-600 hover:underline ${activeTab === 'tender' ? 'font-bold' : 'text-gray-600'}`}
//                             onClick={() => handleTabClick('tender')}
//                         >
//                             Tender & Vacancies
//                         </button>
//                         <button
//                             className={`text-blue-600 hover:underline ${activeTab === 'stories' ? 'font-bold' : 'text-gray-600'}`}
//                             onClick={() => handleTabClick('stories')}
//                         >
//                             Election Stories
//                         </button>
//                     </div>
//                 </div>

//                 <div className="space-y-4">
//                     {renderTabContent().map((issue, index) => (
//                         <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center">
//                             <span className="text-yellow-600 text-lg mr-3">✔️</span>
//                             <div>
//                                 <p className="font-semibold">{issue.title}</p>
//                                 <p className="text-gray-500 text-sm">{issue.date}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CurrentIssuesPage;


import React, { useState } from 'react';

const CurrentIssuesPage = () => {
    const [activeTab, setActiveTab] = useState('current'); // Initial tab

    // Mock Data
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
            title: "Election Commission of India issues guidelines for postal ballots for senior citizens and persons with disabilities.",
            date: "Monday 23 Sep 2024, 11:00 AM",
        },
        {
            title: "Final phase of Maharashtra Assembly elections to be held on 30th September, 2024.",
            date: "Saturday 21 Sep 2024, 3:45 PM",
        },
        {
            title: "ECI directs strict monitoring of social media during election periods to curb misinformation.",
            date: "Friday 20 Sep 2024, 5:15 PM",
        },
        {
            title: "ECI launches Voter Awareness App ahead of Maharashtra Legislative Assembly Elections.",
            date: "Wednesday 18 Sep 2024, 10:30 AM",
        },
        {
            title: "Model Code of Conduct comes into effect in Jharkhand ahead of upcoming Assembly Elections.",
            date: "Tuesday 17 Sep 2024, 4:10 PM",
        },];

    const instructions = [
        {
            title: "Instruction on maintaining COVID-19 protocols during the election process for Maharashtra Assembly Elections 2024.",
            date: "Monday 23 Sep 2024, 9:00 AM",
        },
        {
            title: "Guidelines for ensuring free and fair elections in sensitive polling areas.",
            date: "Saturday 21 Sep 2024, 2:30 PM",
        },
        {
            title: "Mandatory deployment of accessible voting machines for voters with disabilities.",
            date: "Thursday 19 Sep 2024, 11:15 AM",
        },
        {
            title: "Instructions regarding the use of electronic voting machines (EVMs) and Voter Verifiable Paper Audit Trail (VVPAT).",
            date: "Wednesday 18 Sep 2024, 5:00 PM",
        },
        {
            title: "Special guidelines for the security of polling stations during Phase 3 of Jammu & Kashmir Assembly Elections.",
            date: "Tuesday 17 Sep 2024, 6:30 PM",
        },
    ]

    const tenderVacancies = [
        {
            title: "Tender for supply and installation of EVMs for the Maharashtra Assembly Elections 2024.",
            date: "Friday 20 Sep 2024, 4:00 PM",
        },
        {
            title: "Invitation for bids for the design and printing of voter education materials for Jharkhand Assembly Elections 2024.",
            date: "Wednesday 18 Sep 2024, 10:00 AM",
        },
        {
            title: "Notice for procurement of security services for polling stations in Jammu & Kashmir.",
            date: "Monday 16 Sep 2024, 2:45 PM",
        },
        {
            title: "Tender for hiring vehicles for election duty in Jharkhand and Maharashtra.",
            date: "Saturday 14 Sep 2024, 3:15 PM",
        },
        {
            title: "Vacancy for data entry operators to assist in voter registration and management.",
            date: "Thursday 12 Sep 2024, 11:30 AM",
        },
    ];

    const stories = [
        {
            title: "A record voter turnout in Phase 2 of J&K Assembly elections shows growing trust in the democratic process.",
            date: "Thursday 26 Sep 2024, 1:00 PM",
        },
        {
            title: "How technology is revolutionizing elections: The role of EVMs and VVPAT in ensuring transparency.",
            date: "Wednesday 25 Sep 2024, 10:15 AM",
        },
        {
            title: "Maharashtra gears up for elections as voter awareness campaigns reach millions.",
            date: "Tuesday 24 Sep 2024, 6:00 PM",
        },
        {
            title: "Voices from rural Jharkhand: Women voters express their hopes for change.",
            date: "Monday 23 Sep 2024, 2:45 PM",
        },
        {
            title: "A day in the life of a polling officer: Challenges and responsibilities in ensuring a fair election.",
            date: "Saturday 21 Sep 2024, 11:30 AM",
        },
    ];

    // Log the activeTab value to the console for debugging
    console.log('Active Tab:', activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab state
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'press':
                return pressReleases;
            case 'instructions':
                return instructions;
            case 'tender':
                return tenderVacancies;
            case 'stories':
                return stories;
            case 'current':
            default:
                return currentIssues;
        }
    };

    return (
        <div className=''>
            <div className="max-w-4xl mx-auto bg-purple-100 p-6 rounded-lg shadow-lg mb-4 mt-4">
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
                    {renderTabContent().map((item, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center">
                            <span className="text-yellow-600 text-lg mr-3">✔️</span>
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-gray-500 text-sm">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentIssuesPage;
