"use client"
import { motion } from 'framer-motion';
import Card from "./Card";

const members = [
  { name: 'mannat', title: 'Mannat Dhodi', subtitle: 'Founder' },
  { name: 'vrinda', title: 'Vrinda Bharadwaj', subtitle: 'Founder' },
];

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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto"
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
      </div>
    </section>
  );
}