"use client"
import { motion } from 'framer-motion';
import Card from "./Card";

const members = [
  { 
    name: 'mannat', 
    title: 'Mannat Dhodi', 
    subtitle: 'Founder',
    linkedin: 'https://www.linkedin.com/in/mannat-dhodi-a0aaa723a/' // Add LinkedIn URL
  },
  { 
    name: 'vrinda', 
    title: 'Vrinda Bharadwaj', 
    subtitle: 'Founder',
    linkedin: 'https://www.linkedin.com/in/vrinda-bharadwaj' // Add LinkedIn URL
  },
];

const foundersNote = `We linked up back in January 2025 (yes, that's how long we've been working on this) to create a dynamic community of changemakers. Both of us being two students who are extremely passionate about Psychology and Mental Health- we knew that's what we wanted BTC to stand for as well.  After nights of endlessly scrolling on Pinterest to create mood boards, texting each other late into the night with ideas, and working tirelessly day in and day out- we're happy to finally introduce you to Beyond the Couch. We are just two girls who put our everything into this project, and we're excited for you to see what's coming next :)

`;

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const header = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// LinkedIn SVG Icon Component
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#0077b5] hover:text-[#005582] transition-colors duration-200"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Team() {
  return (
    <section className="py-20 bg-[#f9f5f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={header}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5c6650] mb-4">
            Meet the Senior Management
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#fe89aa] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>

        {/* Team Cards with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto mb-16"
        >
          {members.map((member, index) => (
            <motion.div key={index} variants={item} className="relative group">
              <Card
                name={member.name}
                title={member.title}
                subtitle={member.subtitle}
              />
              {/* LinkedIn Icon */}
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-[#5c6650]"
                aria-label={`${member.title}'s LinkedIn profile`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
        </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#f5a8d5] opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#fe89aa] opacity-20"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-[#5c6650] mb-6 text-center">
              A Note From Our Founders
            </h3>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-[#fe89aa]"></div>
            </div>
            <p className="text-lg text-[#5c6650] text-center leading-relaxed italic">
              {foundersNote}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <span className="text-sm font-medium text-[#fe89aa]">
                  Mannat & Vrinda
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}