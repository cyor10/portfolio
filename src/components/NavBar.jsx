import React from 'react'
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { GoProjectSymlink } from 'react-icons/go'
import { MdOutlineContactPhone } from 'react-icons/md'

export default function NavBar() {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='w-full bg-black/20 h-[75px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
                    <Link
                        to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <AiOutlineHome />
                    </Link>
                    <Link
                        to='about'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <CgProfile />
                    </Link>
                    <Link
                        to='projects'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <GoProjectSymlink />
                    </Link>
                    <Link
                        to='contact'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <MdOutlineContactPhone />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
