"use client"
import React from "react"

export default function Roles() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8] min-h-screen">
      {/* Your Role Section */}
      <section className="mb-20 mt-[100px]">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center gap-3 mb-4">
            <span className="text-[#fe89aa] text-4xl sm:text-5xl font-bold">WHAT IS</span>
            <span className="text-[#5c6650] text-4xl sm:text-5xl italic font-serif font-semibold">Your Role</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#fe89aa] opacity-80 mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Understand your responsibilities as a Beyond the Couch volunteer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Role Cards */}
          {[
            {
              title: "Stay Active",
              desc: "Actively respond to your team heads, pitch in with ideas, and stay engaged",
              color: "pink"
            },
            {
              title: "Join Meetings",
              desc: "Attend team meetings and participate in discussions",
              color: "pink"
            },
            {
              title: "Take Initiative",
              desc: "Volunteer for leadership roles and propose new ideas",
              color: "green"
            },
            {
              title: "Bring Your Network",
              desc: "Share relevant connections and opportunities",
              color: "green"
            }
          ].map((role, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 ${
                role.color === 'pink' 
                  ? 'border-[#fe89aa] hover:border-[#fe89aa]/90' 
                  : 'border-[#5c6650] hover:border-[#5c6650]/90'
              }`}
            >
              <div className="flex items-center mb-5">
                <div className={`mr-4 p-2 rounded-md ${
                  role.color === 'pink'
                    ? 'text-[#fe89aa] border border-[#fe89aa]'
                    : 'text-[#5c6650] border border-[#5c6650]'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className={`text-3xl font-bold ${
                  role.color === 'pink' ? 'text-[#fe89aa]' : 'text-[#5c6650]'
                }`}>
                  {role.title}
                </h3>
              </div>
              <p className="text-[#5c6650] text-lg italic">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <div className="flex justify-center my-16">
        <button className="bg-[#fe89aa] hover:bg-[#5c6650] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300 flex items-center gap-2 group">
        <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfvWVP2wDawKAByAXDLYtZfXU7hF_7EzKI4395XK-mu70N8-w/viewform" 
  target="_blank" 
  rel="noopener noreferrer" 
  className=""
>
  Join Us as a Volunteer
</a>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>


      {/* Team Image */}
      <section className="mb-20 flex justify-center">
        <div className="w-[200px] md:w-4/5 rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-[#fe89aa]/20 to-[#5c6650]/20 flex items-center justify-center h-[500px]">
            <img src="/images/pic1.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-2">
            <span className="text-[#fe89aa] italic font-serif font-semibold">Important</span>
            <span className="text-[#5c6650]"> notes</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#fe89aa] opacity-80 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Certificates/LORs",
              desc: "Requires 4+ months of work. LORs are performance-based for exceptional contributors.",
              color: "pink"
            },
            {
              title: "Breaks",
              desc: "Email info.beyondthecouch@gmail.com to request leave for exams, travel, or personal needs.",
              color: "green"
            }
          ].map((note, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm ${
                note.color === 'pink' 
                  ? 'border-t-4 border-[#fe89aa]' 
                  : 'border-t-4 border-[#5c6650]'
              }`}
            >
              <h3 className={`text-2xl sm:text-3xl font-bold mb-5 ${
                note.color === 'pink' ? 'text-[#fe89aa]' : 'text-[#5c6650]'
              }`}>
                {note.title}
              </h3>
              <p className="text-[#5c6650] text-lg italic">
                {note.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}