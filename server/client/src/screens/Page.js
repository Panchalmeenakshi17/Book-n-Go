"use client"

import React,{useState} from 'react';
import SearchSection from '../screens/SearchSection';
import GoogleMapSection from './GoogleMapSection';
import {SourceContext} from '../context/SourceContext';
import {DestinationContext} from '../context/DestinationContext';
// import { LoadScript } from '@react-google-maps/api';

const Page = () => {

  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <SourceContext.Provider value={{source,setSource}}>
    <DestinationContext.Provider value={{destination,setDestination}}>
    {/* <LoadScript libraries={['places']} googleMapsApiKey='AIzaSyA3a7ovUHUGvCNl6pmQZUTOoM6WtowHHt4'> */}
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
      <div>
        <SearchSection />
      </div>
      <div className='col-span-2'>
        <GoogleMapSection />
      </div>
    </div>
    {/* </LoadScript> */}
    </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}

export default Page
