"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";
import MapboxMap from "../components/Map/MapboxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "../context/UserLocationContext";

export default function Home() {

  const [userLocation,setUserLocation]=useState<any>();
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
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-yellow-300'>
          <Booking />
        </div>
        <div className='col-span-2 bg-blue-300'>
          <MapboxMap/>
        </div>
      </div>
      </UserLocationContext.Provider>
    </div>
  );
}
