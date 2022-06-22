import React, { useEffect, useState } from 'react'
import LocationCardSum from '../components/cards/location/LocationCardSum'
import labs,{sccLocations} from "../data/labs"
import {useNavigate} from "react-router-dom"
import db from "../firebase/Firebase"
import {collection, getDocs} from "firebase/firestore"
function Locations() {
  const locationRef = collection(db, 'locations')
  const [locations, setLocations] = useState([])
  let navigate = useNavigate()
  const testCenters = sccLocations()
  let selectedLocation = ''
  const handleClick = (e) => {
    e.preventDefault()
    selectedLocation = e.currentTarget.id
    // navigate(`/location/${selectedLocation}`)
  }
  
  useEffect(() => {const getLocations = async() => { const resp = await getDocs(locationRef); setLocations(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); console.log(locations)}; getLocations()},[])
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