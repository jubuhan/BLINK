import React, { useRef, useState } from 'react';
import Navbar from "../../components/navbar"
import palming from "../../assets/img/palming.jpg"
import figureof8 from "../../assets/img/figureof8.jpg"
import Shifteye from "../../assets/img/Shifting eyes.png"
import blinking from "../../assets/img/blinking.png"
import zooming from "../../assets/img/zooming.png"

const EyeExercise = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // Define your video sources with relative paths
    const videoSources = [
        'src/assets/EyeExercise/Palming.mp4',
        'src/assets/EyeExercise/Blinking.mp4',
        'src/assets/EyeExercise/Figure of eight.mp4',
        'src/assets/EyeExercise/Shifting eyes.mp4',
        'src/assets/EyeExercise/Zooming.mp4',
    ];


    const handleVideoSelect = (videoSource) => {
        setSelectedVideo(videoSource);
        setIsPlaying(false);
    };

    const handleBackToButtons = () => {
        setSelectedVideo(null); // Reset selectedVideo state to go back to button page
        setIsPlaying(false);
        videoRef.current.pause(); // Pause the video when going back
    };

    const handlePlayVideo = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    return (
        <>
            <Navbar />
            <div className='py-10 font-Raleway'>
                <div className='container'>
                    <div className='flex flex-col items-center gap-6'>
                        <h1 className='sm:text-6xl text-4xl font-medium text-center'>Eye Exercises</h1>
                        {!selectedVideo && (
                            <div className='grid sm:grid-cols-5 grid-cols-1 items-center gap-10  mt-10'>
                                <div>
                                    <img className='w-[300px] h-[200px] rounded-2xl' src={palming} alt="palming" />
                                    <button className='mt-5 sm:w-[250px] w-[300px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black
                                    bg-black/95 border-black text-white rounded-full px-3 py-2 '
                                        onClick={() => handleVideoSelect(videoSources[0])}>
                                        Palming
                                    </button>
                                </div>
                                <hr />
                                <div>
                                    <img className='w-[300px] h-[200px] rounded-2xl' src={blinking} alt="palming" />
                                    <button className='mt-5 sm:w-[250px] w-[300px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black
                                    bg-black/95 border-black text-white rounded-full px-3 py-2 '
                                        onClick={() => handleVideoSelect(videoSources[1])}>
                                        Blinking
                                    </button>
                                </div>
                                <hr />
                                <div>
                                    <img className='w-[300px] h-[200px] rounded-2xl' src={figureof8} alt="palming" />
                                    <button className='mt-5 sm:w-[250px] w-[300px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black
                                    bg-black/95 border-black text-white rounded-full px-3 py-2 '
                                        onClick={() => handleVideoSelect(videoSources[2])}>
                                        Figure of eight
                                    </button>
                                </div>
                                <hr />
                                <div>
                                    <img className='w-[300px] h-[200px] rounded-2xl' src={Shifteye} alt="palming" />
                                    <button className='mt-5 sm:w-[250px] w-[300px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black
                                    bg-black/95 border-black text-white rounded-full px-3 py-2 '
                                        onClick={() => handleVideoSelect(videoSources[3])}>
                                        Shifting eyes
                                    </button>
                                </div>
                                <hr />
                                <div>
                                    <img className='w-[300px] h-[200px] rounded-2xl' src={zooming} alt="palming" />
                                    <button className='mt-5 sm:w-[250px] w-[300px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black
                                    bg-black/95 border-black text-white rounded-full px-3 py-2 '
                                        onClick={() => handleVideoSelect(videoSources[4])}>
                                        Zooming
                                    </button>
                                </div>
                            </div>
                        )}
                        <div>
                            {selectedVideo && (
                                <>
                                    <video ref={videoRef} controls>
                                        <source src={selectedVideo} type="video/mp4" />
                                    </video>
                                    <div className='mt-10 flex items-center justify-between'>
                                        {!isPlaying &&
                                            <div>
                                                <button className=' w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2 '
                                                    onClick={handlePlayVideo}>
                                                    Start
                                                </button>
                                            </div>
                                        }
                                            <div>
                                                <button className='w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2 '
                                                    onClick={handleBackToButtons}>
                                                    Back
                                                </button>
                                            </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
                            };

export default EyeExercise;