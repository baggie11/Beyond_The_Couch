'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash navigation handling
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
        }, 10);
      }
    }
  }, [pathname]);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('.menu-toggle-btn')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Close menu on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const NavButton = ({ 
    children, 
    href, 
    className = "", 
    targetId,
    onClick 
  }) => {
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
        return;
      }
      
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }

      if (targetId && !href) {
        e.preventDefault();
        if (pathname === '/') {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            window.history.pushState({}, '', `/#${targetId}`);
          }
        } else {
          router.push(`/#${targetId}`);
        }
        return;
      }
      
      if (href) {
        e.preventDefault();
        router.push(href);
        return;
      }
    };

    return (
      <a 
        href={href || (targetId ? `/#${targetId}` : '#')}
        onClick={handleClick}
        className={`px-4 py-3 md:py-2 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4a5340] active:scale-95 ${className}`}
      >
        {children}
      </a>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="menu-toggle-btn md:hidden fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 bg-[#5c6650] hover:bg-[#4a5340] shadow-lg"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6 text-white"
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

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"></div>
      )}

      {/* Navigation container */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none w-full">
        <nav 
          className={`mobile-menu-container pointer-events-auto transition-all duration-300 ease-in-out
            ${isScrolled ? 'md:shadow-lg' : 'md:shadow-md'}
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            md:relative md:w-auto md:min-w-[850px] md:mt-4
            fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#5c6650] shadow-xl md:rounded-full
          `}
        >
          <div 
            className={`flex flex-col md:flex-row items-center justify-between w-full h-full 
              md:rounded-full bg-[#5c6650] md:px-8 md:py-2 gap-2
              p-6 md:h-auto overflow-y-auto
            `}
          >
            {/* Close button for mobile */}
            <div className="md:hidden flex justify-end w-full mb-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-[#4a5340]"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex flex-col md:flex-row items-center w-full md:justify-center space-y-4 md:space-y-0">
              <NavButton targetId="home" onClick={handleHomeClick}>Home</NavButton>
              <NavButton targetId="about">About Us</NavButton>
              <NavButton href="/events">Events</NavButton>
              <NavButton href="/projects">Projects</NavButton>
              <NavButton targetId="team">Team</NavButton>
              <NavButton targetId="gallery">Gallery</NavButton>
              <NavButton href="/contact">Contact Us</NavButton>
            </div>

            {/* Join Us button */}
            <div className="mt-8 md:mt-0 md:ml-5">
              <NavButton 
                className="bg-[#fe89aa] hover:bg-[#e67899] text-white font-bold w-full md:w-auto text-center"
                href="/joinus"
              >
                Join
              </NavButton>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;