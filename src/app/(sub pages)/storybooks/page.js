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
      {/* Main Content */}
      <div className="relative">
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