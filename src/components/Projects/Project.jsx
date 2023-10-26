import React from 'react'
import { motion } from 'framer-motion';

export default function Project({ project }) {
    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className='max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4'
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
        >
            <motion.img
                src={project.image}
                alt={project.title}
                className='w-full h-40 object-cover'
            />
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>{project.title}</h2>
                <motion.p
                    className='text-gray-600 mt-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {project.description}
                </motion.p>
                <div className='mt-4 space-x-2'>
                    <a
                        href={project.github}
                        className='text-blue-600 hover:underline'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.deployment}
                        className='text-blue-600 hover:underline'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Deployment
                    </a>
                </div>
            </div>
        </motion.div>
    );
};