import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { uploadImageToS3 } from './s3Config'; // Import the upload function

const VotingPage = () => {
    const [parties, setParties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [voted, setVoted] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const [adminPassword, setAdminPassword] = useState('');
    const [voterId, setVoterId] = useState('');
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

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

    // Function to start the camera and capture image
    const startCamera = async () => {
        try {
            const video = document.createElement('video');
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 640; // Set canvas width
            canvas.height = 480; // Set canvas height

            setTimeout(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/png');
                setImage(imageData);
                setImageUrl(''); // Reset image URL before upload
                stream.getTracks().forEach(track => track.stop());
            }, 3000); // Capture image after 3 seconds
        } catch (error) {
            console.error('Error accessing the camera:', error);
            setError('Could not access the camera. Please check your device settings.');
        }
    };

    // Function to upload image and cast a vote
    const voteForParty = async (partyId, partyName) => {
        if (!adminPassword || !voterId || !image) {
            alert('Please provide admin password, voter ID, and capture an image.');
            return;
        }

        try {
            const uploadedImageUrl = await uploadImageToS3(image); // Upload image to S3
            const payload = {
                password: adminPassword,
                voterId: voterId,
                image: uploadedImageUrl, // Use the uploaded image URL
            };

            await axios.post(`http://localhost:8000/api/party/vote/${partyId}`, payload);
            setSelectedParty(partyName);
            setVoted(true);

            setTimeout(() => {
                navigate('/'); // Navigate to the homepage after 10 seconds
            }, 10000);
        } catch (error) {
            alert('Failed to cast vote. Invalid admin password, voter ID, or image upload failed.');
            console.log(error)
        }
    };

    // Countdown timer for redirecting after voting
    useEffect(() => {
        if (voted && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [voted, countdown]);

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
                    <p className="text-lg mt-4">Redirecting to the homepage in {countdown} seconds...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-8">Vote for Your Favorite Party</h1>
            <input
                type="text"
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                placeholder="Enter Voter ID"
                className="border p-2 rounded mb-4"
            />
            <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="border p-2 rounded mb-4"
            />
            <button onClick={startCamera} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                Capture Image
            </button>
            {image && <img src={image} alt="Captured" className="mb-4" />}
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
