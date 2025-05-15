// Component for Role and Notes sections
"use client"
import React from 'react'
import Roles from '@/components/Roles'
import Button from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventsLayout from '@/components/Events'

export default function RolesAndNotes() {
  return (
    <div className="relative bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8]">
     
     
       
     <div className="absolute inset-0 overflow-hidden">
  {/* Base gradient mesh */}
  <div className="absolute inset-0 opacity-30" style={{background: `radial-gradient(...)`}}></div>
  
  {/* Pattern overlay */}
  <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url(...)`}}></div>
  
  {/* Subtle noise */}
  <div className="absolute inset-0 opacity-05" style={{backgroundImage: `url("data:image/svg+xml,...noise...)`}}></div>
</div>
      
        

      {/* Main content (unchanged) */}
      <div className="relative z-1">
        {/* Navbar with fixed positioning to stay visible on scroll */}
        <div className="fixed top-0 left-[300px] w-full z-10 ">
          <Button />
        </div>
        <div className='mt-[-40px] '>
          <EventsLayout/>
        </div>
        <div className='mt-[30px]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
