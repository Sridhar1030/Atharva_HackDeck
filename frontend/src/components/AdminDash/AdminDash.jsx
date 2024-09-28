// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
// import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// const AdminDashboard = () => {
//     const adminId = "66f6f50d2a417ea7a02e2bc6";

//     const [adminData, setAdminData] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchAdminData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/admin/dashboard/${adminId}`);
//                 setAdminData(response.data);
//             } catch (error) {
//                 setError('Failed to fetch admin data.');
//             }
//         };

//         fetchAdminData();
//     }, [adminId]);

//     if (error) {
//         return <div className="text-red-500">{error}</div>;
//     }

//     if (!adminData) {
//         return <div>Loading...</div>;
//     }

//     // Assuming 50 total voters for that day
//     const totalVoters = 50;
//     const actualVotersCount = adminData.usersVoted.length;

//     // Pie chart data
//     const pieChartData = {
//         labels: ['Voters Who Voted', 'Voters Who Did Not Vote'],
//         datasets: [
//             {
//                 data: [actualVotersCount, totalVoters - actualVotersCount],
//                 backgroundColor: ['#4CAF50', '#FF6384'],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//             {/* Pie Chart */}
//             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 transition-transform transform hover:scale-105 duration-300">
//                 <h3 className="text-xl font-semibold mb-4">Voting Statistics</h3>
//                 <div className="h-48">
//                     <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Voting Participation' } } }} />
//                 </div>
//                 <div className="flex justify-between mt-4 text-gray-600">
//                     <div className="flex items-center">
//                         <FaUserCheck className="text-green-500 mr-1" /> <span>{actualVotersCount} Voters Who Voted</span>
//                     </div>
//                     <div className="flex items-center">
//                         <FaUserTimes className="text-red-500 mr-1" /> <span>{totalVoters - actualVotersCount} Voters Who Did Not Vote</span>
//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-4xl font-bold my-8 text-center text-gray-800">Users Voted</h1>
//             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8 transition-transform transform hover:scale-105 duration-300">
//                 <h2 className="text-2xl font-semibold text-gray-700">{adminData.name}</h2>
//                 <p className="text-lg text-gray-600">Location: {adminData.location}</p>
//                 <h3 className="mt-4 text-xl font-semibold">Users Who Voted:</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                     {adminData.usersVoted.map((user) => (
//                         <div key={user._id} className="flex items-center border rounded-lg p-4 bg-gray-50 shadow-md transition-transform transform hover:scale-105 duration-300">
//                             <img src={user.image} alt={user.voterId} className="w-16 h-16 rounded-full mr-4" />
//                             <div className="flex flex-col">
//                                 <span className="text-lg font-medium text-gray-800">{user.voterId}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default AdminDashboard;








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

    const totalVoters = 50;
    const actualVotersCount = adminData.usersVoted.length;

    const pieChartData = {
        labels: ['Voters Who Voted', 'Voters Who Did Not Vote'],
        datasets: [
            {
                data: [actualVotersCount, totalVoters - actualVotersCount],
                backgroundColor: ['#4CAF50', '#f50909'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-6xl p-4">
                {/* Flex container for Pie Chart and Admin Info */}
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 mb-8">
                    {/* Pie Chart Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 transition-transform transform hover:scale-105 duration-300 mr-3">
                        <h3 className="text-xl font-semibold mb-4">Voting Statistics</h3>
                        <div className="h-48">
                            <Pie
                                data={pieChartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { position: 'top' },
                                        title: { display: true, text: 'Voting Participation' }
                                    }
                                }}
                            />
                        </div>
                        <div className="flex justify-between mt-4 text-gray-600">
                            <div className="flex items-center">
                                <FaUserCheck className="text-green-500 mr-1" />
                                <span>{actualVotersCount} Voters Who Voted</span>
                            </div>
                            <div className="flex items-center">
                                <FaUserTimes className="text-red-500 mr-1" />
                                <span>{totalVoters - actualVotersCount} Voters Who Did Not Vote</span>
                            </div>
                        </div>
                    </div>

                    {/* Admin Info Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 ms-4 transition-transform transform hover:scale-105 duration-300 sxs:ms-0">
                        <div className="flex flex-col items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler user-circle">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                            <h2 className="text-2xl font-semibold text-gray-700">{adminData.name}</h2>
                            <p className="text-lg font-semibold text-gray-700 block:inline">Desinator: {adminData.about}</p>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">Constituency:</h3>
                        {/* Parse the JSON string and display it in a readable format */}
                        <p className="mt-2 text-gray-600">
                            {adminData.location &&
                                (() => {
                                    const locationData = JSON.parse(adminData.location);
                                    return (
                                        <span>
                                            {locationData.constituency} <br />
                                            Latitude: {locationData.latitude} <br />
                                            Longitude: {locationData.longitude}
                                        </span>
                                    );
                                })()
                            }
                        </p>
                    </div>
                </div>

                {/* Users Who Voted Section */}
                <h1 className="text-4xl font-bold my-8 text-center text-gray-800">Users Voted</h1>
                <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-8 transition-transform transform hover:scale-100 duration-300">
                    <h3 className="text-xl font-semibold">Voters  Who Voted:</h3>
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
        </div>
    );
};

export default AdminDashboard;
