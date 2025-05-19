// Component for Role and Notes sections
"use client"
import React from 'react'
import Roles from '@/components/Roles'
import Button from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventPage from '@/components/Events'

export default function RolesAndNotes() {
  return (
    <div className="relative bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8]">
     
     
    
      
        

      {/* Main content (unchanged) */}
      <div className="relative z-1">
        {/* Navbar with fixed positioning to stay visible on scroll */}
        <div className="fixed top-0 left-[300px] w-full z-10 ">
          <Button />
        </div>
        <div className='mt-[-40px] '>
          <EventPage/>
        </div>
        <div className='mt-[30px]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
