import React from 'react'
import { Map } from 'react-map-gl';
import ReactMapGL from 'react-map-gl'
import { useState } from 'react';
import { getCenter } from 'geolib';
import { Marker,Popup } from 'react-map-gl';

const Maps = ({ searchResults }) => {
  const [selectedLocation,setSelectedLocation] = useState({})

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // console.log(coordinates);

    const center = getCenter(coordinates);
    // console.log(center);

     const [viewport, setViewport] = useState({
      //  width: '100%',
      //  height: '100%',
       latitude: center.latitude,
       longitude: center.longitude,
       zoom: 13,
     });
  console.log(coordinates);


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/gumifu/cl0gl4mqg004j15m60z9g6zjs"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => {
        <div key={result.long} className="">
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className=" cursor-pointer text-2xl animate-bounce"
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? Map(
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
              false
          )}
        </div>;
      })}
    </ReactMapGL>
  );
};

export default Maps
