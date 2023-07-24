import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' className='bg-black'>
            <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href='http://esiintymislava.net/wp/' className='flex items-center mb-4 sm:mb-0'>
                        <h1 className='font-poppins font-normal text-[28px] text-white ml-0' >Esiintymislava.net</h1>
                    </a>
                    <ul className='flex flex-wrap items-center mb-6 text-sm font-poppins text-white'>
                        <li>
                            <a href="#home" className="mr-4 hover:underline md:mr-6 ">Koti</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Myytävät soittimet</a>
                        </li>
                        <li>
                            <a href="#lavavuokra" className="hover:underline">Vuokrattavat Lavat</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <p className="block text-poppins text-gray-500 sm:text-center dark:text-gray-400"> Tmi. Pianonviritys Saitajoki.</p>
                <p className="block text-poppins text-gray-500 sm:text-center dark:text-gray-400"> Puh. 040 123 4567</p>
            </div>
        </footer>
    )
}

export default Footer