import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const VotingPage = () => {
    const [parties, setParties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [voted, setVoted] = useState(false); // State to handle voting confirmation
    const [selectedParty, setSelectedParty] = useState(null); // Store the selected party
    const navigate = useNavigate(); // To navigate to homepage after voting

    // Fetch all parties from the backend
    useEffect(() => {
        const fetchParties = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/party');
                setParties(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch parties.');
                setLoading(false);
            }
        };

        fetchParties();
    }, []);

    // Function to cast a vote
    const voteForParty = async (partyId, partyName) => {
        try {
            await axios.post(`http://localhost:8000/api/party/vote/${partyId}`);
            setSelectedParty(partyName); // Store selected party for ballot paper display
            setVoted(true); // Set voted state to true

            // Show the ballot confirmation for 10 seconds and then redirect
            setTimeout(() => {
                navigate('/'); // Navigate to the homepage after 10 seconds
            }, 10000); // 10 seconds = 10000 milliseconds
        } catch (error) {
            alert('Failed to cast vote.');
        }
    };

    if (loading) {
        return <div className="text-center text-xl">Loading parties...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    // Ballot paper confirmation page after voting
    if (voted) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-3xl font-bold mb-4">Thank You for Voting!</h1>
                    <p className="text-xl">You voted for: <span className="font-semibold">{selectedParty}</span></p>
                    <p className="text-lg mt-4">Redirecting to the homepage in 10 seconds...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-8">Vote for Your Favorite Party</h1>
            <ul className="w-full max-w-2xl">
                {parties.map((party) => (
                    <li key={party._id} className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
                        <h2 className="text-2xl font-semibold">{party.name}</h2>
                        <p className="text-lg">Leader: {party.leader}</p>
                        <p className="text-lg mb-4">Votes: {party.voteCounter}</p>
                        <button
                            onClick={() => voteForParty(party._id, party.name)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Vote
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VotingPage;
