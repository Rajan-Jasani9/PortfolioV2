"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PersonalBrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-black"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm p-8 sm:p-12 hover:border-cyan-500/30 transition-all duration-300"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6"
          >
            Engineer by profession. System builder by obsession.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6"
          >
            I design software the way I design my life — scalable, disciplined, and optimized for growth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-sm sm:text-base italic"
          >
            Not cheesy. Just human.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
