import Head from 'next/head';
import { useState } from 'react';

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('All');
  
  const events = [
    {
      id: 1,
      title: "Paint for Purpose: Tote Bag Painting",
      description: "This is an artsy get together to commemorate the launch of BTC! All materials for the workshop such as tote bags, paints, etc will be provided by us. Bring your Pinterest boards to life here! Sign up now.",
      date: "24th May",
      time: "4pm onwards",
      location: "Blindbakes Cafe, Hauz Khas",
      city: "Delhi",
      price: "₹250 per person",
      link: "https://forms.gle/2kJKNP6NBPriBcts8"
    },
    {
      id: 2,
      title: "Garden Party",
      description: "This is a fun community potluck to share more about Beyond The Couch and our vision! All attendees will get an exclusive first look at our workshop kits and storybooks and also take them home with you.",
      date: "25th May",
      time: "11:30am onwards",
      location: "Indira Gandhi Foundation Park, Bangalore",
      city: "Bangalore",
      price: "₹100 per person",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdt6zUwzzQAuKqjU973JOxKfXhgShHtNKcbCdXgt5bPj_I1OA/viewform?usp=header"
    },
    {
      id: 3,
      title: "Tote Bag Painting Workshop",
      description: "This is an artsy get together to commemorate the launch of BTC! All materials for the workshop such as tote bags, paints, etc will be provided by us. Bring your Pinterest boards to life here! Sign up now.",
      date: "31st May",
      time: "12:30pm onwards",
      location: "Cafe Flynn, Khajaguda, Hyderabad",
      city: "Hyderabad",
      price: "₹250 per person",
      link: "https://forms.gle/tEdqm5BWUPoadNXY6"
    },
    {
      id: 4,
      title: "Khan Market Art and Bake Sale",
      description: "Find us at Khan Market near Bahrisons Booksellers! Get ready for an immersive art and bake sale to support our cause! All attendees will also get an exclusive first look at our storybooks.",
      date: "1st June",
      time: "1pm onwards",
      location: "Khan Market, Delhi",
      city: "Delhi",
      price: "Free Entry",
      link: null
    },
    {
        id : 5,
        title : "Tote bag painting",
        description : "This event is just another way to further our mission, but with an added bonus – take prettiest tote bags home with you! All proceeds from this event will go towards our donation drives. All materials, including tote bags and painting supplies, will be provided at the event.",
        date : "1st June 2025",
        time : "1:00 pm - 3:00 pm",
        location : "The Dome Cafe - Kalyan Nagar",
        city : "Bangalore",
        price : "₹250 per person",
        link : "https://forms.gle/1xsapmjPSs6zStAm8"
    }
  ];

  const cities = ['All', ...new Set(events.map(event => event.city))];
  const filteredEvents = selectedCity === 'All' 
    ? events 
    : events.filter(event => event.city === selectedCity);

  return (
    <div className="min-h-screen bg-[#f8f9f7]">
      <Head>
        <title>Upcoming Events | Creative Workshops</title>
        <meta name="description" content="Discover our upcoming creative events and workshops" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-[#5c6650] mb-4 mt-[100px]">Upcoming Events</h1>
          <p className="text-xl text-[#fe89aa]">Join our creative workshops and gatherings</p>
        </div>
      </div>

      {/* City Filter */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCity === city
                  ? 'bg-[#5c6650] text-white'
                  : 'bg-white text-[#5c6650] hover:bg-gray-100'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Color header */}
              <div className="h-3 bg-gradient-to-r from-[#7c856c] to-[#ffa5c0]"></div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Title and Price - Fixed Height */}
                <div className="flex justify-between items-start mb-4 min-h-[60px]">
                  <h2 className="text-xl font-bold text-[#5c6650]">{event.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ${
                    event.price === 'Free Entry' 
                      ? 'bg-[#7c856c] text-white' 
                      : 'bg-[#ffa5c0] text-white'
                  }`}>
                    {event.price}
                  </span>
                </div>
                
                {/* Date & Location - Fixed Height Container */}
                <div className="space-y-3 mb-4">
                  {/* Date Section */}
                  <div className="flex items-center p-3 bg-[#f8f9f7] rounded-lg border-l-4 border-[#ffa5c0]">
                    <svg className="w-5 h-5 mr-2 text-[#ffa5c0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-[#5c6650]">{event.date}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                  </div>
                  
                  {/* Location Section - Removed fixed height and truncate */}
                  <div className="flex items-start p-3 bg-[#f8f9f7] rounded-lg border-l-4 border-[#7c856c]">
                    <svg className="w-5 h-5 mr-2 text-[#7c856c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="break-words">
                      <span className="font-semibold text-[#5c6650]">Location: </span>
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 flex-grow">{event.description}</p>
                
                {/* CTA Button */}
                <div className="mt-auto">
                  {event.link ? (
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-[#7c856c] to-[#ffa5c0] hover:from-[#6a735a] hover:to-[#e894af] text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                      {event.price === 'Free Entry' ? 'Learn More' : 'Book Now'}
                    </a>
                  ) : (
                    <button 
                      className="block w-full text-center bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium cursor-not-allowed"
                      disabled
                    >
                      No Registration Needed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}