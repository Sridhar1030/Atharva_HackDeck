import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ResultsPage = () => {
    const [partyData, setPartyData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPartyData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/party/');
                setPartyData(response.data);
            } catch (error) {
                setError('Failed to fetch party data.');
            }
        };

        fetchPartyData();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (partyData.length === 0) {
        return <div className="text-gray-500">Loading...</div>;
    }

    // Prepare data for the bar chart
    const labels = partyData.map(party => party.name);
    const voteCounts = partyData.map(party => party.voteCounter);

    const barChartData = {
        labels: labels,
        datasets: [
            {
                label: 'Vote Counts',
                data: voteCounts,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center p-6">
            <h1 className="text-5xl font-bold mb-8 text-white text-center ">Voting Results</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 ">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Vote Distribution by Party</h2>
                <div className="h-72">
                    <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 ">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Party Details</h3>
                
                <ul className="divide-y divide-gray-300">
                    {partyData.map((party) => (
                        <li key={party._id} className="flex justify-between items-center py-3 transition-transform transform hover:scale-105">
                            <span className="text-lg font-medium text-gray-700">{party.name}</span>
                            <span className="text-sm text-gray-500 text-center w-1/3"> {party.leader}</span>
                            <span className="text-lg font-semibold text-green-600">{party.voteCounter} Votes</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResultsPage;
