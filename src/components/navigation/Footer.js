import React from 'react'

function Footer() {
  return (
    <div className='border-t my-5 py-5'>
      <div className=' h-96 bg-primary flex flex-col justify-around lg:flex-row '>
        <div className='flex flex-col justify-around lg:flex-row'>
          <div>Support
            <p> Phone: +1(xxx)xxx-xxxx</p>
            <p> Fax: +1(xxx)xxx-xxxx</p>
          </div>
          <div>Main Facility
            <p>1216 Lawrence Ave W, North York, ON</p>
          </div>
        </div>
        <div className='flex'>Map</div>
      </div>
      <div className='flex justify-center py-5 font-semibold text-center'>Copyright © 2022 Med-Health Laboratories Ltd. All rights reserved</div>
    </div>
  )
}

export default Footer