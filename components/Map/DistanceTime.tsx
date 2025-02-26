import React, { useContext } from 'react'
import { DirectionDataContext } from '../../context/DirectionDataContext';

function DistanceTime() {
      const { directionData,setDirectionData} = useContext(DirectionDataContext);
    
  return directionData?.routes&& (
        <div className='bg-blue-500 p-3'>
        <h2 className='text-gray-100 opacity-100 text-[15px]'>
        Distance: <span className='font-bold mr-3 text-black'>
        {(directionData?.routes[0]?.distance*0.001).toFixed(2)} KM</span>
        Duration: <span className='font-bold text-black'>
        {(directionData?.routes[0]?.duration/60).toFixed(2)} Min
        </span>
        </h2>
        </div>
  )
}

export default DistanceTime