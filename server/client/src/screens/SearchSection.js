"use client"

import React,{useContext,useState} from 'react';
import InputItem from './InputItem';
import {SourceContext} from '../context/SourceContext';
import {DestinationContext} from '../context/DestinationContext';
import CarListOptions from './CarListOptions';

const SearchSection = () => {

  const {source,setSource} = useContext(SourceContext);
  const {destination,setDestination} = useContext(DestinationContext);
  const [distance, setDistance] = useState();

  const calculateDistance = () => {
    const dist = window.google.maps.geometry.spherical.computeDistanceBetween(
      {lat:source.lat,lng:source.lng},
      {lat:destination.lat,lng:destination.lng}
    )

    // console.log(dist*0.000621374);
    setDistance(dist*0.000621374); // miles
  }

  return (<div>
    <div className='p-2 md:p-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Get a ride</p>
      <InputItem type='source' />
      <InputItem type='destination'/>
      <button onClick={() => calculateDistance()} className='p-3 bg-[#50b450] w-full mt-5 text-white rounded-lg'>Search</button>
    </div>
    {distance ? <CarListOptions distance={distance} /> : null}
    {/* <CarListOptions distance={distance} /> */}
    </div>
  )
}

export default SearchSection
