import React from 'react'
import google from "../assets/img/google.png"
import close from "../assets/img/close.png"
import { usePop } from '../stores/usePop'
import { useNavigate } from 'react-router-dom'

export default function Pop() {
    const navigate = useNavigate();
    const { pop, togglePop } = usePop()
  return (
    <>
    {pop && <div>
        <div className='font-Raleway h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='rounded-md duration-300 w-[350px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white'>
                <div className='flex items-center justify-between'>
                    <h1 className=' uppercase font-bold text-xl ml-1'>User Login</h1>
                    <div>
                        <img onClick={togglePop} className='w-4 cursor-pointer' src={close} alt="close" />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <input type="text" placeholder='Username' className='mt-6 w-full rounded-xl border border-gray-300 px-2 py-1 ' />
                    <input type="text" placeholder='Password' className='w-full rounded-xl border border-gray-300 px-2 py-1 ' />
                    <button onClick={()=>navigate("/home")} className='w-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 px-3 py-2 rounded-xl text-white bg-black/95 hover:bg-white hover:text-black'>Login</button>
                    <p className='text-center font-light'>or</p>
                    <div className='flex justify-between relative items-center'>
                        <img  className='w-8 absolute' src={google} alt="google" />
                        <button className='w-full rounded-xl bg-blue-500 text-white px-2 py-2 duration-300 hover:bg-blue-600 ' >continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    
    </>
  )
}
