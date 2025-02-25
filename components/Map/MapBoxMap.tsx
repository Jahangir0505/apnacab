"use client"
import {Map, Marker} from 'react-map-gl/mapbox';
import React, {useContext,useEffect, useRef, useState} from 'react'
import { UserLocationContext} from '../../context/UserLocationContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';
import { DestiCordiContext } from '../../context/DestiCordiContext';
import { SourceCordiContext } from '../../context/SourceCordiContext';
function MapboxMap() {
  const mapRef = useRef<any>();
  const {userLocation, setUserLocation}=useContext(UserLocationContext);
  const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates} = useContext(DestiCordiContext);
  //this useEffect is use to fly on the source location
  useEffect(()=>{
    if(sourceCordinates){
      mapRef.current?.flyTo({
        center:[sourceCordinates.lng,sourceCordinates.lat],
        duration:2500
      })
    }
  },[sourceCordinates])
  //and this useEffect is use to fly the marker on the destinations
  useEffect(()=>{
    if(destinationCordinates){
      mapRef.current?.flyTo({
        center:[destinationCordinates.lng,destinationCordinates.lat],
        duration:2500
      })
    }
  },[destinationCordinates])

    return (
    <div className='p-5'>
      <h2 className='text-2[20px] font-semibold'>Maping</h2>
      <div className='rounded-lg overflow-hidden'>
        {userLocation ?<Map
        ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation?.lng,
            latitude: userLocation?.lat,
            zoom: 14
          }}
          style={{ width: '100%', height: 450, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9">
          <Markers/>
        </Map> : null}
      </div>
    </div>
  )
}

export default MapboxMap