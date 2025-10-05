import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ Updated package
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // Show success/failure

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55n69dh", // Your EmailJS Service ID
        "template_2p35yap", // Your EmailJS Template ID
        form.current,
        "Rl5EVNIO1PbyFlvI8" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-black text-white"
    >
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 shadow-lg rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,244,0.7),0_0_50px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send
          </button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 text-2xl mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="www.linkedin.com/in/𝐒𝐚𝐜𝐡𝐢𝐧-𝐒𝐢𝐧𝐠𝐡-𝐂𝐡𝐚𝐮𝐡𝐚𝐧-1254a9252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sachinchauhan84"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sachin955chauhan@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;