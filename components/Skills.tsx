"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiDjangorest,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiAmazonaws,
  SiAmazons3,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaDatabase, FaCloud } from "react-icons/fa";

// Icon mapping with proper tech logos
const skillIcons: { [key: string]: React.ComponentType<any> } = {
  Python: SiPython,
  FastAPI: SiFastapi,
  Django: SiDjango,
  "Django Rest Framework": SiDjangorest,
  JavaScript: SiJavascript,
  ReactJs: SiReact,
  NextJs: SiNextdotjs,
  PostgreSQL: SiPostgresql,
  VectorDBs: FaDatabase,
  Pinecone: FaDatabase,
  "Pg-Vector Extension": FaDatabase,
  "S3 Vector Bucket": SiAmazons3,
  AWS: SiAmazonaws,
  S3: SiAmazons3,
  EC2: FaCloud,
  Git: SiGit,
  GitHub: SiGithub,
};

const skillCategories = {
  "Backend & APIs": [
    "Python",
    "FastAPI",
    "Django",
    "Django Rest Framework",
  ],
  "Frontend": ["JavaScript", "ReactJs", "NextJs"],
  "Database & Vector": [
    "PostgreSQL",
    "VectorDBs",
    "Pinecone",
    "Pg-Vector Extension",
    "S3 Vector Bucket",
  ],
  "Cloud & DevOps": [
    "AWS",
    "S3",
    "EC2",
    "Git",
    "GitHub",
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-black"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Technologies I use to build scalable and efficient solutions
        </motion.p>

        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => {
            const IconComponent = skillIcons[skills[0]]; // For category icon if needed
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.15 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-800 via-cyan-500/30 to-transparent"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {skills.map((skill, index) => {
                    const Icon = skillIcons[skill] || FaDatabase;
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: 0.3 + (categoryIndex * 0.15) + (index * 0.05) }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative p-5 border border-gray-800/50 rounded-xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 cursor-default"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>
                        <div className="relative flex flex-col items-center gap-3">
                          <Icon className="text-3xl sm:text-4xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                          <span className="text-white font-medium text-xs sm:text-sm text-center leading-tight">
                            {skill}
                          </span>
                        </div>
                        <motion.div
                          className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-xl transition-all duration-300"
                          whileHover={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)" }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
