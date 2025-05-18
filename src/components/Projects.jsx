"use client"
import { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Users, ChevronDown, ChevronUp, Maximize2 } from 'lucide-react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Volfest Delhi",
    description: "Our first official event and it was at JLN Stadium, Delhi to celebrate volunteerism with so many other organisations 😽‼️ we had the best time- we baked, we painted, we wrote letters, made bows, and SO much more 🧚‍♀️💘",
    date: "May 14-15, 2025",
    location: "JLN Stadium, Delhi",
    media: [
      { type: 'image', url: "/images/volfest/pic1.jpg" },
      { type: 'image', url: "/images/volfest/pic2.jpg" },
      { type: 'image', url: "/images/volfest/pic3.jpg" }
    ],
    color: "bg-[#e88fac]",
    category: "Community Event"
  },
  {
    id: 2,
    title: "Agahi MUN",
    description: "We threw a super fun fundraiser at Agahi MUN, Amity University and raised ₹24K! There was an art sale, cute jewelry, tons of games, and even a matchmaking game that had everyone giggling. It was such a vibe, and all the funds are going to support our mental health projects.",
    date: "April 26, 2025",
    location: "Amity University",
    media: [
      { type: 'image', url: "/images/aghai/pic1.jpg" },
      { type: 'image', url: "/images/aghai/pic2.jpg" },
      { type: 'video', url: "/images/aghai/vid2.mp4", thumbnail: "/images/aghai/vid2-thumb.jpg" }
    ],
    color: "bg-[#e88fac]",
    category: "Fundraiser"
  },
  {
    id: 3,
    title: "Mumbai canvas painting fundraiser",
    description: "Our Canvas Painting Fundraiser marked the launch event of our initiative and was a heartwarming success. I'm thrilled to share that we raised over ₹17,700, all of which will directly support our cause.This event was held in collaboration with Antigone, our sister organization, and brought together individuals of all age groups in a vibrant and inclusive environment. From young kids to adults, everyone was deeply engrossed in painting their canvases, expressing creativity and compassion in equal measure. What made the day truly special was that it wasn't just about the art people created—it was about the impact they contributed to. The joy, unity, and generosity on display reflected the spirit of our mission and set a beautiful tone for future events.",
    date: "May 10, 2025",
    location: "Poco Loco, Khar",
    media: [
      { type: 'image', url: "/images/mumbai/pic1.png" },
      { type: 'image', url: "/images/mumbai/pic2.png" },
      { type: 'image', url: "/images/mumbai/pic3.png" },
      { type: 'image', url: "/images/mumbai/pic4.png" }
    ],
    color: "bg-[#e88fac]",
    category: "Art Workshop"
  },
];

function MediaViewer({ mediaItems, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const videoRef = useRef(null);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (mediaItems[currentIndex].type === 'video') {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    }
  }, [currentIndex, mediaItems]);

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#505c4a]/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-[#e88fac] hover:bg-[#d87a9c] transition-colors shadow-lg"
      >
        <X className="h-6 w-6 text-white" />
      </button>
      
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            prevMedia();
          }}
          className="absolute left-4 p-2 sm:p-3 rounded-full bg-[#e88fac] hover:bg-[#d87a9c] transition-colors z-10 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        
        <div className="w-full h-full flex items-center justify-center">
          {currentMedia.type === 'image' ? (
            <img 
              src={currentMedia.url} 
              alt={`Event media ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg border-4 border-white shadow-2xl"
            />
          ) : (
            <video
              ref={videoRef}
              src={currentMedia.url}
              controls
              className="max-w-full max-h-full object-contain rounded-lg border-4 border-white shadow-2xl"
              poster={currentMedia.thumbnail}
            />
          )}
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextMedia();
          }}
          className="absolute right-4 p-2 sm:p-3 rounded-full bg-[#e88fac] hover:bg-[#d87a9c] transition-colors z-10 shadow-lg"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {mediaItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-[#e88fac]' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event, onMediaClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePos({ x, y });
    };

    const card = document.getElementById(`event-${event.id}`);
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, [event.id]);

  return (
    <div 
      id={`event-${event.id}`}
      className="w-full max-w-6xl mx-auto mb-8 sm:mb-12"
    >
      <div 
        className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${isExpanded ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Gradient border with theme colors */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-[2px] bg-gradient-to-br from-[#e88fac] to-[#505c4a] opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        
        <div className={`relative bg-white rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? 'scale-105' : 'group-hover:scale-[1.02]'
        }`}>
          {/* Collapsed View */}
          <div className={`transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}>
            <div className="flex flex-col md:flex-row h-[300px]">
              {/* Event Media */}
              <div className="relative w-full md:w-1/3 sm:h-64 md:h-auto overflow-hidden bg-[#f8f9f7]">
                {event.media[0].type === 'image' ? (
                  <img 
                    src={event.media[0].url} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMediaClick(event.id, 0);
                    }}
                  />
                ) : (
                  <div 
                    className="relative w-full h-full overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMediaClick(event.id, 0);
                    }}
                  >
                    <img 
                      src={event.media[0].thumbnail} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e88fac] flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 sm:w-6 sm:h-6 ml-1">
                          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#505c4a]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold drop-shadow-md">{event.title}</h3>
                  <div className="flex items-center text-xs sm:text-sm mt-1">
                    <MapPin className="h-3 w-3 mr-1 text-[#e88fac]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col bg-gradient-to-br from-white to-[#f8f9f7]">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex items-center bg-[#e88fac]/10 px-2 sm:px-3 py-1 rounded-full border border-[#e88fac]/20">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[#e88fac]" />
                    <span className="text-xs sm:text-sm font-medium text-[#505c4a]">{event.date}</span>
                  </div>
                  {event.category && (
                    <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-[#505c4a] text-white">
                      {event.category}
                    </span>
                  )}
                </div>
                
                <div className="flex-grow">
                  <p className="text-[#5c6650] text-sm sm:text-base line-clamp-3 mb-3 sm:mb-4">
                    {event.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-[#e88fac]/20">
                  <button className="flex items-center text-xs sm:text-sm font-medium text-[#e88fac] hover:text-[#d87a9c] transition-colors group">
                    View Details
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Expanded View */}
          <div className={`transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}>
            {/* Hero Section with improved gradient */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#505c4a]">
              {event.media[0].type === 'image' ? (
                <img 
                  src={event.media[0].url} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMediaClick(event.id, 0);
                  }}
                />
              ) : (
                <div 
                  className="relative w-full h-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMediaClick(event.id, 0);
                  }}
                >
                  <video
                    src={event.media[0].url}
                    className="w-full h-full object-cover"
                    poster={event.media[0].thumbnail}
                    muted
                    loop
                    autoPlay
                  />
                </div>
              )}
              
              {/* Improved gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#505c4a]/90 via-[#505c4a]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
              
              {/* Close button with better styling */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="p-2 sm:p-3 rounded-full bg-[#e88fac] hover:bg-[#d87a9c] text-white transition-all shadow-lg hover:scale-110"
                >
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
              
              {/* Enhanced title section */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 max-w-2xl">
                {event.category && (
                  <div className="inline-block mb-2 sm:mb-3 px-3 py-1 rounded-full bg-[#e88fac] text-white text-xs sm:text-sm font-medium shadow-md">
                    {event.category}
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">
                  {event.title}
                </h3>
                <div className="flex items-center text-white/90">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#e88fac]" />
                  <span className="text-sm sm:text-lg">{event.location}</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Content Section */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-[#f8f9f7]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-8 h-1 bg-[#e88fac] rounded-full mr-3"></div>
                      <h4 className="text-xl sm:text-2xl font-semibold text-[#505c4a]">Event Details</h4>
                    </div>
                    <p className="text-[#505c4a]/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Media Gallery Preview */}
                  {event.media.length > 1 && (
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-8 h-1 bg-[#e88fac] rounded-full mr-3"></div>
                        <h4 className="text-lg sm:text-xl font-semibold text-[#505c4a]">Event Gallery</h4>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {event.media.slice(1).map((media, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden border-2 border-white shadow-md cursor-pointer hover:border-[#e88fac] transition-all hover:scale-[1.02] group"
                            onClick={(e) => {
                              e.stopPropagation();
                              onMediaClick(event.id, idx + 1);
                            }}
                          >
                            {media.type === 'image' ? (
                              <img 
                                src={media.url} 
                                alt={`Preview ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            ) : (
                              <>
                                <img 
                                  src={media.thumbnail} 
                                  alt={`Video thumbnail ${idx + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e88fac] flex items-center justify-center transform transition-all group-hover:scale-110 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5 ml-1">
                                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                  </div>
                                </div>
                              </>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all">
                              <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-125" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Enhanced Sidebar */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-[#e88fac]/10 hover:border-[#e88fac]/30 transition-colors">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-6 h-1 bg-[#e88fac] rounded-full mr-2"></div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#505c4a]">Event Information</h4>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 sm:mr-4 text-[#e88fac] bg-[#e88fac]/10 p-2 rounded-full">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base text-[#505c4a]">{event.date}</div>
                          <div className="text-xs sm:text-sm text-[#5c6650]/80">Event Date</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 sm:mr-4 text-[#e88fac] bg-[#e88fac]/10 p-2 rounded-full">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base text-[#505c4a]">Location</div>
                          <div className="text-xs sm:text-sm text-[#5c6650]/80">{event.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [viewingMedia, setViewingMedia] = useState(null);
  const [viewingMediaIndex, setViewingMediaIndex] = useState(0);

  const handleMediaClick = (eventId, mediaIndex) => {
    const event = events.find(e => e.id === eventId);
    setViewingMedia(event.media);
    setViewingMediaIndex(mediaIndex);
  };

  return (
    <div className="min-h-screen text-[#505c4a] bg-[#f8f9f7]">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#e88fac]/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#505c4a]/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#e88fac]/10 blur-3xl"></div>
      </div>

      {/* Media Viewer Modal */}
      {viewingMedia && (
        <MediaViewer 
          mediaItems={viewingMedia} 
          initialIndex={viewingMediaIndex}
          onClose={() => setViewingMedia(null)}
        />
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-0 top-[80px] sm:top-[100px]">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#505c4a]">Our Projects</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#5c6650]">
            Discover our exciting projects and community initiatives
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 sm:gap-16">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onMediaClick={handleMediaClick} 
            />
          ))}
        </div>
        <br className="hidden sm:block"/><br className="hidden sm:block"/>
      </div>
    </div>
  );
}