'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const imageBaseURL = '/images/';

const GallerySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const images = Array.from({ length: 14 }, (_, index) => {
    const imgNumber = index + 2;
    return {
      src: `${imageBaseURL}pic${imgNumber}.jpg`,
      title: `Image Title ${imgNumber}`,
      desc: `A lovely memory captured in frame ${imgNumber}.`,
    };
  });

  // Animation for the section header
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation for the underline
  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Animation for each slide
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  // Background overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 0.2 }
  };

  // Animation for navigation buttons
  const navButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#5c6650",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-24 bg-[#f5fcf8]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-[#fe89aa] mb-2">Gallery</h2>
          <motion.div 
            className="w-24 h-1 bg-[#5c6650] mx-auto origin-left"
            variants={underlineVariants}
          />
        </motion.div>

        <div className="relative mx-auto w-auto">
          {/* Left Navigation Button */}
          <motion.div 
            className="swiper-button-prev hidden xl:flex absolute top-1/2 -translate-y-1/2 left-[-50px] w-14 h-14 items-center justify-center z-20 cursor-pointer rounded-full bg-white shadow-lg"
            variants={navButtonVariants}
            whileHover="hover"
          >
            <svg className="text-[#5c6650] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1920: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
              900: { slidesPerView: 2 },
              200: { slidesPerView: 1 },
            }}
            className="gallery-top w-full md:w-[1028px] mx-auto pt-6 h-[500px]"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="group">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  whileHover="hover"
                >
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-[#fe89aa] rounded-2xl"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                  {/* Optional caption that appears on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-sm mt-1">{item.desc}</p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Navigation Button */}
          <motion.div 
            className="swiper-button-next hidden xl:flex absolute top-1/2 -translate-y-1/2 right-[-50px] w-14 h-14 items-center justify-center z-20 cursor-pointer rounded-full bg-white shadow-lg"
            variants={navButtonVariants}
            whileHover="hover"
          >
            <svg className="text-[#5c6650] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySwiper;