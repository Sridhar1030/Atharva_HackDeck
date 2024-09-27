import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VotingPage = () => {
    const [parties, setParties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [voted, setVoted] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    const [voices, setVoices] = useState([]);

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

    // Ensure voices are loaded
    useEffect(() => {
        const loadVoices = () => {
            const synthVoices = window.speechSynthesis.getVoices();
            if (synthVoices.length) {
                setVoices(synthVoices);
            }
        };

        loadVoices(); // Try loading voices immediately
        window.speechSynthesis.onvoiceschanged = loadVoices; // Reload voices when they become available
    }, []);

    // Text-to-Speech function for Hindi and English voices
    const speakText = (texts) => {
        const languageSettings = [
            { lang: 'hi-IN', text: texts.hindi, fallback: 'Hindi voice not available' },
            { lang: 'en-IN', text: texts.english, fallback: 'English voice not available' },
        ];

        languageSettings.forEach(({ lang, text, fallback }, index) => {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = lang;

            // Find the appropriate voice for the language
            const selectedVoice = voices.find(v => v.lang === lang);
            if (selectedVoice) {
                speech.voice = selectedVoice;
            } else {
                speech.voice = voices[0]; // Fallback to default voice
                speech.text = fallback; // Fallback text if voice not available
            }

            speech.rate = 1; // Speed of the speech
            speech.pitch = 1; // Pitch of the voice

            // Delay speaking based on the index (so the languages speak one after the other)
            setTimeout(() => {
                window.speechSynthesis.speak(speech);
            }, index * 5000); // 5 seconds delay between each language
        });
    };

    // Play audio and speak text when voted is true
    useEffect(() => {
        if (voted) {
            const textToSpeak = {
                hindi: `धन्यवाद। आपने ${selectedParty} को वोट दिया है।`,
                english: `Thank you for voting. You voted for ${selectedParty}.`,
            };
            speakText(textToSpeak); // Read out the confirmation message in Hindi and English
        }
    }, [voted, selectedParty]);

    // Function to cast a vote
    const voteForParty = async (partyId, partyName) => {
        try {
            await axios.post(`http://localhost:8000/api/party/vote/${partyId}`);
            setSelectedParty(partyName);
            setVoted(true);

            setTimeout(() => {
                navigate('/'); // Navigate to the homepage after 10 seconds
            }, 10000);
        } catch (error) {
            alert('Failed to cast vote.');
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
