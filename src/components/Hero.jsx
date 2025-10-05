import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const name = "Sachin Singh Chauhan";
  const [displayedName, setDisplayedName] = useState("");

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setDisplayedName(name.substring(0, index + 1));
      index++;
      if (index === name.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  const skills = [
    "Software Developer || MERN Full Stack Developer || Problem Solver",
  ];

  const sections = ["hero", "about", "skills", "projects", "resume", "contact"];

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6"
    >
      {/* Static Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo / Name */}
          <div className="text-xl md:text-2xl font-bold text-yellow-400 cursor-pointer">
            Sachin_Portfolio
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="text-white font-medium transition transform hover:text-yellow-400 hover:-translate-y-1"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-yellow-400">
            {displayedName}
            <span className="border-r-2 border-yellow-400 animate-pulse ml-1"></span>
          </span>
        </motion.h1>

        {/* Static Skills List */}
        <motion.div
          className="text-lg md:text-2xl font-medium mb-6 flex flex-col gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;