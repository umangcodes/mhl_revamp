import React from 'react'
import labs from "../data/labs"
function SccLocations(props) {
  return (
    <div>
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
  )
}

export default SccLocations