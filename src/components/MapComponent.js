import React, { useEffect } from 'react';

const MapComponent = ({ lat, lng }) => {
    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom: 8,
        });
        new window.google.maps.Marker({
            position: { lat, lng },
            map: map,
        });
    }, [lat, lng]);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
