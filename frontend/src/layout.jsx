import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/common/navbar'
import Footer from './components/common/footer'



function layout() {
    return (
        <>
            <Navbar />
            <Outlet />

            <Footer />
        </>
    )
}

export default layout