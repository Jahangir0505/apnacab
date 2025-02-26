"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";
import MapboxMap from "../components/Map/MapboxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "../context/UserLocationContext";
import { SourceCordiContext } from "../context/SourceCordiContext";
import { DestiCordiContext } from "../context/DestiCordiContext";
import { DirectionDataContext } from "../context/DirectionDataContext";
import { selectedCarAmountContext } from "../context/selectedCarAmountContext";


export default function Home() {
  const [sourceCordinates,setSourceCordinates]=useState<any>([])
  const [destinationCordinates,setDestinationCordinates]=useState<any>([])
  const [directionData,setDirectionData]=useState<any>([])
  const [userLocation,setUserLocation]=useState<any>();
  const [carAmount,setCarAmount]=useState<any>() 
  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <div >
      <UserLocationContext.Provider value = {{userLocation,setUserLocation}}>
        <SourceCordiContext.Provider value={{sourceCordinates,setSourceCordinates}}>
        <DestiCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
          <DirectionDataContext.Provider value={{ directionData,setDirectionData}}> 
            <selectedCarAmountContext.Provider value={{carAmount,setCarAmount}}>
     <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-yellow-300'>
          <Booking />
        </div>
        <div className='col-span-2 bg-blue-300'>
          <MapboxMap/>
        </div>
      </div>
            </selectedCarAmountContext.Provider>
          </DirectionDataContext.Provider>
        </DestiCordiContext.Provider>
      </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
