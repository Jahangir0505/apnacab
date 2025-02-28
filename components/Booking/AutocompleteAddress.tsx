"use client"
import React, { useContext, useEffect, useState } from 'react'
import { SourceCordiContext } from '../../context/SourceCordiContext'
import { DestiCordiContext } from '../../context/DestiCordiContext'

function AutocompleteAddress() {
    const session_token = '5ccc4a4-ab0a-4a7c-943d-580e55542363'
    const MAPBOX_RETRIVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/'
    const [source, setSource] = useState<string>('')
    const [sourceChange, setSourceChange] = useState<boolean>(false)

    const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestiCordiContext);
    const [sourceAddressList, setSourceAddressList] = useState<any>([])
    const [destinationAddressList, setDestinationAddressList] = useState<any>([])
    const [destinationChange, setDestinationChange] = useState<boolean>(false)

    const [destination, setDestination] = useState<string>('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList(source, setSourceAddressList)
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [source])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList(destination, setDestinationAddressList)
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [destination])

    const getAddressList = async (query: string, setList: React.Dispatch<React.SetStateAction<any[]>>) => {
        if (!query || query.trim() === '') {
            setList([]); // Clear suggestions if input is empty
            return; // Exit the function if no input
        }
        const res = await fetch('/api/search-address?q=' + query, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await res.json()
        setList(result.suggestions || []); // Use setList to update the address list
    }

    const onSourceAddressClick = async (item: any) => {
        setSource(item.full_address);
        setSourceAddressList([]);
        setSourceChange(false);
        const res = await fetch(`${MAPBOX_RETRIVE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}`)
        const result = await res.json()
        setSourceCordinates({
            lng: result.features[0].geometry.coordinates[0],
            lat: result.features[0].geometry.coordinates[1]
        })
        console.log(result)
    }

    const onDestinationAddressClick = async (item: any) => {
        setDestination(item.full_address);
        setDestinationAddressList([]);
        setDestinationChange(false);
        const res = await fetch(`${MAPBOX_RETRIVE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}`)
        const result = await res.json()
        setDestinationCordinates({
            lng: result.features[0].geometry.coordinates[0],
            lat: result.features[0].geometry.coordinates[1]
        })
        console.log(result)
    }

    return (
        <div className='mt-[-1rem]'>
            <div className='relative'>
                <label className='text-black-300 text-[20px]'>From</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none
                    focus:outline-yellow-500'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
                {sourceAddressList.length > 0 && (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {sourceAddressList.map((item: any, index: number) => (
                            <h2 key={`source-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { onSourceAddressClick(item) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                )}
            </div>
            <div className='relative mb-20'>
                <label className='text-black-300 text-[20px]'>To</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none focus:outline-yellow-500'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                {destinationAddressList.length > 0 && (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {destinationAddressList.map((item: any, index: number) => (
                            <h2 key={`destination-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { onDestinationAddressClick(item) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AutocompleteAddress