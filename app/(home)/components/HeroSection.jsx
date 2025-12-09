"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight, HiDownload, HiCode, HiSparkles, HiChip } from 'react-icons/hi';
import { config } from '@/config';
import Background3D from '@/components/ui/Background3D';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/90 pt-20">
      {/* 3D Background */}
      <Background3D />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">AVAILABLE FOR WORK</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
          >
            REDEFINING THE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">
              FUTURE OF DIGITAL
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building secure, scalable, and cutting-edge web solutions that
            innovate the digital economy of the future.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                View Projects
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>

            <Link href="/resume.pdf" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                Download CV
                <HiDownload className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats/Cards Section - Mimicking the reference "nodes" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Experience</span>
                <HiChip className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                2+ <span className="text-sm font-normal text-gray-500">Years</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-pink-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Projects</span>
                <HiCode className="w-5 h-5 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                10+ <span className="text-sm font-normal text-gray-500">Completed</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Innovation</span>
                <HiSparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                100% <span className="text-sm font-normal text-gray-500">Commitment</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
