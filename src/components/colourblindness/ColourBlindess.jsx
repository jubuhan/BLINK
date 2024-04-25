import React, { useState } from 'react';
import Navbar from "../../components/navbar"
import { useNavigate } from 'react-router-dom';

 const ColourBlindess = () => {
    const navigate = useNavigate();
    const [imageIndex, setImageIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [pcount, setPcount] = useState(0);
    const [dcount, setDcount] = useState(0);
    const [allDone, setAllDone] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    
    const images = [
        {
            path: "../src/assets/ishiharapates/image0.jpg",
            value: '12',
            options: ['12', '17', '13', '14'], // Options specific to image 1
        },
        {
            path: `../src/assets/ishiharapates/image1.jpg`,
            value: '29',
            options: ['29', '70', 'Nothing'], // Options specific to image 2
        },

        {
            path: `../src/assets/ishiharapates/image2.jpg`,
            value: '5',
            options: ['2', '9', '5'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image3.jpg`,
            value: '3',
            options: ['3', '5', '8'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image4.jpg`,
            value: '74',
            options: ['21', '74', '14'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image5.jpg`,
            value: '6',
            options: ['9', '6', 'Nothing'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image6.jpg`,
            value: '16',
            options: ['16', 'Nothing', '9'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image7.jpg`,
            value: 'Nothing',
            options: ['Nothing', '49', '5'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image8.jpg`,
            value: 'Nothing',
            options: ['49', 'Nothing', '20'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image9.jpg`,
            value: 'Nothing',
            options: ['Nothing', '20', '73'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image10.jpg`,
            value: '26',
            pvalue: '6',
            options: ['6', '26', '2'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image11.jpg`,
            value: '96',
            pvalue: '6',
            options: ['6', '9', '96'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image12.jpg`,
            value: 'Purple and red spots',
            pvalue: 'Only purple line',
            options: ['Only red line', 'Purple & red spots', 'Only purple line'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image13.jpg`,
            value: 'Nothing',
            options: ['A line', 'Nothing', 'Violet line'], // Options specific to image 2
        },
        {
            path: `../src/assets/ishiharapates/image14.jpg`,
            value: 'Orange line',
            options: ['Orange line', 'Nothing or false line', 'Nothing or false line '], // Options specific to image 2
        },



    ];

    const handleOptionChange = (index, optionIndex) => {
        console.log("clicked");
        setImageIndex(index);

        // Get the selected option value
        const selectedValue = images[index].options[optionIndex];

        // Check for correct answer
        if (selectedValue === images[index].value) {
            setCount(count + 1);
        } else {
            // Check pvalue from image10 to 12
            if (index >= 10 && index <= 12) {
                if (images[index].pvalue) {
                    // Check pvalue if it exists
                    if (selectedValue === images[index].pvalue) {
                        setPcount(pcount + 1);
                    } else {
                        setDcount(dcount + 1);
                    }
                } else {
                    // No pvalue, increment dcount
                    setDcount(dcount + 1);
                }
            }
        }

        const newIndex = (imageIndex + 1);
        setImageIndex(newIndex);
        // Check if all images have been shown
        if (newIndex === images.length) {
            setAllDone(true);

        }
    };


    const currentImage = images[imageIndex];
    console.log(currentImage);

    const startGame = () => {
        setGameStarted(true);
        generateCubes();
      };

    return (
        <>
            <Navbar />
            <div className='font-Raleway py-10'>
                <div className='container'>
                    <div className="">
                        <h1 className='sm:text-6xl text-4xl font-medium text-center'>Colour blindness Test</h1>
                        { gameStarted ? (
                            allDone ? (
                                <div className='flex flex-col items-center gap-3'>

                                    {/* Display message and final result text based on count */}
                                    <p className='text-2xl font-medium text-center mt-10'>All images completed!</p>


                                    {/* Display messages based on count, pcount, and dcount */}
                                    <p>
                                        {count < 7 ? (
                                            <p className='text-4xl font-medium text-center text-red-600 mt-3'>Bad</p>
                                        ) : (
                                            <p className='text-4xl font-medium text-center text-green-600 mt-3'>Good</p>
                                        )}
                                    </p>
                                    <button onClick={()=>navigate("/home")} className=' mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2'>Back to Tests</button>
                                    {/* {pcount > 0 && <p>ppppp</p>}
                                    {dcount > 0 && <p>ddddd</p>}
                                    {pcount > 0 && dcount > 0 && <p>dpdpdpdp</p>} */}
                                </div>
                            ) : (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img className='w-[500px] mt-10' src={currentImage.path} alt="loading" />
                                        <h3 className='mt-10 text-xl font-medium'>Options</h3>
                                        <div className="max-w-[500px] flex justify-between items-center mt-4  gap-5">
                                            {currentImage.options?.map((option, optionIndex) => (
                                                <button className='w-[150px] h-[70px] max-w-[200px] hover:shadow-lg bg-black/95 border-black text-white hover:bg-white hover:text-black  rounded-full px-3 py-2 hover:scale-105 transition duration-300' key={optionIndex} onClick={() => handleOptionChange(imageIndex, optionIndex)}>
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        <div className=" mt-10">
                                            <p className='text-xl mt-3 font-medium'>Score : {count}</p>
                                            <p className='text-xl mt-3 font-medium'>Pcount: {pcount}</p>
                                            <p className='text-xl mt-3 font-medium'>Dcount: {dcount}</p>
                                        </div>
                                    </div>
                                </>
                            )

                        ) : (
                            <div className='flex flex-col items-center gap-6 mt-10'>
                                <p className='text-2xl font-bold mt-5'>Instructions</p>
                                <ol className='list-decimal'>
                                        <li className='text-lg sm:text-xl mt-2'>Turn up your brightness to 100%.</li>
                                        <li className='text-lg sm:text-xl mt-2'>Be sure to turn off any blue light filter.</li>
                                        <li className='text-lg sm:text-xl mt-2'>Please note you will have 7 seconds to respond to each test plate.</li>
                                        <li className='text-lg sm:text-xl mt-2'>Try to identify the hidden numbers in each plate,and select the right number from the options</li>
                                        <li className='text-lg sm:text-xl mt-2'>Complete all tests.</li>
                                    </ol>
                                <button onClick={startGame} className='mt-5 w-[150px] hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-white hover:text-black bg-black/95 border-black text-white font-Raleway rounded-full px-3 py-2 '>Start test</button>
                            </div>
                             
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColourBlindess;
