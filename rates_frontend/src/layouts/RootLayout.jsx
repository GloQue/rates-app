import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <main className='main_layout'>
        <Nav />
        <Outlet />
        <Footer />
    </main>
  )
}

export default RootLayout