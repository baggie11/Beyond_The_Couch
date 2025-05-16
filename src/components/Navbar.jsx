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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('.menu-toggle-btn')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        className={`px-4 py-2 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4a5340] active:scale-95 ${className}`}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      )}

      {/* Navigation container - properly centered */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none w-full">
        <nav 
          className={`mobile-menu-container pointer-events-auto transition-all duration-300
            ${isScrolled ? 'md:shadow-lg' : 'md:shadow-md'}
            ${isMenuOpen ? 'right-0' : '-right-full md:right-auto'}
            md:relative md:w-auto md:min-w-[800px] md:mt-4 md:px-0
            fixed top-0 h-[20px] w-3/4 max-w-xs
          `}
        >
          <div 
            className={`flex flex-col md:flex-row items-center justify-center w-full h-full 
              md:rounded-xl bg-[#5c6650] md:px-8 md:py-2 gap-2
              ${isMenuOpen ? 'shadow-lg' : ''}
              p-6 md:h-auto
            `}
          >
            {/* Navigation items */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <NavButton targetId="home" onClick={handleHomeClick}>Home</NavButton>
              <NavButton targetId="about">About Us</NavButton>
              <NavButton href="/events">Events</NavButton>
              <NavButton href="/projects">Projects</NavButton>
              <NavButton targetId="team">Team</NavButton>
              <NavButton targetId="gallery">Gallery</NavButton>
              <NavButton href="/contact">Contact Us</NavButton>
            </div>

            {/* Join Us button */}
            <div className="mt-6 md:mt-0 md:ml-[20px] w-full ">
              <NavButton 
                className="bg-[#fe89aa] hover:bg-[#e67899] text-white font-bold hover:scale-105 w-full "
                href="/joinus"
              >
                Join Us
              </NavButton>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;