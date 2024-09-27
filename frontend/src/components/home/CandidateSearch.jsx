import React, { useState } from 'react';

const candidatesData = [
    { id: 1, name: 'John Doe', state: 'California', city: 'Los Angeles', suburban: 'Downtown' },
    { id: 2, name: 'Jane Smith', state: 'California', city: 'San Francisco', suburban: 'South Bay' },
    { id: 3, name: 'Samuel Green', state: 'Texas', city: 'Austin', suburban: 'East Austin' },
    { id: 4, name: 'Emily White', state: 'Texas', city: 'Houston', suburban: 'Midtown' },
];

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
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
                                    <li key={candidate.id} className="bg-gray-100 p-4 rounded-lg shadow">
                                        <p><strong>Name:</strong> {candidate.name}</p>
                                        <p><strong>State:</strong> {candidate.state}</p>
                                        <p><strong>City:</strong> {candidate.city}</p>
                                        <p><strong>Suburban:</strong> {candidate.suburban}</p>
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
