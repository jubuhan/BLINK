import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import visualicon from "../assets/img/visualicon.png"
import cubeicon from "../assets/img/cubeicon.png"
import coloricon from "../assets/img/coloricon.png"
import astigicon from "../assets/img/astigmatismicon.jpg"
import homebanner from "../assets/img/homebanner.png"
import Eyeexerciseicon from "../assets/img/eyeexerciseicon.png"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './footer'
import LoaderSimple from './Loading'
export default function Home() {

    const navigate = useNavigate();

    React.useEffect(() => {
        AOS.init(
            {
                duration: 800,
                easing: "ease-in-sine",
                delay: 100,
                offset: 100
            }
        );
        AOS.refresh();
    }, [])



    return (
        <>
            <Navbar />
            <LoaderSimple />
            <div className='bg-white font-Raleway h-auto py-12'>
                <div className='py-4 px-2'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-16 '>
                        <div data-aos="zoom-in" data-aos-delay="500" >
                            <img className=' w-full ' src={homebanner} alt="homebanner" />
                        </div>
                        <div className=' flex flex-col items-center gap-10 mt-10'>
                            <h1 data-aos="zoom-in" className='uppercase text-black/95 text-4xl sm:text-6xl font-medium'>Vision Test & Exercise</h1>

                            <p data-aos="fade-up" data-aos-delay="0" className='text-lg sm:text-xl mt-16 text-center'>Wondering how accurate your eyesight really is ? Try out this quick eye test to find out how well you can see!</p>
                            <p data-aos="fade-up" data-aos-delay="200" className='text-lg sm:text-xl text-center mt-4'>With this test, you will have the opportunity to assess your visual acuity, your potential visual fatigue, your colour vision and even your visual reflexes.</p>
                        </div>
                    </div>

                    <div className='text-center mt-5 font-Raleway mb-10'>
                        <h1 className='text-2xl sm:text-4xl font-bold text-black/95 mb-8'>Test</h1>
                        <hr className='py-6' />
                        <div className='grid grid-cols-1 gap-8 px-10 mt-6'>


                            {/* eye test */}


                            <div data-aos="fade-up" data-aos-delay="0" className='flex items-center justify-between shadow-lg rounded-xl border py-4 px-4 hover:scale-105 duration-300'>
                                <div className='flex items-center gap-6'>
                                    <img className='w-8' src={visualicon} alt="visualicon" />
                                    <p className='text-sm sm:text-xl '>Visual Acuity</p>
                                </div>
                                <div>
                                    <button onClick={() => navigate("/visualacuitytest")} className='w-[100px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2  hover:scale-105 transition duration-300'>Take test</button>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100" className='flex items-center justify-between shadow-lg rounded-xl border py-4 px-4 hover:scale-105 duration-300'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-10' src={cubeicon} alt="visualicon" />
                                    <p className='text-sm sm:text-xl'>Colour cube game</p>
                                </div>
                                <div>
                                    <button onClick={() => navigate("/colourcube")} className='w-[100px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2 hover:scale-105 transition duration-300'>Take test</button>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className='flex items-center justify-between shadow-lg rounded-xl border py-4 px-4 hover:scale-105 duration-300'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src={coloricon} alt="visualicon" />
                                    <p className='text-sm sm:text-xl '>Color blindness</p>
                                </div>
                                <div>
                                    <button onClick={() => navigate("/colourblindesstest")} className='w-[100px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2 hover:scale-105 transition duration-300'>Take test</button>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className='flex items-center justify-between shadow-lg rounded-xl border py-4 px-4 hover:scale-105 duration-300'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-8' src={astigicon} alt="visualicon" />
                                    <p className='text-sm sm:text-xl'>Astigmatism check</p>
                                </div>
                                <div>
                                    <button onClick={()=>navigate("/astigmatism")} className='w-[100px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2 hover:scale-105 transition duration-300'>Take test</button>
                                </div>
                            </div>

                            {/* eye exercise */}

                            <h1 className='text-2xl sm:text-4xl font-bold text-black/95 mb-4'>Eye exercise</h1>
                            <hr className='py-6' />

                            <div data-aos="fade-up" data-aos-delay="400" className='flex items-center justify-between shadow-lg rounded-xl border py-4 px-4 hover:scale-105 duration-300'>
                                <div className='flex items-center gap-6'>
                                    <img className='w-8' src={Eyeexerciseicon} alt="visualicon" />
                                    <p className='text-sm sm:text-xl '>Exercises</p>
                                </div>
                                <div>
                                    <button onClick={() => navigate("/eye-exercise")} className='w-[100px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black font-Raleway rounded-full px-3 py-2 hover:scale-105 transition duration-300'>Take test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
