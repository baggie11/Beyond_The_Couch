"use client"
import React from 'react'
import Roles from '@/components/Roles'
import Button from '@/components/Navbar'
import Footer from '@/components/Footer'
import StorybookInitiative from '@/components/StoryBook'

export default function RolesAndNotes() {
  return (
    <div className="relative min-h-screen">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(135deg, #e8f0e6 0%, #feeef4 50%, #e8f0e6 100%)`
          }}
        ></div>
        
      
        
        {/* Soft Blob Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ffd6e5] opacity-30 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#d8e0d5] opacity-30 mix-blend-multiply filter blur-3xl"></div>
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.10'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="fixed top-0 left-[300px] w-full z-10">
          <Button />
        </div>
        <div className='mt-[-40px]'>
          <StorybookInitiative/>
        </div>
        <div className='mt-[30px]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}