import React from "react"
import mail from "../assets/img/maillogo.png"
import calllogo from "../assets/img/calllogo.png"



export default function Footer() {
    return (
      <div id="contact" className='py-10 mt-16 bg-black/95 text-white font-Raleway'>
        <div className='items-center'>
            <div className="container mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 px-14 items-center py-4 text-center sm:text-start">
                    <div className="items-center">
                        <h1 className="font-extrabold uppercase text-4xl">Blink</h1>
                        
                    </div>
                    <div className="mt-28 flex flex-col space-y-4 sm:items-start items-center">
                        <h5 className="font-bold mb-5 text-lg sm:text-xl">Our Services</h5>
                        <a className="text-sm sm:text-md text-gray-400" href="">Visual Acuity</a>
                        <a className="text-sm sm:text-md text-gray-400" href="">Color Blindness Test</a>
                        <a className="text-sm sm:text-md text-gray-400" href="">Astigmatism</a>
                        <a className="text-sm sm:text-md text-gray-400" href="">Eye Excersize</a>
                        <a className="text-sm sm:text-md text-gray-400" href="">Color Cube Game</a>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-start items-center">
                        <h5 className=" font-bold mb-5 text-lg sm:text-xl">Contact us</h5>
                        <div className="flex items-center gap-2">
                            <img className="w-4" src={calllogo} alt="mail" />
                            <span className="cursor-pointer font-sans text-sm sm:text-md text-gray-400">+91 7034361499</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-4" src={mail} alt="calllogo" />
                            <span className="cursor-pointer text-sm sm:text-md text-gray-400">blinkorg@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" border-gray-400 border-1" />
            <p className="text-center mt-8 text-sm text-gray-400">copyright @ Blink</p>
        </div>
      </div>
    )
}