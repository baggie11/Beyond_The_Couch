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