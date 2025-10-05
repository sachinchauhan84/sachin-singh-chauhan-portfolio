import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaReact, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
  { name: "React (MERN)", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen flex items-center py-20 bg-black text-white"
  >
    <div className="container mx-auto px-6 max-w-[1200px] text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-900 shadow-lg rounded-2xl p-8 cursor-pointer transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(0,0,0,0.5)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <p className="text-xl font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;