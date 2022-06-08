import React from 'react'
import {convertTime} from "../../../functions"
function LocationCardSum(props) {
    let lab = props.data
  return (
    <div className=' lg:flex justify-between w-4/5 h-4/5 border-2 border-black rounded-xl my-2 p-2'>
        {/* Lab Id */}
        <div className='font-bold text-2xl'>
        {lab.area} {lab.labId}
        </div>

        {/* lab address */}
        <div className='flex flex-col font-semibold text-lg'>
            <span>{lab.address1}</span>
            <span>{lab.city} {lab.province} {lab.postalCode}</span>
        </div>

        {/* lab operation hours */}
        <div className='flex flex-col px-5'>
            {/* create a function to convert time from 24 to 12 */}
            <span>Mon: {convertTime(lab.operationHours.mon.start)} - {convertTime(lab.operationHours.mon.end)}</span>
            <span>Tue: {convertTime(lab.operationHours.tue.start)} - {convertTime(lab.operationHours.tue.end)}</span>
            <span>wed: {convertTime(lab.operationHours.wed.start)} - {convertTime(lab.operationHours.wed.end)}</span>
            <span>Thu: {convertTime(lab.operationHours.thu.start)} - {convertTime(lab.operationHours.thu.end)}</span>
            <span>Fri: {convertTime(lab.operationHours.fri.start)} - {convertTime(lab.operationHours.fri.end)}</span>
            <span>Sat: {convertTime(lab.operationHours.sat.start)} - {convertTime(lab.operationHours.sat.end)}</span>
            {lab.operationHours.sun.start ? <span>Sun: {convertTime(lab.operationHours.sun.start)} - {convertTime(lab.operationHours.sun.end)}</span> : <span>Sun : closed</span> }
            
        </div>

    </div>
  )
}

export default LocationCardSum