import React, { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const UserLocationPage = () => {
    const userId = "66f72121783db33306b9a8b5";
    const [userLocation, setUserLocation] = useState(null);
    const [error, setError] = useState('');
    const [map, setMap] = useState(null); // State for map instance
    const [nearestBooth, setNearestBooth] = useState(null); // State for nearest booth

    // Define voting booths
    const votingBooths = [
        { name: "Voting Booth 1", latitude: 19.454, longitude: 72.75, city: "Virar" },
        { name: "Voting Booth 2", latitude: 19.3671, longitude: 72.8390, city: "Nalasopara" },
        { name: "Voting Booth 3", latitude: 19.0760, longitude: 72.8777, city: "Mumbai" },
        { name: "Voting Booth 4", latitude: 19.3012, longitude: 72.8362, city: "Virar" },
        { name: "Voting Booth 5", latitude: 19.4540, longitude: 72.7671, city: "Virar" },
        { name: "Voting Booth 6", latitude: 19.6526, longitude: 72.8470, city: "Nalasopara" },
        { name: "Voting Booth 7", latitude: 19.1563, longitude: 72.9136, city: "Mumbai" },
        { name: "Voting Booth 8", latitude: 19.3550, longitude: 72.7400, city: "Nalasopara" },
        { name: "Voting Booth 9", latitude: 19.2062, longitude: 72.8757, city: "Mumbai" },
        { name: "Voting Booth 10", latitude: 19.4602, longitude: 72.8447, city: "Virar" },
    ];


    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const fetchUserLocation = async () => {
            try {
                if (userId) {
                    const response = await axios.get(`${backendUrl}/api/auth/location/${userId}`);
                    setUserLocation(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                setError('Failed to fetch user location.');
            }
        };

        fetchUserLocation();
    }, [userId]);

    // Initialize the map and find nearest booth
    useEffect(() => {
        if (userLocation) {
            const userLat = userLocation.location[0].latitude;
            const userLon = userLocation.location[0].longitude;
            const mapInstance = L.map('map').setView([userLat, userLon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance);

            // Add user's location marker
            const userIcon = L.icon({
                iconUrl: 'https://w7.pngwing.com/pngs/137/787/png-transparent-location-icon-computer-icons-map-location-map-geolocation-symbol-svg-thumbnail.png', // User icon URL
                iconSize: [30, 30],
                iconAnchor: [15, 30],
            });
            L.marker([userLat, userLon], { icon: userIcon }).addTo(mapInstance).bindPopup('You are here!');

            // Define voting booth icon
            const boothIcon = L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533890.png', // Replace with your voting booth icon URL
                iconSize: [30, 30],
                iconAnchor: [15, 30],
            });

            // Calculate nearest booth
            let nearest = null;
            let minDistance = Infinity;

            votingBooths.forEach(booth => {
                const distance = Math.sqrt(
                    Math.pow(booth.latitude - userLat, 2) +
                    Math.pow(booth.longitude - userLon, 2)
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    nearest = booth;
                }

                // Add voting booth marker with custom icon
                L.marker([booth.latitude, booth.longitude], { icon: boothIcon }).addTo(mapInstance).bindPopup(booth.name);
            });

            setNearestBooth(nearest);
            setMap(mapInstance);
        }
    }, [userLocation]);

    const handleRequestPickup = () => {
        if (nearestBooth) {
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.location[0].latitude},${userLocation.location[0].longitude}&destination=${nearestBooth.latitude},${nearestBooth.longitude}`;
            window.open(googleMapsUrl, '_blank'); // Open in new tab
        }
    };

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!userLocation) {
        return <div className="text-center text-xl">Loading user location...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold my-8 text-center">User Location</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto">
                <p className="text-lg font-semibold">Location: <span className="font-normal">{userLocation.location[0].city}</span></p>
                <p className="text-lg font-semibold">Latitude: <span className="font-normal">{userLocation.location[0].latitude}</span></p>
                <p className="text-lg font-semibold">Longitude: <span className="font-normal">{userLocation.location[0].longitude}</span></p>
                <button onClick={handleRequestPickup} className="mt-4 bg-[#004274] hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200">
                    Request Pickup to Nearest Voting Booth
                </button>
            </div>
            <div id="map" style={{ width: '100%', height: '500px', marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}></div>
        </div>
    );
};

export default UserLocationPage;
