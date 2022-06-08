import React from 'react'
import LocationCardSum from '../components/cards/location/LocationCardSum'
import labs from "../data/labs"
function Locations() {
  return (
    <div className=''>
        Locations
        <div className='flex flex-col w-full'>
        {labs.map((lab, index) => <LocationCardSum key={index} data={lab}/>)}
        </div>
    </div>
  )
}

export default Locations