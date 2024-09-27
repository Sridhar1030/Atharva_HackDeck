import React, { useEffect, useRef } from 'react';

const GoogleMapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Function to initialize the map
        const initialize = () => {
            const myLatlng = new google.maps.LatLng(-34.397, 150.644);
            const mapOptions = {
                zoom: 8,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            new google.maps.Map(mapRef.current, mapOptions);
        };

        // Function to dynamically load the Google Maps script
        const loadScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=initMap';
            document.body.appendChild(script);
        };

        // Initialize map if Google Maps script is already loaded, otherwise load it
        if (!window.google) {
            window.initMap = initialize;
            loadScript();
        } else {
            initialize();
        }
    }, []);

    return (
        <div>
            <h1>My Google Map</h1>
            <div
                id="map_canvas"
                ref={mapRef}
                style={{ height: '500px', width: '100%' }}
            ></div>
        </div>
    );
};

export default GoogleMapComponent;
