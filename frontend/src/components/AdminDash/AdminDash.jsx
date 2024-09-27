import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const AdminDashboard = () => {
    const adminId = "66f6f50d2a417ea7a02e2bc6";

    const [adminData, setAdminData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/admin/dashboard/${adminId}`);
                setAdminData(response.data);
            } catch (error) {
                setError('Failed to fetch admin data.');
            }
        };

        fetchAdminData();
    }, [adminId]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!adminData) {
        return <div>Loading...</div>;
    }

    // Assuming 50 total voters for that day
    const totalVoters = 50;
    const actualVotersCount = adminData.usersVoted.length;

    // Pie chart data
    const pieChartData = {
        labels: ['Voters Who Voted', 'Voters Who Did Not Vote'],
        datasets: [
            {
                data: [actualVotersCount, totalVoters - actualVotersCount],
                backgroundColor: ['#4CAF50', '#FF6384'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Pie Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 transition-transform transform hover:scale-105 duration-300">
                <h3 className="text-xl font-semibold mb-4">Voting Statistics</h3>
                <div className="h-48">
                    <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Voting Participation' } } }} />
                </div>
                <div className="flex justify-between mt-4 text-gray-600">
                    <div className="flex items-center">
                        <FaUserCheck className="text-green-500 mr-1" /> <span>{actualVotersCount} Voters Who Voted</span>
                    </div>
                    <div className="flex items-center">
                        <FaUserTimes className="text-red-500 mr-1" /> <span>{totalVoters - actualVotersCount} Voters Who Did Not Vote</span>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold my-8 text-center text-gray-800">Users Voted</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-2xl font-semibold text-gray-700">{adminData.name}</h2>
                <p className="text-lg text-gray-600">Location: {adminData.location}</p>
                <h3 className="mt-4 text-xl font-semibold">Users Who Voted:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {adminData.usersVoted.map((user) => (
                        <div key={user._id} className="flex items-center border rounded-lg p-4 bg-gray-50 shadow-md transition-transform transform hover:scale-105 duration-300">
                            <img src={user.image} alt={user.voterId} className="w-16 h-16 rounded-full mr-4" />
                            <div className="flex flex-col">
                                <span className="text-lg font-medium text-gray-800">{user.voterId}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default AdminDashboard;
