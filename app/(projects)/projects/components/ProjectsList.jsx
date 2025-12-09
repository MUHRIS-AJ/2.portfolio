"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { containerAnimation } from './Animations';

export const ProjectsList = ({ projects }) => {
    const projectList = Array.isArray(projects) ? projects : [];

    if (projectList.length === 0) {
        return (
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                className="rounded-xl border border-primary/10 bg-secondary/5 p-6 text-center text-sm text-muted-foreground"
            >
                Projects will appear here once they are added.
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="space-y-4"
        >
            {projectList.map((project, index) => (
                <ProjectCard key={project.id ?? index} project={project} index={index} />
            ))}
        </motion.div>
    );
};
