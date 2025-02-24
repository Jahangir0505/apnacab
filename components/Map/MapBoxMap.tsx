"use client"
import {Map, Marker} from 'react-map-gl/mapbox';
import React, {useContext,useEffect, useState} from 'react'
import { UserLocationContext} from '../../context/UserLocationContext';
import 'mapbox-gl/dist/mapbox-gl.css';
function MapboxMap() {

  const {userLocation, setUserLocation}=useContext(UserLocationContext);

    return (
    <div className='p-5'>
      <h2 className='text-2[20px] font-semibold'>Maping</h2>
      <div className='rounded-lg overflow-hidden'>
        {userLocation ?<Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation?.lng,
            latitude: userLocation?.lat,
            zoom: 14
          }}
          style={{ width: '100%', height: 450, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9">
          <Marker 
          longitude={userLocation?.lng}
          latitude={userLocation?.lat}
          anchor="bottom">
         <img src="./pin.png" 
         className='h-14 w-10'/>
          </Marker>
        </Map> : null}
      </div>
    </div>
  )
}

export default MapboxMap