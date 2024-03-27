// import React, { useState, useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoidmlnbmVzaDEyMzQ1NjciLCJhIjoiY2xxejg3MnVsMDJ2bjJrb2R1am5rNzZxMSJ9.bKT1JI52yiW-sAYKalcSiA';

// const MapComponent = () => {
//  const [lngLat, setLngLat] = useState(null);
//  const mapContainer = useRef(null);

//  useEffect(() => {
//    const map = new mapboxgl.Map({
//      container: mapContainer.current,
//      style: 'mapbox://styles/mapbox/streets-v11',
//      center: [-74.5, 40],
//      zoom: 9,
//    });

//    map.on('click', handleMapClick);

//    return () => {
//      map.remove();
//    };
//  }, []);

//  const handleMapClick = (e) => {
//    const coordinates = e.lngLat;
//    setLngLat(coordinates);
//  };

//  const mapStyle = {
//    width: '100%',
//    height: '400px',
//  };

//  return (
//    <div>
//      <div ref={mapContainer} style={mapStyle} />
//      {lngLat && (
//        <div>
//          <h3>Longitude: {lngLat.lng}</h3>
//          <h3>Latitude: {lngLat.lat}</h3>
//        </div>
//      )}
//    </div>
//  );
// };

// export default MapComponent;

import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidmlnbmVzaDEyMzQ1NjciLCJhIjoiY2xxejg3MnVsMDJ2bjJrb2R1am5rNzZxMSJ9.bKT1JI52yiW-sAYKalcSiA';

const MapComponent = () => {
  const [lngLat, setLngLat] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState({
    coordinates: null,
    name: null,
  });
  const mapContainer = useRef(null);

  useEffect(() => {
    // Function to get the current location using the Geolocation API
    const getCurrentLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { longitude, latitude } = position.coords;

            setLngLat({ lng: longitude, lat: latitude });

            try {
              // Reverse geocode the obtained coordinates to get the current address
              const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
              );

              if (!response.ok) {
                throw new Error('Failed to fetch address');
              }

              const data = await response.json();
              const address = data.features[0]?.place_name || 'Unknown Address';

              setCurrentAddress(address);
            } catch (error) {
              console.error('Error fetching current address:', error);
            }
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [76.9558, 11.0168], // Coimbatore's coordinates
      zoom: 10,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    geocoder.on('result', (e) => {
      setSearchedLocation({
        coordinates: e.result.center,
        name: e.result.place_name,
      });
      map.flyTo({ center: e.result.center, zoom: 12 });
    });

    map.on('click', handleMapClick);

    // Get the user's current location when the component mounts
    getCurrentLocation();

    return () => {
      map.remove();
    };
  }, []);

  const handleMapClick = async (e) => {
    const coordinates = e.lngLat;

    try {
      // Reverse geocode the selected coordinates to get the address
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=${mapboxgl.accessToken}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch address');
      }

      const data = await response.json();
      const address = data.features[0]?.place_name || 'Unknown Address';

      setSelectedAddress({
        coordinates: [coordinates.lng, coordinates.lat],
        address: address,
      });
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  const mapStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div>
      <div ref={mapContainer} style={mapStyle} />
      {lngLat && (
        <div>
          <h3>Your Current Location:</h3>
          <p>Address: {currentAddress}</p>
        </div>
      )}
      {selectedAddress && (
        <div>
          <h3>Select Delivery Address:</h3>
          <p>Address: {selectedAddress.address}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
