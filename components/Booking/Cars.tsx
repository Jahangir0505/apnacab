"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CarsList from '../../data/CarsList'

function Cars() {
    const [selectedCar,setSelectedCar]=useState<any>()
  return (
    <div className='-mt-10'>
        <h2 className='font-semibold mt-5'>Select Car</h2>
        <div className='grid grid-cols-3 md:grid-cols-2
        lg:grid-cols-3'>
            {CarsList.map((item,index)=>
            item && (
                
                <div key={index} className={`m-2 p-2
                border-[1px] rounded-md hover:border-yellow-500
                cursor-pointer ${index==selectedCar?'border-[3px] border-yellow-500':null}`}
                onClick={()=>setSelectedCar(index)}>
                    <Image src={item.image}
                    alt={item.name}
                    width={75}
                    height={90}
                    className='w-full'/>
                    <h2 className='text-[12px]'>{item.name}</h2>
                    <span className='float-left font-medium'>Rs {item.charges*200}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars