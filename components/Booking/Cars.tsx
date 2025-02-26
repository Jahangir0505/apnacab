"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import CarsList from '../../data/CarsList'
import { DirectionDataContext } from '../../context/DirectionDataContext'
import { selectedCarAmountContext } from '../../context/selectedCarAmountContext'

function Cars() {
    const [selectedCar,setSelectedCar]=useState<any>()
    const { directionData,setDirectionData} = useContext(DirectionDataContext);
    const {carAmount,setCarAmount}=useContext(selectedCarAmountContext);

    const getCost=(charges:any)=>{
        return (charges*directionData.routes[0].distance*0.001).toFixed(2);
    }
    
  return (
    <div className='-mt-10'>
        <h2 className='font-semibold mt-5'>Select Car</h2>
        <div className='grid grid-cols-3 md:grid-cols-2
        lg:grid-cols-3'>
            {CarsList.map((item,index)=>
            item && (
                <div key={index} 
                className={`m-2 p-2
                border-[1px] rounded-md hover:border-yellow-500
                cursor-pointer ${index==selectedCar?'border-[3px] border-yellow-500'
                :null}`}
                onClick={()=>{setSelectedCar(index);
                    setCarAmount(getCost(item.charges))}}>
                    <Image src={item.image}
                    alt={item.name}
                    width={75}
                    height={90}
                    className='w-full'/>
                    <h2 className='text-[12px]'>{item.name}
                    {directionData.routes?
                    <span className='float-right font-medium'>Rs {getCost(item.charges)}
                    </span>:null}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars