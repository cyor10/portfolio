import React from 'react'
import Project from './Project'
import projectsData from '../../data/projectsData'
import { motion } from 'framer-motion'
import { fadeIn } from '../../data/variants'

export default function Projects() {
    return (
        <section className='py-8 lg:section h-screen bg-deepSkyBlue' id='projects'>
            <div className='container mx-auto'>
                <div>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 items-center justify-start'>
                        <h4 className='text-xl uppercase text-ivory font-medium mb-2 tracking-wide'>
                            Mis últimos proyectos
                        </h4>
                        <p className='max-w-sm mb-6'>
                            Mi campo de interés es la construcción de nuevas tecnologías web. <br />
                            Siempre que es posible, también aplico mi pasión por desarrollar productos con Node.js y bibliotecas y marcos de Javascript modernos como React.js y Next.js.
                        </p>
                    </motion.div>
                    <div>
                        <div></div>
                    </div>
                    <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 items-center justify-start'>
                        {projectsData.map((project) => (
                            <Project key={project.id} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};
