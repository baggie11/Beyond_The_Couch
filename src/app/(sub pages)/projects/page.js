"use client"
import React, { useEffect } from 'react'
import Roles from '@/components/Roles'
import Button from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventsPage from '@/components/Projects'
import { useRouter } from 'next/navigation'

export default function RolesAndNotes() {
  const router = useRouter()

  useEffect(() => {
    // Handle scroll after page loads
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Your existing background elements */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(135deg, #e8f0e6 0%, #feeef4 50%, #e8f0e6 100%)`
          }}
        ></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ffd6e5] opacity-30 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#d8e0d5] opacity-30 mix-blend-multiply filter blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.10'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="sticky top-0 left-0 w-full z-10">
          <Button />
        </div>
        
        <main className="flex-grow">
          <EventsPage/>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}