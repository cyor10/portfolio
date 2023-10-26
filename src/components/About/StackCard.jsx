import React from 'react'
import { motion } from 'framer-motion';

export default function StackCard({ icon: Icon, name }) {
    return (
        <motion.div
            className="flex flex-col rounded-lg shadow-md p-2 items-center border border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
        >
            <Icon className='text-5xl text-ivory mb-4' />
            <span className='text-lg font-semibold'>{name}</span>
        </motion.div>
    );
};