"use client"
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Heart, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS (you should do this once in your app, maybe in a useEffect)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setSubmitStatus({
          success: true,
          message: `Thank you, ${formData.name}! We'll contact you soon.`
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Abstract watercolor background */}
        {/* Floating organic shapes */}
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8 relative">
        {/* Header Section with floating animation */}
        <div className="text-center mb-12 pb-6 mt-[90px] animate-float">
          <h1 className="font-serif text-5xl md:text-6xl" 
              style={{ color: '#fe89aa', fontStyle: 'italic', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" 
             style={{ color: '#5c6650', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you!
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                 style={{ borderLeft: '4px solid #5c6650', borderBottom: '2px solid rgba(254, 137, 170, 0.3)' }}>
              <div className="flex items-center mb-6 pb-4" style={{ borderBottom: '1px solid rgba(254, 137, 170, 0.3)' }}>
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(254, 137, 170, 0.2)' }}>
                  <MessageSquare style={{ color: '#fe89aa' }} size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#5c6650' }}>Contact Information</h3>
                  <p className="text-sm text-gray-600">Fill out the form or reach us directly</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start hover:scale-[1.02] transition-transform duration-200">
                  <div className="p-2 rounded-md mr-4" style={{ backgroundColor: 'rgba(254, 137, 170, 0.1)' }}>
                    <Mail style={{ color: '#fe89aa' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: '#5c6650' }}>Email Us</h4>
                    <a href="mailto:info.beyondthecouch@gmail.com" style={{ color: '#fe89aa' }} className="hover:underline">
                      info.beyondthecouch@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start hover:scale-[1.02] transition-transform duration-200">
                  <div className="p-2 rounded-md mr-4" style={{ backgroundColor: 'rgba(254, 137, 170, 0.1)' }}>
                    <Clock style={{ color: '#fe89aa' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: '#5c6650' }}>Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4" style={{ borderTop: '1px solid rgba(254, 137, 170, 0.3)' }}>
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                  <Heart style={{ color: '#fe89aa' }} size={16} fill="currentColor" />
                  <span className="text-sm text-gray-600">We're here to support you</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">            
              <div className="mb-6 pb-4" style={{ borderBottom: '1px solid rgba(254, 137, 170, 0.3)' }}>
                <div className="flex items-center">
                  <div className="p-2 rounded-md mr-3" style={{ backgroundColor: 'rgba(254, 137, 170, 0.2)' }}>
                    <MessageSquare style={{ color: '#fe89aa' }} size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold" style={{ color: '#5c6650' }}>Send Us a Message</h2>
                    <p className="text-sm" style={{ color: '#fe89aa' }}>We'd love to hear from you!</p>
                  </div>
                </div>
              </div>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
                
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
                        focusRing: 'rgba(254, 137, 170, 0.3)',
                      }}
                    />
                    <label className={`absolute left-10 transition-all duration-300 pointer-events-none ${formData.name ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                      style={{ color: formData.name ? '#fe89aa' : '' }}>
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
                        focusRing: 'rgba(254, 137, 170, 0.3)',
                      }}
                    />
                    <label className={`absolute left-10 transition-all duration-300 pointer-events-none ${formData.email ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                      style={{ color: formData.email ? '#fe89aa' : '' }}>
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
                      focusRing: 'rgba(254, 137, 170, 0.3)',
                    }}
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.message ? 'top-0 text-xs' : 'top-3 text-gray-400'}`}
                    style={{ color: formData.message ? '#fe89aa' : '' }}>
                    {formData.message ? 'Your Message' : 'Message'}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: isSubmitting ? 'rgba(92, 102, 80, 0.7)' : '#5c6650',
                    ":hover": { backgroundColor: 'rgba(92, 102, 80, 0.9)' } 
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
           style={{ backgroundColor: '#fe89aa', filter: 'blur(20px)' }}></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10" 
           style={{ backgroundColor: '#5c6650', filter: 'blur(20px)' }}></div>
    </div>
  );
};

export default ContactForm;