import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { GoProjectSymlink } from 'react-icons/go'
import { MdOutlineContactPhone } from 'react-icons/md'

export default function NavBar() {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        scrollToTop();
    }, [location]);

    return (
        <nav className='flex flex-wrap bg-gunmetal p-6 font-semibold text-ivory text-lg fixed top-0 w-full z-10 pl-10'>
            <ul className='flex justify-center space-x-4'>
                <li>
                    <NavLink to="/portfolio" className='flex flex-col items-center'>
                        < AiOutlineHome />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='flex flex-col items-center'>
                        <CgProfile />
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className='flex flex-col items-center'>
                        <GoProjectSymlink />
                        Projects
                    </NavLink>
                </li>
                {/*<li>
                    <MdOutlineContactPhone />
                    <NavLink to="/contact" className='flex flex-col items-center'>
                        Contact
                    </NavLink>
                </li>*/}
            </ul>
        </nav>
    )
}
