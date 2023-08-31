import React from 'react'
import homepic from '../assets/widehometwo.png'

const Esiintymislavat = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col pt-10`}>
            <div className='relative w-screen h-1/3 sm:h-screen'>
                <img src={homepic} alt='homepic' className="w-auto h-1/3 sm:h-screen object-cover opacity-30 sm:pb-10 style={{ maxHeight: '100vh' }}" />
                <div className="font-poppins hidden sm:block absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[100px] text-white text-center bg-black p-4 rounded">
                    Esiintymislava.net
                </div>
                <div className="font-poppins hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30px] text-white text-center pt-20">
                    Esiintymislavat koko Suomen alueelle
                </div>
            </div>
        </section>
    )
}

export default Esiintymislavat