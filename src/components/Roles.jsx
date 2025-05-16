"use client"
import React from "react"

export default function Roles() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8] min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-20 mt-[100px] max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="text-[#fe89aa]">Your </span>
          <span className="text-[#fe89aa] ">Volunteer Role</span>
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#fe89aa] to-[#5c6650] mx-auto mb-8"></div>
        <p className="text-xl text-[#5c6650]/90 max-w-2xl mx-auto leading-relaxed">
          Discover how you can make an impact as a Beyond the Couch volunteer
        </p>
      </section>

      {/* Role Cards Section */}
      <section className="mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Stay Active",
              desc: "Actively respond to your team heads, pitch in with ideas, and stay engaged",
              color: "pink",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Join Meetings",
              desc: "Attend team meetings and participate in discussions",
              color: "pink",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Take Initiative",
              desc: "Volunteer for leadership roles and propose new ideas",
              color: "green",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Bring Your Network",
              desc: "Share relevant connections and opportunities",
              color: "green",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            }
          ].map((role, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#5c6650]/30 border border-transparent
             `}
            >
              <div className={`p-3 rounded-lg inline-flex 
                  bg-[#5c6650]/10 text-[#5c6650]
              `}>
                {role.icon}
              </div>
              <h3 className={`text-2xl font-bold mt-4 mb-3 text-[#5c6650]
              `}>
                {role.title}
              </h3>
              <p className="text-[#5c6650]/90 leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="mb-24 text-center">
        <h3 className="text-2xl sm:text-3xl text-[#5c6650] mb-8">
          Ready to make a difference?
        </h3>
        <a 
          href="https://forms.gle/5Ffmahz56T3t88xH9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#fe89aa] to-[#fe89aa]/90 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </section>

      {/* Important Notes Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#fe89aa]">Important </span>
            <span className="text-[#fe89aa]">Information</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#fe89aa] to-[#5c6650] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Certificates & LORs",
              desc: "Requires 4+ months of work. LORs are performance-based for exceptional contributors.",
              color: "pink",
              details: [
                "Minimum 4 months commitment",
                "LORs for outstanding contributions",
                "Certificate upon completion"
              ]
            },
            {
              title: "Taking Breaks",
              desc: "We understand life happens! Here's how to request time off:",
              color: "green",
              details: [
                "Email info.beyondthecouch@gmail.com",
                "Mention reason and duration",
                "For exams, travel, or personal needs"
              ]
            }
          ].map((note, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 shadow-md bg-[#5c6650]/5 border-l-4 border-[#5c6650]
              `}
            >
              <h3 className={`text-2xl font-bold mb-4 'text-[#5c6650]'
              `}>
                {note.title}
              </h3>
              <p className="text-[#5c6650]/90 mb-4">
                {note.desc}
              </p>
              <ul className="space-y-2">
                {note.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`inline-block mr-2 text-[#5c6650]
                    `}>•</span>
                    <span className="text-[#5c6650]/90">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}