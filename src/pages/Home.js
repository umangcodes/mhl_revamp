import React from 'react'
import Welcome from "../components/panels/homepage/Welcome"
import certificate from "../images/certificate.jpg"
import Partners from "../components/panels/Partners"
function Home() {
  return (
    <div className='min-h-screen'>
      <Welcome />
      <img className="my-5" src={certificate}/>

    </div>
  )
}

export default Home