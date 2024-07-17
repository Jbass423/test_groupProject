"use client";

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useState } from 'react';

const Maps = () => {
    const position = { lat: 46.7296, lng: -94.6859 };

    return (
        <APIProvider apiKey={'AIzaSyAm6yKhKSP38jztFaKtIdCgbsos6r3jmnM'}>
            <div style={{ height: "100vh", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ height: "500px", width: "500px", borderRadius: "50%", overflow: "hidden" }}>
                    <Map 
                        zoom={6} // Adjusted zoom level to show more of the map
                        defaultCenter={position} // Use defaultCenter instead of center
                        options={{
                            gestureHandling: 'greedy', // Ensure gestures are fully captured for interaction
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: true,
                            streetViewControl: false,
                            rotateControl: true,
                            fullscreenControl: true
                        }}
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                    >
                        {/* Example marker to visualize the position */}
                        <Marker position={position} />
                    </Map>
                </div>
            </div>
        </APIProvider>
    );
}

export default Maps;
