'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active item tracking
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash.substring(1);
      if (['home', 'about', 'team', 'gallery'].includes(hash)) {
        setActiveItem(hash);
      } else {
        setActiveItem('home');
      }
    } else {
      setActiveItem(pathname.substring(1));
    }
  }, [pathname]);

  // Menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveItem('home');
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const NavButton = ({ children, href, targetId, onClick, isSpecial = false }) => {
    const isActive = activeItem === (targetId || (href ? href.substring(1) : ''));
    
    const handleClick = (e) => {
      if (onClick) return onClick(e);
      if (window.innerWidth < 768) setIsMenuOpen(false);
      setActiveItem(targetId || (href ? href.substring(1) : ''));
      
      if (targetId && !href) {
        e.preventDefault();
        if (pathname === '/') {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState({}, '', `/#${targetId}`);
          }
        } else {
          router.push(`/#${targetId}`);
        }
      } else if (href) {
        e.preventDefault();
        router.push(href);
      }
    };

    return (
      <div className="relative">
        <a 
          href={href || (targetId ? `/#${targetId}` : '#')}
          onClick={handleClick}
          className={`
            px-4 py-2 md:py-1.5 rounded-full transition-all duration-200 
            flex items-center justify-center
            ${isSpecial ? 
              `bg-[#fe89aa] text-white font-medium shadow-md
               hover:shadow-lg hover:bg-[#fe89aa]/90
               border-2 border-white rounded-full` : 
              isActive ? 
                `text-white font-medium` : 
                `text-white hover:bg-white/10 rounded-full`
            }
            ${isSpecial ? 'mx-1' : 'mx-0.5'}
          `}
        >
          {children}
        </a>
        {isSpecial && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe89aa] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fe89aa]"></span>
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full transition-all 
          ${isMenuOpen ? 'bg-[#fe89aa]' : 'bg-[#5c6650]'} 
          shadow-md hover:shadow-lg`}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"></div>
      )}

      {/* Navigation container */}
      <div className="fixed top-0 left-[8px] right-0 z-40 h-[50px] flex justify-center pointer-events-none">
        <nav 
          className={`
            pointer-events-auto transition-all duration-300
            ${isScrolled ? 'md:shadow-lg' : 'md:shadow-md'}
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#5c6650] shadow-xl
            md:relative md:w-auto md:max-w-none md:mt-4 md:rounded-lg
          `}
        >
          <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-2">
            {/* Mobile close button */}
            <div className="md:hidden flex justify-end w-full mb-2">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-[#4a5340]"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex flex-col md:flex-row items-center w-full md:justify-center space-y-3 md:space-y-0 md:space-x-1">
              <NavButton targetId="home" onClick={handleHomeClick}>Home</NavButton>
              <NavButton targetId="about">About</NavButton>
              <NavButton href="/events" isSpecial>Events</NavButton>
              <NavButton href="/projects">Projects</NavButton>
              <NavButton targetId="team">Team</NavButton>
              <NavButton targetId="gallery">Gallery</NavButton>
              <NavButton href="/contact">Contact</NavButton>
            </div>

            {/* Join Us button - only show on desktop */}
            <div className="hidden md:block md:ml-2">
              <NavButton 
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

export default Navbar;