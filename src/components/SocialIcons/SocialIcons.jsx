import React from 'react'
import social from './socialIconsData'
import { motion } from 'framer-motion';

export default function SocialIcons({ size }) {
    return (
        <div className="flex space-x-4">
            {social.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                >
                    <social.icon className={`text-${size}`} />
                </motion.a>
            ))}
        </div>
    )
}
