"use client"
import { motion } from 'framer-motion';
import Card from "./Card";

const members = [
  { name: 'mannat', title: 'Mannat Dhodi', subtitle: 'Founder' },
  { name: 'vrinda', title: 'Vrinda Bharadwaj', subtitle: 'Founder' },
];

const foundersNote = `We linked up back in January 2025 (yes, that’s how long we’ve been working on this) to create a dynamic community of changemakers. Both of us being two students who are extremely passionate about Psychology and Mental Health- we knew that’s what we wanted BTC to stand for as well.  After nights of endlessly scrolling on Pinterest to create mood boards, texting each other late into the night with ideas, and working tirelessly day in and day out- we’re happy to finally introduce you to Beyond the Couch. We are just two girls who put our everything into this project, and we’re excited for you to see what’s coming next :)

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
            <motion.div key={index} variants={item}>
              <Card
                name={member.name}
                title={member.title}
                subtitle={member.subtitle}
              />
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
                {members.map((member, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium text-[#fe89aa]"
                  >
                    {member.title.split(' ')[0]}
                    {index < members.length - 1 ? ' & ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}