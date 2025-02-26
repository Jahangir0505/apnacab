import React, { useContext, useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { selectedCarAmountContext } from '../../context/selectedCarAmountContext';

function Booking() {
    const screenHight=(window.innerHeight)*0.72;
    const {carAmount,setCarAmount}=useContext(selectedCarAmountContext)
    const router:any = useRouter()
    return (
        <div className='p-5'>
            <h2 className='text-[25px] font-semibold'>Booking</h2>
            <div className='p-5' 
            style={{height:screenHight}}>
                    <AutocompleteAddress />
                    <Cars/>
                    <Cards/>
                    <button className={`w-full
                    bg-yellow-400 p-1 rounded-md mt-3
                     ${!carAmount?'bg-gray-300 hover:bg-gray-400 hover:scale-110':null}`} 
                     disabled={!carAmount}
                    onClick={()=>router.push('/Payment')}>Book</button>
            </div>
        </div>
    )
}
export default Booking