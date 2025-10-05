import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BookStore",
    description:
      "A fully responsive bookstore web app built with React, featuring dynamic routing and API integration.",
    link: "https://bookstore-react-six.vercel.app/",
  },
  {
    title: "Currency Convertor",
    description:
      "A modern currency converter app using live exchange APIs with responsive design and dark mode.",
    link: "https://currency-convertor-alpha-gold.vercel.app/",
  },
  {
    title: "Wonderlust",
    description:
      "A travel listing MERN project with authentication, cloud image storage, and search filters.",
    link: "https://rentyourplace.vercel.app/listings",
  },
  {
    title: "Fivestar Landing Page",
    description:
      "A professional landing page for a five-star restaurant with animations and responsive layout.",
    link: "https://restaurant-landing-page-efut.vercel.app/",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen flex items-center bg-black text-white py-20"
  >
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              scale: 1.08, // Slightly smaller scale for smoothness
              boxShadow: "0 10px 25px rgba(0, 112, 244, 0.6)", // lighter for performance
              transition: { duration: 0.2, ease: "easeOut" }, // faster reaction
            }}
          >
            <div className="p-6 flex flex-col justify-between h-full relative z-10">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-center"
              >
                Visit
              </a>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-700/15 opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
