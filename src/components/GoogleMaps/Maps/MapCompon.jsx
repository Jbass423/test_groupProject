import React, { useRef, useEffect } from 'react';

const MyMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '700px' }} />;
};

export default MyMapComponent;