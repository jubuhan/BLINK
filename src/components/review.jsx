"use client";
import React from "react";

export default function LayoutGridDemo() {

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-black">House in the woods</p>
        <p className="font-normal text-base text-black"></p>
        <p className="font-normal text-base my-4 max-w-lg text-black/40">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };
  
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-black">House above the clouds</p>
        <p className="font-normal text-base text-black"></p>
        <p className="font-normal text-base my-4 max-w-lg text-black/40">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-black">Greens all over</p>
        <p className="font-normal text-base text-black"></p>
        <p className="font-normal text-base my-4 max-w-lg text-black/40">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-black">Rivers are serene</p>
        <p className="font-normal text-base text-black"></p>
        <p className="font-normal text-base my-4 max-w-lg text-black/40">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  

  return (
    <div className="py-14 font-Raleway">
        <div className="px-6">
            <h1 className="flex justify-center items-center text-xl sm:text-4xl mb-10 py-4">Reviews</h1>
            <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
                <div className="relative rounded-xl border shadow-lg hover:scale-105 duration-300 h-[400px] bg-white">
                    <div className="absolute">
                      <h3 className='px-2 pt-4 text-2xl font-bold text-black'>vivek.ps</h3>
                      <hr></hr>
                      <div>
                      <p className='px-2 text-black/40 text-md sm:text-xl'>I love the website where you can learn somethings. Actually my favourite website is Learn English Teens.</p>
                      </div>
                    </div>
                </div>

                <div className="relative rounded-xl border shadow-lg hover:scale-105 duration-300 h-[400px] bg-white">
                    <div className="absolute">
                      <h3 className='px-2 pt-4 text-2xl font-bold text-white'>vivek.ps</h3>
                      <hr></hr>
                      <div>
                      <p className='px-2 text-neutral-300 text-md sm:text-xl'>I love the website where you can learn somethings. Actually my favourite website is Learn English Teens.</p>
                      </div>
                    </div>
                </div>

                <div className="relative rounded-xl border shadow-lg hover:scale-105 duration-300 h-[400px] bg-white">
                    <div className="absolute">
                      <h3 className='px-2 pt-4 text-2xl font-bold text-white'>vivek.ps</h3>
                      <hr></hr>
                      <div>
                      <p className='px-2 text-neutral-300 text-md sm:text-xl'>I love the website where you can learn somethings. Actually my favourite website is Learn English Teens.</p>
                      </div>
                    </div>
                </div>

                <div className="relative rounded-xl border shadow-lg hover:scale-105 duration-300 h-[400px] bg-white">
                    <div className="absolute">
                      <h3 className='px-2 pt-4 text-2xl font-bold text-white'>vivek.ps</h3>
                      <hr></hr>
                      <div>
                      <p className='px-2 text-neutral-300 text-md sm:text-xl'>I love the website where you can learn somethings. Actually my favourite website is Learn English Teens.</p>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    </div> 
  )
}



