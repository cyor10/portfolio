import React from 'react'
import { motion } from 'framer-motion';

export default function AboutDescription() {
    const animationProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 },
    };

    return (
        <div className='flex flex-col items-center text-black pt-10'>
            <div className='max-w-[70%] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"'>
                <motion.p
                    {...animationProps}
                    className='flex font-figtree text-4xl font-bold mt-4 pl-6 pr-6 justify-center'
                >
                    Hola a todos
                </motion.p>
                <motion.p
                    {...animationProps}
                    className='flex block mt-1 text-lg leading-tight font-medium pl-6 pr-6 justify-center'>
                    Soy Yaneth Orduz de Bogotá, Colombia.
                </motion.p>
                <div className='pt-8'>
                    <motion.p
                        {...animationProps}
                        className='text-lg mb-8 text-slate-500 pl-6 pr-6'
                    >
                        Desarrolladora web con experiencia en colaboración efectiva y un gran interés en resolver problemas y encontrar soluciones efectivas. Con una buena comprensión de estructuras de datos y algoritmos, dominio de React y una sólida base en la pila MERN.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};
