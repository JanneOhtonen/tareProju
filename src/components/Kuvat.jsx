import React, { useState } from 'react'
import imgOne from '../assets/tarekuva1.jpg'
import imgTwo from '../assets/tarekuva2.jpg'
import imgThree from '../assets/tarekuva3.jpg'
import imgFour from '../assets/tarekuva4.jpg'
import imgFive from '../assets/tarekuva5.jpg'
import imgSix from '../assets/tarekuva6.jpg'
import imgSeven from '../assets/tarekuva7.jpg'
import imgEight from '../assets/tarekuva8.jpg'
import imgNine from '../assets/tarekuva9.jpg'
import imgTen from '../assets/tarekuva10.jpg'
import imgEleven from '../assets/tarekuva11.jpg'
import imgTwelve from '../assets/tarekuva12.jpg'

const Kuvat = () => {
    const images = [
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgSix,
        imgSeven,
        imgEight,
        imgNine,
        imgTen,
        imgEleven,
        imgTwelve
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <section id='kuvat' className='border-b border-gray-700'>
            <div className="flex-1 min-h-full bg-black pt-10">
                <div className='text-white text-[50px] text-3x1 font-poppins text-center'>
                    Kuvia
                </div>
                <div className="ml-4 flex flex-1 flex-col md:flex-row">
                    <div className='container mx-auto p-4 flex flex-col md:flex-row md:w-1/2 mb-4 md:mb-0 lg:pl-10'>
                        <img src={selectedImage} alt="Selected Image" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className='container mx-auto p-4 grid grid-cols-4 md:w-1/2 mb-4 md:mb-0' >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-auto rounded-lg p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Kuvat