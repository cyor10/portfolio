import React from 'react'
import AboutDescription from './AboutDescription'
import TechStack from './TechStack'
import ToolStack from './ToolStack'

export default function About() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-deepSkyBlue text-white pt-24 py-10'>
            <div>
                <AboutDescription />
            </div>
            <p className='text-2xl pt-4 py-4 font-semibold'>
                Conjunto de habilidades profesionales
            </p>
            <div>
                <TechStack />
            </div>
            <p className='text-2xl pt-4 py-4 font-semibold'>
                Herramientas que uso
            </p>
            <div>
                <ToolStack />
            </div>
        </div>
    )
}
