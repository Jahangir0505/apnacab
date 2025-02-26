import React, { useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';

function Booking() {
    const [amount,setAmount]=useState();
    const router:any = useRouter()
    return (
        <div className='p-5 h-[90vh]'>
            <h2 className='mb-20  text-[25px] font-semibold'>Booking</h2>
            <div className='w-full max-w-md'>
                <div className='-mt-10'>
                    <AutocompleteAddress />
                    <Cars/>
                    <Cards/>
                    <button className='w-full
                    bg-yellow-400 p-1 rounded-md mt-4'
                    onClick={()=>router.push('/Payment')}>Book</button>
                </div>
            </div>
        </div>
    )
}
export default Booking