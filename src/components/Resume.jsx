import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import resumePDF from "../assets/Sachin_Singh_Chauhan_Resume.pdf"; // Add your resume path

const Resume = () => (
  <section id="resume" className="py-16 bg-black text-white">
    <div className="container mx-auto px-6 text-center max-w-2xl">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h2>

      <motion.div
        className="bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,244,0.7),0_0_50px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <FaFileDownload className="text-blue-500 text-4xl mb-4" />
        <p className="text-lg mb-4">
          You can download my latest resume here for more details about my skills and experience.
        </p>
        <a
          href={resumePDF}
          download
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default Resume;
