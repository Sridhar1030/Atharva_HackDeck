import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { uploadImageToS3 } from './s3Config'; // Assuming the function exists to handle S3 upload\
import { toast } from 'react-toastify';

const VotingPage = () => {
    const [parties, setParties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [voted, setVoted] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const [adminPassword, setAdminPassword] = useState('');
    const [countdown, setCountdown] = useState(10);
    const [image, setImage] = useState(null);
    const [voices, setVoices] = useState([]);
    const [language, setLanguage] = useState('en-IN');
    const [isReadyForVoting, setIsReadyForVoting] = useState(false);
    const [hasHeardOptions, setHasHeardOptions] = useState(false); // New state to track if options were heard
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const voterId = user.user.voterId;

    useEffect(() => {
        const fetchParties = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/party');
                setParties(response.data);
            } catch (error) {
                setError('Failed to fetch parties.');
            } finally {
                setLoading(false);
            }
        };

        fetchParties();
    }, []);

    useEffect(() => {
        const loadVoices = () => {
            const synthVoices = window.speechSynthesis.getVoices();
            if (synthVoices.length) {
                setVoices(synthVoices);
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    const speakPartyOptions = () => {
        if (!isReadyForVoting) return; // Prevent voting before setup is complete

        let utteranceQueue = parties.map((party, index) => {
            const text = language === 'hi-IN'
                ? `hi ${index + 1} को दबाएं ${party.name} के लिए`
                : `Press ${index + 1} for ${party.name}`;
            const speech = new SpeechSynthesisUtterance(text);
            const selectedVoice = voices.find(v => v.lang === language);
            speech.voice = selectedVoice || voices[0];
            speech.lang = language;
            return speech;
        });

        utteranceQueue.forEach((speech, index) => {
            speech.onend = () => {
                if (index === utteranceQueue.length - 1) {
                    setHasHeardOptions(true); // Mark as heard only after the last option is spoken
                }
            };
            window.speechSynthesis.speak(speech);
        });
    };


    const hasVoted = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/auth/has-voted/${user.user._id}`
            );
            console.log("has vote", response.data)
            console.log("local storage", user)

            localStorage.setItem("user", JSON.stringify(response.data));

            return response.data.hasVoted;
        } catch (error) {
            console.error("Error checking if user has voted:", error);
            toast.error(error.response.data.message || "Error checking if user has voted");
            return false;
        }
    }

    // Load speech synthesis voices
    useEffect(() => {
        const loadVoices = () => {
            const synthVoices = window.speechSynthesis.getVoices();
            if (synthVoices.length) {
                setVoices(synthVoices);
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices; // Reload voices when they become available
    }, []);

    // Text-to-Speech function for Hindi and English voices
    const speakText = (texts) => {
        const languageSettings = [
            {
                lang: "hi-IN",
                text: texts.hindi,
                gender: "female",
                fallback: "Hindi voice not available",
            },
            {
                lang: "hi-IN",
                text: texts.marathi,
                gender: "female",
                fallback: "Marathi voice not available",
            },
            {
                lang: "en-IN",
                text: texts.english,
                gender: "female",
                fallback: "English voice not available",
            },
        ];
        languageSettings.forEach(({ lang, text, fallback }, index) => {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = lang;
            const selectedVoice = voices.find((v) => v.lang === lang);
            speech.voice = selectedVoice || voices[0]; // Fallback to default voice
            speech.text = selectedVoice ? text : fallback; // Fallback text if voice not available
            speech.rate = 1; // Speed of the speech
            speech.pitch = 1; // Pitch of the voice
            setTimeout(() => {
                window.speechSynthesis.speak(speech);
            }, index * 4000); // 5 seconds delay between each language
        });
    };

    // Play audio and speak text when voted is true
    useEffect(() => {
        if (voted) {
            const textToSpeak = {
                hindi: `  आपने ${selectedParty} को वोट दिया है। `,
                marathi: `  आपण ${selectedParty} ला मतदान केले आहे.`,
                english: ` You voted for ${selectedParty}.`,
            };
            speakText(textToSpeak);
        }
    }, [voted, selectedParty]);


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (!isReadyForVoting) return; // Prevent keypress until password and image are set
            if (hasHeardOptions || !parties.length) {
                const pressedKey = parseInt(event.key, 10);
                if (pressedKey > 0 && pressedKey <= parties.length) {
                    const selected = parties[pressedKey - 1];
                    voteForParty(selected._id, selected.name);
                }
            }
        };

        if (!voted) {
            window.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [parties, voted, isReadyForVoting, hasHeardOptions]);

    const startCamera = async () => {
        try {
            const video = document.createElement('video');
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 640;
            canvas.height = 480;

            setTimeout(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/png');
                setImage(imageData);
                setIsReadyForVoting(true); // Enable voting after capturing image
                stream.getTracks().forEach(track => track.stop());
            }, 3000);
        } catch (error) {
            console.error('Error accessing the camera:', error);
            setError('Could not access the camera. Please check your device settings.');
        }
    };

    const voteForParty = async (partyId, partyName) => {
        if (!adminPassword || !voterId || !image) {
            alert('Please provide admin password, voter ID, and capture an image.');
            return;
        }

        try {
            const uploadedImageUrl = await uploadImageToS3(image); // Upload image to S3

            const payload = {
                adminPassword: adminPassword,
                voterId: voterId,
                image: uploadedImageUrl,
            };

            const response = await axios.post(`http://localhost:8000/api/party/vote/${partyId}`, payload);
            setSelectedParty(partyName);
            setVoted(true);

            setTimeout(() => {
                navigate('/');
            }, 10000);
        } catch (error) {
            alert('Failed to cast vote. Invalid admin password, voter ID, or image upload failed.');
            console.log('Error during vote:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        if (voted && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [voted, countdown]);

    const handlePasswordInput = (e) => {
        setAdminPassword(e.target.value);
    };

    if (loading) {
        return <div className="text-center text-xl">Loading parties...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

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
        <div>
            {!user.user?.hasVoted ? (
                <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                    <h1 className="text-4xl font-bold my-8">Vote for Your Favorite Party</h1>

                    <input
                        type="password"
                        value={adminPassword}
                        onChange={handlePasswordInput}
                        placeholder="Enter Admin Password"
                        className="border p-2 rounded mb-4"
                    />

                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded mb-4">
                        <option value="en-IN">English</option>
                        <option value="hi-IN">Hindi</option>
                    </select>

                    <button onClick={startCamera} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                        Capture Image
                    </button>

                    <button
                        onClick={speakPartyOptions}
                        className={`bg-green-500 text-white py-2 px-4 rounded ${!isReadyForVoting && 'opacity-50 cursor-not-allowed'}`}
                    >
                        Hear Party Options
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {parties.map((party) => (
                            <div key={party._id} className="bg-white p-4 rounded-lg shadow-md text-center">
                                <h2 className="text-2xl font-semibold mb-2">{party.name}</h2>
                                <button
                                    onClick={() => voteForParty(party._id, party.name)}
                                    className={`bg-green-600 text-white py-2 px-4 rounded ${!isReadyForVoting && 'opacity-50 cursor-not-allowed'}`}
                                    disabled={!isReadyForVoting || (!hasHeardOptions && !isReadyForVoting)}
                                >
                                    Vote for {party.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold my-8">You have already voted!</h1>
                </div>
            )}
        </div>
    );

};

export default VotingPage;
