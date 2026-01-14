"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12 text-center"
        >
          Let's collaborate on your next project
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 p-6 sm:p-8 lg:p-12"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Connect with me
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-6 py-3 border border-gray-700 rounded-xl text-white hover:border-cyan-500 hover:bg-gray-800/50 transition-all duration-200"
                >
                  Email
                </motion.a>
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-6 py-3 border border-gray-700 rounded-xl text-white hover:border-cyan-500 hover:bg-gray-800/50 transition-all duration-200"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-6 py-3 border border-gray-700 rounded-xl text-white hover:border-cyan-500 hover:bg-gray-800/50 transition-all duration-200"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-center">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
