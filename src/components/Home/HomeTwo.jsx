import React from 'react';
import { motion } from 'framer-motion';

export default function HomeTwo() {
    const animationProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 },
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-deepSkyBlue text-gunmetal'>
            <div className='max-w-[70%] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"'>
                <motion.p
                    {...animationProps}
                    className='flex font-figtree text-4xl font-bold mt-4 pl-6 pr-6 justify-center'
                >
                    Permítame presentarme
                </motion.p>
                <motion.p
                    {...animationProps}
                    className='flex block mt-1 text-lg leading-tight font-medium pl-12 pr-12 justify-center'>
                    Me enamoré de la programación y si hoy me preguntas ¿Cúanto he aprendido? Te diré que no lo sé, pero estoy segura que es mucho más que cuando inicié.
                </motion.p>
                <div className='pt-8'>
                    <motion.p
                        {...animationProps}
                        className='text-lg mb-8 pl-6 pr-6'
                    >
                        Mi campo de interés es la construcción de nuevas tecnologías web.
                    </motion.p>
                    <motion.p
                        {...animationProps}
                        className='text-lg mb-8 pl-6 pr-6'
                    >
                        Siempre que es posible, también aplico mi pasión por desarrollar productos con Node.js y bibliotecas y marcos de Javascript modernos como React.js y Next.js.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};
