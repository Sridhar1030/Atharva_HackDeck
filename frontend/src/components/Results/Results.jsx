import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ResultsPage = () => {
    const [partyData, setPartyData] = useState([]);
    const [error, setError] = useState('');

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const fetchPartyData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/party/`);
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
                    '#4CAF50', // Green
                    '#FF6384', // Red
                    '#FFCE56', // Yellow
                    '#36A2EB', // Blue
                    '#9966FF', // Purple
                    '#FF9F40', // Orange
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Voting Results</h1>

            {/* Bar Chart Section */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 w-full max-w-3xl mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Vote Distribution by Party</h2>
                <div className="h-72">
                    <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>

            {/* Party Details Section */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 w-full max-w-3xl mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Party Details</h3>
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-lg font-medium text-gray-700">Party Name</th>
                            <th className="px-4 py-2 text-left text-lg font-medium text-gray-700">Leader</th>
                            <th className="px-4 py-2 text-left text-lg font-medium text-gray-700">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partyData.map((party) => (
                            <tr key={party._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-lg font-medium text-gray-700">{party.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-600 text-center">{party.leader}</td>
                                <td className="px-4 py-3 text-lg font-semibold text-green-600">{party.voteCounter} Votes</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultsPage;
