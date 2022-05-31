import React from 'react'
import {Outlet} from "react-router-dom"

import Header from "../components/navigation/Header"
import Footer from "../components/navigation/Footer"

function BasicLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default BasicLayout