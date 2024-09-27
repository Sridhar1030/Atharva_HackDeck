// import React, { useState } from 'react';

// const candidatesData = [
//     { id: 1, name: 'John Doe', state: 'California', city: 'Los Angeles', suburban: 'Downtown' },
//     { id: 2, name: 'Jane Smith', state: 'California', city: 'San Francisco', suburban: 'South Bay' },
//     { id: 3, name: 'Samuel Green', state: 'Texas', city: 'Austin', suburban: 'East Austin' },
//     { id: 4, name: 'Emily White', state: 'Texas', city: 'Houston', suburban: 'Midtown' },
// ];

// const CandidateSearch = () => {
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [suburban, setSuburban] = useState('');
//     const [filteredCandidates, setFilteredCandidates] = useState([]);

//     const handleSearch = () => {
//         const filtered = candidatesData.filter(candidate =>
//             (state ? candidate.state === state : true) &&
//             (city ? candidate.city === city : true) &&
//             (suburban ? candidate.suburban === suburban : true)
//         );
//         setFilteredCandidates(filtered);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6">
//             <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Find Your Candidate</h1>

//                 <div className="flex flex-col md:flex-row gap-4 mb-6">
//                     <div className="flex-1">
//                         <label className="block text-gray-700">State</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={state}
//                             onChange={(e) => setState(e.target.value)}
//                         >
//                             <option value="">Select State</option>
//                             <option value="California">California</option>
//                             <option value="Texas">Texas</option>
//                         </select>
//                     </div>

//                     <div className="flex-1">
//                         <label className="block text-gray-700">City</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                         >
//                             <option value="">Select City</option>
//                             <option value="Los Angeles">Los Angeles</option>
//                             <option value="San Francisco">San Francisco</option>
//                             <option value="Austin">Austin</option>
//                             <option value="Houston">Houston</option>
//                         </select>
//                     </div>

//                     <div className="flex-1">
//                         <label className="block text-gray-700">Suburban</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={suburban}
//                             onChange={(e) => setSuburban(e.target.value)}
//                         >
//                             <option value="">Select Suburban</option>
//                             <option value="Downtown">Downtown</option>
//                             <option value="South Bay">South Bay</option>
//                             <option value="East Austin">East Austin</option>
//                             <option value="Midtown">Midtown</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="text-center">
//                     <button
//                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 {/* Display Candidates */}
//                 <div className="mt-6">
//                     {filteredCandidates.length > 0 ? (
//                         <div>
//                             <h2 className="text-lg font-bold mb-4">Candidates for the selected constituency:</h2>
//                             <ul className="space-y-4">
//                                 {filteredCandidates.map(candidate => (
//                                     <li key={candidate.id} className="bg-gray-100 p-4 rounded-lg shadow">
//                                         <p><strong>Name:</strong> {candidate.name}</p>
//                                         <p><strong>State:</strong> {candidate.state}</p>
//                                         <p><strong>City:</strong> {candidate.city}</p>
//                                         <p><strong>Suburban:</strong> {candidate.suburban}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ) : (
//                         <p className="text-gray-600 text-center">No candidates found for the selected filters.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CandidateSearch;
// CandidateSearch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const candidatesData = [


    {
        "name": "Yogesh Sagar",
        "age": 52,
        "constituency": "Charkop",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": [
            "Member of Maharashtra Legislative Assembly (MLA)",
            "Minister of State for Housing",
            "Minister of State for Urban Development"
        ],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Charkop",
        "id": 1,
        "candidate_image": "/images/yogesh_sagar.jpg",
        "party_logo": "/images/bjp_logo.png"
    },
    {
        "name": "Opposition Candidate - Charkop",
        "age": 48,
        "constituency": "Charkop",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": [
            "Opposition MLA Candidate"
        ],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Charkop",
        "id": 2,
        "candidate_image": "/images/opposition_candidate_charkop.jpg",
        "party_logo": "/images/shiv_sena_logo.png"
    },
    {
        "name": "Kshitij Thakur",
        "age": 39,
        "constituency": "Nallasopara",
        "party_affiliation": "Bahujan Vikas Aghadi (BVA)",
        "positions_held": [
            "Member of Maharashtra Legislative Assembly (MLA)"
        ],
        "state": "Maharashtra",
        "city": "Nallasopara",
        "suburban": "Nallasopara",
        "id": 3,
        "candidate_image": "/images/kshitij_thakur.jpg",
        "party_logo": "/images/bva_logo.png"
    },
    {
        "name": "Opposition Candidate - Nallasopara",
        "age": 42,
        "constituency": "Nallasopara",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": [
            "Opposition MLA Candidate"
        ],
        "state": "Maharashtra",
        "city": "Nallasopara",
        "suburban": "Nallasopara",
        "id": 4,
        "candidate_image": "/images/opposition_candidate_nallasopara.jpg",
        "party_logo": "/images/shiv_sena_logo.png"
    },
    {
        "name": "Rajendra Gavit",
        "age": 57,
        "constituency": "Virar",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": [
            "Member of Parliament (MP)"
        ],
        "state": "Maharashtra",
        "city": "Virar",
        "suburban": "Virar",
        "id": 5,
        "candidate_image": "/images/rajendra_gavit.jpg",
        "party_logo": "/images/shiv_sena_logo.png"
    },
    {
        "name": "Opposition Candidate - Virar",
        "age": 54,
        "constituency": "Virar",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": [
            "Opposition MP Candidate"
        ],
        "state": "Maharashtra",
        "city": "Virar",
        "suburban": "Virar",
        "id": 6,
        "candidate_image": "/images/opposition_candidate_virar.jpg",
        "party_logo": "/images/bjp_logo.png"
    },
    {
        "name": "John Doe",
        "state": "California",
        "city": "Los Angeles",
        "suburban": "Downtown",
        "id": 7,
        "candidate_image": "/images/john_doe.jpg",
        "party_logo": "/images/party_logo.jpg"
    },
    {
        "name": "Jane Smith",
        "state": "California",
        "city": "San Francisco",
        "suburban": "South Bay",
        "id": 8,
        "candidate_image": "/images/jane_smith.jpg",
        "party_logo": "/images/party_logo.jpg"
    },
    {
        "name": "Samuel Green",
        "state": "Texas",
        "city": "Austin",
        "suburban": "East Austin",
        "id": 9,
        "candidate_image": "/images/samuel_green.jpg",
        "party_logo": "/images/party_logo.jpg"
    },
    {
        "name": "Emily White",
        "state": "Texas",
        "city": "Houston",
        "suburban": "Midtown",
        "id": 10,
        "candidate_image": "/images/emily_white.jpg",
        "party_logo": "/images/party_logo.jpg"
    }
]


const CandidateSearch = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [suburban, setSuburban] = useState('');
    const [filteredCandidates, setFilteredCandidates] = useState([]);

    const handleSearch = () => {
        const filtered = candidatesData.filter(candidate =>
            (state ? candidate.state === state : true) &&
            (city ? candidate.city === city : true) &&
            (suburban ? candidate.suburban === suburban : true)
        );
        setFilteredCandidates(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Find Your Candidate</h1>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    {/* State, City, Suburban Filters */}
                    <div className="flex-1">
                        <label className="block text-gray-700">State</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Select State</option>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-gray-700">City</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="">Select City</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Austin">Austin</option>
                            <option value="Houston">Houston</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-gray-700">Suburban</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3"
                            value={suburban}
                            onChange={(e) => setSuburban(e.target.value)}
                        >
                            <option value="">Select Suburban</option>
                            <option value="Downtown">Downtown</option>
                            <option value="South Bay">South Bay</option>
                            <option value="East Austin">East Austin</option>
                            <option value="Midtown">Midtown</option>
                        </select>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="bg-[#004274] text-[#ace8fe] px-4 py-2 rounded-lg hover:bg-[#ace8fe] hover:text-[#004274]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Display Candidates */}
                <div className="mt-6">
                    {filteredCandidates.length > 0 ? (
                        <div>
                            <h2 className="text-lg font-bold mb-4">Candidates for the selected constituency:</h2>
                            <ul className="space-y-4">
                                {filteredCandidates.map(candidate => (
                                    <li
                                        key={candidate.id}
                                        className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-all duration-300 flex justify-between items-center"
                                    >
                                        <Link
                                            to={`/candidate/${candidate.name.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="block flex-grow"
                                        >
                                            <p><strong>Name:</strong> {candidate.name}</p>
                                            <p><strong>State:</strong> {candidate.state}</p>
                                            <p><strong>City:</strong> {candidate.city}</p>
                                            <p><strong>Suburban:</strong> {candidate.suburban}</p>
                                        </Link>
                                        {/* Party logo or icon */}
                                        <div className="ml-4 aspect-w-1 aspect-h-1 w-[50px]">
                                            <img
                                                src={`/path-to-party-logo/${candidate.name.replace(/\s+/g, '-').toLowerCase()}-logo.png`}
                                                alt={`${candidate.name} Party Logo`}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-gray-600 text-center">No candidates found for the selected filters.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CandidateSearch;
