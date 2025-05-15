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
              <SocialIcon icon="twitter" />
              <SocialIcon icon="facebook" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5c6650]">Explore</h3>
              <ul className="space-y-2">
                <li><FooterLink href="/">Home</FooterLink></li>
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/events">Events</FooterLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5c6650]">Connect</h3>
              <ul className="space-y-2">
                <li><FooterLink href="/team">Our Team</FooterLink></li>
                <li><FooterLink href="/gallery">Gallery</FooterLink></li>
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
              href="/join" 
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
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  };

  return (
    <a href="#" className="text-[#5c6650] hover:text-[#fe89aa] transition-colors">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={icons[icon]} />
      </svg>
      <span className="sr-only">{icon}</span>
    </a>
  );
}