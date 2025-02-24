"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";
import MapBoxMap from "../components/Map/MapBoxMap";

export default function Home() {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-yellow-300'>
          <Booking />
        </div>
        <div className='col-span-2 bg-blue-300'>
          <MapBoxMap/>
        </div>
      </div>
    </div>
  );
}
