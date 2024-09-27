// import { useParams } from 'react-router-dom';
// import { candidatesData } from './CandidateSearch'; // Make sure this path is correct

// const CandidateDetail = () => {
//     const { name } = useParams();
//     const formattedName = name.replace(/-/g, ' ');

//     const candidate = candidatesData.find(c =>
//         c.name.toLowerCase() === formattedName.toLowerCase()
//     );

//     return (
//         <div className="min-h-screen bg-gray-50 p-6">
//             {candidate ? (
//                 <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//                     <h1 className="text-2xl font-bold mb-4">Candidate Details</h1>
//                     <p><strong>Name:</strong> {candidate.name}</p>
//                     <p><strong>State:</strong> {candidate.state}</p>
//                     <p><strong>City:</strong> {candidate.city}</p>
//                     <p><strong>Suburban:</strong> {candidate.suburban}</p>
//                     <p><strong>Constituency</strong> {candidate.constituency}</p>
//                     <p><strong>Party affiliation</strong> {candidate.party_affiliation}</p>

//                 </div>
//             ) : (
//                 <p>Candidate not found.</p>
//             )}
//         </div>
//     );
// };

// export default CandidateDetail;

import { useParams } from 'react-router-dom';
import { candidatesData } from './CandidateSearch'; // Make sure this path is correct

const CandidateDetail = () => {
    const { name } = useParams();
    const formattedName = name.replace(/-/g, ' ');

    const candidate = candidatesData.find(c =>
        c.name.toLowerCase() === formattedName.toLowerCase()
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {candidate ? (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-bold mb-4">{candidate.name}'s Details</h1>
                        <div className="flex space-x-4">
                            {/* Candidate Image */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src={candidate.candidate_image}
                                    alt={candidate.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Party Logo */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src={candidate.party_logo}
                                    alt={`${candidate.party_affiliation} Logo`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p><strong>Name:</strong> {candidate.name}</p>
                        <p><strong>State:</strong> {candidate.state}</p>
                        <p><strong>City:</strong> {candidate.city}</p>
                        <p><strong>Suburban:</strong> {candidate.suburban}</p>
                        <p><strong>Constituency:</strong> {candidate.constituency}</p>
                        <p><strong>Party Affiliation:</strong> {candidate.party_affiliation}</p>
                        <p><strong>Positions Held:</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            {candidate.positions_held.map((position, index) => (
                                <li key={index}>{position}</li>
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
