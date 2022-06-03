import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
function Footer() {
  return (
    <div className='border-t my-5 py-5'>
      <div className=' h-96 bg-primary flex flex-col justify-around lg:flex-row px-5'>
        <div className='flex flex-col justify-around lg:flex-row'>
          <div className='lg:mx-5'>
          <span className='font-semibold text-lg'>Support</span>
            <div className='flex my-2'>
              <PhoneIcon />
            <p> +1(416)256-7278</p>
            </div>
            <div className='flex my-2'>
              <FaxIcon />
            <p> +1(416)256-7697</p>
            </div>
          </div>
          <div className='lg:mx-5'>
            <span className='font-semibold text-lg'>Main Facility</span>
            <div className='flex'>
            <LocationOnIcon />
            <p>1216 Lawrence Ave W, North York, ON</p>
            </div>
          </div>
        </div>
        <div className='flex'>Map</div>
      </div>
      <div className='flex justify-center py-5 font-semibold text-center'>Copyright © 2022 Med-Health Laboratories Ltd. All rights reserved</div>
    </div>
  )
}

export default Footer