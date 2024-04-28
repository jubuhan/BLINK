import React from 'react'
import bgimg from "../assets/img/bg.jpg"
import { usePop } from '../stores/usePop'


export default function about() {
    const { pop, togglePop }=usePop();
    const words = `Are you tired of straining your eyes from constantly using smart screens? Do you find it hard to make time for expensive clinical eye tests on a weekly basis? Look no further, because at Blink, we offer free eye tests and eye exercises to help you relax your eyes without the need for any travel. Visit our website today to discover a wealth of resources for maintaining healthy eyes effortlessly.
    `;


  return (
    <div id="about" className='bg-white font-Raleway h-auto '>
        <div className='py-4'>
            <div className='ml-6 z-10 relative'>
                <div className='flex items-center'>
                    <div className='flex flex-col gap-2 py-10 sm:mt-8 mt-16 sm:right-0  sm:w-[700px] w-[500px] absolute z-10'>
                        <h1 data-aos="zoom-in" className='text-2xl sm:text-6xl text-black uppercase font-bold'>Why Blink?</h1>
                        <p data-aos="fade-up" className=' mt-2 text-sm sm:text-xl'>{words}</p>
                        <div data-aos="fade-up">
                            <button onClick={togglePop}  className="mt-5 w-[150px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2 hover:scale-105 transition duration-300">Get started</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='items-center z-5'>
                        <img  className='sm:w-full h-full opacity-50' src={bgimg} alt="bgimg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
