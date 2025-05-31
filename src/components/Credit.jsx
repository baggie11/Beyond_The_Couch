import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Credit = () => {
    return(
        <div className="fixed bottom-5 right-5 z-50">
        <div className="relative group">
          {/* Main bubble with animated border */}
          <div className="backdrop-blur-lg bg-[#2a2e24]/90 border-2 border-transparent group-hover:border-[#fe89aa] p-1 rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:shadow-[0_0_20px_3px_rgba(254,137,170,0.4)]">
            {/* Inner content container */}
            <div className="flex items-center space-x-3 px-4 py-2">
              {/* Developer name with animated underline */}
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[#fe89aa] font-medium text-sm group/name"
              >
                <span className="z-10 relative">Developed by Bagavati</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fe89aa] group-hover/name:w-full transition-all duration-300 ease-out"></span>
              </a>
      
              {/* Animated divider that grows on hover */}
              <div className="relative h-6">
                <div className="absolute top-1/2 left-1/2 w-px h-0 bg-gradient-to-b from-transparent via-[#fe89aa] to-transparent group-hover:h-6 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"></div>
              </div>
      
              {/* LinkedIn icon with floating animation */}
              <a
                href="https://www.linkedin.com/in/bagavati-narayanan-98484b292/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute -inset-1 rounded-full bg-[#fe89aa] opacity-0 group-hover/link:opacity-20 blur-md transition duration-300"></div>
                <FaLinkedin 
                  className="text-[#fe89aa] hover:text-[#ff9eb8] transition-colors duration-300" 
                  size={18} 
                />
              
              </a>
            </div>
          </div>
      
          {/* Floating decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#fe89aa] opacity-0 group-hover:opacity-100 animate-float transition duration-500 delay-75"></div>
          <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-[#fe89aa]/70 opacity-0 group-hover:opacity-100 animate-float transition duration-500 delay-150"></div>
        </div>
      </div>
      
    )
}

export default Credit;