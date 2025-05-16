'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Button = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 10); // Small delay to ensure DOM is ready
      }
    }
  }, [pathname]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      router.push('/');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md bg-[#5c6650] text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Container */}
      <div className={`${isMenuOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-40' : ''}`}>
        <div 
          className={`flex flex-col md:flex-row items-center mt-0 md:mt-[20px] justify-center md:justify-around w-full md:w-[900px] h-auto md:h-16 rounded-none md:rounded-[10px] bg-[#5c6650] z-[50] p-4 md:p-0 gap-4 md:gap-0
          ${isMenuOpen ? 'fixed inset-y-0 left-0 w-3/4 bg-[#5c6650] shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0' : 'hidden md:flex'}`}
        >
          <IconButton targetId="home" onClick={handleHomeClick}>Home</IconButton>
          <IconButton targetId="about">About Us</IconButton>
          <IconButton href="/events">Events</IconButton>
          <IconButton targetId="team">Team</IconButton>
          <IconButton targetId="gallery">Gallery</IconButton>
          <IconButton href="/contact">Contact Us</IconButton>

          <IconButton 
            className="bg-[#fe89aa] hover:bg-[#e67899] text-white font-bold transition-colors duration-300 w-full md:w-[150px] md:mr-[20px]"
            href="/joinus"
          >
            Join Us
          </IconButton>
        </div>
      </div>
    </>
  );
};

const IconButton = ({ 
  children, 
  component = "button", 
  href, 
  className = "", 
  targetId,
  onClick 
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const baseStyles = "w-full md:w-40 h-10 px-4 rounded-full text-white flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 hover:cursor-pointer";

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    
    // Close menu if it's open (for mobile)
    const closeMenu = () => {
      const menuButton = document.querySelector('[aria-label="Toggle menu"]');
      if (menuButton && window.innerWidth < 768) {
        menuButton.click();
      }
    };

    // For targetId sections
    if (targetId && !href) {
      e.preventDefault();
      closeMenu();
      
      if (pathname === '/') {
        // If on home page, scroll to the section
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without reloading
          window.history.pushState({}, '', `/#${targetId}`);
        }
      } else {
        // If on another page, navigate to home with hash
        router.push(`/#${targetId}`);
      }
      return;
    }
    
    // For regular links
    if (href) {
      e.preventDefault();
      closeMenu();
      router.push(href);
      return;
    }
  };

  // Determine the href attribute
  const hrefValue = href || (targetId ? `/#${targetId}` : undefined);

  // Use an anchor tag if we have an href or targetId
  if (href || targetId) {
    return (
      <a 
        href={hrefValue}
        onClick={handleClick}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  // Otherwise use a button
  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;