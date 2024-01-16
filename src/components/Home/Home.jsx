import React from 'react';
import { motion } from 'framer-motion';
import Writer from './Writer'
import SocialIcons from '../SocialIcons';
import HomeTwo from './HomeTwo.jsx';

export default function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center bg-gunmetal text-ivory'>
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='text-4xl font-bold mb-4 pl-6 pr-6'
                >
                    ¡Hola 👋, soy <span className='text-turquoise'>Yaneth Orduz</span>!
                </motion.h1>
                <div className='font-figtree text-2xl font-semibold mb-8 pl-6 pr-6'>
                    <Writer />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='block mt-1 text-lg leading-tight font-medium pl-6 pr-6 py-2'>
                        Encuentrame en:
                    </motion.p>
                    <SocialIcons size='2xl' />
                </div>
            </div>
            <div>
                <HomeTwo />
            </div>
        </>
    );
}
