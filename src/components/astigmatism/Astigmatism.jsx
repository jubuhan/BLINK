import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar"

const Astigmatism = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [responses, setResponses] = useState([]);


    const steps = [
        {
            instruction: '',
            images: ['../src/assets/asti/image1.jpg', '../src/assets/asti/image2.jpg'],
            questions: ['Do you see the vertical lines and horizontal lines equally clear and with same thickness? If Yes, then click the YES button otherwise click the NO button below the image.', 'Do all the radiating heavy black line are of different intensities and thickness? If Yes, then click the YES button otherwise click the NO button below the image.'],
        },
        {
            instruction: 'Instruction 2',
            images: ['../src/assets/asti/image1.jpg', '../src/assets/asti/image2.jpg'],
            questions: ['Do you see the vertical lines and horizontal lines equally clear and with same thickness? If Yes, then click the YES button otherwise click the NO button below the image.', 'Do all the radiating heavy black line are of different intensities and thickness? If Yes, then click the YES button otherwise click the NO button below the image.'],
        },
        // Add more steps with instructions, images, and questions as needed
    ];

    const handleReady = () => {
        setIsReady(true);
    };

    const result = (firstInstructionBadImages, secondInstructionBadImages) => {
        if (!firstInstructionBadImages && !secondInstructionBadImages) {
            return (
                <div className='px-2 text-center'>
                    <p className='text-xl sm:text-2xl mt-5'>Because you see all the lines in the images black and clear, you may not have Astigmatism.</p>
                </div>
            )
        }
        else if (firstInstructionBadImages && secondInstructionBadImages) {
            return (
                <div className='px-2 text-center'>
                    <p className='text-xl sm:text-2xl mt-5'>You are having minor signs of astigmatism for both eyes.</p>
                    <p className='text-xl sm:text-2xl mt-5'>Visit your eye care practitioner and get your eyes thoroughly checked</p>
                </div>
            )
        }
        else if (firstInstructionBadImages) {
            return (
                <div className='px-2 text-center'>
                    <p className='text-xl sm:text-2xl mt-5'>There may be a possibility that your <span className='font-bold'>Right</span> eye might be astigmatic as you seem to see some lines darker than the rest.</p>
                    <p className='text-xl sm:text-2xl mt-5'>Visit your eye doctor to get your eyes checked.</p>
                </div>
            )
        }
        else if (secondInstructionBadImages) {
            return (
                <div className='px-2 text-center'>
                    <p className='text-xl sm:text-2xl mt-5'>There may be a possibility that your <span className='font-bold'>Left</span> eye might be astigmatic as you seem to see some lines darker than the rest.</p>
                    <p className='text-xl sm:text-2xl mt-5'>Visit your eye doctor to get your eyes checked.</p>
                </div>
            )
        }
    };



    useEffect(() => {
        if (currentImageIndex === steps[currentStep].images.length) {
            if (currentStep === steps.length - 1) {
                // Last step, show the result
                return;
            } else {
                // Move to the next step
                setCurrentStep((prevStep) => prevStep + 1);
                setCurrentImageIndex(0);
                setIsReady(false);
            }
        }
    }, [currentImageIndex, currentStep, steps]);

    const handleResponse = (response) => {
        setResponses((prevResponses) => [...prevResponses, response]);
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };

    const renderContent = () => {
        const { instruction, images, questions } = steps[currentStep];
        if (!isReady) {
            return (

                <div className='py-10 font-Raleway'>
                    <div className='container px-6'>
                        <div className='flex flex-col items-center gap-6'>

                            <h1 className='sm:text-6xl text-4xl font-medium text-center'>Astigmatism Test</h1>

                            <p className='text-2xl font-bold mt-5'>Instructions</p>
                            <div className='flex flex-col items-center'>
                                {currentStep == 0 ?
                                    (<ol className='list-decimal'>
                                        <li className='text-lg sm:text-xl mt-2'>Keep a distance of at least 1m from the screen.</li>
                                        <li className='text-lg sm:text-xl mt-2'>Close your left eye and concentrate on the image with your right eye.</li>
                                    </ol>
                                    ) :
                                    (
                                        <ol className='list-decimal'>
                                            <li className='text-lg sm:text-xl mt-2'>Now close you right eye and concentrate on the image with your left eye</li>
                                        </ol>
                                    )
                                }
                            </div>
                            <button onClick={handleReady} className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2'>Ready</button>

                        </div>
                    </div>
                </div >
            );
        }

        if (currentImageIndex === steps[currentStep].images.length) {
            // Last image of the current step
            if (currentStep === steps.length - 1) {
                // Last step, show the result
                const firstInstructionBadImages = responses.slice(
                    0,
                    steps[0].images.length
                ).includes(true);
                const secondInstructionBadImages = responses.slice(
                    steps[0].images.length
                ).includes(true);



                return (
                    <>
                        <Navbar />
                        <div className='flex items-center flex-col gap-6'>
                            <h3 className='text-4xl font-bold mt-5'>Result</h3>
                            {result(firstInstructionBadImages, secondInstructionBadImages)}
                        </div>
                    </>
                );
            }
        }

        const currentImage = images[currentImageIndex];
        const currentQuestion = questions[currentImageIndex];

        return (
            <>
                <Navbar />
                <div className='font-Raleway py-10'>
                    <div className='container'>
                        <div className='flex flex-col items-center gap-6'>
                            <h1 className='sm:text-6xl text-4xl font-medium text-center'>Astigmatism Test</h1>

                            <p className='text-2xl font-bold mt-5'>{instruction}</p>
                            <div className='rounded-lg sm:p-3 border border-gray-400 '>
                                <div className='flex flex-col items-center px-2'>
                                    <img src={currentImage} alt={`Image ${currentImageIndex + 1}`} />
                                    <p className='text-md text-center sm:w-[600px]'>{currentQuestion}</p>
                                    <div className='flex justify-between items-center gap-8 mb-6'>
                                        <button onClick={() => handleResponse(true)} className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2'>Yes</button>
                                        <button onClick={() => handleResponse(false)} className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2'>No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <div>{renderContent()}</div>;
};

export default Astigmatism;
