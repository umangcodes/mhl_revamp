import React, { useEffect } from 'react'
import LocationCardSum from '../components/cards/location/LocationCardSum'
import labs,{sccLocations} from "../data/labs"
import {useNavigate} from "react-router-dom"
function Locations() {
  let navigate = useNavigate()
  const testCenters = sccLocations()
  let selectedLocation = ''
  const handleClick = (e) => {
    e.preventDefault()
    selectedLocation = e.currentTarget.id
    // navigate(`/location/${selectedLocation}`)
  }
  useEffect(() => {},[selectedLocation])
  return (
    <div className='flex flex-col justify-center items-center'>
        <ul className="">
          <li className="list-disc">WALK IN SERVICES AVAILABLE AT ALL LOCATIONS -NO WAIT</li>
          <li className="list-disc">BOOK AN APPOINTMENT ONLINE BY CLICKING ON A LOCATION</li>
          <li className="list-disc">ALL WEEKEND HOURS ARE WALK-IN ONLY</li>
          <li className="list-disc">OHIP INSURED</li>
          <li className="list-disc">WE ACCEPT ALL REQUISTIONS FROM ANY PHYSICIAN IN CANADA</li>
        </ul>
        <div className='flex flex-col w-full h-screen my-10'>
          <div className='lg:grid lg:grid-cols-4 '>
            {testCenters.map((testCenter) => <button id={testCenter} onClick={(testCenter) => handleClick(testCenter)} className='border-2 h-36 lg:mx-16 rounded-xl hover:shadow-xl bg-secondaryLight lg:text-2xl active:bg-secondaryDark active:shadow-none focus:outline-none'>{testCenter}</button>)}
          </div>
        {labs.map((lab, index) =>
        { 
        if(lab.area === selectedLocation){
          <div>
          <LocationCardSum key={index} data={lab}/>
          </div>
        }
      }
        )
        }
        </div>
    </div>
  )
}

export default Locations