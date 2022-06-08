import React from 'react'

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
            <span>Mon: {lab.operationHours.mon.start} till {lab.operationHours.mon.end}</span>
            <span>Tue: {lab.operationHours.tue.start} till {lab.operationHours.tue.end}</span>
            <span>wed: {lab.operationHours.wed.start} till {lab.operationHours.wed.end}</span>
            <span>Thu: {lab.operationHours.thu.start} till {lab.operationHours.thu.end}</span>
            <span>Fri: {lab.operationHours.fri.start} till {lab.operationHours.fri.end}</span>
            <span>Sat: {lab.operationHours.sat.start} till {lab.operationHours.sat.end}</span>
            {lab.operationHours.sun.start ? <span>Sun: {lab.operationHours.sun.start} till {lab.operationHours.sun.end}</span> : <span>Sun : closed</span> }
            
        </div>

    </div>
  )
}

export default LocationCardSum