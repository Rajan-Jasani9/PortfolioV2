"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <Sphere args={[1, 32, 32]} rotation={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00d4ff"
            wireframe
            emissive="#00d4ff"
            emissiveIntensity={0.3}
          />
        </Sphere>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-32 lg:py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
      id="home"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl z-10 text-center lg:text-left mb-12 lg:mb-0"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent"
        >
          Rajan Jasani
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6"
        >
          Backend Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-400 leading-relaxed mb-8"
        >
          Building scalable systems, SaaS platforms, and AI-powered products
          with Python, Django, FastAPI, and AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200 text-center"
            href="#projects"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-center"
            href="#contact"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-md sm:max-w-lg lg:w-[500px] lg:h-[500px] h-[300px] sm:h-[400px] relative"
      >
        {/* Radial glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="relative w-full h-full">
          <Scene />
        </div>
      </motion.div>
    </section>
  );
}
