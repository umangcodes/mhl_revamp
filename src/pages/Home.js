import React from 'react'
import Welcome from "../components/panels/homepage/Welcome"
import certificate from "../images/certificate.jpg"
import Partners from "../components/panels/Partners"
function Home() {
  return (
    <div className='min-h-screen'>
      <Welcome />
      <div className='my-5  flex justify-center align-center'>
        <img className="object-cover lg:h-3/5 lg:w-4/5" src={certificate}/>
      </div>      
    </div>
  )
}

export default Home