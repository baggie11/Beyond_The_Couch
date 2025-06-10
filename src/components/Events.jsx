import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('All');
  
  //events list
  const events = [
    {
      id: 1,
      title: "Echo: Love out Loud",
      description: "Join us for Echo: Loud out Loud, an event to celebrate pride month right here in Noida! Look out for engaging activity stations, pop-ups, matchmaking games, live music, and so much more. Come as you are- we’re saving you a seat at the table of color, community, and self expression",
      date: "21st June, 2025",
      time: "5pm onwards",
      location: "Flourmates Bakery & Cafe, Noida",
      city: "Noida",
      price: "₹150 per person",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc246N52Z1CH4P4TpVfANK96zx_6wie6-C_oj6bhXXnEmTIkA/viewform",
      image: "/images/newevent.jpg"
    }
  ];

  const cities = ['All', ...new Set(events.map(event => event.city))];
  const filteredEvents = selectedCity === 'All' 
    ? events 
    : events.filter(event => event.city === selectedCity);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen bg-[#f8f9f7]"
    >
      <Head>
        <title>Upcoming Events | Creative Workshops</title>
        <meta name="description" content="Discover our upcoming creative events and workshops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20"
      >
        <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c6650] mb-4 mt-[70px]">Upcoming Events</h1>
          <p className="text-xl text-[#fe89aa] font-medium">Join our creative workshops and gatherings</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* City Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-bold text-[#5c6650] mb-4 mt-[-50px]">Filter by City</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map(city => (
                <motion.button
                  key={city}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCity(city)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCity === city
                      ? 'bg-[#5c6650] text-white shadow-md'
                      : 'bg-white text-[#5c6650] hover:bg-gray-100 shadow-sm'
                  }`}
                  aria-label={`Filter events by ${city}`}
                >
                  {city}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
            <motion.div 
              key={event.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-white rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100"
            >
              {/* Event Header with Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fe89aa] via-[#ffa5c0] to-[#fe89aa]"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-end">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        event.price === 'Free Entry' 
                          ? 'bg-[#7c856c] text-white' 
                          : 'bg-[#ffa5c0] text-white'
                      }`}
                    >
                      {event.price}
                    </motion.span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white text-sm font-medium">{event.city}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-[#5c6650] text-[25px] font-bold mb-4 h-18 line-clamp-2">{event.title}</h2>
                
                {/* Date & Time */}
                <div className="flex items-center mb-4 p-3 bg-[#f8f9f7] rounded-lg">
                  <svg className="w-5 h-5 mr-3 text-[#ffa5c0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#5c6650]">{event.date}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#5c6650] uppercase mb-1">Location</h3>
                  <p className="text-gray-700">{event.location}</p>
                </div>
                
                {/* Description */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-semibold text-[#5c6650] uppercase mb-1">About the Event</h3>
                  <p className="text-gray-700 line-clamp-3">{event.description}</p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-auto">
                  {event.link ? (
                    <motion.a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center bg-gradient-to-r from-[#7c856c] to-[#ffa5c0] hover:from-[#6a735a] hover:to-[#e894af] text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
                      aria-label={`Register for ${event.title}`}
                    >
                      {event.price === 'Free Entry' ? 'Learn More' : 'Book Now'}
                    </motion.a>
                  ) : (
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium cursor-not-allowed shadow-sm"
                      disabled
                      aria-label="No registration needed for this event"
                    >
                      No Registration Needed
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-5xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-[#5c6650] mb-2">No events found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {selectedCity === 'All' 
                ? "We don't have any upcoming events right now. Please check back later."
                : `We don't have any upcoming events in ${selectedCity} right now. Please check back later or try another city.`}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}