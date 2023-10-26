import React from 'react'
import SocialIcons from './SocialIcons/SocialIcons';

export default function Footer() {
    return (
        <footer class='bg-gunmetal text-ivory text-xl'>
            <div className='flex flex-wrap justify-between items-center sm:px-12 p-6'>
                <p className='text-1xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                    <span className='text-turquoise'>Creado por</span> Yaneth Orduz
                </p>
                <SocialIcons size='lg' />
            </div>
        </footer>
    )
}
