"use client"
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Heart, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert(`Thank you, ${formData.name}! We'll contact you soon.`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Abstract watercolor background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 w-[800px] h-[800px] rounded-full" 
               style={{ background: 'radial-gradient(circle, rgba(255,142,180,0.4) 0%, rgba(255,255,255,0) 70%)' }}></div>
          <div className="absolute -right-40 top-1/3 w-[600px] h-[600px] rounded-full" 
               style={{ background: 'radial-gradient(circle, rgba(85,107,47,0.3) 0%, rgba(255,255,255,0) 70%)' }}></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full" 
               style={{ background: 'radial-gradient(circle, rgba(255,142,180,0.2) 0%, rgba(255,255,255,0) 70%)' }}></div>
        </div>

     
        
        {/* Floating organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-40 h-40 rounded-full opacity-10 blur-xl" 
               style={{ backgroundColor: '#ff8eb4', transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-10 blur-xl" 
               style={{ backgroundColor: '#556b2f' }}></div>
          <div className="absolute bottom-1/5 left-1/3 w-48 h-48 opacity-10 blur-xl" 
               style={{ backgroundColor: '#ff8eb4', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8 relative">
        {/* Header Section with floating animation */}
        <div className="text-center mb-12 pb-6 mt-[90px] animate-float">
          <h1 className="font-serif text-5xl md:text-6xl" 
              style={{ color: '#ff8eb4', fontStyle: 'italic', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" 
             style={{ color: '#556b2f', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you!
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                 style={{ borderLeft: '4px solid #556b2f', borderBottom: '2px solid rgba(255, 142, 180, 0.3)' }}>
              <div className="flex items-center mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255, 142, 180, 0.3)' }}>
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(255, 142, 180, 0.2)' }}>
                  <MessageSquare style={{ color: '#ff8eb4' }} size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#556b2f' }}>Contact Information</h3>
                  <p className="text-sm text-gray-600">Fill out the form or reach us directly</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start hover:scale-[1.02] transition-transform duration-200">
                  <div className="p-2 rounded-md mr-4" style={{ backgroundColor: 'rgba(255, 142, 180, 0.1)' }}>
                    <Mail style={{ color: '#ff8eb4' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: '#556b2f' }}>Email Us</h4>
                    <a href="mailto:info.beyondthecouch@gmail.com" style={{ color: '#ff8eb4' }} className="hover:underline">
                      info.beyondthecouch@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start hover:scale-[1.02] transition-transform duration-200">
                  <div className="p-2 rounded-md mr-4" style={{ backgroundColor: 'rgba(255, 142, 180, 0.1)' }}>
                    <Clock style={{ color: '#ff8eb4' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: '#556b2f' }}>Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4" style={{ borderTop: '1px solid rgba(255, 142, 180, 0.3)' }}>
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                  <Heart style={{ color: '#ff8eb4' }} size={16} fill="currentColor" />
                  <span className="text-sm text-gray-600">We're here to support you</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">            
              <div className="mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255, 142, 180, 0.3)' }}>
                <div className="flex items-center">
                  <div className="p-2 rounded-md mr-3" style={{ backgroundColor: 'rgba(255, 142, 180, 0.2)' }}>
                    <MessageSquare style={{ color: '#ff8eb4' }} size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold" style={{ color: '#556b2f' }}>Send Us a Message</h2>
                    <p className="text-sm" style={{ color: '#ff8eb4' }}>We'd love to hear from you!</p>
                  </div>
                </div>
              </div>
                
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-all hover:bg-white"
                      style={{ 
                        focusRing: 'rgba(255, 142, 180, 0.3)',
                      }}
                    />
                    <label className={`absolute left-10 transition-all duration-300 pointer-events-none ${formData.name ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                      style={{ color: formData.name ? '#ff8eb4' : '' }}>
                      {formData.name ? 'Your Name' : 'Name'}
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-all hover:bg-white"
                      style={{ 
                        focusRing: 'rgba(255, 142, 180, 0.3)',
                      }}
                    />
                    <label className={`absolute left-10 transition-all duration-300 pointer-events-none ${formData.email ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                      style={{ color: formData.email ? '#ff8eb4' : '' }}>
                      {formData.email ? 'Your Email' : 'Email'}
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-all hover:bg-white"
                    style={{ 
                      focusRing: 'rgba(255, 142, 180, 0.3)',
                    }}
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.message ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                    style={{ color: formData.message ? '#ff8eb4' : '' }}>
                    {formData.message ? 'Your Message' : 'Message'}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: isSubmitting ? 'rgba(85, 107, 47, 0.7)' : '#556b2f',
                    ":hover": { backgroundColor: 'rgba(85, 107, 47, 0.9)' } 
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full opacity-10" 
           style={{ backgroundColor: '#ff8eb4', filter: 'blur(20px)' }}></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10" 
           style={{ backgroundColor: '#556b2f', filter: 'blur(20px)' }}></div>
    </div>
  );
};

export default ContactForm;