import { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-700 flex flex-wrap items-center justify-between mx-auto p-4'>
            <header className='flex items-center'>
                <h1 className='font-poppins font-normal text-[28px] text-white ml-0' >Esiintymislava.net</h1>
            </header>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'} text-white`}

                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain " onClick={() => setToggle((prev) => !prev)} />
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'} text-white`}

                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar