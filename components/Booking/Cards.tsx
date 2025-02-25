"use client"
import React, { useState } from 'react'
import CardsList from '../../data/CardsList'
import Image from 'next/image'

function Cards() {
    const [activeIndex,setActiveIndex]=useState<any>();
  return (
    <div>
        <h2 className='text-[16px] font-medium mt-2'>Payment Method</h2>
        <div className='grid grid-cols-5 mt-2 l-2'>
            {CardsList.map((item,index) =>(
            <div 
            key={index} 
            className={`w-[50px] border-[1px] flex items-center justify-center
            rounded-md
            cursor-pointer
            hover:scale-150 tansition-all
            hover:border-yellow-500 ${activeIndex==index?'border-yellow-500 border-[2px]':null}`}
            onClick={()=>setActiveIndex(index)}>
                <Image src={item.image}
                alt={item.name}
                width={30}
                height={50}/>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Cards