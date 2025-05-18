"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const WhoWeAre = () => {
  return (
    <motion.section 
      className="py-16 relative overflow-hidden" 
      style={{ backgroundColor: "#f5fcf8" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#fe89aa]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-[#5c6650]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-light text-[#fe89aa] mb-2"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            Who We Are
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#5c6650] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <motion.p 
              className="text-lg text-[#5c6650] leading-relaxed"
              variants={slideInFromLeft}
            >
              <span className="font-semibold text-[#5c6650]">Beyond the Couch</span> is a youth-led initiative that focuses on creating opportunities for psychology students as well as creating greater access + acceptance about mental health.
            </motion.p>
          
            <motion.p 
              className="text-2xl font-light italic text-[#fe89aa] mt-6"
              variants={slideInFromLeft}
              transition={{ delay: 0.2 }}
            >
              We focus on creating impact through storytelling and art!
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <motion.img 
                src="/images/pic1.jpg" 
                alt="Our team collaborating" 
                className="object-cover w-full h-[400px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg bg-[#5c6650] opacity-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-40 h-40 rounded-lg bg-[#5c6650] opacity-10"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="space-y-8 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {/* Service 1 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 border-l-4 border-[#fe89aa] hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 10 }}
            >
              <div className="w-20 h-20 rounded-full bg-[#fe89aa] flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
                </svg>
              </div>
            </motion.div>
            <div>
              <p className="text-lg text-[#5c6650] leading-relaxed">
                Our coloring story books for students aged 4-8 years. These help them learn about mental health in a way that's understandable and easier to navigate.
              </p>
            </div>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 border-l-4 border-[#fe89aa] hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 10 }}
            >
              <div className="w-20 h-20 rounded-full bg-[#fe89aa] flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </motion.div>
            <div>
              <p className="text-lg text-[#5c6650] leading-relaxed">
                Providing opportunities for growth through networking meets, psychology mixers, fun artsy workshops and more that help you build a network in this competitive field.
              </p>
            </div>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 border-l-4 border-[#fe89aa] hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 10 }}
            >
              <div className="w-20 h-20 rounded-full bg-[#fe89aa] flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </motion.div>
            <div>
              <p className="text-lg text-[#5c6650] leading-relaxed">
                Offering opportunities to psychology students by upskilling them and providing them with numerous internships through our NGO network.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
       
      </div>
    </motion.section>
  );
};

export default WhoWeAre;