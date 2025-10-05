import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBullseye, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import aboutImage from "../assets/portfolio-illutration.avif";

const About = () => {
  const handleContactClick = () => {
    // Scroll smoothly to the contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-black text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-10">

        {/* ========== CONTENT ========== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex-1 order-2 md:order-1"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg mb-6 leading-relaxed text-gray-300">
            I’m a final-year <span className="font-semibold text-white">B.Tech CSE</span> student 
            with experience in <span className="font-semibold text-white">Web Development, Automation</span>. 
            Currently, I am interning at <span className="font-semibold text-white">Train-X Pvt</span>. 
            I am passionate about building software that solves real-world problems and am learning programming languages such as 
            <span className="font-semibold text-white"> Python, C++, HTML, CSS, JavaScript, and MySQL</span>. 
            I enjoy problem-solving and critical thinking, and I am actively looking for opportunities to contribute to impactful projects.
          </p>

          <ul className="flex flex-col gap-3 mb-8 text-lg">
            <li className="flex items-center gap-2">
              <FaGraduationCap className="text-blue-500" /> 🎓 B.Tech CSE (Final Year)
            </li>
            <li className="flex items-center gap-2">
              <FaBullseye className="text-red-500" /> 🎯 Goal: MNC / FAANG Developer
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-8">
            <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaGlobe />
            </a>
            <a href="https://github.com/sachinchauhan84" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sachinchauhan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>

          <motion.button
            onClick={handleContactClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* ========== IMAGE ========== */}
        <motion.div
          className="relative flex justify-center md:justify-end flex-1 order-1 md:order-2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
            <img
              src={aboutImage}
              alt="Sachin Singh Chauhan"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;