import React from 'react'
import alspaw from '../assets/alspaw2.png'
import ultralitepro from '../assets/ultralitepro.png'
import europod from '../assets/europodium.png'

const lavavuokra = () => {
    return (
        <section id='lavavuokra' className='border-b border-gray-700'>
            <div className="flex flex-col min-h-screen bg-black">
                <div className='text-white text-[32px] sm:text-[50px] pt-5 sm:pt-0 text-3x1 font-poppins text-center'>
                    Vuokrattavat lavat
                </div>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img src={alspaw} alt='alspaw' className="w-full h-auto rounded-md" />
                    </div>
                    <div className="md:w-2/5 md:ml-4">
                        <h2 className=' text-white font-poppins mb-4'>Alspaw M48 (8x6m)</h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium turpis in mi
                            tincidunt venenatis. Proin bibendum a lectus id gravida. Nulla in ex nec ex malesuada
                            scelerisque.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 hidden md:block">
                        <h2 className=' text-white font-poppins mb-4'>Ultralite Pro Stage (8x6m)</h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium turpis in mi
                            tincidunt venenatis. Proin bibendum a lectus id gravida. Nulla in ex nec ex malesuada
                            scelerisque.
                        </p>
                    </div>
                    <div className="md:w-2/5 mb-4 md:mb-0">
                        <img src={ultralitepro} alt='ultralitepro' className="w-full h-auto rounded-md" />
                    </div>
                    <div className="md:w-1/2 block md:hidden">
                        <h2 className=' text-white font-poppins mb-4'>Ultralite Pro Stage (8x6m)</h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium turpis in mi
                            tincidunt venenatis. Proin bibendum a lectus id gravida. Nulla in ex nec ex malesuada
                            scelerisque.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center md:justify-center">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:pl-10">
                        <img src={europod} alt='europodium' className="w-full h-auto rounded-md" />
                    </div>
                    <div className="md:w-1/2 md:ml-4">
                        <h2 className=' text-white font-poppins mb-4'>Europodium Guiliet S.A. Willy 48 (8x6 m)</h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium turpis in mi
                            tincidunt venenatis. Proin bibendum a lectus id gravida. Nulla in ex nec ex malesuada
                            scelerisque.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default lavavuokra