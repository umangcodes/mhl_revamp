import React from 'react'
import logo from "../../images/MHL.png"
import {Link} from "react-router-dom"
import {openLinkInNewWindow} from "../../functions"
function Header() {
  return (
    <div className='sticky top-0 flex justify-around  py-5 bg-primaryDark'>
      <div className='text-2xl align-center'>
        <Link to="/">
          <img className="obejct-scale-down w-36 lg:w-48" src={logo}/>
        </Link>
      </div>
      <div className="flex w-96 justify-around ">
        <Link to="/" className="flex flex-col justify-center items-center hover:font-semibold w-48">Home</Link>
        <Link to="/about" className="flex flex-col justify-center items-center  hover:font-semibold w-48">About</Link>
        <Link to="/contact-us" className="flex flex-col justify-center items-center  hover:font-semibold w-48">Contact us</Link>
        <button className='flex flex-col justify-center items-center  hover:font-semibold w-48' onClick={() => openLinkInNewWindow("https://results.mhlab.ca/patient/#/login")}>Results</button>
      </div>
    </div>
  )
}

export default Header