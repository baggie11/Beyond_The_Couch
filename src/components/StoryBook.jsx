import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StorybookInitiative = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto text-center mb-16 mt-[120px]"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold text-[#5c6650] mb-6">
          Illustrated Storybooks for Young Minds
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-[#5c6650]/80 max-w-3xl mx-auto">
          Helping children aged 3–7 understand emotions, mental health, and self-awareness through storytelling.
        </motion.p>
      </motion.div>

      {/* Key Highlights Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
      >
        {[
          {
            title: "Target Group",
            desc: "Children aged 3–7",
            icon: "👧👦",
            bg: "bg-[#fe89aa]/10"
          },
          {
            title: "Core Focus",
            desc: "Emotional regulation, empathy, and mental health literacy",
            icon: "❤️",
            bg: "bg-[#fe89aa]/10"
          },
          {
            title: "Backed by Experts",
            desc: "Co-developed with psychologists and educators",
            icon: "🧠",
            bg: "bg-[#fe89aa]/10"
          },
          {
            title: "Reach",
            desc: "NGOs, orphanages, schools across India",
            icon: "🌍",
            bg: "bg-[#fe89aa]/10"
          },
        ].map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`${item.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-all h-full`}
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold text-[#5c6650] mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Storybooks? + Image - Improved Layout */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          {/* Text content - takes 3 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-[#fe89aa] mb-6"
            >
              Why Storybooks?
            </motion.h2>
            
            <motion.blockquote 
              variants={fadeIn}
              className="text-xl italic text-[#5c6650] mb-8 pl-4 border-l-4 border-[#fe89aa]"
            >
              "Stories speak the language of children—our books turn mental health into a magical conversation."
            </motion.blockquote>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                "📖 **Accessible Learning**: Storytelling meets children at their developmental level",
                "🛡️ **Emotional Safety**: Characters model healthy emotional behavior",
                "🎨 **Interactive Engagement**: Built-in coloring and reflection components",
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                >
                  <span className="text-[#fe89aa] mr-3 mt-1">•</span>
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Image - takes 2 columns with motion effects */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5]">
              <motion.img 
                src="/images/storybooks/pic1.jpg" 
                alt="Children reading storybooks"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#5c6650]/50 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#fe89aa]/20 w-32 h-32 rounded-full -z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Our Model Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-[#5c6650] mb-12 text-center"
        >
          Our 4-Step Model
        </motion.h2>
        <div className="relative">
          {/* Animated connector line */}
          <motion.div 
            className="hidden lg:block absolute h-1 bg-[#fe89aa]/30 top-1/2 left-0 right-0 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {[
              {
                title: "Create",
                desc: "Books co-designed with psychologists and illustrators",
                icon: "✏️"
              },
              {
                title: "Train",
                desc: "Volunteers equipped with age-appropriate delivery guides",
                icon: "📋"
              },
              {
                title: "Engage",
                desc: "Interactive sessions with reading, coloring, and discussions",
                icon: "🎭"
              },
              {
                title: "Reflect",
                desc: "Collect impact feedback from caregivers and children",
                icon: "🔄"
              },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#fe89aa] text-center hover:bg-[#fe89aa]/5 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#5c6650] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How We Deliver */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto bg-[#5c6650]/5 p-8 rounded-2xl mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-[#fe89aa] mb-8 text-center"
        >
          How We Deliver
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <ul className="space-y-6">
              {[
                "📦 **Storybook Distribution**: 20–50 physical books per session",
                "👩‍🏫 **Volunteer-Led Sessions**: Trained psychology students lead reading circles",
                "🏫 **Partner Sites**: Orphanages, low-income schools, shelters across India",
                "💬 **Feedback Loops**: Partner staff and children co-shape future books",
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start  p-4 rounded-lg shadow-sm"
                >
                  <span className="text-[#fe89aa] mr-3 mt-1 text-xl">•</span>
                  <span className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item} 
                whileHover={{ scale: 1.05 }}
                className="bg-[#fe89aa]/10 rounded-xl aspect-square flex items-center justify-center overflow-hidden"
              >
                <motion.img 
                  src={`/images/storybooks/gallery-${item}.jpg`} 
                  alt="Storybook session"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
       
      </motion.div>
    </div>
  );
};

export default StorybookInitiative;