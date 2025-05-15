"use client"
import React from 'react'
import Roles from '@/components/Roles'
import Button from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/Contact'

export default function Contact() {
  return (
    <div className="relative bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8]">
     
      <div className="absolute inset-0 overflow-hidden opacity-20">
  {/* Layered wave patterns */}
  <div className="absolute inset-0" 
       style={{
         backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='1200' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,200 Q150,250 300,200 T600,220 T900,180 T1200,210 L1200,800 L0,800 Z' fill='%23f0c2d8'/%3E%3Cpath d='M0,300 Q150,350 300,300 T600,320 T900,280 T1200,310 L1200,800 L0,800 Z' fill='%23c2e0d0' opacity='0.7'/%3E%3C/svg%3E\")",
         backgroundSize: "cover"
       }}>
  </div>
</div>
       
        
      
        

      {/* Main content (unchanged) */}
      <div className="relative z-1">
        {/* Navbar with fixed positioning to stay visible on scroll */}
        <div className="fixed top-0 left-[300px] w-full z-10 ">
          <Button />
        </div>
        <div className='mt-[-40px] '>
          <ContactForm/>
        </div>
        <div className='mt-[30px]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}