import {Map, Marker} from 'react-map-gl/mapbox';
import React, {useContext,useEffect, useState} from 'react'
import { UserLocationContext } from '../../context/UserLocationContext';
import { DestiCordiContext } from '../../context/DestiCordiContext';
import { SourceCordiContext } from '../../context/SourceCordiContext';

function Markers() {
    const {userLocation, setUserLocation}=useContext(UserLocationContext);
    const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestiCordiContext);    
  return (
    <div>
        {/*user marker or location*/}
        {sourceCordinates.length!=0? <Marker 
              longitude={sourceCordinates?.lng}
              latitude={sourceCordinates?.lat}
              anchor="bottom">
             <img src="./pin.png" 
             className='h-14 w-10'/>
        </Marker>:null}

        {/*destination marker */}

        {destinationCordinates.length!=0? <Marker 
              longitude={destinationCordinates?.lng}
              latitude={destinationCordinates?.lat}
              anchor="bottom">
             <img src="./pin.png" 
             className='h-14 w-10'/>
        </Marker> :null}
        
    </div>


  )
}

export default Markers