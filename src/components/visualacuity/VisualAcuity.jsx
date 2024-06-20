import React, { useState } from 'react';
import Navbar from "../../components/navbar"
import { useNavigate } from 'react-router-dom';

const imageData = [
    { src: '../src/assets/visualAcuity/chartimg1.png', value: '20/200' },
    { src: '../src/assets/visualAcuity/chartimg2.png', value: '20/100' },
    { src: '../src/assets/visualAcuity/chartimg3.png', value: '20/80' },
    { src: '../src/assets/visualAcuity/chartimg4.png', value: '20/50' },
    { src: '../src/assets/visualAcuity/chartimg5.png', value: '20/40' },
    { src: '../src/assets/visualAcuity/chartimg6.png', value: '20/30' },
    { src: '../src/assets/visualAcuity/chartimg7.png', value: '20/25' },
    { src: '../src/assets/visualAcuity/chartimg8.png', value: '20/20' },
];

const VisualAcuity = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stopped, setStopped] = useState(false);
    const [result, setResult] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const handleNext = () => {
        if (currentIndex < imageData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setResult(imageData[imageData.length - 1].value);
            setStopped(true);
        }
    };

    const handleStop = () => {
        setStopped(true);
        if (currentIndex === 0) {
            setResult(0);
        } else {
            setResult(imageData[currentIndex - 1].value);
        }
    };

    const startGame = () => {
        setGameStarted(true);
    };

    return (
        <>
            <Navbar />
            <div className='font-Raleway py-10'>
                <div className='container'>
                    <div className="flex flex-col items-center gap-6">
                        <h1 className='sm:text-6xl text-4xl font-medium text-center'>Visual Acuity Test</h1>
                        {
                            gameStarted ? (
                                stopped ? (
                                    <div className='flex flex-col gap-6'>
                                        <p className='text-2xl mt-10'><span className='font-bold'>Result: </span>{result}</p>
                                        <button className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2' onClick={()=>navigate("/home")} >Back to Tests</button>
                                    </div>
                                ) : (
                                    <>
                                        <img className='mt-10' src={imageData[currentIndex].src} alt={`Image ${currentIndex + 1}`} />
                                        <div className='mt-10 flex items-center justify-between gap-6'>
                                            <button  className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2' onClick={handleNext}>Next</button>
                                            <button  className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2' onClick={handleStop}>Stop</button>
                                        </div>
                                        </>
                                )
                            ) : (
                                <>
                                    <div className='flex flex-col items-center gap-6 mt-10'>
                                        <p className='text-2xl font-bold mt-5'>Instructions</p>

                                        <div>
                                            <ol className='list-decimal'>
                                                <li className='text-lg sm:text-xl mt-2'>Hold the phone  at arm's length (about one hand distance).</li>
                                                <li className='text-lg sm:text-xl mt-2'>Completely cover one eye with your hand. </li>
                                                <li className='text-lg sm:text-xl mt-2'>Read the letters given. If you have trouble in reading ,press stop.</li>
                                                <li className='text-lg sm:text-xl mt-2'>Uncover the first eye and cover the other. Repeat the same.</li>
                                            </ol>
                                        </div>
                                        <button onClick={startGame} className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2 '>Start test</button>
                                    </div>

                                </>
                            )
                        }
                    </div >
                </div>
            </div>
        </>
    );
};

export default VisualAcuity;