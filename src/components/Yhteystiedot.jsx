import React from 'react'
import tares from '../assets/tares.png'

const Yhteystiedot = () => {
    return (
        <section id='yhteystiedot'>
            <div className="flex flex-col items-center justify-center min-h-50 pt-20 bg-black pb-10">
                <h1 className="text-4xl font-poppins text-white">Ota yhteyttä!</h1>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 md:ml-8 md:pl-20 md:pt-10 text-center">
                        <img
                            src={tares}
                            alt="tare"
                            className="w-32 h-32 rounded-full inline-block align-middle"
                        />
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-white text-[28px]">
                            Jarmo "Tare" Saitajoki
                        </p>
                        <p className="text-white">
                            <strong>Sähköposti:</strong> Jarmo.saitajoki@gmail.com
                        </p>
                        <p className="text-white">
                            <strong>Puhelin:</strong> 040 123 4567
                        </p>
                        <p className="text-white">
                            <strong>Yritys:</strong> Tmi. Pianonviritys Saitajoki
                        </p>
                        <p className="text-white">
                            <strong>Osoite:</strong> Katukatu 63 A 34
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Yhteystiedot