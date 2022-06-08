import React from 'react'
import {useParams} from "react-router-dom"
function LocationDetails(props) {
    const {locationId} = useParams()
  return (
    <div>
        location: {locationId}
    </div>
  )
}

export default LocationDetails