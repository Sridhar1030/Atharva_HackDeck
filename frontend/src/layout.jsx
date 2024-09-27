import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/common/navbar'
import Footer from './components/common/footer'
import TopBar from './components/common/TopBar'



function layout() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Outlet />

            <Footer />
        </>
    )
}

export default layout