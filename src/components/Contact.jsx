import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../data/variants'
import SocialIcons from './SocialIcons';

export default function Contact() {
    return (
        <section className='py-8 lg:section h-screen bg-deepSkyBlue' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex-col items-center justify-start'>
                        <h4 className='text-xl uppercase text-ivory font-medium mb-2 tracking-wide'>
                            Ponerse en contacto
                        </h4>
                        <h2 className='text-[45px] lg:text-[90px] leading-none mb-2'>
                            Trabajemos juntos
                        </h2>
                        <div className='text-ivory mb-12'>
                            <h4 className='text-xl text-ivory font-medium mb-2 tracking-wide'>
                                Encuéntrame en:
                            </h4>
                            <SocialIcons size='2xl' />
                        </div>
                    </motion.div>
                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-8 pb-24 p-6 items-start bg-white'>
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gunmetal focus:border-deepSkyBlue transition-all'
                            type='text'
                            placeholder='Tu nombre'>
                        </input>
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gunmetal focus:border-deepSkyBlue transition-all'
                            type='text'
                            placeholder='Tu email'>
                        </input>
                        <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gunmetal focus:border-deepSkyBlue transition-all resize-none mb-12'
                            placeholder='Deja tu mensaje'>
                        </textarea>
                        <button className='btn btn-lg'>Enviar mensaje</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
