/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundPresets } from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { toast } from 'sonner';
import { config } from '@/config';
import Image from 'next/image';

const ContactPage = () => {
    const handleSubmit = async (formData) => {
        try {
            console.log('Form submitted:', formData);

            toast.success("Thank you for your message. I'll get back to you soon.");
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    const contactInfo = config.contactInfo;




    return (
        <section className="relative flex items-center justify-center py-6" id="contact">
            <BackgroundPresets.Mystical />

            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
                >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-purple-500/40 shadow-lg shadow-purple-500/20">
                        <Image
                            src={config.developer.profileImage || "/profile-main.jpg"}
                            alt={config.developer.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.2em] text-purple-200/60">Logo</p>
                        <p className="text-lg sm:text-xl font-semibold text-purple-100">{config.developer.name}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-12 sm:mb-16 w-full"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-purple-200/70 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Have a project in mind? Looking to collaborate? Drop me a message,
                        and let's create something amazing together.
                    </p>
                </motion.div>

                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/3 backdrop-blur-sm bg-purple-500/5 p-4 sm:p-6 rounded-2xl border border-purple-500/20 neumorphic"
                    >
                        <ContactForm onSubmit={handleSubmit} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full lg:w-1/3 backdrop-blur-sm bg-purple-500/5 p-4 sm:p-6 rounded-2xl border border-purple-500/20 neumorphic"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-purple-300">Contact Information</h3>
                        <div className="space-y-4 sm:space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                >
                                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                                        <div className="text-purple-300 group-hover:text-pink-300 transition-colors">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-purple-200/60 mb-1">
                                            {info.label}
                                        </p>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm sm:text-base text-purple-300 hover:text-pink-300 hover:underline break-words transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm sm:text-base text-purple-300 break-words">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
