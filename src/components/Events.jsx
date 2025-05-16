import { useState, useEffect } from 'react';
import { Clock, MapPin, Users, ChevronDown, ChevronUp, Maximize2 } from 'lucide-react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Volfest Delhi",
    description: "Our first official event and it was at JLN Stadium, Delhi to celebrate volunteerism with so many other organisations 😽‼️ we had the best time- we baked, we painted, we wrote letters, made bows, and SO much more 🧚‍♀️💘",
    date: "May 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "JLN Stadium, Delhi",
    images: [
      "/images/volfest/pic1.jpg",
      "/images/volfest/pic2.jpg",
      "/images/volfest/pic3.jpg"
    ],
    color: "bg-[#e88fac]",
  },
 
];

function ImageViewer({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="h-6 w-6 text-white" />
      </button>
      
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`Event image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-[#e88fac]' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event, onImageClick }) {
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
      className="w-full max-w-6xl mx-auto mb-12"
    >
      <div 
        className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${isExpanded ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
        onClick={() => setIsExpanded(!isExpanded)}
       
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#e88fac] to-[#505c4a] opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        
        <div className={`relative bg-white rounded-[calc(1.5rem-2px)] overflow-hidden  transition-all duration-500 ease-out ${
          isExpanded ? 'scale-105' : 'group-hover:scale-[1.02]'
        }`}>
          {/* Collapsed View */}
          <div className={`transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}>
            <div className="flex flex-col md:flex-row h-full">
              {/* Event Image */}
              <div className="relative md:w-1/3 h-64 md:h-auto overflow-hidden bg-gray-100">
                <img 
                  src={event.images[0]} 
                  alt={event.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageClick(event.id, 0);
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex items-center text-sm mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="md:w-2/3 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center bg-[#e88fac]/10 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-2 text-[#e88fac]" />
                    <span className="text-sm font-medium text-[#505c4a]">{event.date} • {event.time}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#e88fac]/20 text-[#505c4a]">
                    {event.category}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <p className="text-[#5c6650] line-clamp-3 mb-4">
                    {event.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#e88fac]/20">
                  <div className="flex items-center text-sm text-[#505c4a]">
                    <Users className="h-4 w-4 mr-1 text-[#e88fac]" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <button className="flex items-center text-sm font-medium text-[#e88fac] hover:text-[#d87a9c] transition-colors">
                    View Details
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Expanded View */}
          <div className={`transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}>
            {/* Hero Section */}
            <div className="relative h-96 w-full overflow-hidden bg-gray-100">
              <img 
                src={event.images[0]} 
                alt={event.title}
                className="w-full h-full object-cover"
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick(event.id, 0);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#505c4a]/90 via-[#505c4a]/30 to-transparent"></div>
              
              <div className="absolute top-6 right-6">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors shadow-md"
                >
                  <ChevronUp className="h-5 w-5 text-white" />
                </button>
              </div>
              
              <div className="absolute bottom-8 left-8 max-w-2xl">
                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-[#e88fac] text-white text-sm font-medium">
                  {event.category}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{event.title}</h3>
                <div className="flex items-center text-white/90">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{event.location}</span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 bg-gradient-to-b from-[#f9f5f8] to-[#f5fcf8]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-semibold mb-6 text-[#505c4a]">Event Details</h4>
                  <p className="text-[#505c4a] leading-relaxed mb-8">{event.description}</p>
                  
                  {/* Image Gallery Preview */}
                  {event.images.length > 1 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-[#505c4a]">Event Gallery</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {event.images.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-video rounded-xl overflow-hidden border-2 border-white shadow-md cursor-pointer hover:border-[#e88fac] transition-all hover:scale-[1.02] group"
                            onClick={(e) => {
                              e.stopPropagation();
                              onImageClick(event.id, idx);
                            }}
                          >
                            <img 
                              src={img} 
                              alt={`Preview ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors">
                              <Maximize2 className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e88fac]/20">
                    <h4 className="text-lg font-semibold mb-4 text-[#505c4a]">Event Information</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-4 text-[#e88fac]">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-[#505c4a]">{event.date}</div>
                          <div className="text-sm text-[#5c6650]">{event.time}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-4 text-[#e88fac]">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-[#505c4a]">Location</div>
                          <div className="text-sm text-[#5c6650]">{event.location}</div>
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
  const [viewingImage, setViewingImage] = useState(null);
  const [viewingImageIndex, setViewingImageIndex] = useState(0);

  const handleImageClick = (eventId, imageIndex) => {
    const event = events.find(e => e.id === eventId);
    setViewingImage(event.images);
    setViewingImageIndex(imageIndex);
  };

  return (
    <div className="min-h-screen  text-[#505c4a]">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#e88fac]/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#e88fac]/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#505c4a]/10 blur-3xl"></div>
      </div>

      {/* Image Viewer Modal */}
      {viewingImage && (
        <ImageViewer 
          images={viewingImage} 
          initialIndex={viewingImageIndex}
          onClose={() => setViewingImage(null)}
        />
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-0 top-[100px]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#505c4a]">Our Events</h1>
          <p className="max-w-2xl mx-auto text-xl text-[#5c6650]">
            Discover our exciting events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onImageClick={handleImageClick} 
            />
          ))}
        </div>
        <br/><br/>

    
      </div>
    </div>
  );
}