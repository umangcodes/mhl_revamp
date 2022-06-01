import React from 'react'
import {Outlet} from "react-router-dom"

import Header from "../components/navigation/Header"
import Footer from "../components/navigation/Footer"

function BasicLayout() {
  return (
    <div className="mx-5">
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default BasicLayout