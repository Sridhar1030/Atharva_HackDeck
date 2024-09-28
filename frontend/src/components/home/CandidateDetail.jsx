
import { useParams } from 'react-router-dom';
import { candidatesData } from './CandidateSearch'; // Make sure this path is correct

const CandidateDetail = () => {
    const { name } = useParams();
    const formattedName = name.replace(/-/g, ' ');

    const candidate = candidatesData.find(c =>
        c.name.toLowerCase() === formattedName.toLowerCase()
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            {candidate ? (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">{candidate.name}'s Details</h1>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            {/* Candidate Image */}
                            <div className="w-28 h-28 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-300">
                                {candidate.candidate_image ? (
                                    <img
                                        src={candidate.candidate_image}
                                        alt={candidate.name}
                                        className="w-full h-full object-cover text-sm" // Change object-fit to object-cover for better fitting
                                    />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-full h-full"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                    </svg>
                                )}
                            </div>

                            {/* Party Logo */}
                            <div className="w-28 h-28 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src={candidate.party_logo}
                                    alt={`${candidate.party_affiliation} Logo`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <p className="text-sm md:text-base"><strong>Name:</strong> {candidate.name}</p>
                        <p className="text-sm md:text-base"><strong>State:</strong> {candidate.state}</p>
                        <p className="text-sm md:text-base"><strong>City:</strong> {candidate.city}</p>
                        <p className="text-sm md:text-base"><strong>Suburban:</strong> {candidate.suburban}</p>
                        <p className="text-sm md:text-base"><strong>Constituency:</strong> {candidate.constituency}</p>
                        <p className="text-sm md:text-base"><strong>Party Affiliation:</strong> {candidate.party_affiliation}</p>
                        <p className="text-sm md:text-base"><strong>Positions Held:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {candidate.positions_held.map((position, index) => (
                                <li key={index} className="text-sm md:text-base">{position}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl text-red-500">Candidate not found.</p>
            )}
        </div>
    );
};

export default CandidateDetail;
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { candidatesData, candidatesDataHindi, candidatesDataMarathi } from './CandidateSearch';

// const CandidateDetail = () => {
//     const { name } = useParams();
//     const formattedName = name.replace(/-/g, ' ');
//     const [language, setLanguage] = useState('english');

//     // Try to find the candidate in the candidatesData
//     const candidate = candidatesData.find(c =>
//         c.name.toLowerCase() === formattedName.toLowerCase()
//     );

//     console.log("Formatted Name: ", formattedName);
//     console.log("Candidate Found: ", candidate);

//     const titleTranslation = {
//         english: `${candidate ? candidate.name : "Candidate"}'s Details`,
//         hindi: `${candidate ? candidate.name : "उम्मीदवार"} का विवरण`,
//         marathi: `${candidate ? candidate.name : "उमेदवार"} चा तपशील`
//     };

//     const descriptionTranslation = {
//         english: {
//             state: "State",
//             city: "City",
//             suburban: "Suburban",
//             constituency: "Constituency",
//             party_affiliation: "Party Affiliation",
//             positions_held: "Positions Held"
//         },
//         hindi: {
//             state: "राज्य",
//             city: "शहर",
//             suburban: "उपनगर",
//             constituency: "निर्वाचन क्षेत्र",
//             party_affiliation: "पार्टी संबद्धता",
//             positions_held: "पदों पर काबिज"
//         },
//         marathi: {
//             state: "राज्य",
//             city: "शहर",
//             suburban: "उपनगर",
//             constituency: "मतदारसंघ",
//             party_affiliation: "पक्ष संबद्धता",
//             positions_held: "धारण केलेली पदे"
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-4 md:p-6">
//             {candidate ? (
//                 <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
//                     {/* Language Selection */}
//                     <div className="mb-4 flex space-x-2">
//                         <button
//                             onClick={() => setLanguage('english')}
//                             className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring ${language === 'english' ? 'bg-[#00395d] text-[#ace8fe]' : 'bg-[#004274] text-[#ace8fe] hover:bg-[#00395d]'}`}
//                         >
//                             English
//                         </button>
//                         <button
//                             onClick={() => setLanguage('hindi')}
//                             className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring ${language === 'hindi' ? 'bg-[#00395d] text-[#ace8fe]' : 'bg-[#004274] text-[#ace8fe] hover:bg-[#00395d]'}`}
//                         >
//                             हिंदी
//                         </button>
//                         <button
//                             onClick={() => setLanguage('marathi')}
//                             className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring ${language === 'marathi' ? 'bg-[#00395d] text-[#ace8fe]' : 'bg-[#004274] text-[#ace8fe] hover:bg-[#00395d]'}`}
//                         >
//                             मराठी
//                         </button>
//                     </div>

//                     <div className="flex flex-col md:flex-row justify-between items-start">
//                         <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">{titleTranslation[language]}</h1>
//                         <div className="flex space-x-4 mt-4 md:mt-0">
//                             {/* Candidate Image */}
//                             <div className="w-28 h-28 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-300">
//                                 <img
//                                     src={candidate.candidate_image}
//                                     alt={candidate.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             {/* Party Logo */}
//                             <div className="w-28 h-28 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-300">
//                                 <img
//                                     src={candidate.party_logo}
//                                     alt={`${candidate.party_affiliation} Logo`}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-6 space-y-2">
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].state}:</strong> {candidate.state}
//                         </p>
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].city}:</strong> {candidate.city}
//                         </p>
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].suburban}:</strong> {candidate.suburban}
//                         </p>
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].constituency}:</strong> {candidate.constituency}
//                         </p>
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].party_affiliation}:</strong> {candidate.party_affiliation}
//                         </p>
//                         <p className="text-sm md:text-base">
//                             <strong>{descriptionTranslation[language].positions_held}:</strong>
//                         </p>
//                         <ul className="list-disc list-inside ml-4 space-y-1">
//                             {candidate.positions_held.map((position, index) => (
//                                 <li key={index} className="text-sm md:text-base">{position}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-center text-xl text-red-500">Candidate not found.</p>
//             )}
//         </div>
//     );
// };

// export default CandidateDetail;
