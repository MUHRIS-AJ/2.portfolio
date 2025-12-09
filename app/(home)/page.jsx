"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { useView } from '@/components/Providers/ViewProvider'

// Components
import AboutMe from './components/AboutMe'
import ProjectGrid from './components/IronManProjects' // Keeping filename for now to avoid move issues
import ShuffleDeck from './components/ShuffleDeck'
import CertificationsGallery from './components/CertificationsGallery'
import GlassCard from '@/components/GlassCard'

// Views
const HomeView = () => (
  <div className="flex flex-col gap-8 h-full justify-center">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Profile Side */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex-1 text-center lg:text-right space-y-4"
      >
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">
          {config.developer.name}
        </h1>
        <p className="text-xl text-ocean-light font-mono font-bold tracking-wide">
          {config.developer.title}
        </p>
        <p className="text-sm text-gray-400">
          {config.developer.degrees}
        </p>

        <div className="flex justify-center lg:justify-end gap-4 mt-8">
          <div className="w-52 h-52 rounded-full border-4 border-warm-orange/50 overflow-hidden relative shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            <Image src={config.developer.profileImage} fill alt="profile" className="object-cover" />
          </div>
        </div>
      </motion.div>



      {/* Stats/Info Side */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex-1 text-center lg:text-left space-y-6"
      >
        <AboutMe />
      </motion.div>
    </div>
  </div>
);

const ProjectsView = () => (
  <div className="h-full flex flex-col">
    <h2 className="text-3xl font-bold text-white mb-6 text-center">Selected Projects</h2>
    <ProjectGrid />
  </div>
);

// Components
import HoloSkills from './components/HoloSkills'
import ExperienceSection from './components/Experience' // Reuse the timeline

const SkillsView = () => (
  <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full">
    <h2 className="text-3xl font-bold text-white mb-6 text-center uppercase">
      Technical Skills
    </h2>
    <div className="h-[70vh] flex items-center justify-center">
      <HoloSkills />
    </div>
  </div>
);

const ExperienceView = () => (
  <div className="h-full overflow-y-auto custom-scrollbar p-4">
    <ExperienceSection />
  </div>
);

const EducationView = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Knowledge Database</h2>
    <ShuffleDeck />
  </div>
);

const ContactView = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-warm-orange mb-8">Get in Touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
      {config.contactInfo.map((contact, idx) => (
        <GlassCard key={idx} className="p-6 flex items-center gap-4 hover:bg-warm-orange/10 cursor-pointer border-warm-orange/30">
          <div className="text-warm-orange text-2xl">{contact.icon}</div>
          <div>
            <h3 className="text-white font-bold">{contact.label}</h3>
            <a href={contact.link} target="_blank" className="text-gray-400 text-sm hover:text-warm-yellow">{contact.value}</a>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>
);

const PageContent = () => {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 container mx-auto">
      <section id="home" className="min-h-screen flex flex-col justify-center mb-20 scroll-mt-24">
        <HomeView />
      </section>

      <section id="about" className="mb-20 scroll-mt-24">
        {/* About sections are integrated in HomeView, but we can separate if needed. Keeping as is for now. */}
      </section>

      <section id="projects" className="min-h-screen flex flex-col justify-center mb-20 scroll-mt-24">
        <ProjectsView />
      </section>

      <section id="skills" className="min-h-screen flex flex-col justify-center mb-20 scroll-mt-24">
        <SkillsView />
      </section>

      <section id="experience" className="min-h-[50vh] flex flex-col justify-center mb-20 scroll-mt-24 border-t border-white/5 pt-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Experience</h2>
        <ExperienceView />
      </section>

      <section id="certifications" className="min-h-[80vh] py-20 relative z-10 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center uppercase tracking-tight">
            PRO CERTIFICATIONS
          </h2>
          <p className="text-[#00C2FF] text-center mb-12 max-w-2xl mx-auto">
            Validated expertise in data science, programming, and technology
          </p>
          <CertificationsGallery />
        </div>
      </section>

      <section id="education" className="min-h-[50vh] flex flex-col justify-center mb-20 scroll-mt-24">
        <EducationView />
      </section>

      <section id="contact" className="min-h-[50vh] flex flex-col justify-center mb-20 scroll-mt-24">
        <ContactView />
      </section>
    </div>
  );
};

export default PageContent;