import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f9f5f8] to-[#f5fcf8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-[#5c6650]">
              <span className="mr-2">🌿</span> Beyond the Couch
            </h2>
            <p className="text-[#5c6650] mb-4">
              Creating mental health awareness through art and storytelling.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon="instagram" />
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="email" />
              <SocialIcon icon="phone" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5c6650]">Explore</h3>
              <ul className="space-y-2">
                <li><FooterLink href="/#home">Home</FooterLink></li>
                <li><FooterLink href="/#about">About Us</FooterLink></li>
                <li><FooterLink href="/events">Events</FooterLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5c6650]">Connect</h3>
              <ul className="space-y-2">
                <li><FooterLink href="/#team">Our Team</FooterLink></li>
                <li><FooterLink href="/#gallery">Gallery</FooterLink></li>
                <li><FooterLink href="/contact">Contact</FooterLink></li>
              </ul>
            </div>
          </div>

          {/* CTA Column */}
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-[#5c6650]">Join Our Mission</h3>
            <p className="text-[#5c6650] mb-4">
              Help us create greater access to mental health resources.
            </p>
            <Link 
              href="/joinus" 
              className="inline-block px-5 py-2 bg-[#fe89aa] text-white rounded-full font-medium hover:bg-[#e67899] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#5c6650]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#5c6650] text-sm">
            © {new Date().getFullYear()} Beyond the Couch. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-[#5c6650] hover:text-[#fe89aa] text-sm">Privacy</Link>
            <Link href="/terms" className="text-[#5c6650] hover:text-[#fe89aa] text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable components
function FooterLink({ href, children }) {
  const isHashLink = href.startsWith('/#');
  
  if (isHashLink) {
    return (
      <Link 
        href={href}
        scroll={false}
        className="text-[#5c6650] hover:text-[#fe89aa] transition-colors"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-[#5c6650] hover:text-[#fe89aa] transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon }) {
  const icons = {
    instagram: {
      href: "https://www.instagram.com/beyond.thecouch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
        </svg>
      )
    },
    linkedin: {
      href: "https://www.linkedin.com/company/beyond-the-couch/?viewAsMember=true",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
        </svg>
      )
    },
    email: {
      href: "mailto:info.beyondthecouch@gmail.com",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.7l-8 5.3-8-5.3V6l8 5.3L20 6v2.7z" fill="currentColor"/>
        </svg>
      )
    },
    phone: {
      href: "tel:8360111405",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
        </svg>
      )
    }
  };

  const iconData = icons[icon];
  if (!iconData) return null;

  return (
    <a
      href={iconData.href}
      className="text-[#5c6650] hover:text-[#5c6650] transition-colors"
      target={icon === 'email' || icon === 'phone' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      aria-label={icon}
    >
      <span className="inline-flex items-center justify-center w-6 h-6">
        {iconData.svg}
      </span>
    </a>
  );
}